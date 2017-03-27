(ns slekt.gui
    (:require [reagent.core :as r]
              [slekt.database :as d]
              [slekt.db-functions :as f]
              ;[slekt.relations :as rels]
              [slekt.date :as date]))

(enable-console-print!)

(defn birth-death-string
  [birthyear deathyear]
  (str "(" birthyear " - " deathyear ")"))

(defn person-display-component
   [id]
   (let [name (d/get-name id)
         birth (f/birthyear id)
         death (f/deathyear id)]
    [:div
      {:on-click #(f/setCurrent id)}
      name
     " "
     [:small (birth-death-string birth death)]]))

;(defn name-part-component
;    [label id part]
;    (let [value (get-in @d/state [:gui/state :window/edit :values id part])
;          v (if (= nil value)
;                ""
;                value
;        [:div (str label ": ")
;         [:input {:type "text"
;                  :value value
;                  :on-change #(f/set-event-edit-field (-> % .-target .-value) id part)]))

(defn name-component
  [field]
  (let [id (get field 0)
        label (get (get field 1) 2)
        val (get-in @d/state [:gui/state :window/edit :values id])
        value (:value val)
        pid (:persona/by-id val)
        firstname (:newfirst val)
        lastname (:newlast val)
        name (if (= nil pid)
               [:div label
                [:label "First name"]
                [:input {:type "text"
                         :value firstname
                         :on-change #(f/set-event-edit-field (-> % .-target .-value) id :newfirst)}]
                [:label "Last name"]
                [:input {:type "text"
                         :value lastname
                         :on-change #(f/set-event-edit-field (-> % .-target .-value) id :newlast)}]]
               [:label (str label " : " (d/get-name pid))])]
    [:div
     name
     [:input {:type "text"
              :value value
              :on-change #(f/set-event-edit-field (-> % .-target .-value) id :value)}]]))

(defn date-component
  [field]
  (let [id (get field 0)
        label (get (get field 1) 2)
        date (get-in @d/state [:gui/state :window/edit :values id :date])
        place (get-in @d/state [:gui/state :window/edit :values id :place])]
    [:div
     [:div label]
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
    (let [type (get (get field 1) 1)
          id (get field 0)]
      (case type
        :role ^{:key id}[name-component field]
        :event ^{:key id}[date-component field]))))

(defn event-edit-component
  []
  (let [current (get-in @d/state [:gui/state :current :selected])
        eventtype (get-in @d/state [:gui/state :window/edit :type])
        event (get-in @d/state [:gui/state :window/edit :event/by-id])
        template-type (get-in @d/state [:gui/state :window/edit :type])
        template (ffirst (d/get-id-of template-type :template/name))
        fields (d/get-template template)]
    [:div {:style {:font-family "arial"
                   :position "absolute"
                   :top "20px"
                   :left "30px"
                   :width "700px"}}
     [:h1 (:label template)]
     (field-generator fields)
     [:input {:type "button"
              :value "Ok"
              :on-click #(f/save-event)}]
     [:input {:type "button"
              :value "Cancel"
              :on-click #(f/set-event-edit nil nil)}]]))

(defn event-display-component
  [fact]
  (let [label (:type fact)
        date (:date fact)
        year (date/getyear date)
        mainperson (ffirst (d/get-main-person (:event fact)))
        name (if (= mainperson (get-in @d/state [:gui/state :current :selected]))
               (:place fact)
               (d/get-name mainperson))
        eventstring (str year " - " label " : ")]
    [:div
     [:label
      {:on-click #(f/edit-event (:event fact))}
      eventstring]
     [:label
      {:on-click #(f/setCurrent mainperson)}
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
        events (f/event-list (:selected current))]
    (println dad)
    [:div {:style {:font-family "arial"
                   :position "absolute"
                   :top "20px"
                   :left "20px"}}
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
      [:strong (d/get-name (:selected current))]
      [:br]
      [:small (birth-death-string (f/birthyear (:selected current)) (f/deathyear (:selected current)))]]
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
          ^{:key (:id event)} [event-display-component event])]

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

(defn menu-bars []
  [:div {:style {:position "absolute" :top "0px" :left "0px"}}
   [:div {:style {:position "absolute" :top "0px" :left "0px"
                  :width "20px" :height "550px"
                  :background-color "grey"}}]
   [:div {:style {:position "absolute" :top "0px" :left "20px"
                  :width "900px" :height "20px"
                  :background-color "#555555"}}]
   [init-window]])

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
      [menu-bars])
    [:div "Loading indexeddb..."]))

