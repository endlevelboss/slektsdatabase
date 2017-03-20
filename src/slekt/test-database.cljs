(ns slekt.test-database)

(def initdb
  [{:database/name "test"
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
   {:db/id -10
    :name/parts {0 "Anna" 1 "Sebjørnsdatter Færavåg"}
    :name/template -3}
   {:db/id -11
    :name/parts {0 "Dortea Ovidia" 1 "Larsdatter"}
    :name/template -3}
   {:db/id -12
    :name/parts {0 "Ankje Ivarda" 1 "Johannessen"}
    :name/template -3}
   {:db/id -13
    :name/parts {0 "Oline Kornelia" 1 "Selleken"}
    :name/template -3}
   {:db/id -7
    :persona/name -1
    :persona/sex :m}
   {:db/id -8
    :persona/name -2
    :persona/sex :m}
   {:db/id -9
    :persona/name -4
    :persona/sex :m}
   {:db/id -14
    :persona/name -10
    :persona/sex :f}
   {:db/id -15
    :persona/name -11
    :persona/sex :f}
   {:db/id -16
    :persona/name -12
    :persona/sex :f}
   {:db/id -17
    :persona/name -13
    :persona/sex :f}
   {:db/id -5
    :role/type :child
    :role/persona -7}
   {:db/id -6
    :role/type :spouse
    :role/persona -9}
   {:db/id -18
    :role/type :spouse
    :role/persona -14}
   {:event/type :birth
    :event/roles [-5 -6 -18]}
   {:db/id -19
    :role/type :child
    :role/persona -8}
   {:db/id -20
    :role/type :spouse
    :role/persona -7}
   {:db/id -21
    :role/type :spouse
    :role/persona -15}
   {:event/type :birth
    :event/roles [-19 -20 -21]}
   {:db/id -22
    :role/type :child
    :role/persona -16}
   {:db/id -23
    :role/type :spouse
    :role/persona -7}
   {:db/id -24
    :role/type :spouse
    :role/persona -17}
   {:event/type "birth"
    :event/roles [-22 -23 -24]}
   {:db/id -25
    :role/type :spouse
    :role/persona -7}
   {:db/id -26
    :role/type :spouse
    :role/persona -17}
   {:event/type :marriage
    :event/roles [-25 -26]}
   {:db/id -27
    :name/parts {0 "Margrethe" 1 "Madsen"}
    :name/template -3}
   {:db/id -28
    :persona/name -27
    :persona/sex :f}
   {:db/id -29
    :role/type :spouse
    :role/persona -7}
   {:db/id -30
    :role/type :spouse
    :role/persona -28}
   {:event/type :marriage
    :event/roles [-29 -30]}
   {:db/id -31
    :name/parts {0 "Ingebrigt Martin" 1 "Johannessen"}
    :name/template -3}
   {:db/id -32
    :persona/name -31
    :persona/sex :m}
   {:db/id -33
    :role/type :child
    :role/persona -32}
   {:db/id -34
    :role/type :spouse
    :role/persona -7}
   {:db/id -35
    :role/type :spouse
    :role/persona -28}
   {:event/type :birth
    :event/roles [-33 -34 -35]}
   {:db/id -36
    :name/parts {0 "Example" 1 "Motherless"}
    :name/template -3}
   {:db/id -37
    :persona/name -36
    :persona/sex :m}
   {:db/id -38
    :role/type :child
    :role/persona -37}
   {:db/id -39
    :role/type :spouse
    :role/persona -7}
   {:event/type :birth
    :event/roles [-38 -39]}])

