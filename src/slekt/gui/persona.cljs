(ns slekt.gui.persona
  (:require [slekt.gui.utilities :as u]
            [slekt.db-functions :as f]
            [slekt.database :as d]
            [slekt.gui.select-person :as select]
            [slekt.events :as events]))

(defn init-persona
  []
  (let [sel (get-in @d/state [:current :selected])
        ass (ffirst (d/get-value-of sel :persona/assert))
        text (if (nil? ass)
               nil
               (ffirst (d/get-value-of ass :assert/note)))]
    (swap! d/state assoc-in [:window/persona :assert] ass)
    (swap! d/state assoc-in [:window/persona :note] text)))

(defn exit-persona
  []
  (let [assert-id (get-in @d/state [:window/persona :assert])
        text (get-in @d/state [:window/persona :note])]
    (if (nil? assert-id)
      nil
      (events/update-assert-note text assert-id))))

(defn on-persona-selected                                   ;; TODO: disable poss. of creating new persona here
  []
  (let [add (:persona/by-id (get-in @d/state [:window/persona :add]))
        assert (get-in @d/state [:window/persona :assert])
        selected (get-in @d/state [:current :selected])
        new-assert(if (nil? add)
                    nil
                    (events/save-assert assert selected add))]
    (println (get-in @d/state [:window/persona]))
    (println (str "on-persona-selected:add: " add))
    (println (str "on-persona-selected:assert: " assert))
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
     [:div.mainperson-bar]]))

(defn update-note
  [text]
  (swap! d/state assoc-in [:window/persona :note] text)
  )

(defn persona-view
  []
  (let [selected (get-in @d/state [:current :selected])
        assert (get-in @d/state [:window/persona :assert])
        note (get-in @d/state [:window/persona :note])
        pids (remove #(= selected %) (if (nil? assert)
                                           []
                                           (flatten (into [] (d/get-id-of assert :persona/assert)))))
        personaselector (if (get-in @d/state [:comp/personaselector :show])
                          [select/persona-selector]
                          nil)]
    (println (str "persona-view:pids: " pids))
    [:div.persona
     [:div.sel-pos
      [person selected]]
     (if (nil? assert)
       nil
       [:div.note-pos.all
        [:textarea.assert-note {:value     note
                    :on-change #(update-note (-> % .-target .-value))}]])
     [:div.ass-pos
      (map person pids) ]
     personaselector
     [:input.b-assert {:type "button"
                       :value "Add to Assert"
                       :on-click #(show-persona-selector [:window/persona :add])
                       }]]))