(ns slekt.gui.menu
  (:require [slekt.database :as d]
            [slekt.gui.gui :as gui]
            [slekt.gui.add-person :as add]
            [slekt.gui.mainwindow :as main]
            [slekt.gui.persona :as persona]))

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

(defn menu-bars []
  (let [mainwindow (get-in @d/state [:mainwindow])]
    [:div.firstdiv
     [:div.leftbar]
     [:div.topbar]
     [:div.addperson-button
      {:on-click #(select-view add/add-window nil nil)}
      "a"]
     [:div.mainview-button
      {:on-click #(select-view main/init-window nil nil)}
      "m"]
     [:div.personaview-button
      {:on-click #(select-view persona/persona-view persona/init-persona persona/exit-persona)}
      "p"]
     [mainwindow]
     ]))