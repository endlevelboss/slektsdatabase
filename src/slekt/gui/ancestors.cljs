(ns slekt.gui.ancestors
  (:require [slekt.database :as d]
            [slekt.gui.utilities :as u]
            [slekt.db-functions :as f]))

(defn select-person
  [id]
  ;(println id)
  (if (nil? id)
    nil
    (d/set-current id))
  false)

(defn person
  [id top left generation]
  (let [nameparts (if (nil? id)
                    nil
                    (ffirst (d/get-name-parts id)))
        father (if (nil? id)
                 nil
                 (first (d/find-parent :father id)))
        mother (if (nil? id)
                 nil
                 (first (d/find-parent :mother id)))
        adjustleft 240
        a-top (/ top 2)
        adjusttop (if (neg? a-top)
                    (- a-top)
                    a-top)]
    [:div {:style {:position "absolute"
                   :top top
                   :left left}}
     [:div.ancestor-box {:on-click (fn [e]
                                     (.stopPropagation e)
                                     (select-person id))}
      [:div {:style {:position "absolute" :top "2px" :left "4px"}}
       [:strong (get nameparts 0)]
       " "
       [:strong (get nameparts 1)]]
      (if id
        [:small {:style {:position "absolute" :top "20px" :left "9px"}}
         (ffirst (d/get-value-of id :persona/lifespan))])]
     (if (< generation 4)
       [:div
        [person father (- 0 adjusttop) 240 (inc generation)]
        [person mother (+ 0 adjusttop) 240 (inc generation)]]
       (if (or father mother)
         [:div.ancestor-continue {:style {:left 240
                                          :top  8}}]))]))

(defn mainwindow
  []
  (let [sel (get-in @d/state [:current :selected])]
    [:div.display.ancestormain
     [person sel 350 20 0]]))