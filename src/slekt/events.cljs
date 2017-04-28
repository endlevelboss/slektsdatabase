(ns slekt.events
    (:require [slekt.database :as d]
              [datascript.core :as ds]
              [slekt.date :as date]
              [clojure.string :as s]
              [slekt.lifespan :as ls]
              [slekt.templatehandler :as th]))

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





(defn newid
  [transact]
  (let [tx (:db/current-tx (:tempids transact))]
    (ffirst (ds/q '[:find ?id
                    :in $ ?tx
                    :where
                    [?id _ _ ?tx]]
                  @d/conn tx))))

(defn transact-persona
  [val role]
  (let [first (:newfirst val)
        last (:newlast val)
        sex (if (nil? (:sex val))
              :u
              (:sex val))]
    (if (and (s/blank? first) (s/blank? last))
      nil
      (newid (ds/transact! d/conn [{:persona/name -1
                                    :persona/sex  sex}
                                   {:db/id      -1
                                    :name/parts {0 first 1 last}}
                                   ])))))

(defn transact-role
  [val f]
  (println "slekt.events:transact-role")
  (println val)
  (println f)
  (let [type (get f 1)
        field (get f 0)
        id (if (nil? (:db/id val))
             -1
             (:db/id val))
        ;group (get (get f 1) 0)
        g-role (if (nil? (:grouprole val))
                 ""
                 (:grouprole val))
        pid (if (nil? (:persona/by-id val))
              (transact-persona val type)
              (:persona/by-id val))]
    (if (nil? pid)
      nil
      (newid (ds/transact! d/conn [{:db/id           id
                                    :role/field      field
                                    :role/type       type
                                    ;:fact/groupindex group
                                    :role/grouprole  g-role
                                    :role/persona    pid}])))))

(defn parse-group-role
  [group-role]
  (case group-role
    "husband" :father
    "wife" :mother
    "son" :child
    "daughter" :child
    "unknown" :unknown
    :unknown))

(defn parse-group-role-sex
  [group-role]
  (case group-role
    "husband" :m
    "wife" :f
    "son" :m
    "daughter" :f
    "unknown" :u
    :u))

(defn transact-multi
  ([val f]
   (transact-multi val f []))
  ([val f result]
   (if (empty? val)
      result
      (let [v (first val)
            values (get v 1)
            field [(get f 0) [(get v 0) :multirole (parse-group-role (:grouprole values))]]
            pval (assoc values :sex (parse-group-role-sex (:grouprole values)))
            role (transact-role pval field)
            res (if (nil? role)
                  result
                  (conj result role))]
        (recur (rest val) f res)))))

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
    (if (and (nil? f-id) (s/blank? s))
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
        place (if (nil? (:place val))
                ""
                (:place val))]
    (if (and (nil? f-id) (s/blank? place))
      nil
      (let [t (ds/transact! d/conn [{:db/id       placeid
                                     :place/value place}])]
        (newid t)))))



(defn transact-event
  [val field]
  (println "slekt.events:transact-event")
  (println val)
  (println field)
  (let [date (:date val)
        place (:place val)
        id (:db/id val)]
    (if (and (nil? id) (s/blank? date) (s/blank? place))
      nil
      (let [id (if (nil? (:db/id val))
                 -1
                 (:db/id val))
            type (get field 1)
            field (get field 0)
            date (transact-date val)
            place (transact-place val)
            reg1 {:db/id      id
                  :fact/role  type
                  :fact/field field}
            reg2 (if (nil? date)
                   reg1
                   (assoc reg1 :fact/date date))
            reg3 (if (nil? place)
                   reg2
                   (assoc reg2 :fact/place place))
            t (ds/transact! d/conn [reg3])]
        (newid t)))))

(defn parse-field
  [field data type]
  (println "in parsefield")
  (println data)
  (println field)
  (let [fieldid (get field 0)
        value (get-in data [:values type fieldid])]
    (println value)
    (if (= nil value)
      nil
      (case type
        :roles (transact-role value field)
        :events (transact-event value field)
        :multirole (transact-multi value field)
        nil))))

