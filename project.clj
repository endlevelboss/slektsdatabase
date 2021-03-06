(defproject slekt "0.1.0-SNAPSHOT"
  :description "The ultimate genealogy software"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [reagent "0.6.0"]
                 [cljs-idxdb "0.1.0"]
                 [datascript "0.15.5"]
                 [datascript-transit "0.2.2"]
                 ;[figwheel-sidecar "0.5.0-SNAPSHOT" :scope "test"]
                 ]
  :plugins [[lein-figwheel "0.5.8"]]
  :clean-targets ^{:protect false} [:target-path "out" "resources/public/cljs"]
  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main "slekt.core"
                                   :asset-path "cljs/out"
                                   :output-to "resources/public/cljs/main.js"
                                   :output-dir "resources/public/cljs/out"}}]}
  :figwheel {
             :css-dirs ["resources/public/css"]
             }
  )

