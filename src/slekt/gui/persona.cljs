(ns slekt.gui.persona
  (:require [slekt.gui.utilities :as u]
            [slekt.db-functions :as f]
            [slekt.database :as d]
            [slekt.gui.select-person :as select]))

(defn show-persona-selector
  [field]
  (swap! d/state assoc-in [:comp/personaselector :field] field)
  (swap! d/state assoc-in [:comp/personaselector :show] true))

(defn persona-view
  []
  (let [current (get-in @d/state [:current])
        nameparts (ffirst (d/get-name-parts (:selected current)))
        personaselector (if (get-in @d/state [:comp/personaselector :show])
                          [select/persona-selector]
                          nil)]
    [:div.persona
     [:div.all.mainperson
      [:div.main-name
       [:div
        [:strong (get nameparts 0)]]
       [:div
        [:strong (get nameparts 1)]]]
      [:small.main-year (u/birth-death-string (f/birthyear (:selected current)) (f/deathyear (:selected current)))
       ]
      [:div.mainperson-bar]]
     personaselector
     [:input.b-assert {:type "button"
                       :value "Assert"
                       :on-click #(show-persona-selector nil)
                       }]]))