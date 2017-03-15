(ns slekt.relations
    (:require [slekt.database :as d]))

(defn getPersona
  [id]
  (get (:persona/by-id @d/state) id))

(defn findrelation
  [factid relation]
  (let [facts (:event/by-id @d/state)
        fact (get facts factid)]
    (:persona/by-id (get (:value fact) relation))))



(defn get-events
    ([eventids]
     (get-events eventids []))
    ([eventids result]
     (if (empty? eventids)
         result
         (recur (rest eventids) (conj result (get-in @d/state [:event/by-id (first eventids)]))))))

(defn role-index-finder
    [role template]
    (let [fields (get-in @d/state [:facttemplates template :fields])
          filtered (filter #(= role (:role %)) fields)]
        (into [] (map #(:id %) filtered))))

(defn filter-by-index
    [event pid indexlist]
    (if (empty? indexlist)
        false
        (let [field (get-in event [:value (first indexlist)])]
            (if (= pid (:persona/by-id field))
                true
                (recur event pid (rest indexlist))))))

(defn event-by-role
    [event role pid]
    (let [template (:template event)
          roleindex (role-index-finder role template)]
        (if (filter-by-index event pid roleindex)
            event
            nil)))

(defn pid-by-index
    ([event index]
     (pid-by-index event index []))
    ([event index result]
     (if (empty? index)
         result
         (let [v (:persona/by-id (get-in event [:value (first index)]))
               res (if (= nil v)
                       result
                       (conj result v))]
          (recur event (rest index) res)))))

(defn pid-of-role
    [event role]
    (let [template (:template event)
          roleindex (role-index-finder role template)
          result (pid-by-index event roleindex)]
        (if (empty? result)
            nil
            result)))


(defn pids-of-role
    ([events role]
     (pids-of-role events role []))
    ([events role result]
     (if (empty? events)
         result
         (recur (rest events) role (concat result (pid-of-role (first events) role))))))

(defn findspouse
    [eventids yourrole otherrole pid]
    (let [events (map #(event-by-role % yourrole pid) (get-events eventids))
          result (into #{} (pids-of-role events otherrole))]
        result))

(defn findparent
  [role pid]
  (let [eventids (:links (getPersona pid))
        events (map #(event-by-role % :child pid) (get-events eventids))
        result (into #{} (pids-of-role events role))]
      result))  ;; TODO More advanced selection of multiple parents

(defn findchildren
  [eventids pid]
  (let [dad (map #(event-by-role % :father pid) (get-events eventids))
        mum (map #(event-by-role % :mother pid) (get-events eventids))
        events (concat dad mum)
        result (into #{} (pids-of-role events :child))]
      result))

(defn findfather [pid] (findparent :father pid))
(defn findmother [pid] (findparent :mother pid))
(defn findhusband [facts pid] (findspouse facts :wife :husband pid))
(defn findwife [facts pid] (findspouse facts :husband :wife pid))

(defn arrange-children
    "Arranges children by their other parent"
    [eventids pid]
    (let [children (findchildren eventids pid)
          fathers (map #(findfather %) children)
          mothers (map #(findmother %) children)]
        (println children)
        (println mothers)))
