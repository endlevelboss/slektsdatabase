(ns slekt.gui.add-person
  (:require [slekt.database :as d]
            [slekt.events :as events]
            [slekt.db-functions :as f]))

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
    [:div.display
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