(ns slekt.gui.select-person
  (:require [slekt.database :as d]
            [slekt.db-functions :as f]
            [slekt.gui.utilities :as u]))

(defn change-person
  [id sex]
  (let [on-complete (get-in @d/state [:comp/personaselector :on-complete])
        path (get-in @d/state [:comp/personaselector :field])
        values (get-in @d/state [:comp/personaselector :values])
        s (if (nil? id)
            sex
            (ffirst (d/find-sex-of-person id)))
        vals (conj values {:persona/by-id id
                           :sex s
                           :value nil})]
    (swap! d/state assoc-in [:comp/personaselector :show] false)
    (swap! d/state assoc-in path vals)
    (if (nil? on-complete)
      nil
      (on-complete))))

(defn change-person-cancel
  []
  (swap! d/state assoc-in [:comp/personaselector :show] false))

(defn person-select
  [id]
  (if (nil? id)
    nil
    (let [name (d/get-name id)
          birth (f/birthyear id)
          death (f/deathyear id)]
      [:div
       {:on-click #(change-person id nil )}
       name
       " "
       id
       " "
       [:small (u/birth-death-string birth death)]])))

(defn persona-selector
  []
  (let [personas-id (d/persona-list)]
    [:div.all.persona-selector
     (for [pid personas-id]
       ^{:key pid}[person-select pid])
     [:input {:type "button"
              :value "New male"
              :on-click #(change-person nil :m )}]
     [:input {:type "button"
              :value "New female"
              :on-click #(change-person nil :f )}]
     [:input {:type "button"
              :value "Cancel"
              :on-click #(change-person-cancel)}]]))