// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('wheel.font.google.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wheel.font.spec');
goog.require('wheel.font.config');
goog.require('wheel.font.google.config');
goog.require('cljs.spec.alpha');
goog.require('cljs.test');
/**
 * Given a font hash map, returns a string suitable in a Google Fonts URI
 */
wheel.font.google.core.font__GT_uri_str = (function wheel$font$google$core$font__GT_uri_str(font){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$wheel$font_SLASH_font,font))){
} else {
throw (new Error("Assert failed: (spec/valid? :wheel.font/font font)"));
}

var name = cljs.core.cst$kw$wheel$font_SLASH_name.cljs$core$IFn$_invoke$arity$1(font);
var variants = cljs.core.cst$kw$wheel$font_SLASH_variants.cljs$core$IFn$_invoke$arity$1(font);
var name_uri = clojure.string.replace(name," ","+");
var variants_uri = ((cljs.core.seq(variants))?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",variants))].join(''):null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1(variants_uri)].join('');
});
/**
 * Given a sequence of fonts, returns a string suitable in a Google Fonts URI
 */
wheel.font.google.core.fonts__GT_uri_str = (function wheel$font$google$core$fonts__GT_uri_str(fonts){
if(cljs.core.sequential_QMARK_(fonts)){
} else {
throw (new Error("Assert failed: (sequential? fonts)"));
}

return clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(wheel.font.google.core.font__GT_uri_str,fonts));
});
/**
 * Given a sequence of fonts, returns the entire Google Fonts URL
 */
wheel.font.google.core.fonts__GT_url = (function wheel$font$google$core$fonts__GT_url(fonts){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.google.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.google.core.fonts__GT_uri_str(fonts))].join('');
});
wheel.font.google.core._QMARK__QMARK_font__GT_uri_str = (function wheel$font$google$core$_QMARK__QMARK_font__GT_uri_str(){
return cljs.test.test_var(wheel.font.google.core._QMARK__QMARK_font__GT_uri_str.cljs$lang$var);
});
wheel.font.google.core._QMARK__QMARK_font__GT_uri_str.cljs$lang$test = (function (){
var seq__10470 = cljs.core.seq(wheel.font.config.test_examples);
var chunk__10471 = null;
var count__10472 = (0);
var i__10473 = (0);
while(true){
if((i__10473 < count__10472)){
var vec__10474 = chunk__10471.cljs$core$IIndexed$_nth$arity$2(null,i__10473);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10474,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10474,(1),null);
try{var values__9266__auto___10482 = (new cljs.core.List(null,o,(new cljs.core.List(null,wheel.font.google.core.font__GT_uri_str(i),null,(1),null)),(2),null));
var result__9267__auto___10483 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9266__auto___10482);
if(cljs.core.truth_(result__9267__auto___10483)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__9266__auto___10482),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__9266__auto___10482),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e10477){var t__9311__auto___10484 = e10477;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__9311__auto___10484,cljs.core.cst$kw$message,null], null));
}

var G__10485 = seq__10470;
var G__10486 = chunk__10471;
var G__10487 = count__10472;
var G__10488 = (i__10473 + (1));
seq__10470 = G__10485;
chunk__10471 = G__10486;
count__10472 = G__10487;
i__10473 = G__10488;
continue;
} else {
var temp__5559__auto__ = cljs.core.seq(seq__10470);
if(temp__5559__auto__){
var seq__10470__$1 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10470__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10470__$1);
var G__10489 = cljs.core.chunk_rest(seq__10470__$1);
var G__10490 = c__4351__auto__;
var G__10491 = cljs.core.count(c__4351__auto__);
var G__10492 = (0);
seq__10470 = G__10489;
chunk__10471 = G__10490;
count__10472 = G__10491;
i__10473 = G__10492;
continue;
} else {
var vec__10478 = cljs.core.first(seq__10470__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10478,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10478,(1),null);
try{var values__9266__auto___10493 = (new cljs.core.List(null,o,(new cljs.core.List(null,wheel.font.google.core.font__GT_uri_str(i),null,(1),null)),(2),null));
var result__9267__auto___10494 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9266__auto___10493);
if(cljs.core.truth_(result__9267__auto___10494)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__9266__auto___10493),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__9266__auto___10493),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e10481){var t__9311__auto___10495 = e10481;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__9311__auto___10495,cljs.core.cst$kw$message,null], null));
}

