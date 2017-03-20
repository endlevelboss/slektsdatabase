(ns slekt.gui
    (:require [reagent.core :as r]
              [slekt.database :as d]
              [slekt.db-functions :as f]
              [slekt.relations :as rels]
              [slekt.date :as date]))

(enable-console-print!)

(defn person-display-component
   [id]
   (let [name (d/get-name id)]
    [:div
      {:on-click #(f/setCurrent id)}
      name]))

(defn name-part-component
    [label id part]
    (let [value (get-in @d/state [:gui/state :window/edit :values id part])
          v (if (= nil value)
                ""
                value)]
        [:div (str label ": ")
         [:input {:type "text"
                  :value value
                  :on-change #(f/set-event-edit-field (-> % .-target .-value) id part)}]]))

(defn name-component [field]
    (let [id (:id field)
          t (get-in @d/state [:gui/state :window/edit :values id :template])
          personid (get-in @d/state [:gui/state :window/edit :values id :persona/by-id])
          template (if (= nil t)
                       (f/get-nametemplate)
                       (f/get-nametemplate t))]
        [:div
         [:label (str (:label field) " : " personid)]
         (for [field template]
             ^{:key (:id field)} [name-part-component (:type field) id (:id field)])]))

(defn date-component [field]
    (let [id (:id field)
          date (get-in @d/state [:gui/state :window/edit :values id :date])
          place (get-in @d/state [:gui/state :window/edit :values id :place])]
        [:div {:key (:id field)}
         [:div (:label field)]
         [:input {:type "text"
                  :value date
                  :on-change #(f/set-event-edit-field (-> % .-target .-value) id :date)}]
         [:div "Place"]
         [:input {:type "text"
                  :value place
                  :on-change #(f/set-event-edit-field (-> % .-target .-value) id :place)}]]))

(defn field-generator
    [fields]
    (for [field fields]
        (let [type (:type field)]
            (case type
                :name ^{:key (:id field)}[name-component field]
                :event ^{:key (:id field)}[date-component field]))))

(defn event-edit-component
    []
    (let [current (get-in @d/state [:gui/state :current :selected])
          eventtype (get-in @d/state [:gui/state :window/edit :type])
          event (get-in @d/state [:event/by-id (get-in @d/state [:gui/state :window/edit :event/by-id])])
          template (get-in @d/state [:facttemplates eventtype])]
        [:div {:style {:font-family "arial"}}
         [:h1 (:label template)]
         (field-generator (:fields template))
         [:input {:type "button"
                  :value "Ok"
                  :on-click #(f/save-event)}]
         [:input {:type "button"
                  :value "Cancel"
                  :on-click #(f/set-event-edit nil nil)}]]))

(defn event-display-component
  [event]
  (let [label (:label event)
        date (:date event)
        year (date/getyear date)
        main (get (get-in event [:event :value]) 0)  ;; denne maa gjoeres mer robust
        name (if (= (:persona/by-id main) (get-in @d/state [:gui/state :current :selected]))
                (:address event)
                (f/name-string (f/getPersona (:persona/by-id main))))
        eventstring (str year " - " label " : ")]
      [:div
        [:label
         {:on-click #(f/edit-event (:event event))}
         eventstring]
        [:label
            {:on-click #(f/setCurrent (:persona/by-id main))}
          name]]))

(defn spouse-children-component
  [info]
  (let [spouse (get info 0)
        sp (if (not= :noparent spouse)
             spouse
             nil)
        labelspouse (if (not= :noparent spouse)
                      "Spouse:"
                      nil)
        children (get info 1)
        labelchildren (if (not= 0 (count children))
                        "Children:"
                        nil)]
    ^{:key spouse}[:div
                   labelspouse
                   [person-display-component sp]
                   labelchildren
                   (for [child children]
                     ^{:key child} [person-display-component child])
                   [:br]]))

(defn current-selected-component []
  (let [current (get-in @d/state [:gui/state :current])
        personinfo (d/get-name (:selected current))
        dad (if (= 1 (count (:father current)))
              (first (:father current))
              nil) ;; TODO: Gui handling possible multiple fathers
        mum (if (= 1 (count (:mother current)))
              (first (:mother current))
              nil)
        children (:children current)
        spouses (:spouses current)
        sorted (d/arrange-children-by-parent (:selected current) spouses children)
        events (f/event-list (:links personinfo))]
    [:div {:style {:font-family "arial"}}
     [:div
      {:style
       {:background-color "white"
        :position "absolute"
        :width "380px"
        :height "60px"
        :top "20px"
        :left "20px"
        :padding "5px"
        :font-size "140%"}}
      [:strong (d/get-name (:selected current))]]
     [:div
      {:style
       {:background-color "cadetblue"
        :position "absolute"
        :width "400px"
        :height "35px"
        :top "20px"
        :left "420px"}}
      "Father: "
      [person-display-component dad]]
     [:div
      {:style {:background-color "lightcoral"
               :position "absolute"
               :width "400px"
               :height "35px"
               :top "55px"
               :left "420px"}}
      "Mother: "
      [person-display-component mum]]
     [:div {:style {:background-color "wheat"
                    :position "absolute"
                    :top "100px"
                    :left "420px"
                    :width "400px"}}
      (map #(spouse-children-component %) sorted)]
     [:div
      {:style {:background-color "wheat"
               :position "absolute"
               :width "380px"
               :top "100px"
               :left "30px"}}
      "Events:"
      (for [event events]
          ^{:key (str (get-in event [:event :id]) (:label event))} [event-display-component event])]

     [:input {:style {:position "absolute"
                      :top "450px"
                      :left "20px"}
              :type "button"
              :value "Add birth/baptism"
              :on-click #(f/set-event-edit :baptism :child)}]
     [:input {:style {:position "absolute"
                      :top "450px"
                      :left "140px"}
              :type "button"
              :value "Add burial/death"
              :on-click #(f/set-event-edit :burial :main)}]]))

(defn init-window []
  (println "*")
  (if (not= nil (get-in @d/state [:gui/state :window/edit :type]))
    [event-edit-component]
    [current-selected-component]))

(defn runonce
  "Initializes data at the startup, to be run after indexeddb has loaded"
  []
  (let [run (get-in @d/state [:gui/state :runonce])]
    (if run
      (do
        (d/initdb)
        (f/setCurrent 10)
        (swap! d/state assoc-in [:gui/state :runonce] false))
      nil)))

(defn start-window
  []
  (if (not= nil @d/db)
    (do
      (runonce)
      [init-window])
    [:div "Indexed database has failed to initialize... Please contact support"]))

