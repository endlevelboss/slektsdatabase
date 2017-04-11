(ns slekt.gui.menu
  (:require [slekt.database :as d]
            [slekt.gui.gui :as gui]))

(defn show-main
  []
  (swap! d/state assoc-in [:mainwindow] gui/init-window))

(defn menu-bars []
  (let [show-add-window (get-in @d/state [:gui/state :window/add :show])
        mainwindow (get-in @d/state [:mainwindow])]
    [:div.firstdiv
     [:div.leftbar]
     [:div.topbar]
     [:div.mainview-button
      {:on-click #(show-main)}
      "m"]
     [mainwindow]
     ;(if show-add-window
     ;  [add-window]
     ;  [init-window])
     ]))