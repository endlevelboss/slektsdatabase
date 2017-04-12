(ns slekt.gui.menu
  (:require [slekt.database :as d]
            [slekt.gui.gui :as gui]
            [slekt.gui.add-person :as add]
            [slekt.gui.mainwindow :as main]
            [slekt.gui.persona :as persona]))

(defn select-view
  [view]
  (swap! d/state assoc-in [:mainwindow] view)
  ;(swap! d/state assoc-in [:mainwindow] add/add-window)
  )

(defn menu-bars []
  (let [mainwindow (get-in @d/state [:mainwindow])]
    [:div.firstdiv
     [:div.leftbar]
     [:div.topbar]
     [:div.addperson-button
      {:on-click #(select-view add/add-window)}
      "a"]
     [:div.mainview-button
      {:on-click #(select-view main/init-window)}
      "m"]
     [:div.personaview-button
      {:on-click #(select-view persona/persona-view)}
      "p"]
     [mainwindow]
     ]))