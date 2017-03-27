(ns slekt.db-functions
  (:require [reagent.core :as r]
            [slekt.database :as d]
            [slekt.date :as date]
            [slekt.events :as events]))

(enable-console-print!)

(defn parse-fact
  [fact-id]
  (let [type (ffirst (d/get-fact-detail fact-id :fact/role))
        placeref (ffirst (d/get-fact-detail fact-id :fact/place))
        place (ffirst (d/get-place placeref))
        dateref (ffirst (d/get-fact-detail fact-id :fact/date))
        date (d/get-date dateref)                           ;; TODO check for nil
        event-id (ffirst (d/get-event-id fact-id))]
    (if (= nil type)
      nil
      {:id fact-id :type type :date date :place place :sortable (date/sortable-date date) :event event-id})))

;(defn events-into-list
; ([nestedlist]
; (events-into-list nestedlist ()))
;([nestedlist final-list]
; (if (empty? nestedlist)
;   final-list
;  (do
;    (recur (rest nestedlist) (concat final-list (first nestedlist)))}))

;(println (events-into-list (list (list :a :b) (list :c :d) (list :e :f))))

(defn compare-dates
  [event1 event2]
  (let [date1 (:sortable event1)
        date2 (:sortable event2)]
    (if (< date1 date2)
      true
      false)))

(defn event-list
  ([id func _]
   (let [roles (flatten (into [] (func id)))
         facts (flatten (apply concat (map #(d/get-fact-from-role %) roles)))
         parsed (remove nil? (map parse-fact facts))]
     (sort (comp compare-dates) parsed)))
  ([id]
    (event-list id d/get-role true))
  ([id usemain]
    (event-list id d/get-role-main true)))

(defn event-year-multifact
  "For finding years possibly given by multiple different facts, like birth/baptism or death/burial"
  [id type1 type2]
  (if (= nil id)
    nil
    (let [births (filter #(= type1 (:type %)) (event-list id true))
          bapms (filter #(= type2 (:type %)) (event-list id true))
          total (sort (comp compare-dates) (into births bapms))
          firstevent (first total)]
      (date/getyear (:date firstevent)))))

(defn birthyear
  [id]
  (event-year-multifact id :birth :baptism))

(defn deathyear
  [id]
  (event-year-multifact id :death :burial))

(defn setCurrentSelected
  [id]
  (let [father (d/find-parent :husband id)
        mother (d/find-parent :wife id)
        children (d/find-children id)
        spouses (d/find-spouses id)]
    {:selected id
     :father   father
     :mother   mother
     :children children
     :spouses  spouses}))

(defn setCurrent
  [value]
  (swap! d/state assoc-in [:gui/state :current] (setCurrentSelected value)))

(defn getFieldTypeID
  [type fields]
  (first (filter #(= type (:type %)) fields)))

;(defn getPlaceDeprecated ; to be removed
;  [event]
;  (let [template (:template event)
;        t (template (:facttemplates @d/state))
;        fields (:fields t)
;        fieldindex (getFieldTypeID :place fields)
;       (get (:value event) (:id fieldindex))))


;(defn parse-name
;    "Creates map of name according to its template"
;    ([value]
;     (let [template (:template value)
;           f (get-in @d/state [:fieldtemplates template])
;           name (:name value))
;        (parse-name name f {:template template})
;    ([name fields result]
;     (if (empty? fields)
;         result
;         (recur name (rest fields) (assoc result (:id (first fields)) (get name (:id (first fields)))))))

(defn parse-name
  [eventid fieldid]
  (let [value (ffirst (d/get-field-id-of-event eventid fieldid :role/value))
        id (ffirst (d/get-field-id-of-event eventid fieldid :role/persona))
        f-id (ffirst (d/get-field-id eventid fieldid :role/field))]
    {:persona/by-id id :value value :db/id f-id}))

(defn parse-fact-field
  [eventid fieldid]
  (let [dateid (ffirst (d/get-field-id-of-event-facts eventid fieldid :fact/date))
        date (if (not= nil dateid)
               (date/date-to-string (d/get-date dateid))
               nil)
        placeid (ffirst (d/get-field-id-of-event-facts eventid fieldid :fact/place))
        place (if (not= nil placeid)
                (ffirst (d/get-value-of placeid :place/value))
                nil)
        f-id (ffirst (d/get-field-id eventid fieldid :fact/field))]
    {:date date :place place :db/id f-id}))

;(defn name-stringOLD
;    ([props]
;     (let [nameparts (:name props)]
;         (name-stringOLD nameparts "")})
;    ([nameparts name]
;     (if (empty? nameparts)
;         name
;         (recur (rest nameparts) (str name " " (first nameparts)))}))



(defn parse-event-field
  "Parses the event field to get correct values and updates the gui state"
  [field event]
  (let [vals (get field 1)
        type (get vals 1)
        fieldid (get vals 0)]
    (case type
      :role (parse-name event fieldid)
      :event (parse-fact-field event fieldid))))



(defn populate-event-field
  "Loops through the template of an event to make sure each field gets the correct value from the event"
  ([event]
   (let [fields (flatten (into [] (d/get-template-of-event event)))
         ordered-fields (d/order-event-fields fields)]
     (populate-event-field ordered-fields event {})))
  ([fields event result]
   (if (empty? fields)
     result
     (let [id (first fields)
           parsed (parse-event-field id event)]
       (recur (rest fields) event (assoc result (get id 0) parsed))))))

(defn set-event-edit-field
  ([value key]
   (swap! d/state assoc-in [:gui/state :window/edit :values key] value))
  ([value key subid]
   (swap! d/state assoc-in [:gui/state :window/edit :values key subid] value)))

;(defn find-role-id
;    [role fields]
;    (if (= role (:role (first fields)))
;        (:id (first fields))
;        (if (empty? fields)
;            nil
;            (recur role (rest fields)))))

(defn set-current-role
  [role template]
  (let [id (ffirst (d/get-template-field-for-role template role))
        pid (get-in @d/state [:gui/state :current :selected])
        value {:persona/by-id pid}]
    (swap! d/state assoc-in [:gui/state :window/edit :values id] value)))

(defn set-event-edit
  [key role]
  (if (= key nil)
    (do
      (swap! d/state assoc-in [:gui/state :window/edit :type] nil)
      (swap! d/state assoc-in [:gui/state :window/edit :event/by-id] nil)
      (swap! d/state assoc-in [:gui/state :window/edit :values] {}))
    (let [template (ffirst (d/get-id-of key :template/name))]
      (if (not= nil role)
        (set-current-role role template)
        nil)
      (swap! d/state assoc-in [:gui/state :window/edit :type] key))))

(defn edit-event
  [event]
  (swap! d/state assoc-in [:gui/state :window/edit :event/by-id] event)
  (swap! d/state assoc-in [:gui/state :window/edit :values] (populate-event-field event))
  (set-event-edit (ffirst (d/get-template-name event)) nil))

(defn get-nametemplate
  ([]
   (let [default (get-in @d/state [:fieldtemplates :defaultnametemplate])]
     (get-in @d/state [:fieldtemplates default])))
  ([templatename]
   (get-in @d/state [:fieldtemplates templatename])))

(defn save-event
  []
  (let [edit (get-in @d/state [:gui/state :window/edit :values])
        originalevent (get-in @d/state [:gui/state :window/edit :event/by-id])
        originaldata (if (= nil originalevent)
                       nil
                       (populate-event-field originalevent))
        currentuser (get-in @d/state [:gui/state :current :selected])]
    (if (= originaldata edit)
      (do
        (println "No changes, exiting")
        (set-event-edit nil nil))
      (do
        (events/save-event)
        (set-event-edit nil nil)))
    (setCurrent currentuser)))
