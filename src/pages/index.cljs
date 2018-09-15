(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  font.hoplon
  logo.hoplon
  typography.hoplon
  value-prop.hoplon
  layout.hoplon
  color.data))

(h/html
 (h/head
  (wheel.stylesheet.hoplon/link "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css")
  (font.hoplon/link)
  (wheel.stylesheet.hoplon/link "main.css"))
 (h/body
  :css {:background-color color.data/background}
  (layout.hoplon/centered
   (h/div
    :css {:background-color color.data/white
          :padding "0 20px"}
    (layout.hoplon/spacer:section)
    (value-prop.hoplon/value-prop)
    (layout.hoplon/spacer:section)))))