(defn recur-fields
  ([fields data type]
   (recur-fields fields data [] type))
  ([fields data result type]
   (if (empty? fields)
     result
     (let [parsed (parse-field (first fields) data type)
           newres (if (nil? parsed)
                    result
                    (if (vector? parsed)
                      (into result parsed)
                      (conj result parsed)))]
       (recur (rest fields) data newres type)))))

(defn recur-source
  ([source]
    (let [refs (:refs source)]
      (recur-source refs nil)))
  ([refs parent]
   (if (empty? refs)
      parent
      (let [ref (first refs)
            id (if (nil? (:id ref))
                 -1
                 (:id ref))
            val (:value ref)]
        (if (empty? val)
          parent
          (let [t (ds/transact! d/conn [{:db/id id
                                         :source/value val}])
                p (if (nil? (newid t))
                    id
                    (newid t))]
            (if (nil? parent)
              nil
              (ds/transact! d/conn [{:db/id p
                                     :source/parent parent}]))
            (recur (rest refs) p)))))))

(defn save-event
  []
  (let [data (get-in @d/state [:window/edit])
        eventid (:event/by-id data)
        id (if (nil? eventid)                              ;; update old event or create new?
             -1
             eventid)
        fields (th/get-template (:type data))
        role-template (:roles fields)
        event-template (:events fields)
        role-values (recur-fields role-template data :roles)
        event-values (recur-fields event-template data :events)
        source (recur-source (:source (:values data)))]
    (println "save-event")
    (if (empty? fields)
      nil
      (let [t (ds/transact! d/conn [{:db/id          id
                                     :event/type     (:type data)
                                     :event/template (:type data) ;; TODO Fix for custom templates
                                     :event/roles     role-values
                                     :event/facts     event-values
                                     }])
            e-id (newid t)
            e (if (nil? e-id)
                id
                e-id)]
        (if (nil? source)
          nil
          (ds/transact! d/conn [{:db/id e
                                 :event/source source}]))
        (println "done saveevent")
        ))))


;;;;;;;;;;;;  assert ;;;;;;;;;;;;;;;;

(defn get-asserts
  [id]
  (let [asserts (first (d/get-value-of id :persona/asserts))]
    (if (nil? asserts)
      []
      asserts)))

(defn recur-asserts
  [p-arr a-id]
  (if (empty? p-arr)
    a-id
    (do
      (ds/transact! d/conn [{:db/id (first p-arr)
                             :persona/assert a-id}])
      (recur (rest p-arr) a-id))))

(defn save-assert
  [assert-id persona-array]
  (let [a-id (if (nil? assert-id)
               (newid (ds/transact! d/conn [{:db/id -1 :assert/note ""}]))
               assert-id)]
    (println (str "save-assert:persona-array: " persona-array))
    (println (str "save-assert:a-id: " a-id))
    (println (str "save-assert:assert-id: " assert-id))
    (recur-asserts persona-array a-id)
    ;(map #(ds/transact! d/conn [[:db/add % :persona/assert assert]]) persona-array)
    ;(map #(println %) persona-array)
    ;(ds/transact! d/conn [[:db/add first :persona/assert assert]
    ;                      [:db/add second :persona/assert assert]])
    ))

(defn update-assert-note
  [text id]
  (let [txt (if (nil? text)
              ""
              text)]
    (ds/transact! d/conn [[:db/add id :assert/note txt]])))

(defn update-lifespan-persona
  [value]
  (let [id (:persona/by-id value)]
    (if (nil? id)
      nil
      (let [birthyear (ls/birthyear id)
            deathyear (ls/deathyear id)
            span (ls/birth-death-string birthyear deathyear)]
        (ds/transact! d/conn [[:db/add id :persona/lifespan span]])))))

(defn recur-update-lifespan
  [fields data]
  ;(println "slekt.events:recur-update-lifespan")
  ;(println fields)
  ;(println data)
  (if (empty? fields)
    nil
    (let [field (first fields)
          field-id (get field 0)
          value (get-in data [:values :roles field-id])]
      (update-lifespan-persona value)
      (recur (rest fields) data))))

(defn update-lifespan
  []
  (let [data (get-in @d/state [:window/edit])
        fields (th/get-roles (:type data))]
    ;(println "slekt.events:update-lifespan")
    ;(println data)
    ;(println fields)
    (recur-update-lifespan fields data)))