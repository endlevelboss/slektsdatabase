(ns slekt.gui.mainwindow
  (:require [slekt.database :as d]
            [slekt.db-functions :as f]
            [slekt.gui.gui :as gui]
            [slekt.gui.utilities :as u]))

(defn remove-empty
  [item]
  (if (= :noparent (get item 0))
    (if (empty? (get item 1))
      false
      true)
    true))

(defn current-selected-component []
  (let [current (get-in @d/state [:current])
        nameparts (ffirst (d/get-name-parts (:selected current)))
        dad (if (= 1 (count (:father current)))
              (first (:father current))
              nil) ;; TODO: Gui handling possible multiple fathers
        mum (if (= 1 (count (:mother current)))
              (first (:mother current))
              nil)
        children (:children current)
        spouses (:spouses current)
        sorted (d/arrange-children-by-parent (:selected current) spouses children)
        sorted2 (filter #(remove-empty %) sorted)
        events (f/event-list (:selected current))
        spouselabel (d/l :spouse)
        childrenlabel (d/l :children)]
    [:div.display
     [:div.all.mainperson
      [:div.main-name
       [:div
        [:strong (get nameparts 0)]]
       [:div
        [:strong (get nameparts 1)]]]
      [:small.main-year (u/birth-death-string (f/birthyear (:selected current)) (f/deathyear (:selected current)))
       ]
      [:div.mainperson-bar]]

     [:div.all.dadplate
      (str (d/l :father) ":")
      [:br]
      [gui/person-display-component dad]]
     [:div.all.mumplate
      (str (d/l :mother) ":")
      [:br]
      [gui/person-display-component mum]]
     [:div.all.spouses
      (d/l :spouse-with-children)
      [:label ": "]
      [:br]
      (map #(gui/spouse-children-component % spouselabel childrenlabel) sorted2)]
     [:div.all.eventlist
      [:div.eventheader
       (str (d/l :events) ":")]
      [:div.eventdivider]
      [:table#eventcontent
       [:tbody
        (for [event events]
          ^{:key (:id event)} [gui/event-display-component event])]]]
     [:input.b-birth {:type "button"
                      :value (d/l :bapm-event)
                      :on-click #(f/set-event-edit :baptism :child)}]
     [:input.b-burial {:type "button"
                       :value (d/l :buri-event)
                       :on-click #(f/set-event-edit :burial :main)}]
     [:input.b-marriage {:type "button"
                         :value (d/l :marr-event)
                         :on-click #(f/set-event-edit :marriage :main)}]
     [:input.b-census {:type "button"
                       :value (d/l :cens-event)
                       :on-click #(f/set-event-edit :census :first)}]]))

(defn init-window []
  (println "*")
  (if (not= nil (get-in @d/state [:window/edit :type]))
    [gui/event-edit-component]
    [current-selected-component]))