(ns slekt.gui.add-person
  (:require [slekt.database :as d]
            [slekt.events :as events]
            [slekt.db-functions :as f]))

(defn update-add
  [value key]
  (swap! d/state assoc-in [:window/add key] value))

(defn cancel
  []
  (let [main (get-in @d/state [:defaultwindow])]
    (swap! d/state assoc-in [:window/add] {:sex "m"})
    (swap! d/state assoc-in [:mainwindow] main)))

(defn button-add-person
  []
  (let [persona (get-in @d/state [:window/add])
        p2 (assoc persona :sex (keyword (:sex persona)))
        p-id (events/transact-persona p2 nil)]
    (d/set-current p-id)
    (cancel)))

(defn add-window
  []
  (let [firstname (get-in @d/state [:window/add :newfirst])
        lastname (get-in @d/state [:window/add :newlast])
        sex (get-in @d/state [:window/add :sex])]
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
              :value "Cancel"
              :on-click #(cancel)}]]))