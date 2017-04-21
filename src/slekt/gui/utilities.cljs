(ns slekt.gui.utilities
  (:require [slekt.database :as d]))

(defn birth-death-string2
  [birthyear deathyear]
  (str "(" birthyear " - " deathyear ")"))

(defn asserted-personas
  [assert]
  (let [selected (get-in @d/state [:current :selected])]
    (remove #(= selected %) (if (nil? assert)
                              []
                              (flatten (into [] (d/get-id-of assert :persona/assert)))))))