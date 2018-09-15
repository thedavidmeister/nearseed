// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('wheel.font.google.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('wheel.stylesheet.hoplon');
goog.require('wheel.font.google.core');
/**
 * Given a sequence of fonts returns the stylesheet link to Google Fonts
 */
wheel.font.google.hoplon.link = (function wheel$font$google$hoplon$link(fonts){
return wheel.stylesheet.hoplon.link(wheel.font.google.core.fonts__GT_url(fonts));
});
