(ns slekt.core
  (:require [reagent.core :as r]
            [slekt.database :as d]
            [slekt.db-functions :as f]
            [slekt.gui :as gui]
            [slekt.date :as date]))

(enable-console-print!)

(defn render-app []
  (r/render [gui/start-window]
            (js/document.getElementById "app")))

(f/setCurrent 0)
(render-app)
