(ns slekt.gui.init
  (:require [slekt.database :as d]
            [slekt.gui.menu :as menu]
            [slekt.gui.gui :as gui]
            [slekt.gui.mainwindow :as main]))

(defn runonce
  "Initializes data at the startup, to be run after indexeddb has loaded"
  []
  (let [run (get-in @d/state [:runonce])]
    (if run
      (do
        (swap! d/state assoc-in [:defaultwindow] main/init-window)
        (d/initdb))
      nil)))

(defn start-window
  []
  (if (not= nil @d/db)
    (do
      (runonce)
      [menu/menu-bars])
    [:div "Loading indexeddb..."]))