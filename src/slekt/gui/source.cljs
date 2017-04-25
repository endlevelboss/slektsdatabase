(ns slekt.gui.source
  (:require [slekt.database :as d]))

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