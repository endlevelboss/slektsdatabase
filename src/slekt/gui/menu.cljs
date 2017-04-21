(ns slekt.gui.menu
  (:require [slekt.database :as d]
            [slekt.gui.add-person :as add]
            [slekt.gui.mainwindow :as main]
            [slekt.gui.persona :as persona]
            [slekt.gui.select-person :as sel]
            [slekt.gui.ancestors :as ancestors]))

(defn select-view
  [view initfunction exitfunction]
  (let [exit (:mainwindow-exit @d/state)]
    (if (nil? exit)
      nil
      (exit)))
  (swap! d/state assoc-in [:mainwindow] view)
  (swap! d/state assoc-in [:mainwindow-exit] exitfunction)
  (if (nil? initfunction)
    nil
    (initfunction))
  )

(defn on-select-person-complete
  []
  (let [p (get-in @d/state [:menu/values :persona/by-id])]
    (if (nil? p)
      nil
      (d/set-current p))
    (select-view main/init-window nil nil)))

(defn select-person
  []
  (swap! d/state assoc-in [:comp/personaselector :on-complete] on-select-person-complete)
  (swap! d/state assoc-in [:comp/personaselector :field] [:menu/values])
  (select-view sel/persona-selector nil nil))


(defn menu-bars []
  (let [mainwindow (get-in @d/state [:mainwindow])]
    [:div.firstdiv
     [:div.leftbar]
     [:div.topbar]
     [:div.selectperson-button
      {:on-click #(select-person)}
      "s"]
     [:div.addperson-button
      {:on-click #(select-view add/add-window nil nil)}
      "a"]
     [:div.mainview-button
      {:on-click #(select-view main/init-window nil nil)}
      "m"]
     [:div.personaview-button
      {:on-click #(select-view persona/persona-view persona/init-persona persona/exit-persona)}
      "p"]
     [:div.ancestry-button
      {:on-click #(select-view ancestors/mainwindow nil nil)}
      "g"]
     [mainwindow]
     ]))