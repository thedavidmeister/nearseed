// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('wheel.font.spec');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wheel.font.config');
goog.require('cljs.spec.alpha');
goog.require('cljs.test');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$wheel$font_SLASH_name,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$wheel$font_SLASH_variants,cljs.core.cst$sym$cljs$core_SLASH_sequential_QMARK_,cljs.core.sequential_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$wheel$font_SLASH_fallback,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wheel$font_SLASH_name], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wheel$font_SLASH_variants,cljs.core.cst$kw$wheel$font_SLASH_fallback], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__10367){
return cljs.core.map_QMARK_(G__10367);
}),(function (G__10367){
return cljs.core.contains_QMARK_(G__10367,cljs.core.cst$kw$wheel$font_SLASH_name);
})], null),(function (G__10367){
return ((cljs.core.map_QMARK_(G__10367)) && (cljs.core.contains_QMARK_(G__10367,cljs.core.cst$kw$wheel$font_SLASH_name)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wheel$font_SLASH_variants,cljs.core.cst$kw$wheel$font_SLASH_fallback], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wheel$font_SLASH_name], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wheel$font_SLASH_name], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wheel$font_SLASH_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wheel$font_SLASH_variants,cljs.core.cst$kw$wheel$font_SLASH_fallback], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$wheel$font_SLASH_name))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wheel$font_SLASH_variants,cljs.core.cst$kw$wheel$font_SLASH_fallback], null)])));
wheel.font.spec._QMARK__QMARK_spec = (function wheel$font$spec$_QMARK__QMARK_spec(){
return cljs.test.test_var(wheel.font.spec._QMARK__QMARK_spec.cljs$lang$var);
});
wheel.font.spec._QMARK__QMARK_spec.cljs$lang$test = (function (){
var seq__10368 = cljs.core.seq(wheel.font.config.test_examples);
var chunk__10369 = null;
var count__10370 = (0);
var i__10371 = (0);
while(true){
if((i__10371 < count__10370)){
var vec__10372 = chunk__10369.cljs$core$IIndexed$_nth$arity$2(null,i__10371);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10372,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10372,(1),null);
try{var values__9270__auto___10384 = (new cljs.core.List(null,cljs.core.cst$kw$wheel$font_SLASH_font,(new cljs.core.List(null,i,null,(1),null)),(2),null));
var result__9271__auto___10385 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.valid_QMARK_,values__9270__auto___10384);
if(cljs.core.truth_(result__9271__auto___10385)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.cst$sym$i),cljs.core.cst$kw$actual,cljs.core.cons(cljs.spec.alpha.valid_QMARK_,values__9270__auto___10384),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.cst$sym$i),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,values__9270__auto___10384),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e10375){var t__9315__auto___10386 = e10375;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.cst$sym$i),cljs.core.cst$kw$actual,t__9315__auto___10386,cljs.core.cst$kw$message,null], null));
}
try{var values__9270__auto___10387 = (new cljs.core.List(null,cljs.core.cst$kw$wheel$font_SLASH_font,(new cljs.core.List(null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wheel$font_SLASH_fallback,"baz"], null)], 0)),null,(1),null)),(2),null));
var result__9271__auto___10388 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.valid_QMARK_,values__9270__auto___10387);
if(cljs.core.truth_(result__9271__auto___10388)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wheel$font_SLASH_fallback,"baz"], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.spec.alpha.valid_QMARK_,values__9270__auto___10387),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wheel$font_SLASH_fallback,"baz"], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,values__9270__auto___10387),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e10376){var t__9315__auto___10389 = e10376;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wheel$font_SLASH_fallback,"baz"], null))),cljs.core.cst$kw$actual,t__9315__auto___10389,cljs.core.cst$kw$message,null], null));
}
try{var values__9270__auto___10390 = (new cljs.core.List(null,cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(i,cljs.core.cst$kw$wheel$font_SLASH_name)),null,(1),null));
var result__9271__auto___10391 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9270__auto___10390);
if(cljs.core.truth_(result__9271__auto___10391)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.cst$sym$i,cljs.core.cst$kw$wheel$font_SLASH_name))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__9270__auto___10390),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.cst$sym$i,cljs.core.cst$kw$wheel$font_SLASH_name))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$not,values__9270__auto___10390),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e10377){var t__9315__auto___10392 = e10377;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.cst$sym$i,cljs.core.cst$kw$wheel$font_SLASH_name))),cljs.core.cst$kw$actual,t__9315__auto___10392,cljs.core.cst$kw$message,null], null));
}

