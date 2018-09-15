// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('layout.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('garden.units');
/**
 * @param {...*} var_args
 */
layout.hoplon.centered = (function() { 
var layout$hoplon$centered__delegate = function (args__9824__auto__){
var vec__10352 = hoplon.core.parse_args(args__9824__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10352,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10352,(1),null);
var G__10355 = attributes;
var G__10356 = children;
var G__10357 = cljs.core.cst$kw$css;
var G__10358 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,"0 auto",cljs.core.cst$kw$max_DASH_width,"500px"], null);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__10355,G__10356,G__10357,G__10358) : hoplon.core.div.call(null,G__10355,G__10356,G__10357,G__10358));
};
var layout$hoplon$centered = function (var_args){
var args__9824__auto__ = null;
if (arguments.length > 0) {
var G__10359__i = 0, G__10359__a = new Array(arguments.length -  0);
while (G__10359__i < G__10359__a.length) {G__10359__a[G__10359__i] = arguments[G__10359__i + 0]; ++G__10359__i;}
  args__9824__auto__ = new cljs.core.IndexedSeq(G__10359__a,0,null);
} 
return layout$hoplon$centered__delegate.call(this,args__9824__auto__);};
layout$hoplon$centered.cljs$lang$maxFixedArity = 0;
layout$hoplon$centered.cljs$lang$applyTo = (function (arglist__10360){
var args__9824__auto__ = cljs.core.seq(arglist__10360);
return layout$hoplon$centered__delegate(args__9824__auto__);
});
layout$hoplon$centered.cljs$core$IFn$_invoke$arity$variadic = layout$hoplon$centered__delegate;
return layout$hoplon$centered;
})()
;
layout.hoplon.spacer_COLON_section = (function layout$hoplon$spacer_COLON_section(){
var G__10361 = cljs.core.cst$kw$css;
var G__10362 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"50px",cljs.core.cst$kw$width,"50px"], null);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__10361,G__10362) : hoplon.core.div.call(null,G__10361,G__10362));
});
