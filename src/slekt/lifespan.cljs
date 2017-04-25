(ns slekt.lifespan
  (:require [slekt.comparator :as comp]
            [slekt.date :as date]
            [slekt.database :as d]))

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

(defn event-list
  ([id func _]
   (let [roles (flatten (into [] (func id)))
         facts (flatten (apply concat (map #(d/get-fact-from-role %) roles)))
         parsed (remove nil? (map parse-fact facts))]
     (sort (comp comp/compare-dates) parsed)))
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
          total (sort (comp comp/compare-dates) (into births bapms))
          firstevent (first total)]
      (date/getyear (:date firstevent)))))

(defn age-calc
  [fact-id]
  (let [age (ffirst (d/get-fact-detail fact-id :fact/age))
        facts (flatten (into [] (d/get-fact-from-role fact-id)))
        parsed (sort (comp comp/compare-dates) (remove nil? (map parse-fact facts)))]
    (if (nil? age)
      nil
      (let [year (date/getyear (:date (first parsed)))]
        {:sortable (:sortable (first parsed)) :date (- year age)}))))

(defn find-age
  [id]
  (first (sort (comp comp/compare-dates) (remove nil? (map #(age-calc (first %)) (d/get-role id)))))
  )

(defn birthyear
  [id]
  (if (nil? id)
    nil
    (let [birthrecord (event-year-multifact id :birth :baptism)
          age (:date (find-age id))]
      (if (nil? birthrecord)
        (if (nil? age)
          nil
          (str "ca " age))
        birthrecord))))

(defn deathyear
  [id]
  (event-year-multifact id :death :burial))