(ns slekt.gui.select-person
  (:require [slekt.database :as d]
            [slekt.db-functions :as f]
            [slekt.gui.utilities :as u]))

(defn change-person
  [id sex]
  (let [path (get-in @d/state [:comp/personaselector :field])
        ildpath (into [:window/edit :values] nil)
        s (if (nil? id)
            sex
            (ffirst (d/find-sex-of-person id)))]
    (swap! d/state assoc-in [:comp/personaselector :show] false)
    (swap! d/state assoc-in path {:persona/by-id id
                                  :sex s
                                  :value nil})))

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
       {:on-click #(change-person id nil)}
       name
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
              :on-click #(change-person nil :m)}]
     [:input {:type "button"
              :value "New female"
              :on-click #(change-person nil :f)}]
     [:input {:type "button"
              :value "Cancel"
              :on-click #(change-person-cancel)}]]))