(ns typography.core
 (:refer-clojure :exclude [+ - * /])
 (:require
  [garden.core :refer [css]]
  [garden.units :as u]
  [garden.selectors :as s]
  [garden.arithmetic :refer [+ - * /]]
  garden.stylesheet
  wheel.font.core
  font.data)
 #?(:cljs (:require-macros [garden.def :refer [defstyles]])))
#?(:clj (require '[garden.def :refer [defstyles]]))

; Adopted from https://github.com/facjure/mesh/blob/master/src/mesh/typography.cljc

(def scales
 {:minor-second (/ 16 15)
  :major-second (/ 9 8)
  :minor-third  (/ 6 5)
  :major-third  (/ 5 4)
  :perfect-fourth (/ 4 3)
  :aug-fourth (/ 1.411 1)
  :perfect-fifth (/ 3 2)
  :minor-sixth (/ 8 5)
  :golden (/ 1.61803 1)
  :major-sixth (/ 5 3)
  :minor-seventh (/ 16 9)
  :major-seventh (/ 15 8)
  :octave (/ 2 1)
  :major-tenth (/ 5 2)
  :major-eleventh (/ 8 3)
  :major-twelfth (/ 3 1)
  :double-octave (/ 4 1)})

(defn whole-number? [n]
 #?(:clj (= n (Math/floor n))
    :cljs (= n (.floor js/Math n))))

(defn modular-scale-fn [base ratio]
  (let [[up down] #?(:clj (if (ratio? ratio)
                              (if (< (denominator ratio)
                                     (numerator ratio))
                                  [* /]
                                  [/ *])
                              (if (< 1 ratio)
                                  [* /]
                                  [/ *]))
                     :cljs (if (< 1 ratio)
                               [* /]
                               [/ *]))

        f (float ratio)
        us (iterate #(up % f) base)
        ds (iterate #(down % f) base)]
    (memoize
     (fn ms [n]
       (cond
         (< 0 n) (if (whole-number? n)
                   (nth us n)
                   (let [m (Math/floor (float n))
                         [a b] [(ms m) (ms (inc m))]]
                     (+ a (* (Math/abs (- a b))
                             (- n m)))))
         (< n 0) (if (whole-number? n)
                   (nth ds (Math/abs n))
                   (let [m (Math/floor (float n))
                         [a b] [(ms m) (ms (dec m))]]
                     (+ a (* (Math/abs (- a b))
                             (- n m)))))
         :else base)))))

(def base-font-size 16)
(def base-line-height 1.2)

(s/defpseudoelement selection)

(defn at-font-face [& {:as kwargs}]
  (let [kwargs (->> (select-keys kwargs [:family :weight :style :embedded-opentype :truetype :eot :woff :svg])
                    (remove (comp nil? second))
                    (into {}))
        font-attrs (select-keys kwargs [:family :weight :style])
        srcs (select-keys kwargs [:embedded-opentype :truetype :woff :svg])
        url (garden.stylesheet/cssfn :url)
        format (garden.stylesheet/cssfn :format)]
    ["@font-face"
     {:font font-attrs}
     (when-not (empty? srcs)
       {:src (for [[fmt uri] srcs]
              [(url uri) (format (garden.util/wrap-quotes (name fmt)))])})]))

(def scale-ratio (:golden scales))

(defn font [family size weight kerning leading & options]
 {:font-family family
  :font-size (u/rem size)
  :font-weight weight
  :letter-spacing (u/rem kerning)
  :line-height (u/em leading)
  :text-align "left"
  :text-transform (get options :text-transform "none")})

(defn typeset [heading body]
 (let [scale (modular-scale-fn 1 scale-ratio)]
  [[:body :p (font body (scale 0) 300 0 (scale 1))]
   [:h1 (font heading (scale 3) 600 0 (scale 0))]
   [:h2 (font heading (scale 2) 400 0 (scale 0))]
   [:h3 (font body (scale 1) 400 0 (scale 1))]
   [:h4 (font body (scale 0) 400 0 (scale 0))]
   [:h5 :h6 (font body (scale -1) 400 0 (scale 0))]]))

(def ms
 (let [f (modular-scale-fn 18 scale-ratio)]
  (fn [n]
   (u/px (f n)))))
