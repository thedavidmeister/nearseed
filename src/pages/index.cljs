(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  font.hoplon))

(h/html
 (h/head
  (font.hoplon/link)
  (wheel.stylesheet.hoplon/link "main.css"))
 (h/body
  "HI"))
