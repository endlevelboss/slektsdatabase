(ns slekt.gui.gui
    (:require [reagent.core :as r]
              [slekt.database :as d]
              [slekt.db-functions :as f]
              [slekt.date :as date]
              [slekt.events :as events]
              [slekt.gui.utilities :as u]
              [slekt.gui.select-person :as select]))

(enable-console-print!)

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

(defn button-show-persona-selector
  [field values]
  (swap! d/state assoc-in [:comp/personaselector :field] field)
  (swap! d/state assoc-in [:comp/personaselector :values] values)
  (swap! d/state assoc-in [:comp/personaselector :show] true))

(defn new-name-component
  [id]
  (let [val (get-in @d/state [:window/edit :values id])
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
        val (get-in @d/state [:window/edit :values id])
        value (:value val)
        dbid (:db/id val)
        pid (:persona/by-id val)
        firstname (:newfirst val)
        lastname (:newlast val)
        name (if (nil? pid)
               [new-name-component id]
               (d/get-name pid))]
    [:div.person-component
     [:div.ee-label label]
     [:div.ee-name name]
     [:input.ee-change
      {:type     "button"
       :value    "Change person"
       :on-click #(button-show-persona-selector [:window/edit :values id] {:db/id dbid})}]
     ]))

(defn date-component
  [field]
  (let [id (get field 0)
        label (d/l (get (get field 1) 2))
        date (get-in @d/state [:window/edit :values id :date])
        place (get-in @d/state [:window/edit :values id :place])]
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
  (swap! d/state assoc-in [:window/edit :values field-id index key] value))

(defn person-list-component
  [listelement field-id]
  (let [index (get listelement 0)
        p-id (:persona/by-id (get listelement 1))
        val (get-in @d/state [:window/edit :values field-id index])
        dbid (:db/id val)
        firstname (:newfirst val)
        lastname (:newlast val)

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
        r (get-in @d/state [:window/edit :values field-id index :grouprole])
        role (if (nil? r)
               "nil"
               r)]
    [:div.person-component
     [:div.ee-label (+ 1 index)]
     [:div.ee-name name]
     [:input.ee-change {:type     "button"
              :value    "Change person"
              :on-click #(button-show-persona-selector [:window/edit :values field-id index] {:db/id dbid})}]
     [:select.ee-role {:name "test" :value role :on-change #(set-list-value (-> % .-target .-value) field-id index :grouprole)}
      [:option {:value "nil" :disabled "true"} (d/l :select)]
      [:option {:value "husband"} (d/l :husband)]
      [:option {:value "wife"} (d/l :wife)]
      [:option {:value "son"} (d/l :son)]
      [:option {:value "daughter"} (d/l :daughter)]
      [:option {:value "unknown"} (d/l :unknown)]]
     ]))

(defn button-add-person-list-component
  [field-id index]
  (swap! d/state assoc-in [:window/edit :values field-id index] {:persona/by-id nil}))

(defn multi-component
  [field]
  (let [field-id (get field 0)
        list (get-in @d/state [:window/edit :values field-id])
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
  (let [refs (get-in @d/state [:window/edit :values :source :refs])
        ref (get refs index)
        vals (assoc ref :value value)]
    (if (= index (:index (last refs)))
      (let [new-index (count refs)
            new-refs (conj refs {:index new-index :id nil :value ""})]
        (swap! d/state assoc-in [:window/edit :values :source :refs] new-refs)))
    (swap! d/state assoc-in [:window/edit :values :source :refs index] vals)))

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
  (let [sources (get-in @d/state [:window/edit :values :source :refs])]
    [:div.source
     [:div "Kilderef."]
     (map sourceref-component sources)]))

(defn event-edit-component
  []
  (let [current (get-in @d/state [:current :selected])
        eventtype (get-in @d/state [:window/edit :type])
        event (get-in @d/state [:window/edit :event/by-id])
        template-type (get-in @d/state [:window/edit :type])
        template (ffirst (d/get-id-of template-type :template/name))
        fields (d/get-template template)
        personaselector (if (get-in @d/state [:comp/personaselector :show])
                          [select/persona-selector]
                          nil)]
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
     [source-component nil]
     personaselector]))

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


