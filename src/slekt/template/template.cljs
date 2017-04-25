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
             :fact/date {:db/type :db.type/ref
                         :db/cardinality :db.cardinality/one}
             :fact/place {:db/type :db.type/ref
                          :db/cardinality :db.cardinality/one}
             :fact/type {:db/cardinality :db.cardinality/one}
             :role/name {:db/type :db.type/ref
                         :db/cardinality :db.cardinality/one}
             :role/persona {:db/type :db.type/ref
                            :db/cardinality :db.cardinality/one}})

(def event-templates
  [{:eventtemplate/name :baptism-record
    :eventtemplate/template-type :child-parents
    :eventtemplate/events {0 :birth 1 :baptism}}])

(def templates
  [{:template/name :child-parents
    :template/main 0
    :template/expected {0 :child 1 :father 2 :mother}}
   {:template/name :single
    :template/main 0
    :template/expected {0 :main}}
   {:template/name :couple
    :template/expected {0 :husband 1 :wife}}
   {:template/name :list
    :template/expected {0 :multirole}}])
