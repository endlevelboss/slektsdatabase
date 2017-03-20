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
    :role/field 0
    :role/type :child
    :role/persona -7}
   {:db/id -6
    :role/field 1
    :role/type :husband
    :role/persona -9}
   {:db/id -18
    :role/field 2
    :role/type :wife
    :role/persona -14}
   {:db/id -40
    :date/parsed :parsed
    :date/year 1834
    :date/month 12
    :date/day 17}
   {:db/id -44
    :place/value "Tysnes, Hordaland"}
   {:db/id -41
    :fact/field 3
    :fact/type :birth
    :fact/date -40
    :fact/place -44}
   {:db/id -42
    :date/parsed :parsed
    :date/year 1834
    :date/month 12
    :date/day 26}
   {:db/id -43
    :fact/field 4
    :fact/type :baptism
    :fact/date -42}
   {:event/type :baptism
    :event/roles [-5 -6 -18]
    :event/facts [-41 -43]
    :event/template :baptism}
   {:db/id -19
    :role/type :child
    :role/persona -8}
   {:db/id -20
    :role/type :husband
    :role/persona -7}
   {:db/id -21
    :role/type :wife
    :role/persona -15}
   {:event/type :baptism
    :event/roles [-19 -20 -21]
    :event/template :baptism}
   {:db/id -22
    :role/type :child
    :role/persona -16}
   {:db/id -23
    :role/type :husband
    :role/persona -7}
   {:db/id -24
    :role/type :wife
    :role/persona -17}
   {:event/type :baptism
    :event/roles [-22 -23 -24]
    :event/template :baptism}
   {:db/id -25
    :role/type :husband
    :role/persona -7}
   {:db/id -26
    :role/type :wife
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
    :role/type :husband
    :role/persona -7}
   {:db/id -30
    :role/type :wifre
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
    :role/type :husband
    :role/persona -7}
   {:db/id -35
    :role/type :wife
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
    :role/type :husband
    :role/persona -7}
   {:event/type :birth
    :event/roles [-38 -39]}
   {:db/id -43
    :field/id 0
    :field/type :role
    :field/role :child}
   {:db/id -44
    :field/id 1
    :field/type :role
    :field/role :husband}
   {:db/id -45
    :field/id 2
    :field/type :role
    :field/role :wife}
   {:db/id -46
    :field/id 3
    :field/type :fact
    :field/role :birth}
   {:db/id -47
    :field/id 4
    :field/type :fact
    :field/role :baptism}
   {:template/name :baptism
    :template/parts [-43 -44 -45 -46 -47]}])

