(ns slekt.database
    (:require [reagent.core :as r]
              [cljs-idxdb.core :as idx]
              [datascript.core :as ds]
              [datascript.transit :as dt]))

(def database {:gui/state {:runonce true
                           :current {:selected nil
                                     :father nil
                                     :mother nil}
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
             :template/parts {:db/cardinality :db.cardinality/many}
             :event/type {:db/cardinality :db.cardinality/one}
             :event/template {:db/type :db.type/ref
                              :db/cardinality :db.cardinality/one}
             :event/roles {:db/type :db.type/ref
                           :db/cardinality :db.cardinality/many}
             :event/items {:db/type :db.type/ref
                           :db/cardinality :db.cardinality/many}
             :role/type {:db/cardinality :db.cardinality/one}
             :role/name {:db/type :db.type/ref
                         :db/cardinality :db.cardinality/one}
             :role/persona {:db/type :db.type/ref
                            :db/cardinality :db.cardinality/one}})

(def conn (ds/create-conn schema))

(defn initdb
  []
  (ds/transact! conn [{:database/name "test"
                       :database/selected 0}
                      {:db/id -3
                       :template/name :firstlast
                       :template/count 2
                       :template/labels {0 "First name" 1 "Last name"}}
                      {:db/id -1
                       :name/parts {0 "Ingebrigt" 1 "Johannessen"}
                       :name/template -3}
                      {:db/id -2
                       :name/parts {0 "Ibenhart" 1 "Ingebrigtsen"}
                       :name/template -3}
                      {:db/id -4
                       :name/parts {0 "Johannes" 1 "Ingebrigtsson Bakke"}
                       :name/template -3}
                      {:db/id -7
                       :persona/id 0
                       :persona/name -1}
                      {:db/id -8
                       :persona/id 1
                       :persona/name -2}
                      {:db/id -9
                       :persona/id 2
                       :persona/name -4}
                      {:db/id -5
                       :role/type :child
                       :role/persona -7}
                      {:db/id -6
                       :role/type :father
                       :role/persona -9}
                      {:event/type "birth"
                       :event/roles [-5 -6]}]))


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
     name
     (recur (rest parts) (str name " " (get (first parts) 1))))))

(defn get-relation
  [role idrole id]
  (ds/q '[:find ?parentid
          :in $ ?role ?idrole ?e
          :where
          [?c :role/persona ?e]
          [?c :role/type ?idrole]
          [?evt :event/roles ?c]
          [?evt :event/roles ?f]
          [?f :role/type ?role]
          [?f :role/persona ?parentid]]
        @conn role idrole id))

(defn get-parent
  [role id]
  (get-relation role :child id))

(defn find-parent ;; WARINING Multiple parents can be found, must be handled
  [role id]
  (let [parent (ffirst (get-parent role id))]
    parent))

(defn find-children
  [id]
  (let [ch1 (first (get-relation :child :father id))
        ch2 (first (get-relation :child :mother id))]
    (into #{} (into ch1 ch2))))





