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
        v {:persona/by-id id
           :sex s
           :value nil}
        vals (if (nil? values)
               v
               (conj values v))]
    ;(println (str "change-person:path: " path))
    ;(println (str "change-person:vals: " vals))
    ;(println (str "change-person:values: " values))
    ;(println values)
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
    (let [nameparts (ffirst (d/get-name-parts id))
          firstname (get nameparts 0)
          lastname (get nameparts 1)
          lifespan (ffirst (d/get-value-of id :persona/lifespan))]
      [:div.ps-item
       {:on-click #(change-person id nil )}
       [:div.ps-id id]
       [:div.ps-firstname firstname]
       [:div.ps-lastname lastname]
       [:small.ps-lifespan lifespan]])))


(defn persona-selector
  []
  (let [personas-id (d/persona-list)]
    [:div.all.persona-selector
     [:div.ps-table
      [:div.ps-item
       [:div.ps-id "ID:"]
       [:div.ps-firstname "Fornavn:"]
       [:div.ps-lastname "Etternavn:"]
       [:div.ps-lifespan "Levetid"]]
      (for [pid personas-id]
        ^{:key pid} [person-select pid])]
     [:input {:type "button"
              :value "New male"
              :on-click #(change-person nil :m )}]
     [:input {:type "button"
              :value "New female"
              :on-click #(change-person nil :f )}]
     [:input {:type "button"
              :value "Cancel"
              :on-click #(change-person-cancel)}]]))