(ns slekt.database
    (:require [reagent.core :as r]
              [cljs-idxdb.core :as idx]
              [datascript.core :as ds]
              [datascript.transit :as dt]
              [slekt.test-database :as t]
              [slekt.language :as lang]))

(def database {:current {:selected nil
                         :father nil
                         :mother nil
                         :children #{}
                         :spouses #{}
                         :events #{}}
               :comp/personaselector {:show false
                                      :field nil}
               :defaultwindow :div
               :language lang/norsk
               :loaded false
               :mainwindow :div
               :runonce true
               :window/add {:sex "m"}
               :window/edit {:type nil
                             :event/by-id nil
                             :values {}}
               :gui/state {:runonce true
                           :loaded false
                           :language lang/norsk
                           :current {:selected nil
                                     :father nil
                                     :mother nil
                                     :children #{}
                                     :spouses #{}
                                     :events #{}}
                           :window/edit {:type nil
                                         :event/by-id nil
                                         :values {}}
                           :window/add {:show true
                                        :sex "m"}
                           :comp/personaselector {:show false
                                                  :field nil}}})

(def state (r/atom database))

(def db (r/atom nil))
(def store-name "slektsdatabase")

(defn init-database
  []
  (idx/create-db "slekt" 1
                 #(-> (idx/delete-and-create-store % store-name {:keyPath "name"}))
                 #(reset! db %)))

(defn testwrite
  [e]
  (idx/add-item @db store-name {:name "Test" :data "absolutely updated data"} #(println "added")))


(defn testidx []
  (idx/get-by-key @db store-name "slekt" (fn [p] (println (:data p)))))

(defn l
  [label]
  (get-in @state [:language label]))


;;-------------------- DATASCRIPT BEGINS HERE -----------------------------

(def schema {:database/name {:db/unique :db.unique/identity}
             :database/selected {:db/cardinality :db.cardinality/one}
             :database/personas {:db/type :db.type/ref
                                 :db/cardinality :db.cardinality/many}
             :persona/id {:db/unique :db.unique/identity}
             :persona/name {:db/type :db.type/ref
                            :db/cardinality :db.cardinality/one}
             :persona/persons {:db/type :db.type/ref
                               :db/cardinality :db.cardinality/many}
             :assert/personas {:db/type :db.type/ref
                               :db/cardinality :db.cardinality/many}
             :name/parts {:db/cardinality :db.cardinality/one}
             :name/template {:db/type :db.type/ref
                             :db/cardinality :db.cardinality/one}
             :template/name {:db/unique :db.unique/identity}
             :template/expected {:db/cardinality :db.cardinality/one}
             :template/parts {:db/type :db.type/ref
                              :db/cardinality :db.cardinality/many}
             :event/type {:db/cardinality :db.cardinality/one}
             :event/template {:db/cardinality :db.cardinality/one}
             :event/fields {:db/type :db.type/ref
                            :db/cardinality :db.cardinality/many}
             :event/source {:db/type :db.type/ref
                            :db/cardinality :db.cardinality/one}
             :source/parent {:db/type :db.type/ref
                             :db/cardinality :db.cardinality/one}
             :date/parsed {:db/cardinality :db.cardinality/one}
             :date/year {:db/cardinality :db.cardinality/one}
             :date/month {:db/cardinality :db.cardinality/one}
             :date/day {:db/cardinality :db.cardinality/one}
             :date/text {:db/cardinality :db.cardinality/one}
             :place/value {:db/cardinality :db.cardinality/one}
             :place/address {:db/type :db.type/ref
                             :db/cardinality :db.cardinality/one}
             :fact/role {:db/cardinality :db.cardinality/one}
             :fact/date {:db/type :db.type/ref
                         :db/cardinality :db.cardinality/one}
             :fact/place {:db/type :db.type/ref
                          :db/cardinality :db.cardinality/one}
             :fact/type {:db/cardinality :db.cardinality/one}
             :fact/name {:db/type :db.type/ref
                         :db/cardinality :db.cardinality/one}
             :fact/persona {:db/type :db.type/ref
                            :db/cardinality :db.cardinality/one}})

(def conn (ds/create-conn schema))

(defn testing
  []
  (-> @conn
      (dt/write-transit-str)
      ;(dt/read-transit-str)
      (println)))

(defn personas
  []
  (ds/q '[:find ?pid
          :where
          [?pid :persona/name _]] @conn))

(defn persona-list
  []
  (flatten (into [] (personas))))

(defn get-name-parts
  [id]
  (ds/q '[:find ?name
          :in $ ?e
          :where
          [?e :persona/name ?n]
          [?n :name/parts ?name]]
        @conn id))

(defn get-name
  ([id]
   ( let [nameparts (if (not= nil id)
                      (get-name-parts id)
                      nil)
          parts (ffirst nameparts)]
    (get-name parts "")))
  ([parts name]
   (if (empty? parts)
     (clojure.string/trim name)
     (recur (rest parts) (str name " " (get (first parts) 1))))))

(defn find-sex-of-person
  [pid]
  (ds/q '[:find ?sex
          :in $ ?pid
          :where
          [?pid :persona/sex ?sex]]
        @conn pid))

(defn get-relation
  [role idrole id]
  (ds/q '[:find ?parentid
          :in $ ?role ?idrole ?e ?sex
          :where
          [?c :fact/persona ?e]
          [?c :fact/role ?idrole]
          [?evt :event/fields ?c]
          [?evt :event/fields ?f]
          [?f :fact/role ?role]
          [?f :fact/persona ?parentid]]
        @conn role idrole id))

(defn get-parent
  [role id]
  (get-relation role :child id))

(defn find-parent
  [role id]
  (into #{} (flatten (into [] (get-relation role :child id)))))

(defn find-children
  [id]
  (let [mysex (ffirst (find-sex-of-person id))
        myrole (if (= :m mysex)
                 :father
                 :mother)
        children (into #{} (flatten (into [] (get-relation :child myrole id))))]
    children))

(defn find-spouses
  "Finds all persons that are registered as married, OR has children together"
  [id]
  (let [sp1 (into #{} (flatten (into [] (get-relation :husband :wife id))))
        sp2 (into sp1 (flatten (into [] (get-relation :wife :husband id))))
        sp3 (into sp2 (flatten (into [] (get-relation :father :mother id))))
        sp4 (into sp3 (flatten (into [] (get-relation :mother :father id))))]
    sp4))

(defn find-parent-id
  [oid myid]
  (let [par1 (into #{} (flatten (into [] (get-relation :father :child myid))))
        par2 (into par1 (flatten (into [] (get-relation :mother :child myid))))]
    (disj par2 oid)))

(defn recur-arrange
  [spousemap myid pids]
  (if (empty? pids)
    spousemap
    (let [pid (first pids)
          newvec (conj (get spousemap pid) myid)
          newmap (assoc spousemap pid newvec)]
      (recur newmap myid (rest pids)))))

(defn recur-arrange-children
  [id spousemap children]
  (if (empty? children)
    spousemap
    (let [p (find-parent-id id (first children))
          pids (if (= 0 (count p))
                 #{:noparent}
                 p)]
      (recur id (recur-arrange spousemap (first children) pids) (rest children)))))

(defn arrange-children-by-parent
  [id spouses children]
  (let [spousemap (apply merge (map #(hash-map % []) spouses))
        smap (assoc spousemap :noparent [])
        arranged (recur-arrange-children id smap children)]
    arranged))

(defn get-fact-from-role
  [rid]
  (ds/q '[:find ?fact
          :in $ ?rid
          :where
          [?eid :event/fields ?rid]
          [?eid :event/fields ?fact]
          [?fact :fact/type :event]]
        @conn rid))

(defn test-fact
  [rid]
  (ds/q '[:find ?eid
          :in $ ?rid
          :where
          [?eid :event/fields ?rid]]
        @conn rid))

(defn get-role
  [pid]
  (ds/q '[:find ?rid
          :in $ ?pid
          :where
          [?rid :fact/persona ?pid]
          [?eid :event/fields ?rid]]
        @conn pid))

(defn get-role-main
  [pid]
  (ds/q '[:find ?factid
          :in $ ?pid
          :where
          [?eid :event/template ?template]
          [?tid :template/name ?template]
          [?tid :template/main ?field]
          [?eid :event/fields ?factid]
          [?factid :fact/field ?field]
          [?factid :fact/persona ?pid]]
        @conn pid))

(defn find-fact
  [fid]
  (ds/q '[:find ?type ?dateref
          :in $ ?fid
          :where
          [?fid :fact/type ?type]
          [?fid :fact/date ?dateref]]
        @conn fid))

(defn get-fact-detail
  [fid fact]
  (ds/q '[:find ?value
          :in $ ?fid ?fact
          :where
          [?fid ?fact ?value]]
        @conn fid fact))

(defn get-place
  [place-id]
  (if (= nil place-id)
    nil
    (ds/q '[:find ?value
            :in $ ?pid
            :where
            [?pid :place/value ?value]]
          @conn place-id)))

(defn get-date
  [did]
  (if (= nil did)
    nil
    (let [d (ds/q '[:find ?p ?d ?m ?y
                    :in $ ?did
                    :where
                    [?did :date/parsed ?p]
                    [?did :date/year ?y]
                    [?did :date/month ?m]
                    [?did :date/day ?d]]
                  @conn did)]
      (first d))))

(defn get-event-id
  [fact-id]
  (ds/q '[:find ?eid
          :in $ ?fid
          :where
          [?eid :event/fields ?fid]]
        @conn fact-id))

(defn get-person-in-event
  [eid role]
  (ds/q '[:find ?pid
          :in $ ?eid ?role
          :where
          [?eid :event/fields ?rid]
          [?rid :fact/role ?role]
          [?rid :fact/persona ?pid]]
        @conn eid role))

