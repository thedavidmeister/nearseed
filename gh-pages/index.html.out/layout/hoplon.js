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
var layout$hoplon$centered__delegate = function (args__9820__auto__){
var vec__10404 = hoplon.core.parse_args(args__9820__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10404,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10404,(1),null);
var G__10407 = attributes;
var G__10408 = children;
var G__10409 = cljs.core.cst$kw$css;
var G__10410 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,"0 auto",cljs.core.cst$kw$max_DASH_width,"500px"], null);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__10407,G__10408,G__10409,G__10410) : hoplon.core.div.call(null,G__10407,G__10408,G__10409,G__10410));
};
var layout$hoplon$centered = function (var_args){
var args__9820__auto__ = null;
if (arguments.length > 0) {
var G__10411__i = 0, G__10411__a = new Array(arguments.length -  0);
while (G__10411__i < G__10411__a.length) {G__10411__a[G__10411__i] = arguments[G__10411__i + 0]; ++G__10411__i;}
  args__9820__auto__ = new cljs.core.IndexedSeq(G__10411__a,0,null);
} 
return layout$hoplon$centered__delegate.call(this,args__9820__auto__);};
layout$hoplon$centered.cljs$lang$maxFixedArity = 0;
layout$hoplon$centered.cljs$lang$applyTo = (function (arglist__10412){
var args__9820__auto__ = cljs.core.seq(arglist__10412);
return layout$hoplon$centered__delegate(args__9820__auto__);
});
layout$hoplon$centered.cljs$core$IFn$_invoke$arity$variadic = layout$hoplon$centered__delegate;
return layout$hoplon$centered;
})()
;
layout.hoplon.spacer_COLON_section = (function layout$hoplon$spacer_COLON_section(){
var G__10413 = cljs.core.cst$kw$css;
var G__10414 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"50px",cljs.core.cst$kw$width,"50px"], null);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__10413,G__10414) : hoplon.core.div.call(null,G__10413,G__10414));
});
