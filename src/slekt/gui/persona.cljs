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

(defn merge-asserts
  [ass1 ass2]
  (let [note1 (ffirst (d/get-value-of ass1 :assert/note))
        note2 (ffirst (d/get-value-of ass2 :assert/note))
        new-note (str note1 " " note2)
        p1 (u/asserted-personas ass1)
        p2 (u/asserted-personas ass2)
        sel (get-in @d/state [:current :selected])
        personas (conj (into p1 p2) sel)]
    (println (str "merge-asserts:personas: " personas))
    (println (str "merge-asserts:new-note: " new-note))
    (swap! d/state assoc-in [:window/persona :note] new-note)
    (events/save-assert ass1 personas)

    ass1))

(defn on-persona-selected                                   ;; TODO: disable poss. of creating new persona here
  []
  (let [selected (get-in @d/state [:current :selected])
        add (:persona/by-id (get-in @d/state [:window/persona :add]))
        assert (get-in @d/state [:window/persona :assert])
        add-assert (if (nil? add)
                     nil
                     (ffirst (d/get-value-of add :persona/assert)))
        new-assert(if (nil? add)                            ;; if no persona selected, we do not assert
                    nil
                    (if (and assert add-assert)
                      (merge-asserts assert add-assert)
                      (let [ass (if (nil? add-assert)
                                  assert
                                  add-assert)]
                        (events/save-assert ass [selected add]))))]
    ;(println (get-in @d/state [:window/persona]))
    ;(println (str "on-persona-selected:add: " add))
    ;(println (str "on-persona-selected:assert: " assert))
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

(defn person-list-component
  [id]
  (let [nameparts (ffirst (d/get-name-parts id))]
    ^{:key id} [:div.p-assert-trow {:on-click #(f/setCurrent id)}
                [:div.list-name
                 [:div
                  [:strong (get nameparts 0)]]
                 [:div
                  [:strong (get nameparts 1)]]]
                [:small.list-year (u/birth-death-string (f/birthyear id) (f/deathyear id))
                 ]
                [:div]]))

(defn update-note
  [text]
  (swap! d/state assoc-in [:window/persona :note] text)
  )

(defn persona-view
  []
  (let [selected (get-in @d/state [:current :selected])
        assert (get-in @d/state [:window/persona :assert])
        note (get-in @d/state [:window/persona :note])
        pids (u/asserted-personas assert)
        personaselector (if (get-in @d/state [:comp/personaselector :show])
                          [select/persona-selector]
                          nil)]
    ;(println (str "persona-view:pids: " pids))
    [:div.persona
     [:div.sel-pos
      [person selected]]
     (if (nil? assert)
       nil
       [:div.note-pos.all
        [:textarea.assert-note {:value     note
                    :on-change #(update-note (-> % .-target .-value))}]])
     [:div.ass-pos
      (map person-list-component pids) ]
     personaselector
     [:input.b-assert {:type "button"
                       :value "Add to Assert"
                       :on-click #(show-persona-selector [:window/persona :add])
                       }]]))