(defn get-main-person
  [eid]
  (ds/q '[:find ?pid
          :in $ ?eid
          :where
          [?eid :event/template ?template]
          [?tid :template/name ?template]
          [?tid :template/main ?field]
          [?eid :event/fields ?fid]
          [?fid :fact/field ?field]
          [?fid :fact/persona ?pid]]
        @conn eid))

(defn get-template-of-event
  [eid]
  (ds/q '[:find ?parts
          :in $ ?eid
          :where
          [?eid :event/template ?t]
          [?tid :template/name ?t]
          [?tid :template/parts ?parts]]
        @conn eid))

(defn get-value-of
  [id field]
  (ds/q '[:find ?val
          :in $ ?id ?field
          :where
          [?id ?field ?val]]
        @conn id field))

(defn get-id-of
  [val field]
  (ds/q '[:find ?id
          :in $ ?field ?val
          :where
          [?id ?field ?val]]
        @conn field val))

(defn get-template-name
  [event]
  (ds/q '[:find ?name
          :in $ ?eid
          :where
          [?eid :event/template ?name]]
        @conn event))

(defn get-field
  [fieldid]
  (ds/q '[:find ?id ?type ?role
          :in $ ?fid
          :where
          [?fid :field/id ?id]
          [?fid :field/type ?type]
          [?fid :field/role ?role]]
        @conn fieldid))

