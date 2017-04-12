(ns slekt.gui.menu
  (:require [slekt.database :as d]
            [slekt.gui.gui :as gui]
            [slekt.gui.add-person :as add]))

(defn select-view
  [view]
  (swap! d/state assoc-in [:mainwindow] view)
  ;(swap! d/state assoc-in [:mainwindow] add/add-window)
  )

(defn menu-bars []
  (let [show-add-window (get-in @d/state [:gui/state :window/add :show])
        mainwindow (get-in @d/state [:mainwindow])]
    [:div.firstdiv
     [:div.leftbar]
     [:div.topbar]
     [:div.mainview-button
      {:on-click #(select-view gui/init-window)}
      "m"]
     [:div.personaview-button
      {:on-click #(select-view gui/init-window)}
      "p"]
     [mainwindow]
     ;(if show-add-window
     ;  [add-window]
     ;  [init-window])
     ]))