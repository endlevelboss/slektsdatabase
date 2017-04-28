(ns slekt.lifespan
  (:require [slekt.comparator :as comp]
            [slekt.date :as date]
            [slekt.eventlist :as el]
            [slekt.database :as d]))

(defn birth-death-string
  [birthyear deathyear]
  (str "(" birthyear " - " deathyear ")"))

(defn age-calc
  [fact-id]
  (let [age (ffirst (d/get-fact-detail fact-id :fact/age))
        facts (flatten (into [] (d/get-fact-from-role fact-id)))
        parsed (sort (comp comp/compare-dates) (remove nil? (map el/parse-fact facts)))]
    (if (nil? age)
      nil
      (let [year (date/getyear (:date (first parsed)))]
        {:sortable (:sortable (first parsed)) :date (- year age)}))))

(defn find-age
  [id]
  (first (sort (comp comp/compare-dates) (remove nil? (map #(age-calc (first %)) (d/get-role-from-persona id)))))
  )

(defn birthyear
  [id]
  (if (nil? id)
    nil
    (let [birthrecord (el/event-year-multifact id :birth :baptism)
          age (:date (find-age id))]
      (if (nil? birthrecord)
        (if (nil? age)
          nil
          (str "ca " age))
        birthrecord))))

(defn deathyear
  [id]
  (el/event-year-multifact id :death :burial))