(defn get-field-id
  [eventid field fieldtype]
  (ds/q '[:find ?id
          :in $ ?eid ?f ?ftype
          :where
          [?eid :event/fields ?id]
          [?id ?ftype ?f]]
        @conn eventid field fieldtype))

(defn get-field-id-of-event
  [eventid field type]
  (ds/q '[:find ?val
          :in $ ?eid ?f ?type
          :where
          [?eid :event/fields ?fid]
          [?fid :fact/field ?f]
          [?fid ?type ?val]]
        @conn eventid field type))

(defn get-field-multigroup
  [eventid fieldid]
  (ds/q '[:find ?pid ?grole ?gindex ?val ?fid
          :in $ ?eid ?field
          :where
          [?eid :event/fields ?fid]
          [?fid :fact/field ?field]
          [?fid :fact/persona ?pid]
          [?fid :fact/grouprole ?grole]
          [?fid :fact/groupindex ?gindex]
          [?fid :fact/value ?val]]
        @conn eventid fieldid))

(defn get-field-id-of-event-facts
  [eventid field type]
  (ds/q '[:find ?val
          :in $ ?eid ?f ?type
          :where
          [?eid :event/fields ?fid]
          [?fid :fact/field ?f]
          [?fid ?type ?val]]
        @conn eventid field type))

(defn get-template-field-for-role
  [tid role]
  (ds/q '[:find ?fid
          :in $ ?tid ?role
          :where
          [?tid :template/parts ?pid]
          [?pid :field/role ?role]
          [?pid :field/id ?fid]]
        @conn tid role))

(defn order-event-fields
  ([field-ids]
   (order-event-fields {} field-ids))
  ([ordered field-ids]
   (if (empty? field-ids)
     ordered
     (let [id (first field-ids)
           field (first (get-field id))]
       (recur (assoc ordered (get field 0) field) (rest field-ids))))))

(defn get-template
  [id]
  (let [fields (flatten (into [] (get-value-of id :template/parts)))
        ordered-fields (order-event-fields fields)]
    ordered-fields))


(defn set-current-selected
  [id]
  (let [father (find-parent :father id)
        mother (find-parent :mother id)
        children (find-children id)
        spouses (find-spouses id)]
    {:selected id
     :father   father
     :mother   mother
     :children children
     :spouses  spouses}))

(defn set-current
  [value]
  (swap! state assoc-in [:current] (set-current-selected value)))


(defn read-from-iddb
  [s]
  (let [db (dt/read-transit-str (:data s))]
    (if (nil? db)
      nil
      (do
        (reset! conn db)
        (let [personas (persona-list)]
          (if (empty? personas)
            (swap! state assoc-in [:window/add :show] true)
            (do
              (set-current (first personas))
              (swap! state assoc-in [:window/add :show] false))))))))

(defn write-to-iddb
  []
  (let [st (dt/write-transit-str @conn)]
    (idx/add-item @db store-name {:name "slekt" :data st} #(println "Database saved"))))

(defn initdb
  []
  (idx/get-by-key @db store-name "slekt" #(read-from-iddb %))
  (ds/transact! conn t/templates)
  (swap! state assoc-in [:runonce] false)
  (.addEventListener js/window "beforeunload" #(write-to-iddb) false))