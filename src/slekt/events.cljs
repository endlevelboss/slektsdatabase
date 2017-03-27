(ns slekt.events
    (:require [slekt.database :as d]
              [datascript.core :as ds]
              [slekt.date :as date]))

(defn create-new-eventid
    []
    (count (get-in @d/state [:event/by-id])))

(defn control-personaid ;; OBS SIDE-EFFEKT!!!!!!!!
    [data]
    (let [pid (:persona/by-id data)]
        (if (= nil pid)
            (let [id (count (get-in @d/state [:persona/by-id]))]
                (swap! d/state assoc-in [:persona/by-id id] {:id id :template (:template data) :name (:name data) :links []})
                (assoc data :persona/by-id id))
            data)))

(defn get-nametemplate
    [template]
    (if (= nil template)
        (get-nametemplate (get-in @d/state [:fieldtemplates :defaultnametemplate]))
        (get-in @d/state [:fieldtemplates template])))

(defn get-nametemplate-name
    [templatename]
    (if (= nil templatename)
        (get-in @d/state [:fieldtemplates :defaultnametemplate])
        templatename))

(defn parse-name-part
    ([data]
     (let [template (get-nametemplate (:template data))]
         (parse-name-part data template [])))
    ([data fields result]
     (if (empty? fields)
         result
         (let [index (:id (first fields))
               value (get data index)
               val (if (= nil value)
                       ""
                       value)]
          (recur data (rest fields) (assoc result index val))))))

(defn parse-name
    [data]
    (let [name (parse-name-part data)
          template (get-nametemplate-name (:template data))
          address {:value "" :place/by-id nil}
          val {:name name :template template :addresss address :persona/by-id (:persona/by-id data)}]
        (control-personaid val)))

(defn parse-event
    [data]
    (let [date (date/string-to-date (:date data))]
        {:date date :address {:value (:place data) :place/by-id nil}}))

(defn parse-data
    [data field]
    (let [type (:type field)
          id (:id field)
          d (get-in data [:values id])]
        (if (not= nil d)
            (case type
                :name [id (parse-name d)]
                :event [id (parse-event d)])
            nil)))

(defn recur-data
    ([data fields]
     (recur-data data fields {}))
    ([data fields result]
     (if (empty? fields)
         result
         (let [d (parse-data data (first fields))
               id (get d 0)
               val (get d 1)
               res (if (not= nil id)
                       (assoc result id val)
                       result)]
             (recur data (rest fields) res)))))

(defn update-persona
    [data eid]
    (let [pid (:persona/by-id data)
          links (get-in @d/state [:persona/by-id pid :links])
          newlinks (conj links eid)]
        (swap! d/state assoc-in [:persona/by-id pid :links] newlinks)))

(defn recur-personas
    [data fields]
    (if (empty? fields)
        nil
        (let [f (first fields)
              type (:type f)
              val (get-in data [:value (:id f)])
              event-id (:id data)]
            (case type
                :name (update-persona val event-id)
                :event nil)
            (recur data (rest fields)))))

(defn create-event-old
  [data]
  (println data)
  (let [event-id (create-new-eventid)
        d (assoc data :event/by-id event-id)
        template (get-in @d/state [:facttemplates (:type d)])
        fields (:fields template)
        parsed (recur-data d fields)
        value {:id event-id :template (:type d) :value parsed}]
    (recur-personas value fields)
    (swap! d/state assoc-in [:event/by-id event-id] value)))



(defn newid
  [transact]
  (let [tx (:db/current-tx (:tempids transact))]
    (ffirst (ds/q '[:find ?id
                    :in $ ?tx
                    :where
                    [?id _ _ ?tx]]
                  @d/conn tx))))

(defn transact-role
  [val field]
  (let [type (get (get field 1) 2)
        field (get field 0)
        id (if (= nil (:db/id val))
             -1
             (:db/id val))
        value (if (= nil (:value val))
                ""
                (:value val))
        pid (:persona/by-id val) ;; TODO  Must handle new personas
        t (ds/transact! d/conn [{:db/id id
                                 :fact/type :role
                                 :fact/field field
                                 :fact/role type
                                 :fact/value value
                                 :fact/persona pid}])]
    (newid t)))

(defn transact-date
  [val]
  (let [f-id (:db/id val)
        d-id (if (= nil f-id)
               -1
               (ffirst (d/get-value-of f-id :fact/date)))
        dateid (if (= nil d-id)
                 -1
                 d-id)
        s (:date val)]
    (if (empty? s)
      nil
      (let [date (date/string-to-date s)
            t (ds/transact! d/conn [{:db/id dateid
                                     :date/parsed (:parsing date)
                                     :date/day    (:day date)
                                     :date/month  (:month date)
                                     :date/year   (:year date)
                                     :date/value  (:value date)}])]
        (newid t)))))

(defn transact-place
  [val]
  (let [f-id (:db/id val)
        p-id (if (= nil f-id)
               -1
               (ffirst (d/get-value-of f-id :fact/place)))
        placeid (if (= nil p-id)
                 -1
                 p-id)
        place (:place val)]
    (if (empty? place)
      nil
      (let [t (ds/transact! d/conn [{:db/id       placeid
                                     :place/value place}])]
        (newid t)))))



(defn transact-fact
  [val field]
  (let [id (if (= nil (:db/id val))
             -1
             (:db/id val))
        type (get (get field 1) 2)
        field (get field 0)
        date (transact-date val)
        place (transact-place val)
        reg1 {:db/id id
              :fact/type :event
              :fact/role type
              :fact/field field}
        reg2 (if (= nil date)
               reg1
               (assoc reg1 :fact/date date))
        reg3 (if (= nil place)
               reg2
               (assoc reg2 :fact/place place))
        t (ds/transact! d/conn [reg3])]
    (newid t)))

(defn parse-field
  [field data]
  (let [fieldid (get field 0)
        fieldtype (get (get field 1) 1)
        value (get-in data [:values fieldid])]
    (if (= nil value)
      nil
      (case fieldtype
        :role (transact-role value field)
        :event (transact-fact value field)
        nil))))

(defn recur-fields
  ([fields data]
   (recur-fields fields data []))
  ([fields data result]
   (if (empty? fields)
     result
     (let [parsed (parse-field (first fields) data)
           newres (if (= nil parsed)
                    result
                    (conj result parsed))]
       (recur (rest fields) data newres)))))

(defn save-event
  []
  (let [data (get-in @d/state [:gui/state :window/edit])
        eventid (:event/by-id data)
        id (if (= nil eventid)                              ;; update old event or create new?
             -1
             eventid)
        t-id (ffirst (d/get-id-of (:type data) :template/name))
        fields (d/get-template t-id)
        values (recur-fields fields data)]
    (println values)
    (ds/transact! d/conn [{:db/id id
                           :event/type (:type data)
                           :event/template (:type data) ;; TODO Fix for custom templates
                           :event/fields values}])))

(defn update-event
  [data]
  (println "updating event")
  (println data))

(defn save-event-old
  []
  (let [data (get-in @d/state [:gui/state :window/edit])
        eventid (:event/by-id data)]
    (if (= nil eventid)
      ;(create-event data)
      (update-event data))))
