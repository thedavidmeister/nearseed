// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('typography.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
/**
 * @param {...*} var_args
 */
typography.hoplon.highlight = (function() { 
var typography$hoplon$highlight__delegate = function (args__9820__auto__){
var vec__10678 = hoplon.core.parse_args(args__9820__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10678,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10678,(1),null);
var G__10681 = cljs.core.cst$kw$typography$hoplon_SLASH_class;
var G__10682 = "highlight";
var G__10683 = attributes;
var G__10684 = children;
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$4(G__10681,G__10682,G__10683,G__10684) : hoplon.core.span.call(null,G__10681,G__10682,G__10683,G__10684));
};
var typography$hoplon$highlight = function (var_args){
var args__9820__auto__ = null;
if (arguments.length > 0) {
var G__10685__i = 0, G__10685__a = new Array(arguments.length -  0);
while (G__10685__i < G__10685__a.length) {G__10685__a[G__10685__i] = arguments[G__10685__i + 0]; ++G__10685__i;}
  args__9820__auto__ = new cljs.core.IndexedSeq(G__10685__a,0,null);
} 
return typography$hoplon$highlight__delegate.call(this,args__9820__auto__);};
typography$hoplon$highlight.cljs$lang$maxFixedArity = 0;
typography$hoplon$highlight.cljs$lang$applyTo = (function (arglist__10686){
var args__9820__auto__ = cljs.core.seq(arglist__10686);
return typography$hoplon$highlight__delegate(args__9820__auto__);
});
typography$hoplon$highlight.cljs$core$IFn$_invoke$arity$variadic = typography$hoplon$highlight__delegate;
return typography$hoplon$highlight;
})()
;
