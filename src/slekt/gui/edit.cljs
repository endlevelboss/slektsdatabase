(ns slekt.gui.edit
  (:require [slekt.database :as d]
            [slekt.db-functions :as f]
            [slekt.gui.select-person :as select]
            [slekt.gui.source :as source]
            [slekt.templatehandler :as th]))

(defn set-event-value
  [value path]
  (let [p (into [:window/edit :values] path)]
    (swap! d/state assoc-in p value)))

(defn button-show-persona-selector
  [field values]
  (swap! d/state assoc-in [:comp/personaselector :field] field)
  (swap! d/state assoc-in [:comp/personaselector :values] values)
  (swap! d/state assoc-in [:comp/personaselector :show] true))


(defn new-name-component
  [path]
  (let [fullpath (into [:window/edit :values] path)
        val (get-in @d/state fullpath)
        first (:newfirst val)
        last (:newlast val)
        firstpath (conj path :newfirst)
        lastpath (conj path :newlast)]
    [:div.divtable
     [:div.divrow
      [:div.divcell (str (d/l :firstname) ": ")]
      [:input.divcell {:type      "text"
                       :value     first
                       :on-change #(set-event-value (-> % .-target .-value) firstpath)}]
      ]
     [:div.divrow
      [:div.divcell (str (d/l :lastname) ": ")]

      [:input.divcell {:type      "text"
                       :value     last
                       :on-change #(set-event-value (-> % .-target .-value) lastpath)}]]]))

(defn person-display
  [values path]
  (let [fullpath (into [:window/edit :values] path)
        person-id (:persona/by-id values)
        fact-id (:db/id values)
        age (:age values)
        name (if (nil? person-id)
               [new-name-component path]
               [:strong (d/get-name person-id)])]
    [:div.person-component
     [:div.divtable
      [:div.divrow
       [:div.ee-filler]
       [:div.ee-change-button
        [:div.ee-change {:on-click #(button-show-persona-selector fullpath {:db/id fact-id})}]]
       [:div.ee-name name]]]
     [:div.divtable
      [:div.divrow
       [:div.divcell (str (d/l :age) ": ")]
       [:input.divcell {:type "text"
                        :value age
                        :on-change #(set-event-value (-> % .-target .-value) (conj path :age))}]]]]))

(defn person-component
  [field]
  (let [field-id (get field 0)

        val (get-in @d/state [:window/edit :values :roles field-id])
        label (:role val)
        ]
    (println "slekt.gui.edit:person-component")
    (println val)
    (println field)
    [:div
     [:div (str (d/l :role) ": " (d/l label))]
     [person-display val [:roles field-id]]]
    ))

(defn date-component
  [fact]
  (println "slekt.gui.edit:date-component")
  (println fact)
  (let [id (get fact 0)
        label (get-in @d/state [:window/edit :values :events id :role])
        date (get-in @d/state [:window/edit :values :events id :date])
        place (get-in @d/state [:window/edit :values :events id :place])]
    [:div.dateplace-component
     [:div.divrow
      [:strong.divcell (d/l label)]]
     [:div.divrow
      [:div.divcell (str (d/l :date) ": ")]
      [:input.divcell {:type      "text"
                       :value     date
                       :on-change #(set-event-value (-> % .-target .-value) [:events id :date])}]]
     [:div.divrow
      [:div.divcell (str (d/l :place) ": ")]
      [:input.divcell {:type      "text"
                       :value     place
                       :on-change #(set-event-value (-> % .-target .-value) [:events id :place])}]]]))

(defn person-role-selector
  [field-id index]
  (let [r (get-in @d/state [:window/edit :values :roles field-id index :grouprole])
        role (if (nil? r)
               "nil"
               r)]
    [:select {:name "test" :value role :on-change #(set-event-value (-> % .-target .-value) [:roles field-id index :grouprole])}
     [:option {:value "nil" :disabled "true"} (d/l :select)]
     [:option {:value "husband"} (d/l :husband)]
     [:option {:value "wife"} (d/l :wife)]
     [:option {:value "son"} (d/l :son)]
     [:option {:value "daughter"} (d/l :daughter)]
     [:option {:value "unknown"} (d/l :unknown)]]))

(defn person-list-component
  [listelement field-id]
  (let [index (get listelement 0)
        val (get-in @d/state [:window/edit :values :roles field-id index])]
    (println "slekt.gui.edit:person-list-component")
    (println listelement)
    (println index)
    (println val)
    [:div
     [person-role-selector field-id index]
     [person-display val [:roles field-id index]]]
    ))

(defn button-add-person-list-component
  [index]
  (swap! d/state assoc-in [:window/edit :values :roles index] {:persona/by-id nil}))

(defn multi-component
  [field]
  (println "slekt.gui.edit:multi-component")
  (println field)
  (let [field-id (get field 0)
        list (get-in @d/state [:window/edit :values :roles field-id])
        count (count list)]
    (println list)
    [:div (d/l :persons-household)
     (for [l list]
       ^{:key (get l 0)} [person-list-component l field-id])
     [:input {:type "button"
              :value "+"
              :on-click #(button-add-person-list-component  count)}]]))

(defn person-generator
  [persons]
  (for [person persons]
    (let [id (get person 0)]
      ^{:key id} [person-component person]
      )))

(defn event-generator
  [events]
  (for [event events]
    (let [id (get event 0)]
      ^{:key id} [date-component event]
      )))

(defn event-edit-component
  []
  (let [current (get-in @d/state [:current :selected])
        eventtype (get-in @d/state [:window/edit :type])
        event (get-in @d/state [:window/edit :event/by-id])
        personaselector (if (get-in @d/state [:comp/personaselector :show])
                          [select/persona-selector]
                          nil)
        persons (get-in @d/state [:window/edit :values :roles])
        events (get-in @d/state [:window/edit :values :events])
        count (count persons)
        ]
    ;(println template)
    [:div.event-edit
     [:h2 (d/l eventtype)]
     [:div
      (person-generator persons)
      [:input {:type "button"
               :value "+"
               :on-click #(button-add-person-list-component count)}]
      (event-generator events)]
     [:br]
     [:input {:type "button"
              :value (d/l :button-ok)
              :on-click #(f/save-event)}]
     [:input {:type "button"
              :value (d/l :button-cancel)
              :on-click #(f/set-event-edit nil)}]
     [:br]
     [:br]
     [source/source-component nil]
     personaselector]))