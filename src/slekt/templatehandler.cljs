(ns slekt.templatehandler
  (:require [slekt.database :as d]))

(defn get-template
  [template-name]
  (let [reltypes (ffirst (d/get-id-of template-name :eventtemplate/name))]
    (println reltypes))

  template-name)
