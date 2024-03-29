// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.spec');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$hoplon$spec_SLASH_elem,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$hoplon$spec_SLASH_attr,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$hoplon$spec_SLASH_class,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$map,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$collection,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$keyword,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$map,cljs.core.cst$kw$string,cljs.core.cst$kw$collection], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$keyword,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.string_QMARK_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$spec_SLASH_or,cljs.core.cst$kw$keyword,cljs.core.cst$sym$keyword_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$sym$string_QMARK_),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keyword,cljs.core.cst$kw$string], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.string_QMARK_], null),null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__7320){
return cljs.core.coll_QMARK_(G__7320);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$keyword,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_))], null),null)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$hoplon$spec_SLASH_value,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$string,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$boolean,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,cljs.core.cst$kw$boolean], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.boolean_QMARK_], null),null));
hoplon.spec.attr = (function hoplon$spec$attr(vspec){
return cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$element,cljs.core.cst$kw$attribute,cljs.core.cst$kw$value], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hoplon$spec_SLASH_elem,cljs.core.cst$kw$hoplon$spec_SLASH_attr,vspec], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hoplon$spec_SLASH_elem,cljs.core.cst$kw$hoplon$spec_SLASH_attr,cljs.core.cst$sym$vspec], null));
});
hoplon.spec.dispatcher = (function hoplon$spec$dispatcher(p__7321){
var vec__7322 = p__7321;
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7322,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7322,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7322,(2),null);
var temp__5557__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5557__auto__)){
var n = temp__5557__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});
if((typeof hoplon !== 'undefined') && (typeof hoplon.spec !== 'undefined') && (typeof hoplon.spec.elem_BANG_ !== 'undefined')){
} else {
hoplon.spec.elem_BANG_ = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$spec_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.spec","elem!"),hoplon.spec.dispatcher,cljs.core.cst$kw$hoplon$spec_SLASH_default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
hoplon.spec.elem_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$spec_SLASH_default,(function (_){
return cljs.core.any_QMARK_;
}));
if((typeof hoplon !== 'undefined') && (typeof hoplon.spec !== 'undefined') && (typeof hoplon.spec.do_BANG_ !== 'undefined')){
} else {
hoplon.spec.do_BANG_ = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$spec_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.spec","do!"),hoplon.spec.dispatcher,cljs.core.cst$kw$hoplon$spec_SLASH_default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$spec_SLASH_default,(function (_){
return cljs.core.any_QMARK_;
}));
if((typeof hoplon !== 'undefined') && (typeof hoplon.spec !== 'undefined') && (typeof hoplon.spec.on_BANG_ !== 'undefined')){
} else {
hoplon.spec.on_BANG_ = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$spec_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.spec","on!"),hoplon.spec.dispatcher,cljs.core.cst$kw$hoplon$spec_SLASH_default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
hoplon.spec.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$spec_SLASH_default,(function (_){
return hoplon.spec.attr(cljs.core.fn_QMARK_);
}));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_multi_DASH_spec,cljs.core.cst$sym$hoplon$spec_SLASH_elem_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_),cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$hoplon$spec_SLASH_elem_BANG_,new cljs.core.Var(function(){return hoplon.spec.elem_BANG_;},cljs.core.cst$sym$hoplon$spec_SLASH_elem_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$spec,cljs.core.cst$sym$elem_BANG_,"/home/thedavidmeister/.boot/cache/tmp/home/thedavidmeister/nearseed/hxd/50rfo7/index.html.out/hoplon/spec.cljs",16,1,30,30,cljs.core.List.EMPTY,null,(cljs.core.truth_(hoplon.spec.elem_BANG_)?hoplon.spec.elem_BANG_.cljs$lang$test:null)])),cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_multi_DASH_spec,cljs.core.cst$sym$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_),cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$hoplon$spec_SLASH_do_BANG_,new cljs.core.Var(function(){return hoplon.spec.do_BANG_;},cljs.core.cst$sym$hoplon$spec_SLASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$spec,cljs.core.cst$sym$do_BANG_,"/home/thedavidmeister/.boot/cache/tmp/home/thedavidmeister/nearseed/hxd/50rfo7/index.html.out/hoplon/spec.cljs",14,1,34,34,cljs.core.List.EMPTY,null,(cljs.core.truth_(hoplon.spec.do_BANG_)?hoplon.spec.do_BANG_.cljs$lang$test:null)])),cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_multi_DASH_spec,cljs.core.cst$sym$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_),cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$hoplon$spec_SLASH_on_BANG_,new cljs.core.Var(function(){return hoplon.spec.on_BANG_;},cljs.core.cst$sym$hoplon$spec_SLASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$spec,cljs.core.cst$sym$on_BANG_,"/home/thedavidmeister/.boot/cache/tmp/home/thedavidmeister/nearseed/hxd/50rfo7/index.html.out/hoplon/spec.cljs",14,1,38,38,cljs.core.List.EMPTY,null,(cljs.core.truth_(hoplon.spec.on_BANG_)?hoplon.spec.on_BANG_.cljs$lang$test:null)])),cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_));
