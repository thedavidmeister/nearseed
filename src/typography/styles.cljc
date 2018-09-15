(ns typography.styles
 (:require
  typography.core)
 (:refer-clojure :exclude [+ - * /]))

(def ^:screen typeset
 (let [heading (wheel.font.core/font->family-str (first font.data/fonts))
       body heading]
  (typography.core/typeset heading body)))
