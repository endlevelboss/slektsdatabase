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
             :event/roles {:db/type :db.type/ref
                            :db/cardinality :db.cardinality/many}
             :event/facts {:db/type :db.type/ref
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
  [{:eventtemplate/name          :baptism-record
    :eventtemplate/template-type :child-parents
    :eventtemplate/events        [[0 :birth] [1 :baptism]]}
   {:eventtemplate/name          :burial-record
    :eventtemplate/template-type :single
    :eventtemplate/events        [[0 :death] [1 :burial]]}
   {:eventtemplate/name          :marriage-record
    :eventtemplate/template-type :couple
    :eventtemplate/events        [[0 :marriage]]}
   {:eventtemplate/name          :census-record
    :eventtemplate/template-type :list
    :eventtemplate/events        [[0 :census]]}
   ])

(def templates
  [{:template/name  :child-parents
    :template/roles [[0 :child] [1 :father] [2 :mother]]}
   {:template/name  :single
    :template/roles [[0 :main]]}
   {:template/name  :couple
    :template/roles [[0 :husband] [1 :wife]]}
   {:template/name  :list
    :template/roles [[0 :multirole]]}])