var G__10496 = cljs.core.next(seq__10470__$1);
var G__10497 = null;
var G__10498 = (0);
var G__10499 = (0);
seq__10470 = G__10496;
chunk__10471 = G__10497;
count__10472 = G__10498;
i__10473 = G__10499;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.font.google.core._QMARK__QMARK_font__GT_uri_str.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.google.core._QMARK__QMARK_font__GT_uri_str;},cljs.core.cst$sym$wheel$font$google$core_SLASH__QMARK__QMARK_font_DASH__GT_uri_DASH_str,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$google$core,cljs.core.cst$sym$_QMARK__QMARK_font_DASH__GT_uri_DASH_str,"/home/thedavidmeister/.boot/cache/tmp/home/thedavidmeister/nearseed/hxd/50rfo7/index.html.out/wheel/font/google/core.cljc",25,1,34,34,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.google.core._QMARK__QMARK_font__GT_uri_str)?wheel.font.google.core._QMARK__QMARK_font__GT_uri_str.cljs$lang$test:null)]));
wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str = (function wheel$font$google$core$_QMARK__QMARK_fonts__GT_uri_str(){
return cljs.test.test_var(wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$var);
});
wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$test = (function (){
try{var values__9266__auto___10512 = (new cljs.core.List(null,"",(new cljs.core.List(null,wheel.font.google.core.fonts__GT_uri_str(cljs.core.PersistentVector.EMPTY),null,(1),null)),(2),null));
var result__9267__auto___10513 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9266__auto___10512);
if(cljs.core.truth_(result__9267__auto___10513)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__9266__auto___10512),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__9266__auto___10512),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e10500){var t__9311__auto___10514 = e10500;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,t__9311__auto___10514,cljs.core.cst$kw$message,null], null));
}
var vec__10501_10515 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_10516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10501_10515,(0),null);
var o_10517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10501_10515,(1),null);
try{var values__9266__auto___10518 = (new cljs.core.List(null,o_10517,(new cljs.core.List(null,wheel.font.google.core.fonts__GT_uri_str(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_10516], null)),null,(1),null)),(2),null));
var result__9267__auto___10519 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9266__auto___10518);
if(cljs.core.truth_(result__9267__auto___10519)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__9266__auto___10518),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__9266__auto___10518),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e10504){var t__9311__auto___10520 = e10504;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,t__9311__auto___10520,cljs.core.cst$kw$message,null], null));
}
var vec__10505 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10505,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10505,(1),null);
var vec__10508 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10508,(0),null);
var o_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10508,(1),null);
try{var values__9266__auto__ = (new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(o),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_SINGLEQUOTE_)].join(''),(new cljs.core.List(null,wheel.font.google.core.fonts__GT_uri_str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i_SINGLEQUOTE_], null)),null,(1),null)),(2),null));
var result__9267__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9266__auto__);
if(cljs.core.truth_(result__9267__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__9266__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__9266__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__9267__auto__;
}catch (e10511){var t__9311__auto__ = e10511;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,t__9311__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str;},cljs.core.cst$sym$wheel$font$google$core_SLASH__QMARK__QMARK_fonts_DASH__GT_uri_DASH_str,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$google$core,cljs.core.cst$sym$_QMARK__QMARK_fonts_DASH__GT_uri_DASH_str,"/home/thedavidmeister/.boot/cache/tmp/home/thedavidmeister/nearseed/hxd/50rfo7/index.html.out/wheel/font/google/core.cljc",26,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str)?wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$test:null)]));
wheel.font.google.core._QMARK__QMARK_fonts__GT_url = (function wheel$font$google$core$_QMARK__QMARK_fonts__GT_url(){
return cljs.test.test_var(wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$var);
});
wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$test = (function (){
try{var values__9266__auto___10533 = (new cljs.core.List(null,wheel.font.google.config.base_url,(new cljs.core.List(null,wheel.font.google.core.fonts__GT_url(cljs.core.PersistentVector.EMPTY),null,(1),null)),(2),null));
var result__9267__auto___10534 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9266__auto___10533);
if(cljs.core.truth_(result__9267__auto___10534)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__9266__auto___10533),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__9266__auto___10533),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e10521){var t__9311__auto___10535 = e10521;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,t__9311__auto___10535,cljs.core.cst$kw$message,null], null));
}
var vec__10522_10536 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_10537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10522_10536,(0),null);
var o_10538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10522_10536,(1),null);
try{var values__9266__auto___10539 = (new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.google.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_10538)].join(''),(new cljs.core.List(null,wheel.font.google.core.fonts__GT_url(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_10537], null)),null,(1),null)),(2),null));
var result__9267__auto___10540 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9266__auto___10539);
if(cljs.core.truth_(result__9267__auto___10540)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__9266__auto___10539),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__9266__auto___10539),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e10525){var t__9311__auto___10541 = e10525;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,t__9311__auto___10541,cljs.core.cst$kw$message,null], null));
}
var vec__10526 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10526,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10526,(1),null);
var vec__10529 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10529,(0),null);
var o_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10529,(1),null);
try{var values__9266__auto__ = (new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.google.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_SINGLEQUOTE_)].join(''),(new cljs.core.List(null,wheel.font.google.core.fonts__GT_url(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i_SINGLEQUOTE_], null)),null,(1),null)),(2),null));
var result__9267__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9266__auto__);
if(cljs.core.truth_(result__9267__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__9266__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__9266__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__9267__auto__;
}catch (e10532){var t__9311__auto__ = e10532;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,t__9311__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.google.core._QMARK__QMARK_fonts__GT_url;},cljs.core.cst$sym$wheel$font$google$core_SLASH__QMARK__QMARK_fonts_DASH__GT_url,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$google$core,cljs.core.cst$sym$_QMARK__QMARK_fonts_DASH__GT_url,"/home/thedavidmeister/.boot/cache/tmp/home/thedavidmeister/nearseed/hxd/50rfo7/index.html.out/wheel/font/google/core.cljc",22,1,48,48,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.google.core._QMARK__QMARK_fonts__GT_url)?wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$test:null)]));
