(ns slekt.gui.mainwindow
  (:require [slekt.database :as d]
            [slekt.db-functions :as f]
            [slekt.date :as date]
            [slekt.gui.edit :as edit]
            [slekt.gui.utilities :as u]))

(defn person-display-component
  [id]
  (if (nil? id)
    nil
    (let [name (d/get-name id)
          lifespan (ffirst (d/get-value-of id :persona/lifespan))
          ]
      [:strong
       {:on-click #(f/setCurrent id)}
       name
       " "
       [:small lifespan]] )))

(defn event-display-component
  [fact]
  (let [label (d/l (:type fact))
        date (:date fact)
        year (date/getyear date)
        mainperson (ffirst (d/get-main-person (:event fact)))
        name (if (or (:assert fact) (= mainperson (get-in @d/state [:current :selected])))
               (:place fact)
               [:strong (d/get-name mainperson)])
        color (if (:assert fact)
                "darkred"
                "black")]
    [:tr.eventline
     [:td
      {:style {:width "47px"
               :text-align "center"
               :color color}
       :on-click #(f/edit-event (:event fact))}
      year]
     [:td
      {:style {:width "100px"
               :color color}
       :on-click #(f/edit-event (:event fact))}
      label]
     [:td
      {:style {:color color}
       :on-click #(f/setCurrent mainperson)}
      name]]))

(defn child-list
  [id]
  [:li.child-list-element
   [person-display-component id]])

(defn spouse-children-component
  [info spouselabel childlabel]
  (let [spouse (get info 0)
        sp (if (not= :noparent spouse)
             spouse
             nil)
        labelspouse (if (not= :noparent spouse)
                      (str spouselabel ":")
                      nil)
        children (get info 1)
        labelchildren (if (not= 0 (count children))
                        (str childlabel ":")
                        nil)]
    ^{:key spouse}[:div
                   [:br]
                   [person-display-component sp]
                   [:br]
                   [:div.spouse-divider]
                   [:ol.child-list
                    (for [child children]
                      ^{:key child} [child-list child])]
                   ]))


(defn remove-empty
  [item]
  (if (= :noparent (get item 0))
    (if (empty? (get item 1))
      false
      true)
    true))

(defn event-list
  ([personas]
    (event-list personas []))
  ([personas result]
    (if (empty? personas)
      result
      (let [e (f/event-list (first personas))
            evs (map #(assoc % :assert true) e)]
        (recur (rest personas) (into result evs))))))

(defn current-selected-component []
  (let [current (get-in @d/state [:current])
        sel (:selected current)
        ass (ffirst (d/get-value-of sel :persona/assert))
        ass-personas (u/asserted-personas ass)
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
        event-ass (event-list ass-personas)
        eventlist (sort (comp f/compare-dates) (into events event-ass))
        spouselabel (d/l :spouse)
        childrenlabel (d/l :children)]
    ;(println (str "current-selected-component:ass-personas: " ass-personas))
    ;(println "current-selected-component:event-ass: ")
    ;(println event-ass)
    ;(println events)
    ;(println eventlist)
    [:div.display
     [:div.all.mainperson
      [:div.main-name
       [:div
        [:strong (get nameparts 0)]]
       [:div
        [:strong (get nameparts 1)]]]
      [:small.main-year (ffirst (d/get-value-of sel :persona/lifespan))
       ]
      [:div.mainperson-bar]]

     [:div.all.dadplate
      (str (d/l :father) ":")
      [:br]
      [person-display-component dad]]
     [:div.all.mumplate
      (str (d/l :mother) ":")
      [:br]
      [person-display-component mum]]
     [:div.all.spouses
      (d/l :spouse-with-children)
      [:label ": "]
      [:br]
      (map #(spouse-children-component % spouselabel childrenlabel) sorted2)]
     [:div.all.eventlist
      [:div.eventheader
       (str (d/l :events) ":")]
      [:div.eventdivider]
      [:table#eventcontent
       [:tbody
        (for [event eventlist]
          ^{:key (:id event)} [event-display-component event])]]]
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
                       :on-click #(f/set-event-edit :census :first)}]
     ]))

(defn init-window []
  (if (not= nil (get-in @d/state [:window/edit :type]))
    [edit/event-edit-component]
    [current-selected-component]))