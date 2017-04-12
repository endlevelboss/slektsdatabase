(ns slekt.gui.persona
  (:require [slekt.gui.utilities :as u]
            [slekt.db-functions :as f]
            [slekt.database :as d]))

(defn persona-view
  []
  (let [current (get-in @d/state [:current])
        nameparts (ffirst (d/get-name-parts (:selected current)))]
    [:div.persona
     [:div.all.mainperson
      [:div.main-name
       [:div
        [:strong (get nameparts 0)]]
       [:div
        [:strong (get nameparts 1)]]]
      [:small.main-year (u/birth-death-string (f/birthyear (:selected current)) (f/deathyear (:selected current)))
       ]
      [:div.mainperson-bar]]]))