(ns slekt.gui.edit
  (:require [slekt.database :as d]
            [slekt.db-functions :as f]
            [slekt.gui.select-person :as select]
            [slekt.gui.source :as source]))

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
    [:div.divtable
     [:div.divrow
      [:div.divcell (str (d/l :firstname) ": ")]
      [:input.divcell {:type      "text"
                       :value     first
                       :on-change #(f/set-event-edit-field (-> % .-target .-value) id :newfirst)}]
      ]
     [:div.divrow
      [:div.divcell (str (d/l :lastname) ": ")]

      [:input.divcell {:type      "text"
                           :value     last
                           :on-change #(f/set-event-edit-field (-> % .-target .-value) id :newlast)}]]]))

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
        age (:age val)
        name (if (nil? pid)
               [new-name-component id]
               [:strong (d/get-name pid)])]
    [:div.person-component
     [:div.divtable
      [:div.divrow
       [:div.ee-filler]
       [:div.ee-change-button
        [:div.ee-change {:on-click #(button-show-persona-selector [:window/edit :values id] {:db/id dbid})}]]
       [:div.ee-name name]
       [:div.ee-label (str "rolle/fixme: " label)]]]
     [:div.divtable
      [:div.divrow
       [:div.divcell "Alder: "]
       [:input.divcell {:type      "text"
                        :value     age
                        :on-change #(f/set-event-edit-field (-> % .-target .-value) id :age)}]
       ]]
     ]))

(defn date-component
  [field]
  (let [id (get field 0)
        label (d/l (get (get field 1) 2))
        date (get-in @d/state [:window/edit :values id :date])
        place (get-in @d/state [:window/edit :values id :place])]
    [:div.dateplace-component
     [:div.divrow
      [:strong.divcell label]]
     [:div.divrow
      [:div.divcell (str "dato/fixme" ": ")]
      [:input.divcell {:type      "text"
                       :value     date
                       :on-change #(f/set-event-edit-field (-> % .-target .-value) id :date)}]]
     [:div.divrow
      [:div.divcell (str (d/l :place) ": ")]
      [:input.divcell {:type      "text"
                        :value     place
                        :on-change #(f/set-event-edit-field (-> % .-target .-value) id :place)}]]]))

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
     [:h2 template-type]
     [:div
      (field-generator fields)]
     [:br]
     [:input {:type "button"
              :value (d/l :ok)
              :on-click #(f/save-event)}]
     [:input {:type "button"
              :value (d/l :cancel)
              :on-click #(f/set-event-edit nil nil)}]
     [:br]
     [:br]
     [source/source-component nil]
     personaselector]))