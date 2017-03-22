(ns slekt.database
    (:require [reagent.core :as r]
              [cljs-idxdb.core :as idx]
              [datascript.core :as ds]
              [datascript.transit :as dt]
              [slekt.test-database :as t]))

(def database {:gui/state {:runonce true
                           :current {:selected nil
                                     :father nil
                                     :mother nil
                                     :children #{}
                                     :spouses #{}
                                     :events #{}}
                           :window/edit {:type nil
                                         :event/by-id nil
                                         :values {}}}
               :source/by-id {0 {:id 0 :source "Tysnes min 1826-1837" :parent nil :links [{:fact/by-id 0}]}}
               :persona/by-id {0 {:id 0 :template :firstlast :name ["Ingebrigt" "Johannessen"] :links [0 1 2 3 4]}
                               1 {:id 1 :sex :male :template :firstlast :name ["Ibenhart Johan" "Ingebrigtsen"] :links [1]}
                               2 {:id 2 :sex :male :template :firstlastplace :name ["Johannes" "Ingebrigtsson" "Bakken"] :links [0]}
                               3 {:id 3 :sex :female :template :firstlastplace :name ["Anna" "Sebjørnsdatter" "Færavåg"] :links [0]}
                               4 {:id 4 :sex :female :template :firstlast :name ["Dortea Ovidia" "Larsdatter"] :links [1]}
                               5 {:id 5 :sex :female :template :firstlast :name ["Ankje Ivarda" "Johannessen"] :links [2]}
                               6 {:id 6 :sex :female :template :firstlast :name ["Oline Kornelia" "Selleken"] :links [2 4]}}
               :event/by-id {0 {:id 0 :template :baptism :value {0 {:name ["Ingebrigt" ""] :template :firstlast :address {:value "" :place/by-id nil} :persona/by-id 0}
                                                                 1 {:name ["Johannes" "Ingebrigtsson" "Bakke"] :template :firstlastplace :address {:value "" :place/by-id nil} :persona/by-id 2}
                                                                 2 {:name ["Anna" "Sebjornsdatter" "Faravag"] :template :firstlastplace :address {:value "" :place/by-id nil} :persona/by-id 3}
                                                                 3 {:date [:parsed 17 12 1834] :address {:value "Tysnes, Hordaland" :place/by-id nil}}
                                                                 4 {:date [] :address {}}}
                                :source {:source "Tysnes min 1826-1837, s75" :source/by-id 0}}
                             1 {:id 1 :template :baptism :value {0 {:name ["Ibenhart Johan" ""] :template :firstlast :address {:value "" :place/by-id nil} :persona/by-id 1}
                                                                 1 {:name ["Ingebrigt" "Johannessen"] :template :firstlast :address {:value "" :place/by-id nil} :persona/by-id 0}
                                                                 2 {:name ["Dortea Ovidia" "Larsdatter"] :template :firstlast :address {:value "" :place/by-id nil} :persona/by-id 4}
                                                                 3 {:date [:parsed 1 10 1854] :address {:value "Buksnes, Nordland" :place/by-id nil}}
                                                                 4 {:date [] :address {}}}
                                :source {:source "Buksnes klok 1854-1876, s424" :source/by-id nil}}
                             2 {:id 2 :template :baptism :value {0 {:name ["Ankje Ivarda" "Johannessen"] :template :firstlast :address {:value "" :place/by-id nil} :persona/by-id 5}
                                                                 1 {:name ["Ingebrigt" "Johannessen"] :template :firstlast :address {:value "" :place/by-id nil} :persona/by-id 0}
                                                                 2 {:name ["Oline Kornelia" "Selleken"] :template :firstlast :address {:value "" :place/by-id nil} :persona/by-id 6}
                                                                 3 {:date [:parsed 24 3 1882] :address {:value "Bergen" :place/by-id nil}}
                                                                 4 {:date [:parsed 4 4 1882] :address {:value "Bergen" :place/by-id nil}}}
                                :source {:source "Dopte i Bergen 1816-1894" :source/by-id nil}}
                             3 {:id 3 :template :burial :value {0 {:name ["Ingebrigt" "Johannessen"] :template :firstlast :address {:value "" :place/by-id nil} :persona/by-id 0}
                                                                1 {:date [:parsed 23 1 1908] :address {:value "Bergen" :place/by-id nil}}
                                                                2 {:date [:parsed 29 1 1908] :address {:value "Bergen" :place/by-id nil}}}}
                             4 {:id 4 :template :marriage :value {0 {:name ["Ingebrigt" "Johannessen"] :template :firstlast :address {:value "" :place/by-id nil} :persona/by-id 0}
                                                                  1 {:name ["Kornelia" "Selliken"] :template :firstlast :address {:value "" :place/by-id nil} :persona/by-id 6}
                                                                  2 {:date [:parsed 3 1 1878] :address {:value "Bergen" :place/by-id nil}}}}}
               :fieldtemplates {:defaultnametemplate :firstlast
                                :firstlast [{:id 0 :type "First name"}
                                            {:id 1 :type "Last name"}]
                                :firstlastplace [{:id 0 :type "First name"}
                                                 {:id 1 :type "Last name"}
                                                 {:id 2 :type "Placename"}]}
               :facttemplates {:baptism {:label "Baptism" :type :baptism
                                         :fields [{:id 0 :type :name :role :child :label "Child"}
                                                  {:id 1 :type :name :role :father :label "Father"}
                                                  {:id 2 :type :name :role :mother :label "Mother"}
                                                  {:id 3 :type :event :label "Birth"}
                                                  {:id 4 :type :event :label "Baptism"}]}
                               :burial {:label "Burial" :type :burial
                                        :fields [{:id 0 :type :name :role :main :label "Name"}
                                                 {:id 1 :type :event :label "Death"}
                                                 {:id 2 :type :event :label "Burial"}]}
                               :marriage {:label "Marriage" :type :marriage
                                          :fields [{:id 0 :type :name :role :husband :label "Husband"}
                                                   {:id 1 :type :name :role :wife :label "Wife"}
                                                   {:id 2 :type :event :label "Marriage"}]}}})

(def state (r/atom database))

(def db (r/atom nil))
(def store-name "slektsdatabase")

(defn init-database
  []
  (idx/create-db "slekt" 1
                 #(-> (idx/delete-and-create-store % store-name {:keyPath "name"}))
                 #(reset! db %)))

(defn testwrite
  []
  (idx/add-item @db store-name {:name "Test" :data "new data has come to light"} #(println "added")))


(defn testidx []
  (idx/get-by-key @db store-name "Test" (fn [p] (println (:data p)))))


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
             :name/parts {:db/cardinality :db.cardinality/one}
             :name/template {:db/type :db.type/ref
                             :db/cardinality :db.cardinality/one}
             :template/name {:db/unique :db.unique/identity}
             :template/parts {:db/type :db.type/ref
                              :db/cardinality :db.cardinality/many}
             :event/type {:db/cardinality :db.cardinality/one}
             :event/template {:db/cardinality :db.cardinality/one}
             :event/fields {:db/type :db.type/ref
                            :db/cardinality :db.cardinality/many}
             :fact/date {:db/type :db.type/ref
                         :db/cardinality :db.cardinality/one}
             :fact/place {:db/type :db.type/ref
                          :db/cardinality :db.cardinality/one}
             :fact/type {:db/cardinality :db.cardinality/one}
             :date/parsed {:db/cardinality :db.cardinality/one}
             :date/year {:db/cardinality :db.cardinality/one}
             :date/month {:db/cardinality :db.cardinality/one}
             :date/day {:db/cardinality :db.cardinality/one}
             :date/text {:db/cardinality :db.cardinality/one}
             :place/value {:db/cardinality :db.cardinality/one}
             :place/address {:db/type :db.type/ref
                             :db/cardinality :db.cardinality/one}
             :role/type {:db/cardinality :db.cardinality/one}
             :role/name {:db/type :db.type/ref
                         :db/cardinality :db.cardinality/one}
             :role/persona {:db/type :db.type/ref
                            :db/cardinality :db.cardinality/one}})

(def conn (ds/create-conn schema))

(defn initdb
  []
  (ds/transact! conn t/initdb))

(defn get-name-parts
  [id]
  (ds/q '[:find ?name ?template
          :in $ ?e
          :where
          [?e :persona/name ?n]
          [?n :name/parts ?name]
          [?n :name/template ?t]
          [?t :template/count ?template]]
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
  ([role idrole id]
   (ds/q '[:find ?parentid
           :in $ ?role ?idrole ?e ?sex
           :where
           [?c :role/persona ?e]
           [?c :role/type ?idrole]
           [?evt :event/fields ?c]
           [?evt :event/fields ?f]
           [?f :role/type ?role]
           [?f :role/persona ?parentid]]
         @conn role idrole id))
  ([role idrole id sex]
   (ds/q '[:find ?parentid
           :in $ ?role ?idrole ?e ?sex
           :where
           [?c :role/persona ?e]
           [?c :role/type ?idrole]
           [?evt :event/fields ?c]
           [?evt :event/fields ?f]
           [?f :role/type ?role]
           [?f :role/persona ?parentid]
           [?parentid :persona/sex ?sex]]
         @conn role idrole id sex)))

(defn get-parent
  [role id]
  (get-relation role :child id))

(defn find-parent-sexed
  [role id sex]
  (let [parent (into #{} (flatten (into [] (get-relation role :child id sex))))]
    parent))

(defn find-parent
  [role id]
  (into #{} (flatten (into [] (get-relation role :child id)))))

(defn find-children
  [id]
  (let [mysex (ffirst (find-sex-of-person id))
        myrole (if (= :m mysex)
                 :husband
                 :wife)
        children (into #{} (flatten (into [] (get-relation :child myrole id))))]
    children))

(defn find-spouses
  "Finds all persons that are registered as married, OR has children together"
  [id]
  (let [mysex (ffirst (find-sex-of-person id))
        myrole (if (= :m mysex)
                 :husband
                 :wife)
        role (if (= :husband myrole)
               :wife
               :husband)
        spouses (into #{} (flatten (into [] (get-relation role myrole id))))]
    spouses))


(defn find-parent-id
  [oid myid]
  (let [sex (ffirst (find-sex-of-person oid))
        role (if (= :m sex)
               :wife
               :husband)
         parents (into #{} (flatten (into [] (get-relation role :child myid))))]
    (disj parents oid)))

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

(defn get-facts
  [pid]
  (ds/q '[:find ?factid
          :in $ ?pid
          :where
          [?rid :role/persona ?pid]
          [?eid :event/fields ?rid]
          [?eid :event/fields ?factid]]
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
          [?rid :role/type ?role]
          [?rid :role/persona ?pid]]
        @conn eid role))

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

(defn get-field-id-of-event
  [eventid field type]
  (ds/q '[:find ?val
          :in $ ?eid ?f ?type
          :where
          [?eid :event/fields ?fid]
          [?fid :role/field ?f]
          [?fid ?type ?val]]
        @conn eventid field type))

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
