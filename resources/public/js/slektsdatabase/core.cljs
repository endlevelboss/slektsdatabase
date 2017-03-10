(ns slektsdatabase.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(def state (atom {:nodes
                  [{:id 0 :template :nametemplate :firstname "Lars" :lastname "Oppholdsstuen" :born "1703"}
                   {:id 1 :template :nametemplate :firstname "Laila" :lastname "Bakstikkstuen" :born "1880"}]
                  :templates {:nametemplate {:name "Navn" :born "Foedselsaar"}}}))

(defn read [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defui NameDisplay
  static om/IQuery
  (query [this]
         [:nodes :templates])
  Object
  (render [this]
          (dom/div nil "Starting up")))

(def reconciler
  (om/reconciler
    {:state state
     :parser (om/parser {:read read})}))

(om/add-root! reconciler
              NameDisplay
              (gdom/getElement "app"))
