(ns font.hoplon
 (:require
  wheel.font.google.hoplon
  font.data))

(def link
 (partial
  wheel.font.google.hoplon/link
  font.data/fonts))
