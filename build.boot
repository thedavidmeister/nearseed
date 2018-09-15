(def project 'thedavidmeister/nearseed)
(def version "0.0.1")
(def description "")
(def github-url "https://github.com/thedavidmeister/nearseed")

(set-env!
 :source-paths #{"src"}
 :dependencies
 '[; scaffolding...
   [org.clojure/clojure "1.10.0-alpha8"]
   [org.clojure/clojurescript "1.10.339"]
   [hoplon/hoplon "7.3.0-SNAPSHOT"]
   [hoplon/javelin "3.9.0"]
   [pandeiro/boot-http "0.8.3"]
   [adzerk/boot-reload "0.5.1"]
   [adzerk/boot-cljs "2.1.4"]
   [tailrecursion/boot-jetty  "0.1.3"]
   [thedavidmeister/boot-github-pages "0.1.0-SNAPSHOT"]
   [crisptrutski/boot-cljs-test "0.3.5-SNAPSHOT"]
   [adzerk/bootlaces "0.1.13"]
   [com.taoensso/timbre "4.10.0"]

   ; transitive deps...
   [doo "0.1.8"]

   ; everything else...
   [thedavidmeister/hoplon-elem-lib "0.2.0"]
   [thedavidmeister/wheel "0.3.6"]])

(task-options!
 pom {:project project
      :version version
      :description description
      :url github-url
      :scm {:url github-url}})

(require
 '[adzerk.boot-cljs :refer [cljs]]
 '[hoplon.boot-hoplon :refer [hoplon prerender]]
 '[tailrecursion.boot-jetty :refer [serve]]
 '[thedavidmeister.boot-github-pages :refer [github-pages]]
 '[crisptrutski.boot-cljs-test :refer [test-cljs]]
 '[adzerk.bootlaces :refer :all])

(bootlaces! version)

(def compiler-options
 {})

(deftask front-dev
 "Build for local development."
 []
 (comp
  (watch)
  (speak)
  (hoplon)
  (cljs :compiler-options compiler-options)
  (serve :port 8000)))

(deftask build
 []
 (comp
  (hoplon)
  (cljs
   :optimizations :advanced
   :compiler-options compiler-options)))

(deftask deploy-gh-pages
 []
 (comp
  (build)
  (target
   :dir #{"gh-pages"})
  (github-pages)))

(deftask deploy
 []
 (comp
  (deploy-gh-pages)))
