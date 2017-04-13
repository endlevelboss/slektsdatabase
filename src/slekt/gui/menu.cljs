(ns slekt.gui.menu
  (:require [slekt.database :as d]
            [slekt.gui.gui :as gui]
            [slekt.gui.add-person :as add]
            [slekt.gui.mainwindow :as main]
            [slekt.gui.persona :as persona]))

(defn select-view
  [view func]
  (swap! d/state assoc-in [:mainwindow] view)
  (if (nil? func)
    nil
    (func))
  )

(defn asserts
  []
  (let [sel (get-in @d/state [:current :selected])
        ass (ffirst (d/get-asserts sel))]
    (swap! d/state assoc-in [:window/persona :assert] ass)))

(defn menu-bars []
  (let [mainwindow (get-in @d/state [:mainwindow])]
    [:div.firstdiv
     [:div.leftbar]
     [:div.topbar]
     [:div.addperson-button
      {:on-click #(select-view add/add-window nil)}
      "a"]
     [:div.mainview-button
      {:on-click #(select-view main/init-window nil)}
      "m"]
     [:div.personaview-button
      {:on-click #(select-view persona/persona-view asserts)}
      "p"]
     [mainwindow]
     ]))