(ns slekt.test-database)

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
    :template/parts [-6 -7 -8]}])

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
    :fact/field 0
    :fact/type :role
    :fact/role :child
    :fact/value "Ingebrigt"
    :fact/persona -7}
   {:db/id -6
    :fact/field 1
    :fact/type :role
    :fact/role :father
    :fact/persona -9}
   {:db/id -18
    :fact/field 2
    :fact/type :role
    :fact/role :mother
    :fact/persona -14}
   {:db/id -40
    :date/parsed :parsed
    :date/year 1834
    :date/month 12
    :date/day 17}
   {:db/id -44
    :place/value "Tysnes, Hordaland"}
   {:db/id -41
    :fact/field 3
    :fact/type :event
    :fact/role :birth
    :fact/date -40
    :fact/place -44}
   {:db/id -42
    :date/parsed :parsed
    :date/year 1834
    :date/month 12
    :date/day 26}
   {:db/id -43
    :fact/field 4
    :fact/type :event
    :fact/role :baptism
    :fact/date -42}
   {:event/type :baptism
    :event/fields [-5 -6 -18 -41 -43]
    :event/template :baptism}
   {:db/id -19
    :fact/role :child
    :fact/type :role
    :fact/persona -8}
   {:db/id -20
    :fact/role :father
    :fact/type :role
    :fact/persona -7}
   {:db/id -21
    :fact/role :mother
    :fact/type :role
    :fact/persona -15}
   {:event/type :baptism
    :event/fields [-19 -20 -21]
    :event/template :baptism}
   {:db/id -22
    :fact/role :child
    :fact/type :role
    :fact/persona -16}
   {:db/id -23
    :fact/role :father
    :fact/type :role
    :fact/persona -7}
   {:db/id -24
    :fact/role :mother
    :fact/type :role
    :fact/persona -17}
   {:event/type :baptism
    :event/fields [-22 -23 -24]
    :event/template :baptism}
   {:db/id -25
    :fact/role :husband
    :fact/type :role
    :fact/persona -7}
   {:db/id -26
    :fact/role :wife
    :fact/type :role
    :fact/persona -17}
   {:event/type :marriage
    :event/fields [-25 -26]}
   {:db/id -27
    :name/parts {0 "Margrethe" 1 "Madsen"}
    :name/template -3}
   {:db/id -28
    :persona/name -27
    :persona/sex :f}
   {:db/id -29
    :fact/role :husband
    :fact/type :role
    :fact/persona -7}
   {:db/id -30
    :fact/role :wife
    :fact/type :role
    :fact/persona -28}
   {:event/type :marriage
    :event/fields [-29 -30]}
   {:db/id -31
    :name/parts {0 "Ingebrigt Martin" 1 "Johannessen"}
    :name/template -3}
   {:db/id -32
    :persona/name -31
    :persona/sex :m}
   {:db/id -33
    :fact/role :child
    :fact/type :role
    :fact/persona -32}
   {:db/id -34
    :fact/role :father
    :fact/type :role
    :fact/persona -7}
   {:db/id -35
    :fact/role :mother
    :fact/type :role
    :fact/persona -28}
   {:event/type :birth
    :event/fields [-33 -34 -35]}
   {:db/id -36
    :name/parts {0 "Example" 1 "Motherless"}
    :name/template -3}
   {:db/id -37
    :persona/name -36
    :persona/sex :m}
   {:db/id -38
    :fact/role :child
    :fact/type :role
    :fact/persona -37}
   {:db/id -39
    :fact/role :father
    :fact/type :role
    :fact/persona -7}
   {:event/type :birth
    :event/fields [-38 -39]}
   ])

