(ns slekt.gui.gui
    (:require [reagent.core :as r]
              [slekt.database :as d]
              [slekt.db-functions :as f]
              [slekt.date :as date]
              [slekt.events :as events]
              [slekt.styles :as s]))

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
      [:strong
       {:on-click #(f/setCurrent id)}
       name
       " "
       [:small (birth-death-string birth death)]] )))

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

(defn new-name-component
  [id]
  (let [val (get-in @d/state [:gui/state :window/edit :values id])
        first (:newfirst val)
        last (:newlast val)]
    [:div
     [:div.nn-firstlabel (d/l :firstname)]
     [:input.nn-firstname {:type "text"
              :value first
              :on-change #(f/set-event-edit-field (-> % .-target .-value) id :newfirst)}]
     [:div.nn-lastlabel (d/l :lastname)]
     [:input.nn-lastname {:type "text"
              :value last
              :on-change #(f/set-event-edit-field (-> % .-target .-value) id :newlast)}]]))

(defn person-component
  [field]
  (let [id (get field 0)
        role (get (get field 1) 2)
        label (d/l (get (get field 1) 2))
        val (get-in @d/state [:gui/state :window/edit :values id])
        value (:value val)
        pid (:persona/by-id val)
        firstname (:newfirst val)
        lastname (:newlast val)
        personaselector (if (get-in @d/state [:gui/state :comp/personaselector :show])
                          [persona-selector]
                          nil)
        name (if (nil? pid)
               [new-name-component id]
               (d/get-name pid))]
    [:div.person-component
     [:div.ee-label label]
     [:div.ee-name name]
     [:input.ee-change
      {:type     "button"
       :value    "Change person"
       :on-click #(button-show-persona-selector [id])}]
     personaselector]))

(defn date-component
  [field]
  (let [id (get field 0)
        label (d/l (get (get field 1) 2))
        date (get-in @d/state [:gui/state :window/edit :values id :date])
        place (get-in @d/state [:gui/state :window/edit :values id :place])]
    [:div.dateplace-component
     [:div.ee-label label]
     [:input.ee-name {:type "text"
              :value date
              :on-change #(f/set-event-edit-field (-> % .-target .-value) id :date)}]
     [:div.ee-placelabel (d/l :place)]
     [:input.ee-place {:type "text"
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
    [:div.person-component
     [:div.ee-label (+ 1 index)]
     [:div.ee-name name]
     [:input.ee-change {:type     "button"
              :value    "Change person"
              :on-click #(button-show-persona-selector [field-id index])}]
     [:select.ee-role {:name "test" :value role :on-change #(set-list-value (-> % .-target .-value) field-id index :grouprole)}
      [:option {:value "nil" :disabled "true"} (d/l :select)]
      [:option {:value "husband"} (d/l :husband)]
      [:option {:value "wife"} (d/l :wife)]
      [:option {:value "son"} (d/l :son)]
      [:option {:value "daughter"} (d/l :daughter)]
      [:option {:value "unknown"} (d/l :unknown)]]
     personaselector]))

(defn button-add-person-list-component
  [field-id index]
  (swap! d/state assoc-in [:gui/state :window/edit :values field-id index] {:persona/by-id nil}))

(defn multi-component
  [field]
  (let [field-id (get field 0)
        list (get-in @d/state [:gui/state :window/edit :values field-id])
        count (count list)]
    [:div (d/l :persons-household)
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

(defn update-sourceref
  [value index]
  (let [refs (get-in @d/state [:gui/state :window/edit :values :source :refs])
        ref (get refs index)
        vals (assoc ref :value value)]
    (if (= index (:index (last refs)))
      (let [new-index (count refs)
            new-refs (conj refs {:index new-index :id nil :value ""})]
        (swap! d/state assoc-in [:gui/state :window/edit :values :source :refs] new-refs)))
    (swap! d/state assoc-in [:gui/state :window/edit :values :source :refs index] vals)))

(defn sourceref-component
  [ref]
  (let [index (:index ref)
        id (:id ref)
        value (:value ref)]
    ^{:key index} [:div
                   [:input {:type      "text"
                            :value     value
                            :on-change #(update-sourceref (-> % .-target .-value) index)}]
                   [:br]]))

(defn source-component
  [id]
  (let [sources (get-in @d/state [:gui/state :window/edit :values :source :refs])]
    [:div.source
     [:div "Kilderef."]
     (map sourceref-component sources)]))

(defn event-edit-component
  []
  (let [current (get-in @d/state [:gui/state :current :selected])
        eventtype (get-in @d/state [:gui/state :window/edit :type])
        event (get-in @d/state [:gui/state :window/edit :event/by-id])
        template-type (get-in @d/state [:gui/state :window/edit :type])
        template (ffirst (d/get-id-of template-type :template/name))
        fields (d/get-template template)]
    [:div.event-edit
     [:h1 (:label template)]
     (field-generator fields)
     [:br]
     [:input {:type "button"
              :value (d/l :ok)
              :on-click #(f/save-event)}]
     [:input {:type "button"
              :value (d/l :cancel)
              :on-click #(f/set-event-edit nil nil)}]
     [:br]
     [:br]
     [source-component nil]]))

(defn event-display-component
  [fact]
  (let [label (d/l (:type fact))
        date (:date fact)
        year (date/getyear date)
        mainperson (ffirst (d/get-main-person (:event fact)))
        name (if (= mainperson (get-in @d/state [:gui/state :current :selected]))
               (:place fact)
               [:strong (d/get-name mainperson)])
        tab1 (str year " -")]
    [:tr.eventline
     [:td
      {:style {:width "47px"
               :text-align "center"}
       :on-click #(f/edit-event (:event fact))}
      year]
     [:td
      {:style {:width "100px"}
       :on-click #(f/edit-event (:event fact))}
      label]
     [:td
      {:on-click #(f/setCurrent mainperson)}
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

(defn current-selected-component []
  (let [current (get-in @d/state [:gui/state :current])
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


      [:small.main-year (birth-death-string (f/birthyear (:selected current)) (f/deathyear (:selected current)))
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
        (for [event events]
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



