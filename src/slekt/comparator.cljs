(ns slekt.comparator)

(defn compare-dates
  [event1 event2]
  (let [date1 (:sortable event1)
        date2 (:sortable event2)]
    (if (< date1 date2)
      true
      false)))