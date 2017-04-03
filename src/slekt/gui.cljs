(ns slekt.gui
    (:require [reagent.core :as r]
              [slekt.database :as d]
              [slekt.db-functions :as f]
              [slekt.date :as date]
              [slekt.events :as events]))

(enable-console-print!)

(defn birth-death-string
  [birthyear deathyear]
  (str "(" birthyear " - " deathyear ")"))

(defn person-display-component
  [id]
  (if (nil? id)
    nil
    (let [name (d/get-name id)
          birth (f/birthyear id)
          death (f/deathyear id)]
      [:div
       {:on-click #(f/setCurrent id)}
       name
       " "
       [:small (birth-death-string birth death)]])))

(defn change-person
  [id sex]
  (let [field (get-in @d/state [:gui/state :comp/personaselector :field])
        path (into [:gui/state :window/edit :values] field)
        s (if (nil? id)
            sex
            (ffirst (d/find-sex-of-person id)))]
    (swap! d/state assoc-in [:gui/state :comp/personaselector :show] false)
    (swap! d/state assoc-in path {:persona/by-id id
                                  :sex s
                                  :value nil})))

(defn change-person-cancel
  []
  (swap! d/state assoc-in [:gui/state :comp/personaselector :show] false))

(defn person-select
  [id]
  (if (nil? id)
    nil
    (let [name (d/get-name id)
          birth (f/birthyear id)
          death (f/deathyear id)]
      [:div
       {:on-click #(change-person id nil)}
       name
       " "
       [:small (birth-death-string birth death)]])))

(defn persona-selector
  []
  (let [personas-id (d/persona-list)]
    [:div.persona-selector
     (for [pid personas-id]
       ^{:key pid}[person-select pid])
     [:input {:type "button"
              :value "New male"
              :on-click #(change-person nil :m)}]
     [:input {:type "button"
              :value "New female"
              :on-click #(change-person nil :f)}]
     [:input {:type "button"
              :value "Cancel"
              :on-click #(change-person-cancel)}]]))

(defn button-show-persona-selector
  [field]
  (swap! d/state assoc-in [:gui/state :comp/personaselector :field] field)
  (swap! d/state assoc-in [:gui/state :comp/personaselector :show] true))

(defn person-component
  [field]
  (let [id (get field 0)
        role (get (get field 1) 2)
        label (get (get field 1) 2)
        val (get-in @d/state [:gui/state :window/edit :values id])
        value (:value val)
        pid (:persona/by-id val)
        firstname (:newfirst val)
        lastname (:newlast val)
        personaselector (if (get-in @d/state [:gui/state :comp/personaselector :show])
                          [persona-selector]
                          nil)
        name (if (= nil pid)
               [:div label
                [:label "First name"]
                [:input {:type      "text"
                         :value     firstname
                         :on-change #(f/set-event-edit-field (-> % .-target .-value) id :newfirst)}]
                [:label "Last name"]
                [:input {:type      "text"
                         :value     lastname
                         :on-change #(f/set-event-edit-field (-> % .-target .-value) id :newlast)}]]
               [:label (str label " : " (d/get-name pid))])]
    [:div
     name
     [:input {:type     "button"
              :value    "Change person"
              :on-click #(button-show-persona-selector [id])}]
     [:input {:type "text"
              :value value
              :on-change #(f/set-event-edit-field (-> % .-target .-value) id :value)}]
     personaselector]))

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

(defn set-list-value
  [value field-id index key]
  (swap! d/state assoc-in [:gui/state :window/edit :values field-id index key] value))

(defn person-list-component
  [listelement field-id]
  (let [index (get listelement 0)
        p-id (:persona/by-id (get listelement 1))
        val (get-in @d/state [:gui/state :window/edit :values field-id index])
        firstname (:newfirst val)
        lastname (:newlast val)
        personaselector (if (get-in @d/state [:gui/state :comp/personaselector :show])
                          [persona-selector]
                          nil)
        name (if (= nil p-id)
               [:div
                [:label "First name"]
                [:input {:type      "text"
                         :value     firstname
                         :on-change #(set-list-value (-> % .-target .-value) field-id index :newfirst)}]
                [:label "Last name"]
                [:input {:type      "text"
                         :value     lastname
                         :on-change #(set-list-value (-> % .-target .-value) field-id index :newlast)}]]
               (d/get-name p-id ))
        r (get-in @d/state [:gui/state :window/edit :values field-id index :grouprole])
        role (if (nil? r)
               "nil"
               r)]
    [:div
     (+ 1 index)
     name
     [:input {:type     "button"
              :value    "Change person"
              :on-click #(button-show-persona-selector [field-id index])}]
     [:select {:name "test" :value role :on-change #(set-list-value (-> % .-target .-value) field-id index :grouprole)}
      [:option {:value "nil" :disabled "true"} "Select"]
      [:option {:value "husband"} "Husband"]
      [:option {:value "wife"} "Wife"]
      [:option {:value "son"} "Son"]
      [:option {:value "daughter"} "Daughter"]
      [:option {:value "unknown"} "Unknown"]]
     personaselector]))

(defn button-add-person-list-component
  [field-id index]
  (swap! d/state assoc-in [:gui/state :window/edit :values field-id index] {:persona/by-id nil}))

(defn multi-component
  [field]
  (let [field-id (get field 0)
        list (get-in @d/state [:gui/state :window/edit :values field-id])
        count (count list)]
    [:div "List of persons in household"
     (for [l list]
       ^{:key (get l 0)} [person-list-component l field-id])
     [:input {:type "button"
              :value "+"
              :on-click #(button-add-person-list-component field-id count)}]]))

(defn field-generator
  [fields]
  (for [field fields]
    (let [type (get (get field 1) 1)
          id (get field 0)]
      (case type
        :role ^{:key id}[person-component field]
        :event ^{:key id}[date-component field]
        :multirole ^{:key id} [multi-component field]))))

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
  (let [label (d/l (:type fact))
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
        events (f/event-list (:selected current))
        spouselabel (d/l :spouse)
        childrenlabel (d/l :children)]
    (println current)
    [:div#display
     [:div#nameplate
      [:strong (d/get-name (:selected current))]
      [:small (:selected current)]
      [:br]
      [:small (birth-death-string (f/birthyear (:selected current)) (f/deathyear (:selected current)))]]
     [:div#dadplate
      (str (d/l :father) ":")
      [person-display-component dad]]
     [:div#mumplate
      (str (d/l :mother) ":")
      [person-display-component mum]]
     [:div#spouses
      (map #(spouse-children-component % spouselabel childrenlabel) sorted)]
     [:div#eventlist
      (str (d/l :events) ":")
      (for [event events]
          ^{:key (:id event)} [event-display-component event])]
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
  (if (not= nil (get-in @d/state [:gui/state :window/edit :type]))
    [event-edit-component]
    [current-selected-component]))

(defn update-add
  [value key]
  (swap! d/state assoc-in [:gui/state :window/add key] value))

(defn button-add-person
  []
  (let [persona (get-in @d/state [:gui/state :window/add])
        p2 (assoc persona :sex (keyword (:sex persona)))
        p-id (events/transact-persona p2 nil)]
    (f/setCurrent p-id)
    (swap! d/state assoc-in [:gui/state :window/add :show] false)))

(defn check-loaded
  []
  (let [personas (d/persona-list)]
    (if (empty? personas)
      nil
      (do
        (swap! d/state assoc-in [:gui/state :window/add :show] false)
        (d/set-current (first personas))))))

(defn add-window
  []
  (let [firstname (get-in @d/state [:gui/state :window/add :newfirst])
        lastname (get-in @d/state [:gui/state :window/add :newlast])
        sex (get-in @d/state [:gui/state :window/add :sex])]
    [:div {:style {:position "absolute"
                   :top      "40px"
                   :left     "40px"
                   :width    "800px"}}
     "Add first person to your genealogy database"
     [:br]
     [:input {:type      "text"
              :value     firstname
              :on-change #(update-add (-> % .-target .-value) :newfirst)}]
     [:input {:type      "text"
              :value     lastname
              :on-change #(update-add (-> % .-target .-value) :newlast)}]
     [:select {:name "sex" :value sex :on-change #(update-add (-> % .-target .-value) :sex)}
      [:option {:value "m"} "Male"]
      [:option {:value "f"} "Female"]]
     [:br]
     [:input {:type "button"
              :value "OK"
              :on-click #(button-add-person)}]
     [:input {:type "button"
              :value "Refresh"
              :on-click #(check-loaded)}]]))

(defn menu-bars []
  (let [show-add-window (get-in @d/state [:gui/state :window/add :show])]
    [:div {:style {:position "absolute" :top "0px" :left "0px"}}
     [:div {:style {:position         "absolute" :top "0px" :left "0px"
                    :width            "20px" :height "850px"
                    :background-color "grey"}}]
     [:div {:style {:position         "absolute" :top "0px" :left "20px"
                    :width            "900px" :height "20px"
                    :background-color "#555555"}}]
     (if show-add-window
       [add-window]
       [init-window])]))

(defn runonce
  "Initializes data at the startup, to be run after indexeddb has loaded"
  []
  (let [run (get-in @d/state [:gui/state :runonce])]
    (if run
      (d/initdb)
      nil)))

(defn start-window
  []
  (if (not= nil @d/db)
    (do
      (runonce)
      [menu-bars])
    [:div "Loading indexeddb..."]))

