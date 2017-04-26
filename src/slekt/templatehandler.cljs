(ns slekt.templatehandler
  (:require [slekt.database :as d]))

(defn reindex-events
  ([roles events]
    (reindex-events {} events (count roles)))
  ([result events rolecount]
   (if (empty? events)
     result
     (let [kv (first events)
           index (+ rolecount (get kv 0))
           value (get kv 1)]
       (recur (assoc result index value) (rest events) rolecount)))))

(defn get-roles
  [template-name]
  (let [evt-template (ffirst (d/get-id-of template-name :eventtemplate/name))
        t-type (ffirst (d/get-value-of evt-template :eventtemplate/template-type))
        rel-templ (ffirst (d/get-id-of t-type :template/name))
        roles (ffirst (d/get-value-of rel-templ :template/roles))
        ]
    roles))

(defn get-template
  [template-name]
  (let [evt-template (ffirst (d/get-id-of template-name :eventtemplate/name))
        name (ffirst (d/get-value-of evt-template :eventtemplate/name))
        events (ffirst (d/get-value-of evt-template :eventtemplate/events))
        roles (get-roles template-name)
        ]
    {:roles roles :events events}))