var G__10393 = seq__10368;
var G__10394 = chunk__10369;
var G__10395 = count__10370;
var G__10396 = (i__10371 + (1));
seq__10368 = G__10393;
chunk__10369 = G__10394;
count__10370 = G__10395;
i__10371 = G__10396;
continue;
} else {
var temp__5559__auto__ = cljs.core.seq(seq__10368);
if(temp__5559__auto__){
var seq__10368__$1 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10368__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10368__$1);
var G__10397 = cljs.core.chunk_rest(seq__10368__$1);
var G__10398 = c__4351__auto__;
var G__10399 = cljs.core.count(c__4351__auto__);
var G__10400 = (0);
seq__10368 = G__10397;
chunk__10369 = G__10398;
count__10370 = G__10399;
i__10371 = G__10400;
continue;
} else {
var vec__10378 = cljs.core.first(seq__10368__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10378,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10378,(1),null);
try{var values__9270__auto___10401 = (new cljs.core.List(null,cljs.core.cst$kw$wheel$font_SLASH_font,(new cljs.core.List(null,i,null,(1),null)),(2),null));
var result__9271__auto___10402 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.valid_QMARK_,values__9270__auto___10401);
if(cljs.core.truth_(result__9271__auto___10402)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.cst$sym$i),cljs.core.cst$kw$actual,cljs.core.cons(cljs.spec.alpha.valid_QMARK_,values__9270__auto___10401),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.cst$sym$i),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,values__9270__auto___10401),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e10381){var t__9315__auto___10403 = e10381;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.cst$sym$i),cljs.core.cst$kw$actual,t__9315__auto___10403,cljs.core.cst$kw$message,null], null));
}
try{var values__9270__auto___10404 = (new cljs.core.List(null,cljs.core.cst$kw$wheel$font_SLASH_font,(new cljs.core.List(null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wheel$font_SLASH_fallback,"baz"], null)], 0)),null,(1),null)),(2),null));
var result__9271__auto___10405 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.valid_QMARK_,values__9270__auto___10404);
if(cljs.core.truth_(result__9271__auto___10405)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wheel$font_SLASH_fallback,"baz"], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.spec.alpha.valid_QMARK_,values__9270__auto___10404),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wheel$font_SLASH_fallback,"baz"], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,values__9270__auto___10404),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e10382){var t__9315__auto___10406 = e10382;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wheel$font_SLASH_fallback,"baz"], null))),cljs.core.cst$kw$actual,t__9315__auto___10406,cljs.core.cst$kw$message,null], null));
}
try{var values__9270__auto___10407 = (new cljs.core.List(null,cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(i,cljs.core.cst$kw$wheel$font_SLASH_name)),null,(1),null));
var result__9271__auto___10408 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9270__auto___10407);
if(cljs.core.truth_(result__9271__auto___10408)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.cst$sym$i,cljs.core.cst$kw$wheel$font_SLASH_name))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__9270__auto___10407),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.cst$sym$i,cljs.core.cst$kw$wheel$font_SLASH_name))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$not,values__9270__auto___10407),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e10383){var t__9315__auto___10409 = e10383;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.cst$sym$i,cljs.core.cst$kw$wheel$font_SLASH_name))),cljs.core.cst$kw$actual,t__9315__auto___10409,cljs.core.cst$kw$message,null], null));
}

var G__10410 = cljs.core.next(seq__10368__$1);
var G__10411 = null;
var G__10412 = (0);
var G__10413 = (0);
seq__10368 = G__10410;
chunk__10369 = G__10411;
count__10370 = G__10412;
i__10371 = G__10413;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.font.spec._QMARK__QMARK_spec.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.spec._QMARK__QMARK_spec;},cljs.core.cst$sym$wheel$font$spec_SLASH__QMARK__QMARK_spec,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$spec,cljs.core.cst$sym$_QMARK__QMARK_spec,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/nearseed/ipp/c7rc4v/index.html.out/wheel/font/spec.cljc",16,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.spec._QMARK__QMARK_spec)?wheel.font.spec._QMARK__QMARK_spec.cljs$lang$test:null)]));
