(ns slekt.template.template)

(def schema {:database/name {:db/unique :db.unique/identity}
             :database/selected {:db/cardinality :db.cardinality/one}
             :database/personas {:db/type :db.type/ref
                                 :db/cardinality :db.cardinality/many}
             :persona/id {:db/unique :db.unique/identity}
             :persona/name {:db/type :db.type/ref
                            :db/cardinality :db.cardinality/one}
             :persona/assert {:db/type :db.type/ref
                              :db/cardinality :db.cardinality/one}
             :assert/note {:db/cardinality :db.cardinality/one}
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

(def templates
  [{:db/id -1
    :field/id 0
    :field/type :role
    :field/role :child}
   {:db/id -2
    :field/id 1
    :field/type :role
    :field/role :father}
   {:db/id -3
    :field/id 2
    :field/type :role
    :field/role :mother}
   {:db/id -4
    :field/id 3
    :field/type :event
    :field/role :birth}
   {:db/id -5
    :field/id 4
    :field/type :event
    :field/role :baptism}
   {:template/name :baptism
    :template/main 0
    :template/expected {0 :main 1 :father 2 :mother}
    :template/parts [-1 -2 -3 -4 -5]}
   {:db/id -6
    :field/id 0
    :field/type :role
    :field/role :main}
   {:db/id -7
    :field/id 1
    :field/type :event
    :field/role :death}
   {:db/id -8
    :field/id 2
    :field/type :event
    :field/role :burial}
   {:template/name :burial
    :template/main 0
    :template/expected {0 :main}
    :template/parts [-6 -7 -8]}
   {:db/id -9
    :field/id 0
    :field/type :role
    :field/role :husband}
   {:db/id -10
    :field/id 1
    :field/type :role
    :field/role :wife}
   {:db/id -11
    :field/id 2
    :field/type :event
    :field/role :marriage}
   {:template/name :marriage
    :template/expected {0 :husband 1 :wife}
    :template/parts [-9 -10 -11]}
   {:db/id -12
    :field/id 0
    :field/type :event
    :field/role :census}
   {:db/id -13
    :field/id 1
    :field/type :multirole
    :field/role :multirole}
   {:template/name :census
    :template/expected {1 :first}
    :template/parts [-12 -13]}])
