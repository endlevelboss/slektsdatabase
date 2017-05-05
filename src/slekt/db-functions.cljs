(ns slekt.db-functions
  (:require [reagent.core :as r]
            [slekt.database :as d]
            [slekt.date :as date]
            [slekt.events :as events]
            [slekt.templatehandler :as th]
            [clojure.string :as s]))

(enable-console-print!)

;(defn parse-name
;  [eventid fieldid]
;  (println "slekt.db-functions:parse-name")
;  (println eventid)
;  (println fieldid)
;  (let [
;        id (ffirst (d/get-persona-from-field eventid fieldid))
;        f-id (ffirst (d/get-role-from-field eventid fieldid))
;        ]
;    {:persona/by-id id :db/id f-id}))

;(defn parse-fact-field
;  [eventid fieldid]
;  (println "slekt.db-functions:parse-fact-field")
;  (println eventid)
;  (println fieldid)
;  (let [dateid (ffirst (d/get-fact-detail-id-from-field eventid fieldid :fact/date))
;        date (if (not= nil dateid)
;               (date/date-to-string (d/get-date dateid))
;               nil)
;        placeid (ffirst (d/get-fact-detail-id-from-field eventid fieldid :fact/place))
;        place (if (not= nil placeid)
;                (ffirst (d/get-value-of placeid :place/value))
;                nil)
;        f-id (ffirst (d/get-field-id eventid fieldid :fact/field))]
;    (println date)
;    (println place)
;    {:date date :place place :db/id f-id}))


;(defn recur-multi
;  ([ids field-id]
;    (recur-multi ids field-id {}))
;  ([ids field-id result]
;   (if (empty? ids)
;     result
;     (let [v (first ids)                                    ;Data fra slekt.database:get-roles-multigroup
;           pid (get v 1)                                    ;index 1 - persona id
;           grole (get v 2)                                  ;index 2 - grouprole
;           gindex (get v 3)                                 ;index 3 - groupindex
;           db-id (get v 0)]                                 ;index 0 - database id
;       (recur (rest ids) field-id (assoc result gindex {:persona/by-id pid
;                                                        :grouprole grole
;                                                        :db/id db-id}))))))

;(defn parse-multi
;  [event field-id]
;  (let [ids (d/get-roles-multigroup event field-id)]
;    (println "slekt.db-functions:parse-multi")
;    (println ids)
;    (recur-multi ids field-id)))

;(defn parse-event-field
;  "Parses the event field to get correct values and updates the gui state"
;  [field event]
;  (let [vals (get field 1)
;        type (get vals 1)
;        fieldid (get vals 0)]
;    (case type
;      :role (parse-name event fieldid)
;      :event (parse-fact-field event fieldid)
;      :multirole (parse-multi event fieldid))))

;(defn determine-if-multirole
;  [event field]
;  (let [field-id (get field 0)
;        field-type (get field 1)]
;    (if (= :multirole field-type)
;      (parse-multi event field-id)
;      (parse-name event field-id))))

;(defn populate-recur
;  ([fields event type]
;   (println "slekt.db-functions:populate-recur")
;   (println fields)
;   (populate-recur fields event type {}))
;  ([fields event type result]
;    (if (empty? fields)
;      result
;      (let [val (first fields)
;            id (get val 0)
;            res (case type
;                  :roles (determine-if-multirole event val)
;                  :events (parse-fact-field event id))]
;        (recur (rest fields) event type (assoc result id res))))))

;(defn populate-from-template-D
;  "Loops through the template of an event to make sure each field gets the correct value from the event"
;  ([event]
;   (println "slekt.db-functions:populate-from-template")
;   (println event)
;   (let [
;         template (ffirst (d/get-value-of event :event/template))
;         fields (th/get-template template)
;         ]
;     (println fields)
;     {:roles (populate-recur (:roles fields) event :roles) :events (populate-recur (:events fields) event :events)}
;     ))
;  ([fields event result]
;   (if (empty? fields)
;     result
;     (let [id (first fields)
;           parsed (parse-event-field id event)]
;       (recur (rest fields) event (assoc result (get id 0) parsed))))))

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

