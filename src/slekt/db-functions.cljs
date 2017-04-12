(ns slekt.db-functions
  (:require [reagent.core :as r]
            [slekt.database :as d]
            [slekt.date :as date]
            [slekt.events :as events]
            [clojure.string :as s]))

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

(defn age-calc
  [fact-id]
  (let [age (ffirst (d/get-fact-detail fact-id :fact/age))
        facts (flatten (into [] (d/get-fact-from-role fact-id)))
        parsed (sort (comp compare-dates) (remove nil? (map parse-fact facts)))]
    (if (nil? age)
      nil
      (let [year (date/getyear (:date (first parsed)))]
        {:sortable (:sortable (first parsed)) :date (- year age)}))))

(defn find-age
  [id]
  (first (sort (comp compare-dates) (remove nil? (map #(age-calc (first %)) (d/get-role id)))))
  )

(defn birthyear
  [id]
  (let [birthrecord (event-year-multifact id :birth :baptism)
        age (:date (find-age id))]
    (if (nil? birthrecord)
      (if (nil? age)
        nil
        (str "ca " age))
      birthrecord)))

(defn deathyear
  [id]
  (event-year-multifact id :death :burial))

(defn setCurrentSelected
  [id]
  (let [father (d/find-parent :father id)
        mother (d/find-parent :mother id)
        children (d/find-children id)
        spouses (d/find-spouses id)]
    {:selected id
     :father   father
     :mother   mother
     :children children
     :spouses  spouses}))

(defn setCurrent
  [value]
  (swap! d/state assoc-in [:current] (setCurrentSelected value)))


(defn parse-name
  [eventid fieldid]
  (let [value (ffirst (d/get-field-id-of-event eventid fieldid :fact/value))
        id (ffirst (d/get-field-id-of-event eventid fieldid :fact/persona))
        f-id (ffirst (d/get-field-id eventid fieldid :fact/field))]
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

(defn recur-multi
  ([ids field-id]
    (recur-multi ids field-id {}))
  ([ids field-id result]
   (if (empty? ids)
     result
     (let [v (first ids)
           pid (get v 0)
           grole (get v 1)
           gindex (get v 2)
           val (get v 3)
           db-id (get v 4)]
       (recur (rest ids) field-id (assoc result gindex {:persona/by-id pid
                                                        :grouprole grole
                                                        :value val
                                                        :db/id db-id}))))))

(defn parse-multi
  [event field-id]
  (let [ids (d/get-field-multigroup event field-id)]
    (recur-multi ids field-id)))

(defn parse-event-field
  "Parses the event field to get correct values and updates the gui state"
  [field event]
  (let [vals (get field 1)
        type (get vals 1)
        fieldid (get vals 0)]
    (case type
      :role (parse-name event fieldid)
      :event (parse-fact-field event fieldid)
      :multirole (parse-multi event fieldid))))



(defn populate-from-template
  "Loops through the template of an event to make sure each field gets the correct value from the event"
  ([event]
   (let [fields (flatten (into [] (d/get-template-of-event event)))
         ordered-fields (d/order-event-fields fields)]
     (populate-from-template ordered-fields event {})))
  ([fields event result]
   (if (empty? fields)
     result
     (let [id (first fields)
           parsed (parse-event-field id event)]
       (recur (rest fields) event (assoc result (get id 0) parsed))))))

(defn source-info
  ([event]
   (let [source-id (ffirst (d/get-fact-detail event :event/source))]
     (source-info source-id [])))
  ([id result]
    (if (nil? id)
      (let [res (into [] (reverse result))]
        (conj res {:id nil :value ""}))
      (let [next (ffirst (d/get-fact-detail id :source/parent))
            val (ffirst (d/get-fact-detail id :source/value))
            new-result (conj result {:id id :value val})]
        (recur next new-result)))))

(defn recur-indexing
  ([source-vec]
    (recur-indexing source-vec 0 []))
  ([source-vec index result]
    (if (empty? source-vec)
      result
      (let [new (assoc (first source-vec) :index index)
            newres (conj result new)]
        (recur (rest source-vec) (inc index) newres)))))

(defn populate-event-field
  [event]
  (let [template (populate-from-template event)
        source (source-info event)
        s (recur-indexing source)]
    (assoc-in template [:source :refs] s)))

(defn set-event-edit-field
  ([value key]
   (swap! d/state assoc-in [:window/edit :values key] value))
  ([value key subid]
   (swap! d/state assoc-in [:window/edit :values key subid] value)))

(defn set-roles-recur
  [template]
  (if (empty? template)
    nil
    (let [id (get (first template) 0)
          type (get (first template) 1)
          curr (get-in @d/state [:current])
          curr-sex (ffirst (d/find-sex-of-person (:selected curr)))
          spouse (first (get-in @d/state [:current :spouses]))
          husband (if (= :m curr-sex)
                    {:persona/by-id (:selected curr) :sex :m}
                    {:persona/by-id spouse :sex :m})
          wife (if (= :f curr-sex)
                 {:persona/by-id (:selected curr) :sex :f}
                 {:persona/by-id spouse :sex :f})]
      (case type
        :main (swap! d/state assoc-in [:window/edit :values id] {:persona/by-id (:selected curr)})
        :father (swap! d/state assoc-in [:window/edit :values id] {:persona/by-id (first (:father curr))
                                                                              :sex :m})
        :mother (swap! d/state assoc-in [:window/edit :values id] {:persona/by-id (first (:mother curr))
                                                                              :sex :f})
        :husband (swap! d/state assoc-in [:window/edit :values id] husband)
        :wife (swap! d/state assoc-in [:window/edit :values id] wife)
        :first (swap! d/state assoc-in [:window/edit :values id] {0 {:persona/by-id (:selected curr)}}))
      (recur (rest template)))))

(defn set-current-role
  [_ template-id]
  (let [expected-roles (ffirst (d/get-value-of template-id :template/expected))]
    (set-roles-recur expected-roles)))

(defn set-event-edit
  [key role]
  (if (= key nil)
    (do
      (swap! d/state assoc-in [:window/edit :type] nil)
      (swap! d/state assoc-in [:window/edit :event/by-id] nil)
      (swap! d/state assoc-in [:window/edit :values] {}))
    (let [template (ffirst (d/get-id-of key :template/name))]
      (if (not= nil role)
        (do
          (set-current-role role template)
          (swap! d/state assoc-in [:window/edit :values :source :refs] [{:index 0 :id nil :value ""}]))
        nil)
      (swap! d/state assoc-in [:window/edit :type] key))))

(defn edit-event
  [event]
  (swap! d/state assoc-in [:window/edit :event/by-id] event)
  (swap! d/state assoc-in [:window/edit :values] (populate-event-field event))
  (set-event-edit (ffirst (d/get-template-name event)) nil))

(defn save-event
  []
  (let [edit (get-in @d/state [:window/edit :values])
        originalevent (get-in @d/state [:window/edit :event/by-id])
        originaldata (if (nil? originalevent)
                       nil
                       (populate-event-field originalevent))
        currentuser (get-in @d/state [:current :selected])]
    (if (= originaldata edit)
      (do
        (println "No changes, exiting")
        (set-event-edit nil nil))
      (do
        (events/save-event)
        (set-event-edit nil nil)))
    (setCurrent currentuser)))
