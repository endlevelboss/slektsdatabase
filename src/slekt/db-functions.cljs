(ns slekt.db-functions
    (:require [reagent.core :as r]
              [slekt.database :as d]
              [slekt.date :as date]
              [slekt.events :as events]
              [slekt.relations :as rels]))

(enable-console-print!)

(defn getPersona
  [id]
  (get (:persona/by-id @d/state) id))

(defn getEvent
  [id]
  (get (:event/by-id @d/state) id))

(defn add-sortable-date
    [event dateinfo]
    (let [e (get-in event [:value (:id dateinfo)])
          date (:date e)
          address (get-in e [:address :value])
          sortable (date/sortable-date date)]
        {:date date :sortable sortable :label (:label dateinfo) :address address :event event}))

(defn parse-event
    [event]
    (let [type (get-in @d/state [:facttemplates (:template event)])
          events (filter #(= :event (:type %)) (:fields type))]
        (map #(add-sortable-date event %) events)))

(defn events-into-list
  ([nestedlist]
   (events-into-list nestedlist ()))
  ([nestedlist final-list]
   (if (empty? nestedlist)
     final-list
     (do
       (recur (rest nestedlist) (concat final-list (first nestedlist)))))))

;(println (events-into-list (list (list :a :b) (list :c :d) (list :e :f))))

(defn compare-dates
  [event1 event2]
  (let [date1 (:sortable event1)
        date2 (:sortable event2)]
      (if (< date1 date2)
        true
        false)))

(defn event-list
    [links]
    (let [parsed (map #(parse-event (getEvent %)) links)
          merged (events-into-list parsed)]
        (filter #(not= [] (:date %)) (sort (comp compare-dates) merged))))

(defn setCurrentSelected
  [id]
  (let [father (d/find-parent :father id)
        mother (d/find-parent :mother id)]
    {:selected id
     :father father
     :mother mother}))

(defn setCurrent
  [value]
 (swap! d/state assoc-in [:gui/state :current] (setCurrentSelected value)))

(defn getFieldTypeID
  [type fields]
  (first (filter #(= type (:type %)) fields)))

(defn getPlaceDeprecated ; to be removed
  [event]
  (let [template (:template event)
        t (template (:facttemplates @d/state))
        fields (:fields t)
        fieldindex (getFieldTypeID :place fields)]
       (get (:value event) (:id fieldindex))))


(defn parse-name
    "Creates map of name according to its template"
    ([value]
     (let [template (:template value)
           f (get-in @d/state [:fieldtemplates template])
           name (:name value)]
        (parse-name name f {:template template})))
    ([name fields result]
     (if (empty? fields)
         result
         (recur name (rest fields) (assoc result (:id (first fields)) (get name (:id (first fields))))))))

(defn parse-event-date
    [value]
    (let [date (date/date-to-string (:date value))
          place (get-in value [:address :value])]
        {:date date :place place}))

(defn name-string
    ([props]
     (let [nameparts (:name props)]
         (name-string nameparts "")))
    ([nameparts name]
     (if (empty? nameparts)
         name
         (recur (rest nameparts) (str name " " (first nameparts))))))

(defn parse-event-field
    "Parses the event field to get correct values and updates the gui state"
    [field event]
    (let [type (:type field)
          id (:id field)
          values (:value event)
          value (get values id)
          pid (:persona/by-id value)
          returnvalue (fn [i vals]
                       [i (assoc vals :persona/by-id pid)])]
        (case type
            :name (returnvalue id (parse-name value))
            :event (returnvalue id (parse-event-date value)))))

(defn populate-event-field
    "Loops through the template of an event to make sure each field gets the correct value from the event"
    ([event]
     (let [template (get-in @d/state [:facttemplates (:template event)])
           fields (:fields template)]
         (populate-event-field fields event {})))
    ([fields event result]
     (if (empty? fields)
         result
         (let [parsed (parse-event-field (first fields) event)
               id (get parsed 0)
               value (get parsed 1)]
             (recur (rest fields) event (assoc result id value))))))

(defn set-event-edit-field
    ([value key]
     (swap! d/state assoc-in [:gui/state :window/edit :values key] value))
    ([value key subid]
     (swap! d/state assoc-in [:gui/state :window/edit :values key subid] value)))

(defn find-role-id
    [role fields]
    (if (= role (:role (first fields)))
        (:id (first fields))
        (if (empty? fields)
            nil
            (recur role (rest fields)))))

(defn set-current-role
    [role template]
    (let [id (find-role-id role (:fields template))
          pid (get-in @d/state [:gui/state :current :selected])
          persona (get-in @d/state [:persona/by-id pid])
          value (assoc (parse-name persona) :persona/by-id pid)]
        (swap! d/state assoc-in [:gui/state :window/edit :values id] value)))

(defn set-event-edit
    [key role]
    (if (= key nil)
        (do
            (swap! d/state assoc-in [:gui/state :window/edit :type] nil)
            (swap! d/state assoc-in [:gui/state :window/edit :event/by-id] nil)
            (swap! d/state assoc-in [:gui/state :window/edit :values] {}))
        (let [template (get-in @d/state [:facttemplates key])]
            (if (not= nil role)
                (set-current-role role template)
                nil)
            (swap! d/state assoc-in [:gui/state :window/edit :type] key))))

(defn edit-event
    [event]
    (swap! d/state assoc-in [:gui/state :window/edit :event/by-id] (:id event))
    (swap! d/state assoc-in [:gui/state :window/edit :values] (populate-event-field event))
    (set-event-edit (:template event) nil))

(defn get-nametemplate
    ([]
     (let [default (get-in @d/state [:fieldtemplates :defaultnametemplate])]
         (get-in @d/state [:fieldtemplates default])))
    ([templatename]
     (get-in @d/state [:fieldtemplates templatename])))



(defn save-event
    []
    (let [edit (get-in @d/state [:gui/state :window/edit :values])
          originalevent (getEvent (get-in @d/state [:gui/state :window/edit :event/by-id]))
          originaldata (populate-event-field originalevent)
          currentuser (get-in @d/state [:gui/state :current :selected])]
        (if (= originaldata edit)
            (set-event-edit nil nil)
            (do
                (events/save-event)
                (set-event-edit nil nil)))
        (setCurrent currentuser)))
