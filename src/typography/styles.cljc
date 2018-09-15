(ns typography.styles
 (:require
  typography.data
  typography.core
  [garden.units :as u])
 (:refer-clojure :exclude [+ - * /]))

(def ^:screen typeset
 (let [heading (wheel.font.core/font->family-str (first font.data/fonts))
       body heading]
  [
   (typography.core/typeset
    heading
    body)]))

(def ^:screen highlight
 [:.highlight
  {:background-color :yellow
   :font-weight 400}])
