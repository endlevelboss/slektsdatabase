(ns slekt.date
    (:require [clojure.string :as s]
              [slekt.database :as d]))

(defn str-month
  [label]
  (s/lower-case (apply str (take 3 (d/l label)))))

(defn parsemonth
    [value]
    (case value
        1 (str-month :jan)
        2 (str-month :feb)
        3 (str-month :mar)
        4 (str-month :apr)
        5 (str-month :may)
        6 (str-month :jun)
        7 (str-month :jul)
        8 (str-month :aug)
        9 (str-month :sep)
        10 (str-month :oct)
        11 (str-month :nov)
        12 (str-month :dec)
        nil))

(defn month-converter
    [s]
    (let [firstletter (first s)]
        (case firstletter
            "j" (if (= "a" (get s 1))
                    1
                    (if (= "n" (get s 2))
                        6
                        7))
            "f" 2
            "m" (if (= "r" (get s 2))
                    3
                    5)
            "a" (if (= "p" (get s 1))
                    4
                    8)
            "s" 9
            "o" 10
            "n" 11
            "d" 12
            nil)))

(defn date-to-string
  [value]
  (let [state (first value)]
    (case state
      :parsed (str (get value 1) "." (parsemonth (get value 2)) " " (get value 3))
      :onlyyear (str (get value 3))
      :onlyddmm (str (get value 1) "." (parsemonth (get value 2)))
      nil)))

(defn sortable-date
    [date]
    (+ (get date 1) (* 100 (get date 2)) (* 10000 (get date 3))))

(defn remove-empty
    ([array]
     (remove-empty array []))
    ([array result]
     (if (empty? array)
         result
         (let [v (first array)
               val (if (empty? v)
                       result
                       (conj result v))]
             (recur (rest array) val)))))


(defn parse-element
    [s]
    (let [res (int s)]
        (if (= 0 res)
            (month-converter s)
            res)))

(defn recur-datearray
    ([array]
     (let [count (count array)]
       (case count
         1 (recur-datearray array {:parsing :onlyyear :day 0 :month 0} [:year])
         2 (recur-datearray array {:parsing :onlyddmm :year 0} [:day :month])
         3 (recur-datearray array {:parsing :parsed} [:day :month :year])
         nil)))
    ([array result kwds]
     (if (empty? array)
         result(recur (rest array) (assoc result (first kwds) (parse-element (first array))) (rest kwds)))))

(defn containsnil?
    [arr]
    (if (empty? arr)
        false
        (if (nil? (get (first arr) 1))
            true
            (recur (rest arr)))))


(defn string-to-date  ;; TODO: Add checks for ca, before, after, between dates
  [string]
  (if (s/blank? string)
    {:parsing :empty :value "" :day 0 :month 0 :year 0}
    (let [s (s/lower-case (s/trim string))
          parts (s/split s #"[\\\/\-\.\s+]")
          clean-parts (remove-empty parts)
          result (recur-datearray clean-parts)]
      (if (containsnil? result)
        {:parsing :unparsed :value string :day 0 :month 0 :year 0}
        (assoc result :value "")))))

(defn getyear
    [date]
    (let [state (get date 0)]
        (case state
          :parsed (get date 3)
          :onlyyear (get date 3)
          nil)))

(defn age-parser
  [agestring]
  (let [age (int agestring)]
    (if (= age 0)
      nil
      age)))