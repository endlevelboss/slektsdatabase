(ns slekt.database
    (:require [reagent.core :as r]))

(def database {:gui/state {:current {:selected nil
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