(defn populate-people
  ([persons]
    (populate-people persons {}))
  ([persons result]
    (if (empty? persons)
      result
      (let [p (ffirst persons)
            index (ffirst (d/get-value-of p :role/field))
            persona (ffirst (d/get-value-of p :role/persona))
            role (ffirst (d/get-value-of p :role/type))
            vals {:persona/by-id persona :db/id p :role role}]
        (recur (rest persons) (assoc result index vals)))))
  )

(defn pop-fact-detail
  [fact]
  (println "slekt.db-functions:parse-fact-field")
  (println fact)
  (let [dateid (ffirst (d/get-value-of fact :fact/date))
        date (if (nil? dateid)
               nil
               (date/date-to-string (d/get-date dateid)))
        placeid (ffirst (d/get-value-of fact :fact/place))
        place (if (nil? placeid)
                nil
                (ffirst (d/get-value-of placeid :place/value)))
        role (ffirst (d/get-value-of fact :fact/role))]
    (println date)
    (println place)
    {:date date :place place :db/id fact :role role}))

(defn populate-facts
  ([facts]
    (populate-facts facts {}))
  ([facts result]
    (if (empty? facts)
      result
      (let [f (ffirst facts)
            field (ffirst (d/get-value-of f :fact/field))]
        (recur (rest facts) (assoc result field (pop-fact-detail f) ))))))

(defn populate-event
  [event]
  (let [persons (d/get-value-of event :event/roles)
        facts (d/get-value-of event :event/facts)]
    {:roles (populate-people persons) :events (populate-facts facts)}))

(defn populate-event-field
  [event]
  (let [
        template (populate-event event)
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
  (println "slekt.db-functions:set-roles-recur")
  (if (empty? template)
    nil
    (let [id (get (first template) 0)
          path [:window/edit :values :roles id]
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
        :child (swap! d/state assoc-in path {:persona/by-id (:selected curr)})
        :main (swap! d/state assoc-in path {:persona/by-id (:selected curr)})
        :father (swap! d/state assoc-in path {:persona/by-id (first (:father curr))
                                                                              :sex :m})
        :mother (swap! d/state assoc-in path {:persona/by-id (first (:mother curr))
                                                                              :sex :f})
        :husband (swap! d/state assoc-in path husband)
        :wife (swap! d/state assoc-in path wife)
        )
      (recur (rest template)))))

(defn set-events-recur
  [template]
  (if (empty? template)
    nil
    (let [f (first template)
          id (get f 0)
          type (get f 1)
          path [:window/edit :values :events id]]
      (swap! d/state assoc-in path {:role type})
      (recur (rest template)))))

(defn set-current-role
  [template]
  (println template)
  (let [expected-roles (ffirst (d/get-value-of template :template/expected))]
    (set-roles-recur expected-roles)))

(defn set-event-edit
  [key]
  (if (nil? key)
    (do                                                     ;; deletes the edit-event and resets
      (swap! d/state assoc-in [:window/edit :type] nil)
      (swap! d/state assoc-in [:window/edit :event/by-id] nil)
      (swap! d/state assoc-in [:window/edit :values] {}))
    (let [template (th/get-template key)] ;; creates edit-window
      (set-roles-recur (:roles template))
      (set-events-recur (:events template))
      (swap! d/state assoc-in [:window/edit :values :source :refs] [{:index 0 :id nil :value ""}])
      (swap! d/state assoc-in [:window/edit :type] key))))

(defn edit-event
  [event]
  (swap! d/state assoc-in [:window/edit :event/by-id] event)
  (swap! d/state assoc-in [:window/edit :values] (populate-event-field event))
  (swap! d/state assoc-in [:window/edit :type] (ffirst (d/get-value-of event :event/template)))
  )

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
        (set-event-edit nil))
      (do
        (events/save-event)
        (events/update-lifespan)
        (set-event-edit nil)))
    (d/set-current currentuser)))
