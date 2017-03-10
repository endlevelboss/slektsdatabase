(ns slekt.gui
    (:require [reagent.core :as r]
              [slekt.database :as d]
              [slekt.db-functions :as f]
              [slekt.relations :as rels]
              [slekt.date :as date]))

(enable-console-print!)

(defn person-display-component
   [id]
   (let [name (f/name-string (f/getPersona id))]
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

(defn current-selected-component []
  (let [current (get-in @d/state [:gui/state :current])
        personinfo (f/getPersona (:selected current))
        dad (:father current)
        mum (:mother current)
        children (rels/findchildren (:links personinfo) (:selected current))
        events (f/event-list (:links personinfo))]
    [:div {:style {:font-family "arial"}}
     [:div
      {:style
       {:background-color "powderblue"
        :position "absolute"
        :width "400px"
        :height "70px"
        :top "20px"
        :left "20px"
        :font-size "140%"}}
      [:strong (f/name-string personinfo)]]
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
     [:div
      {:style {:background-color "wheat"
               :position "absolute"
               :width "400px"
               :top "90px"
               :left "420px"}} 
      "Children:"
      (for [child children]
          ^{:key child} [person-display-component child])]
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

(defn start-window []
    (println "*")
    (if (not= nil (get-in @d/state [:gui/state :window/edit :type]))
        [event-edit-component]
        [current-selected-component])
  )
