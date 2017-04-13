(ns slekt.gui.persona
  (:require [slekt.gui.utilities :as u]
            [slekt.db-functions :as f]
            [slekt.database :as d]
            [slekt.gui.select-person :as select]
            [slekt.events :as events]))

(defn on-persona-selected                                   ;; TODO: disable poss. of creating new persona here
  []
  (let [add (:persona/by-id (get-in @d/state [:window/persona :add]))
        assert (get-in @d/state [:window/persona :assert])
        selected (get-in @d/state [:current :selected])
        arr [add selected]
        new-assert(if (nil? add)
                    nil
                    (events/save-assert assert selected add))]
    (swap! d/state assoc-in [:window/persona :add] nil)
    (swap! d/state assoc-in [:comp/personaselector :on-complete] nil)
    (swap! d/state assoc-in [:window/persona :assert] new-assert)))

(defn show-persona-selector
  [field]
  (swap! d/state assoc-in [:comp/personaselector :field] field)
  (swap! d/state assoc-in [:comp/personaselector :on-complete] on-persona-selected)
  (swap! d/state assoc-in [:comp/personaselector :show] true))

(defn person
  [id]
  (let [nameparts (ffirst (d/get-name-parts id))]
    ^{:key id} [:div.all.person-plate {:on-click #(f/setCurrent id)}
     [:div.main-name
      [:div
       [:strong (get nameparts 0)]]
      [:div
       [:strong (get nameparts 1)]]]
     [:small.main-year (u/birth-death-string (f/birthyear id) (f/deathyear id))
      ]
     [:div.mainperson-bar]])
  )

(defn persona-view
  []
  (let [selected (get-in @d/state [:current :selected])
        asserts (get-in @d/state [:window/persona :assert])
        pids (remove #(= selected %) (if (nil? asserts)
                                           []
                                           (flatten (into [] (d/get-value-of asserts :assert/personas)))))
        personaselector (if (get-in @d/state [:comp/personaselector :show])
                          [select/persona-selector]
                          nil)]
    [:div.persona
     [:div.sel-pos
      [person selected]]
     [:div.ass-pos
      (map person pids)]
     personaselector
     [:input.b-assert {:type "button"
                       :value "Add to Assert"
                       :on-click #(show-persona-selector [:window/persona :add])
                       }]]))