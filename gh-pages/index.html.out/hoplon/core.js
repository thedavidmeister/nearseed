// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('hoplon.spec');
cljs.core.enable_console_print_BANG_();






hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__3949__auto__ = (function (){var and__3938__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__3938__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var G__9973 = (i + (1));
var G__9974 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__9973;
ret = G__9974;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__9976 = arguments.length;
switch (G__9976) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return cljs.core.persistent_BANG_(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)));
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2 = (function (tree,ret){
var G__9980 = tree;
var vec__9981 = G__9980;
var seq__9982 = cljs.core.seq(vec__9981);
var first__9983 = cljs.core.first(seq__9982);
var seq__9982__$1 = cljs.core.next(seq__9982);
var x = first__9983;
var rst = seq__9982__$1;
var G__9980__$1 = G__9980;
while(true){
var vec__9984 = G__9980__$1;
var seq__9985 = cljs.core.seq(vec__9984);
var first__9986 = cljs.core.first(seq__9985);
var seq__9985__$1 = cljs.core.next(seq__9985);
var x__$1 = first__9986;
var rst__$1 = seq__9985__$1;
if(cljs.core.sequential_QMARK_(x__$1)){
if(cljs.core.seq(x__$1)){
hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(x__$1,ret);
} else {
}
} else {
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x__$1);
}

if(cljs.core.not(rst__$1)){
return ret;
} else {
var G__9988 = rst__$1;
G__9980__$1 = G__9988;
continue;
}
break;
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;

hoplon.core.remove_nil = (function hoplon$core$remove_nil(nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__9990_SHARP_,p2__9989_SHARP_){
if(cljs.core.truth_(p2__9989_SHARP_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__9990_SHARP_,p2__9989_SHARP_);
} else {
return p1__9990_SHARP_;
}
}),cljs.core.PersistentVector.EMPTY,nodes);
});
/**
 * Flattens nested sequencences of elements, removing nil values.
 */
hoplon.core.compact_kids = (function hoplon$core$compact_kids(kids){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,hoplon.core.remove_nil(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids)));
});
/**
 * Sets a DOM element's children to the sequence of children given.
 */
hoplon.core.set_dom_children_BANG_ = (function hoplon$core$set_dom_children_BANG_(elem,new_kids){
var new_kids__$1 = hoplon.core.compact_kids(new_kids);
var new_QMARK_ = cljs.core.set(new_kids__$1);
var G__9997 = new_kids__$1;
var vec__9999 = G__9997;
var seq__10000 = cljs.core.seq(vec__9999);
var first__10001 = cljs.core.first(seq__10000);
var seq__10000__$1 = cljs.core.next(seq__10000);
var new_kid = first__10001;
var nks = seq__10000__$1;
var G__9998 = hoplon.core.child_vec(elem);
var vec__10002 = G__9998;
var seq__10003 = cljs.core.seq(vec__10002);
var first__10004 = cljs.core.first(seq__10003);
var seq__10003__$1 = cljs.core.next(seq__10003);
var old_kid = first__10004;
var oks = seq__10003__$1;
var old_kids = vec__10002;
var G__9997__$1 = G__9997;
var G__9998__$1 = G__9998;
while(true){
var vec__10005 = G__9997__$1;
var seq__10006 = cljs.core.seq(vec__10005);
var first__10007 = cljs.core.first(seq__10006);
var seq__10006__$1 = cljs.core.next(seq__10006);
var new_kid__$1 = first__10007;
var nks__$1 = seq__10006__$1;
var vec__10008 = G__9998__$1;
var seq__10009 = cljs.core.seq(vec__10008);
var first__10010 = cljs.core.first(seq__10009);
var seq__10009__$1 = cljs.core.next(seq__10009);
var old_kid__$1 = first__10010;
var oks__$1 = seq__10009__$1;
var old_kids__$1 = vec__10008;
if(cljs.core.truth_((function (){var or__3949__auto__ = new_kid__$1;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return old_kid__$1;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_kid__$1,old_kid__$1)){
var G__10011 = nks__$1;
var G__10012 = oks__$1;
G__9997__$1 = G__10011;
G__9998__$1 = G__10012;
continue;
} else {
if(cljs.core.not(old_kid__$1)){
elem.appendChild(new_kid__$1);

var G__10013 = nks__$1;
var G__10014 = oks__$1;
G__9997__$1 = G__10013;
G__9998__$1 = G__10014;
continue;
} else {
if(cljs.core.not(new_kid__$1)){
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(old_kid__$1) : new_QMARK_.call(null,old_kid__$1)))){
} else {
elem.removeChild(old_kid__$1);
}

var G__10015 = nks__$1;
var G__10016 = oks__$1;
G__9997__$1 = G__10015;
G__9998__$1 = G__10016;
continue;
} else {
elem.insertBefore(new_kid__$1,old_kid__$1);

var G__10017 = nks__$1;
var G__10018 = old_kids__$1;
G__9997__$1 = G__10017;
G__9998__$1 = G__10018;
continue;

}
}
}
} else {
return null;
}
break;
}
});
hoplon.core._do_BANG_ = (function hoplon$core$_do_BANG_(elem,this$,value){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.do_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
hoplon.core._on_BANG_ = (function hoplon$core$_on_BANG_(elem,this$,value){
return (hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.on_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
hoplon.core._elem_BANG_ = (function hoplon$core$_elem_BANG_(elem,this$,value){
return (hoplon.core.elem_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.elem_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.elem_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__10020 = arguments.length;
switch (G__10020) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__10021_10024 = init;
var G__10022_10025 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10021_10024,G__10022_10025) : f.call(null,G__10021_10024,G__10022_10025));

cljs.core.add_watch(ref,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Class normalization for attribute providers. Converts from strings and
 *   sequences to hashmaps.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__10026_SHARP_){
return cljs.core.zipmap(p1__10026_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});
if(cljs.core.map_QMARK_(kvs)){
return kvs;
} else {
return __GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs)));
}
});
/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var G__10028 = arguments.length;
switch (G__10028) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

/**
 * Executes a function once an element has been attached to the DOM.
 */
hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return setTimeout((function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),(0));
} else {
var temp__5557__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5557__auto__)){
var v = temp__5557__auto__;
return v.push(f);
} else {
var G__10030_10042 = this$;
var G__10031_10043 = "_hoplonWhenDom";
var G__10032_10044 = [f];
goog.object.set(G__10030_10042,G__10031_10043,G__10032_10044);

return setTimeout(((function (temp__5557__auto__){
return (function (){
var fexpr__10037 = ((function (temp__5557__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
return setTimeout(((function (temp__5557__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5557__auto__))
,(20));
} else {
var seq__10038_10045 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__10039_10046 = null;
var count__10040_10047 = (0);
var i__10041_10048 = (0);
while(true){
if((i__10041_10048 < count__10040_10047)){
var f_10049__$1 = chunk__10039_10046.cljs$core$IIndexed$_nth$arity$2(null,i__10041_10048);
(f_10049__$1.cljs$core$IFn$_invoke$arity$0 ? f_10049__$1.cljs$core$IFn$_invoke$arity$0() : f_10049__$1.call(null));


var G__10050 = seq__10038_10045;
var G__10051 = chunk__10039_10046;
var G__10052 = count__10040_10047;
var G__10053 = (i__10041_10048 + (1));
seq__10038_10045 = G__10050;
chunk__10039_10046 = G__10051;
count__10040_10047 = G__10052;
i__10041_10048 = G__10053;
continue;
} else {
var temp__5559__auto___10054 = cljs.core.seq(seq__10038_10045);
if(temp__5559__auto___10054){
var seq__10038_10055__$1 = temp__5559__auto___10054;
if(cljs.core.chunked_seq_QMARK_(seq__10038_10055__$1)){
var c__4351__auto___10056 = cljs.core.chunk_first(seq__10038_10055__$1);
var G__10057 = cljs.core.chunk_rest(seq__10038_10055__$1);
var G__10058 = c__4351__auto___10056;
var G__10059 = cljs.core.count(c__4351__auto___10056);
var G__10060 = (0);
seq__10038_10045 = G__10057;
chunk__10039_10046 = G__10058;
count__10040_10047 = G__10059;
i__10041_10048 = G__10060;
continue;
} else {
var f_10061__$1 = cljs.core.first(seq__10038_10055__$1);
(f_10061__$1.cljs$core$IFn$_invoke$arity$0 ? f_10061__$1.cljs$core$IFn$_invoke$arity$0() : f_10061__$1.call(null));


var G__10062 = cljs.core.next(seq__10038_10055__$1);
var G__10063 = null;
var G__10064 = (0);
var G__10065 = (0);
seq__10038_10045 = G__10062;
chunk__10039_10046 = G__10063;
count__10040_10047 = G__10064;
i__10041_10048 = G__10065;
continue;
}
} else {
}
}
break;
}

return goog.object.set(this$,"_hoplonWhenDom",null);
}
});})(temp__5557__auto__))
;
return fexpr__10037();
});})(temp__5557__auto__))
,(0));
}
}
});
/**
 * Executes a function once the window load event is fired.
 */
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
return setTimeout((function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),(0));
}));
});
/**
 * Parses a sequence of element arguments into attributes and children.
 */
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__10071 = args;
var vec__10072 = G__10071;
var seq__10073 = cljs.core.seq(vec__10072);
var first__10074 = cljs.core.first(seq__10073);
var seq__10073__$1 = cljs.core.next(seq__10073);
var arg = first__10074;
var args__$1 = seq__10073__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__10071__$1 = G__10071;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__10075 = G__10071__$1;
var seq__10076 = cljs.core.seq(vec__10075);
var first__10077 = cljs.core.first(seq__10076);
var seq__10076__$1 = cljs.core.next(seq__10076);
var arg__$1 = first__10077;
var args__$2 = seq__10076__$1;
if(cljs.core.not((function (){var or__3949__auto__ = arg__$1;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__10078 = cljs.core.reduce_kv(cljs.core.assoc_BANG_,attr__$2,arg__$1);
var G__10079 = kids__$2;
var G__10080 = args__$2;
attr__$1 = G__10078;
kids__$1 = G__10079;
G__10071__$1 = G__10080;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__10081 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__10071__$1,attr__$2,kids__$2,vec__10075,seq__10076,first__10077,seq__10076__$1,arg__$1,args__$2,attr,kids,G__10071,vec__10072,seq__10073,first__10074,seq__10073__$1,arg,args__$1){
return (function (p1__10066_SHARP_,p2__10067_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__10066_SHARP_,p2__10067_SHARP_,true);
});})(attr__$1,kids__$1,G__10071__$1,attr__$2,kids__$2,vec__10075,seq__10076,first__10077,seq__10076__$1,arg__$1,args__$2,attr,kids,G__10071,vec__10072,seq__10073,first__10074,seq__10073__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__10082 = kids__$2;
var G__10083 = args__$2;
attr__$1 = G__10081;
kids__$1 = G__10082;
G__10071__$1 = G__10083;
continue;
} else {
if(cljs.core.truth_((hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.attribute_QMARK_.call(null,arg__$1)))){
var G__10084 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__10085 = kids__$2;
var G__10086 = cljs.core.rest(args__$2);
attr__$1 = G__10084;
kids__$1 = G__10085;
G__10071__$1 = G__10086;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__10087 = attr__$2;
var G__10088 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__10089 = args__$2;
attr__$1 = G__10087;
kids__$1 = G__10088;
G__10071__$1 = G__10089;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__10090 = attr__$2;
var G__10091 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__10092 = args__$2;
attr__$1 = G__10090;
kids__$1 = G__10091;
G__10071__$1 = G__10092;
continue;
} else {
var G__10093 = attr__$2;
var G__10094 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__10095 = args__$2;
attr__$1 = G__10093;
kids__$1 = G__10094;
G__10071__$1 = G__10095;
continue;

}
}
}
}
}
}
break;
}
});
/**
 * A multi-method dispatch function.
 * 
 * Will dispatch against three arguments:
 * 
 *   * `elem` - the target DOM Element containing the attribute
 *   * `key` - the attribute keyword or symbol
 *   * `value` - the attribute value
 * 
 * The dispatcher will attempt to dispatch agains the key namespace or key.
 * 
 * ex. when key is `:namespace/key` will dispatch on `:namespace/*` otherwise `key`
 */
hoplon.core.dispatcher = (function hoplon$core$dispatcher(elem,key,value){
var temp__5557__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5557__auto__)){
var n = temp__5557__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});

/**
 * @interface
 */
hoplon.core.IHoplonNode = function(){};

hoplon.core._node = (function hoplon$core$_node(this$){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonNode$_node$arity$1 == null))))){
return this$.hoplon$core$IHoplonNode$_node$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (hoplon.core._node[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (hoplon.core._node["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHoplonNode.-node",this$);
}
}
}
});

hoplon.core.node_QMARK_ = (function hoplon$core$node_QMARK_(this$){
if(!((this$ == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonNode$)))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonNode,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonNode,this$);
}
});
goog.object.set(hoplon.core.IHoplonNode,"string",true);

var G__10097_10104 = hoplon.core._node;
var G__10098_10105 = "string";
var G__10099_10106 = ((function (G__10097_10104,G__10098_10105){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__10097_10104,G__10098_10105))
;
goog.object.set(G__10097_10104,G__10098_10105,G__10099_10106);

goog.object.set(hoplon.core.IHoplonNode,"number",true);

var G__10100_10107 = hoplon.core._node;
var G__10101_10108 = "number";
var G__10102_10109 = ((function (G__10100_10107,G__10101_10108){
return (function (this$){
var G__10103 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__10103) : hoplon.core.$text.call(null,G__10103));
});})(G__10100_10107,G__10101_10108))
;
goog.object.set(G__10100_10107,G__10101_10108,G__10102_10109);
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(cljs.core.truth_(hoplon.core.node_QMARK_(x))){
return hoplon.core._node(x);
} else {
return x;
}
});

/**
 * @interface
 */
hoplon.core.IHoplonAttribute = function(){};

hoplon.core._attribute_BANG_ = (function hoplon$core$_attribute_BANG_(this$,elem,value){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3 == null))))){
return this$.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3(this$,elem,value);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (hoplon.core._attribute_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__4244__auto__.call(null,this$,elem,value));
} else {
var m__4244__auto____$1 = (hoplon.core._attribute_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__4244__auto____$1.call(null,this$,elem,value));
} else {
throw cljs.core.missing_protocol("IHoplonAttribute.-attribute!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonAttribute$)))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
return hoplon.core._elem_BANG_(elem,this$__$1,value);
});
hoplon.core.spec_BANG_ = (function hoplon$core$spec_BANG_(){
var opts10113_10141 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts10113_10141){
return (function (ret__9648__auto__,p__10114){
var vec__10115 = p__10114;
var ___9649__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10115,(0),null);
var f__9650__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10115,(1),null);
var sym__9651__auto__ = (f__9650__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9650__auto__.cljs$core$IFn$_invoke$arity$0() : f__9650__auto__.call(null));
var G__10118 = ret__9648__auto__;
if(cljs.core.truth_(sym__9651__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10118,sym__9651__auto__);
} else {
return G__10118;
}
});})(opts10113_10141))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts10113_10141){
return (function (p1__9647__9652__auto__){
var G__10120 = cljs.core.first(p1__9647__9652__auto__);
var fexpr__10119 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts10113_10141);
return (fexpr__10119.cljs$core$IFn$_invoke$arity$1 ? fexpr__10119.cljs$core$IFn$_invoke$arity$1(G__10120) : fexpr__10119.call(null,G__10120));
});})(opts10113_10141))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts10113_10141){
return (function (){
var checked__9616__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,new cljs.core.Var(function(){return hoplon.core._elem_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_elem_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/nearseed/iwi/qo5pkn/index.html.out/hoplon/core.cljs",14,1,87,87,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._elem_BANG_)?hoplon.core._elem_BANG_.cljs$lang$test:null)])),opts10113_10141);
if(cljs.core.truth_(checked__9616__auto__)){
hoplon.core._elem_BANG_ = checked__9616__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_;
});})(opts10113_10141))
], null)))));

var opts10123_10142 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts10123_10142){
return (function (ret__9648__auto__,p__10124){
var vec__10125 = p__10124;
var ___9649__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10125,(0),null);
var f__9650__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10125,(1),null);
var sym__9651__auto__ = (f__9650__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9650__auto__.cljs$core$IFn$_invoke$arity$0() : f__9650__auto__.call(null));
var G__10128 = ret__9648__auto__;
if(cljs.core.truth_(sym__9651__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10128,sym__9651__auto__);
} else {
return G__10128;
}
});})(opts10123_10142))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts10123_10142){
return (function (p1__9647__9652__auto__){
var G__10130 = cljs.core.first(p1__9647__9652__auto__);
var fexpr__10129 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts10123_10142);
return (fexpr__10129.cljs$core$IFn$_invoke$arity$1 ? fexpr__10129.cljs$core$IFn$_invoke$arity$1(G__10130) : fexpr__10129.call(null,G__10130));
});})(opts10123_10142))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts10123_10142){
return (function (){
var checked__9616__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/nearseed/iwi/qo5pkn/index.html.out/hoplon/core.cljs",12,1,77,77,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts10123_10142);
if(cljs.core.truth_(checked__9616__auto__)){
hoplon.core._do_BANG_ = checked__9616__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts10123_10142))
], null)))));

var opts10133 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts10133){
return (function (ret__9648__auto__,p__10134){
var vec__10135 = p__10134;
var ___9649__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10135,(0),null);
var f__9650__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10135,(1),null);
var sym__9651__auto__ = (f__9650__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9650__auto__.cljs$core$IFn$_invoke$arity$0() : f__9650__auto__.call(null));
var G__10138 = ret__9648__auto__;
if(cljs.core.truth_(sym__9651__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10138,sym__9651__auto__);
} else {
return G__10138;
}
});})(opts10133))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts10133){
return (function (p1__9647__9652__auto__){
var G__10140 = cljs.core.first(p1__9647__9652__auto__);
var fexpr__10139 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts10133);
return (fexpr__10139.cljs$core$IFn$_invoke$arity$1 ? fexpr__10139.cljs$core$IFn$_invoke$arity$1(G__10140) : fexpr__10139.call(null,G__10140));
});})(opts10133))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts10133){
return (function (){
var checked__9616__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/nearseed/iwi/qo5pkn/index.html.out/hoplon/core.cljs",12,1,82,82,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts10133);
if(cljs.core.truth_(checked__9616__auto__)){
hoplon.core._on_BANG_ = checked__9616__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts10133))
], null)))));
});

/**
 * @interface
 */
hoplon.core.IHoplonElement = function(){};

/**
 * Sets attributes on a managed element using native functionality.
 */
hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 == null))))){
return this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__4244__auto__.call(null,this$,kvs));
} else {
var m__4244__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__4244__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-attributes!",this$);
}
}
}
});

/**
 * Sets styles on a managed element using native functionality.
 */
hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 == null))))){
return this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__4244__auto__.call(null,this$,kvs));
} else {
var m__4244__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__4244__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-styles!",this$);
}
}
}
});

/**
 * Returns the hoplon managed kids atom, or creates it if missing.
 */
hoplon.core._hoplon_kids = (function hoplon$core$_hoplon_kids(this$){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_hoplon_kids$arity$1 == null))))){
return this$.hoplon$core$IHoplonElement$_hoplon_kids$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (hoplon.core._hoplon_kids[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (hoplon.core._hoplon_kids["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-hoplon-kids",this$);
}
}
}
});

/**
 * Appends `child` to `this` for the case of `this` being a managed element.
 */
hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 == null))))){
return this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__4244__auto__.call(null,this$,child));
} else {
var m__4244__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__4244__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-append-child!",this$);
}
}
}
});

/**
 * Removes `child` from `this` for the case of `this` being a managed element.
 */
hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 == null))))){
return this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__4244__auto__.call(null,this$,child));
} else {
var m__4244__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__4244__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-remove-child!",this$);
}
}
}
});

/**
 * Replaces `existing` with `new` in `this` for the case of `this` being a managed element.
 */
hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 == null))))){
return this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__4244__auto__.call(null,this$,new$,existing));
} else {
var m__4244__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__4244__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-replace-child!",this$);
}
}
}
});

/**
 * Inserts `existing` before `new` in `this` for the case of `this` being a managed element.
 */
hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 == null))))){
return this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__4244__auto__.call(null,this$,new$,existing));
} else {
var m__4244__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__4244__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-insert-before!",this$);
}
}
}
});

/**
 * Returns true if elem is a managed element. Managed elements have
 *   their children managed by Hoplon and implement the IHoplonElement protocol.
 */
hoplon.core.element_QMARK_ = (function hoplon$core$element_QMARK_(this$){
var and__3938__auto__ = (this$ instanceof Element);
if(and__3938__auto__){
if(!((this$ == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonElement$)))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonElement,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonElement,this$);
}
} else {
return and__3938__auto__;
}
});
/**
 * Returns true if elem is a native element. Native elements' children
 *   are not managed by Hoplon, and have not been extended with IHoplonElement.
 */
hoplon.core.native_QMARK_ = (function hoplon$core$native_QMARK_(elem){
return (((elem instanceof Element)) && (cljs.core.not(hoplon.core.element_QMARK_(elem))));
});
hoplon.core.native_node_QMARK_ = (function hoplon$core$native_node_QMARK_(node){

return (((node instanceof Node)) && (cljs.core.not(hoplon.core.element_QMARK_(node))));
});
hoplon.core.hoplonify_BANG_ = (function hoplon$core$hoplonify_BANG_(elem){
var x10153 = elem;
x10153.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

x10153.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = ((function (x10153){
return (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<HoplonElement: ",this$__$1.tagName,">"], 0));
});})(x10153))
;

x10153.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

x10153.cljs$core$ILookup$_lookup$arity$2 = ((function (x10153){
return (function (this$,k){
var this$__$1 = this;
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(k))){
return this$__$1.getAttribute(cljs.core.name(k));
} else {
var G__10154 = this$__$1.children;
var G__10155 = k;
return goog.object.get(G__10154,G__10155);
}
});})(x10153))
;

x10153.cljs$core$ILookup$_lookup$arity$3 = ((function (x10153){
return (function (this$,k,not_found){
var this$__$1 = this;
var or__3949__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(this$__$1,k);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return not_found;
}
});})(x10153))
;

x10153.hoplon$core$IHoplonElement$ = cljs.core.PROTOCOL_SENTINEL;

x10153.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 = ((function (x10153){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__10156 = cljs.core.seq(kvs);
var chunk__10158 = null;
var count__10159 = (0);
var i__10160 = (0);
while(true){
if((i__10160 < count__10159)){
var vec__10162 = chunk__10158.cljs$core$IIndexed$_nth$arity$2(null,i__10160);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10162,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10162,(1),null);
var k_10184__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_10184__$1);
} else {
e.setAttribute(k_10184__$1,((v === true)?k_10184__$1:v));
}


var G__10185 = seq__10156;
var G__10186 = chunk__10158;
var G__10187 = count__10159;
var G__10188 = (i__10160 + (1));
seq__10156 = G__10185;
chunk__10158 = G__10186;
count__10159 = G__10187;
i__10160 = G__10188;
continue;
} else {
var temp__5559__auto__ = cljs.core.seq(seq__10156);
if(temp__5559__auto__){
var seq__10156__$1 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10156__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10156__$1);
var G__10189 = cljs.core.chunk_rest(seq__10156__$1);
var G__10190 = c__4351__auto__;
var G__10191 = cljs.core.count(c__4351__auto__);
var G__10192 = (0);
seq__10156 = G__10189;
chunk__10158 = G__10190;
count__10159 = G__10191;
i__10160 = G__10192;
continue;
} else {
var vec__10165 = cljs.core.first(seq__10156__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10165,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10165,(1),null);
var k_10193__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_10193__$1);
} else {
e.setAttribute(k_10193__$1,((v === true)?k_10193__$1:v));
}


var G__10194 = cljs.core.next(seq__10156__$1);
var G__10195 = null;
var G__10196 = (0);
var G__10197 = (0);
seq__10156 = G__10194;
chunk__10158 = G__10195;
count__10159 = G__10196;
i__10160 = G__10197;
continue;
}
} else {
return null;
}
}
break;
}
});})(x10153))
;

x10153.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 = ((function (x10153){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__10168 = cljs.core.seq(kvs);
var chunk__10169 = null;
var count__10170 = (0);
var i__10171 = (0);
while(true){
if((i__10171 < count__10170)){
var vec__10172 = chunk__10169.cljs$core$IIndexed$_nth$arity$2(null,i__10171);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10172,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10172,(1),null);
var G__10175_10198 = e.style;
var G__10176_10199 = cljs.core.name(k);
var G__10177_10200 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__10175_10198,G__10176_10199,G__10177_10200);


var G__10201 = seq__10168;
var G__10202 = chunk__10169;
var G__10203 = count__10170;
var G__10204 = (i__10171 + (1));
seq__10168 = G__10201;
chunk__10169 = G__10202;
count__10170 = G__10203;
i__10171 = G__10204;
continue;
} else {
var temp__5559__auto__ = cljs.core.seq(seq__10168);
if(temp__5559__auto__){
var seq__10168__$1 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10168__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10168__$1);
var G__10205 = cljs.core.chunk_rest(seq__10168__$1);
var G__10206 = c__4351__auto__;
var G__10207 = cljs.core.count(c__4351__auto__);
var G__10208 = (0);
seq__10168 = G__10205;
chunk__10169 = G__10206;
count__10170 = G__10207;
i__10171 = G__10208;
continue;
} else {
var vec__10178 = cljs.core.first(seq__10168__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,(1),null);
var G__10181_10209 = e.style;
var G__10182_10210 = cljs.core.name(k);
var G__10183_10211 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__10181_10209,G__10182_10210,G__10183_10211);


var G__10212 = cljs.core.next(seq__10168__$1);
var G__10213 = null;
var G__10214 = (0);
var G__10215 = (0);
seq__10168 = G__10212;
chunk__10169 = G__10213;
count__10170 = G__10214;
i__10171 = G__10215;
continue;
}
} else {
return null;
}
}
break;
}
});})(x10153))
;

x10153.hoplon$core$IHoplonElement$_hoplon_kids$arity$1 = ((function (x10153){
return (function (this$){
var this$__$1 = this;
var temp__5557__auto__ = this$__$1.hoplonKids;
if(cljs.core.truth_(temp__5557__auto__)){
var hl_kids = temp__5557__auto__;
return hl_kids;
} else {
var kids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids,((function (kids,temp__5557__auto__,this$__$1,x10153){
return (function (p1__10146_SHARP_,p2__10145_SHARP_){
return hoplon.core.set_dom_children_BANG_(this$__$1,p2__10145_SHARP_);
});})(kids,temp__5557__auto__,this$__$1,x10153))
);

return kids;
}
});})(x10153))
;

x10153.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 = ((function (x10153){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_10216 = hoplon.core._hoplon_kids(this$__$1);
var i_10217 = cljs.core.count(cljs.core.deref(kids_10216));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_10216,i_10217,child__$1,this$__$1,x10153){
return (function (p1__10148_SHARP_,p2__10147_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_10216,cljs.core.assoc,i_10217,p2__10147_SHARP_);
});})(kids_10216,i_10217,child__$1,this$__$1,x10153))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_10216,cljs.core.assoc,i_10217,child__$1);
}

return child__$1;
});})(x10153))
;

x10153.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 = ((function (x10153){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_10218 = hoplon.core._hoplon_kids(this$__$1);
var before_count_10219 = cljs.core.count(cljs.core.deref(kids_10218));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_10218,((function (kids_10218,before_count_10219,child__$1,this$__$1,x10153){
return (function (p1__10149_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.deref(child__$1)),p1__10149_SHARP_));
});})(kids_10218,before_count_10219,child__$1,this$__$1,x10153))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_10218,((function (kids_10218,before_count_10219,child__$1,this$__$1,x10153){
return (function (p1__10150_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,child__$1),p1__10150_SHARP_));
});})(kids_10218,before_count_10219,child__$1,this$__$1,x10153))
);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(kids_10218)),(before_count_10219 - (1)))){
} else {
throw (new Error("Attempted to remove a node that is not a child of parent."));
}

return child__$1;
});})(x10153))
;

x10153.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 = ((function (x10153){
return (function (this$,new$,existing){
var this$__$1 = this;
var existing__$1 = existing;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (existing__$1,this$__$1,x10153){
return (function (p1__10151_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (existing__$1,this$__$1,x10153){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing__$1)){
return new$;
} else {
return el;
}
});})(existing__$1,this$__$1,x10153))
,p1__10151_SHARP_);
});})(existing__$1,this$__$1,x10153))
);

return existing__$1;
});})(x10153))
;

x10153.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 = ((function (x10153){
return (function (this$,new$,existing){
var this$__$1 = this;
var new$__$1 = new$;
if(cljs.core.not(existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hoplon.core._hoplon_kids(this$__$1),cljs.core.conj,new$__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$__$1,existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (new$__$1,this$__$1,x10153){
return (function (p1__10152_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (new$__$1,this$__$1,x10153){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new$__$1,el], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null);
}
});})(new$__$1,this$__$1,x10153))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__10152_SHARP_], 0)));
});})(new$__$1,this$__$1,x10153))
);
} else {
}
}

return new$__$1;
});})(x10153))
;

return x10153;
});
hoplon.core.__GT_hoplon = (function hoplon$core$__GT_hoplon(elem){
if(cljs.core.truth_(hoplon.core.element_QMARK_(elem))){
return elem;
} else {
var _ = elem;
hoplon.core.hoplonify_BANG_(elem);

return _;
}
});
hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var G__10225 = arguments.length;
switch (G__10225) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___10227 = arguments.length;
var i__4532__auto___10228 = (0);
while(true){
if((i__4532__auto___10228 < len__4531__auto___10227)){
args_arr__4546__auto__.push((arguments[i__4532__auto___10228]));

var G__10229 = (i__4532__auto___10228 + (1));
i__4532__auto___10228 = G__10229;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4547__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(hoplon.core.__GT_hoplon(this$),kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

/** @this {Function} */
hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq10221){
var G__10222 = cljs.core.first(seq10221);
var seq10221__$1 = cljs.core.next(seq10221);
var G__10223 = cljs.core.first(seq10221__$1);
var seq10221__$2 = cljs.core.next(seq10221__$1);
var G__10224 = cljs.core.first(seq10221__$2);
var seq10221__$3 = cljs.core.next(seq10221__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10222,G__10223,G__10224,seq10221__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__10235 = arguments.length;
switch (G__10235) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___10237 = arguments.length;
var i__4532__auto___10238 = (0);
while(true){
if((i__4532__auto___10238 < len__4531__auto___10237)){
args_arr__4546__auto__.push((arguments[i__4532__auto___10238]));

var G__10239 = (i__4532__auto___10238 + (1));
i__4532__auto___10238 = G__10239;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4547__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(hoplon.core.__GT_hoplon(this$),kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

/** @this {Function} */
hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq10231){
var G__10232 = cljs.core.first(seq10231);
var seq10231__$1 = cljs.core.next(seq10231);
var G__10233 = cljs.core.first(seq10231__$1);
var seq10231__$2 = cljs.core.next(seq10231__$1);
var G__10234 = cljs.core.first(seq10231__$2);
var seq10231__$3 = cljs.core.next(seq10231__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10232,G__10233,G__10234,seq10231__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(hoplon.core.__GT_hoplon(this$),child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(hoplon.core.__GT_hoplon(this$),child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(hoplon.core.__GT_hoplon(this$),new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(hoplon.core.__GT_hoplon(this$),new$,existing);
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv((function (p1__10241_SHARP_,p2__10240_SHARP_,p3__10242_SHARP_){
hoplon.core._attribute_BANG_(p2__10240_SHARP_,p1__10241_SHARP_,p3__10242_SHARP_);

return p1__10241_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__10243){
var vec__10244 = p__10243;
var seq__10245 = cljs.core.seq(vec__10244);
var first__10246 = cljs.core.first(seq__10245);
var seq__10245__$1 = cljs.core.next(seq__10245);
var child_cell = first__10246;
var _ = seq__10245__$1;
var kids = vec__10244;
var this$__$1 = this$;
var seq__10247_10251 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__10248_10252 = null;
var count__10249_10253 = (0);
var i__10250_10254 = (0);
while(true){
if((i__10250_10254 < count__10249_10253)){
var x_10255 = chunk__10248_10252.cljs$core$IIndexed$_nth$arity$2(null,i__10250_10254);
var temp__5559__auto___10256 = hoplon.core.__GT_node(x_10255);
if(cljs.core.truth_(temp__5559__auto___10256)){
var x_10257__$1 = temp__5559__auto___10256;
hoplon.core._append_child_BANG_(this$__$1,x_10257__$1);
} else {
}


var G__10258 = seq__10247_10251;
var G__10259 = chunk__10248_10252;
var G__10260 = count__10249_10253;
var G__10261 = (i__10250_10254 + (1));
seq__10247_10251 = G__10258;
chunk__10248_10252 = G__10259;
count__10249_10253 = G__10260;
i__10250_10254 = G__10261;
continue;
} else {
var temp__5559__auto___10262 = cljs.core.seq(seq__10247_10251);
if(temp__5559__auto___10262){
var seq__10247_10263__$1 = temp__5559__auto___10262;
if(cljs.core.chunked_seq_QMARK_(seq__10247_10263__$1)){
var c__4351__auto___10264 = cljs.core.chunk_first(seq__10247_10263__$1);
var G__10265 = cljs.core.chunk_rest(seq__10247_10263__$1);
var G__10266 = c__4351__auto___10264;
var G__10267 = cljs.core.count(c__4351__auto___10264);
var G__10268 = (0);
seq__10247_10251 = G__10265;
chunk__10248_10252 = G__10266;
count__10249_10253 = G__10267;
i__10250_10254 = G__10268;
continue;
} else {
var x_10269 = cljs.core.first(seq__10247_10263__$1);
var temp__5559__auto___10270__$1 = hoplon.core.__GT_node(x_10269);
if(cljs.core.truth_(temp__5559__auto___10270__$1)){
var x_10271__$1 = temp__5559__auto___10270__$1;
hoplon.core._append_child_BANG_(this$__$1,x_10271__$1);
} else {
}


var G__10272 = cljs.core.next(seq__10247_10263__$1);
var G__10273 = null;
var G__10274 = (0);
var G__10275 = (0);
seq__10247_10251 = G__10272;
chunk__10248_10252 = G__10273;
count__10249_10253 = G__10274;
i__10250_10254 = G__10275;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
hoplon.core.remove_all_kids_BANG_ = (function hoplon$core$remove_all_kids_BANG_(this$){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$),cljs.core.empty);
});
hoplon.core.invoke_BANG_ = (function hoplon$core$invoke_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10282 = arguments.length;
var i__4532__auto___10283 = (0);
while(true){
if((i__4532__auto___10283 < len__4531__auto___10282)){
args__4534__auto__.push((arguments[i__4532__auto___10283]));

var G__10284 = (i__4532__auto___10283 + (1));
i__4532__auto___10283 = G__10284;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__10278 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10278,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10278,(1),null);
var G__10281 = hoplon.core.__GT_hoplon(this$);
hoplon.core.add_attributes_BANG_(G__10281,attr);

hoplon.core.add_children_BANG_(G__10281,kids);

return G__10281;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq10276){
var G__10277 = cljs.core.first(seq10276);
var seq10276__$1 = cljs.core.next(seq10276);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10277,seq10276__$1);
});

Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() {
var G__10286 = null;
var G__10286__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__10286__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__10286__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__10286__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__10286__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__10286__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__10286__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__10286__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__10286__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__10286__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__10286__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__10286__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__10286__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__10286__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__10286__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__10286__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__10286__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__10286__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__10286__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__10286__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__10286__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__10286__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__10286 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__10286__1.call(this,self__);
case 2:
return G__10286__2.call(this,self__,a);
case 3:
return G__10286__3.call(this,self__,a,b);
case 4:
return G__10286__4.call(this,self__,a,b,c);
case 5:
return G__10286__5.call(this,self__,a,b,c,d);
case 6:
return G__10286__6.call(this,self__,a,b,c,d,e);
case 7:
return G__10286__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__10286__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__10286__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__10286__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__10286__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__10286__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__10286__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__10286__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__10286__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__10286__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__10286__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__10286__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__10286__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__10286__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__10286__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__10286__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10286.cljs$core$IFn$_invoke$arity$1 = G__10286__1;
G__10286.cljs$core$IFn$_invoke$arity$2 = G__10286__2;
G__10286.cljs$core$IFn$_invoke$arity$3 = G__10286__3;
G__10286.cljs$core$IFn$_invoke$arity$4 = G__10286__4;
G__10286.cljs$core$IFn$_invoke$arity$5 = G__10286__5;
G__10286.cljs$core$IFn$_invoke$arity$6 = G__10286__6;
G__10286.cljs$core$IFn$_invoke$arity$7 = G__10286__7;
G__10286.cljs$core$IFn$_invoke$arity$8 = G__10286__8;
G__10286.cljs$core$IFn$_invoke$arity$9 = G__10286__9;
G__10286.cljs$core$IFn$_invoke$arity$10 = G__10286__10;
G__10286.cljs$core$IFn$_invoke$arity$11 = G__10286__11;
G__10286.cljs$core$IFn$_invoke$arity$12 = G__10286__12;
G__10286.cljs$core$IFn$_invoke$arity$13 = G__10286__13;
G__10286.cljs$core$IFn$_invoke$arity$14 = G__10286__14;
G__10286.cljs$core$IFn$_invoke$arity$15 = G__10286__15;
G__10286.cljs$core$IFn$_invoke$arity$16 = G__10286__16;
G__10286.cljs$core$IFn$_invoke$arity$17 = G__10286__17;
G__10286.cljs$core$IFn$_invoke$arity$18 = G__10286__18;
G__10286.cljs$core$IFn$_invoke$arity$19 = G__10286__19;
G__10286.cljs$core$IFn$_invoke$arity$20 = G__10286__20;
G__10286.cljs$core$IFn$_invoke$arity$21 = G__10286__21;
G__10286.cljs$core$IFn$_invoke$arity$22 = G__10286__22;
return G__10286;
})()
;

Element.prototype.apply = (function (self__,args10285){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args10285)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return hoplon.core.invoke_BANG_(this$);
});

Element.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
hoplon.core.mksingleton = (function hoplon$core$mksingleton(elem){

return (function() { 
var G__10293__delegate = function (args){
var oelem = goog.object.get(document,elem);
if(cljs.core.truth_(oelem)){
} else {
var G__10287_10294 = document;
var G__10288_10295 = elem;
var G__10289_10296 = document.createElement(elem);
goog.object.set(G__10287_10294,G__10288_10295,G__10289_10296);
}

var helem = hoplon.core.__GT_hoplon(oelem);
var vec__10290_10297 = hoplon.core.parse_args(args);
var attrs_10298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10290_10297,(0),null);
var kids_10299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10290_10297,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs_10298))){
} else {
hoplon.core.remove_all_kids_BANG_(helem);

hoplon.core.add_attributes_BANG_(helem,attrs_10298);

hoplon.core.add_children_BANG_(helem,kids_10299);
}

return helem;
};
var G__10293 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10300__i = 0, G__10300__a = new Array(arguments.length -  0);
while (G__10300__i < G__10300__a.length) {G__10300__a[G__10300__i] = arguments[G__10300__i + 0]; ++G__10300__i;}
  args = new cljs.core.IndexedSeq(G__10300__a,0,null);
} 
return G__10293__delegate.call(this,args);};
G__10293.cljs$lang$maxFixedArity = 0;
G__10293.cljs$lang$applyTo = (function (arglist__10301){
var args = cljs.core.seq(arglist__10301);
return G__10293__delegate(args);
});
G__10293.cljs$core$IFn$_invoke$arity$variadic = G__10293__delegate;
return G__10293;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){

return (function() { 
var G__10305__delegate = function (args){
var vec__10302 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10302,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10302,(1),null);
var elem = document.createElement(tag);
var hl = hoplon.core.__GT_hoplon(elem);
return (hl.cljs$core$IFn$_invoke$arity$2 ? hl.cljs$core$IFn$_invoke$arity$2(attr,kids) : hl.call(null,attr,kids));
};
var G__10305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10306__i = 0, G__10306__a = new Array(arguments.length -  0);
while (G__10306__i < G__10306__a.length) {G__10306__a[G__10306__i] = arguments[G__10306__i + 0]; ++G__10306__i;}
  args = new cljs.core.IndexedSeq(G__10306__a,0,null);
} 
return G__10305__delegate.call(this,args);};
G__10305.cljs$lang$maxFixedArity = 0;
G__10305.cljs$lang$applyTo = (function (arglist__10307){
var args = cljs.core.seq(arglist__10307);
return G__10305__delegate(args);
});
G__10305.cljs$core$IFn$_invoke$arity$variadic = G__10305__delegate;
return G__10305;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10309 = arguments.length;
var i__4532__auto___10310 = (0);
while(true){
if((i__4532__auto___10310 < len__4531__auto___10309)){
args__4534__auto__.push((arguments[i__4532__auto___10310]));

var G__10311 = (i__4532__auto___10310 + (1));
i__4532__auto___10310 = G__10311;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

var el = document.documentElement;
hoplon.core.add_attributes_BANG_(hoplon.core.__GT_hoplon(el),cljs.core.first(hoplon.core.parse_args(args)));

return el;
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
hoplon.core.html.cljs$lang$applyTo = (function (seq10308){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10308));
});

/**
 * Updates and returns the document's `head` element in place.
 */
hoplon.core.head = hoplon.core.mksingleton("head");
/**
 * Updates and returns the document's `body` element in place.
 */
hoplon.core.body = hoplon.core.mksingleton("body");
hoplon.core.a = hoplon.core.mkelem("a");
hoplon.core.abbr = hoplon.core.mkelem("abbr");
hoplon.core.address = hoplon.core.mkelem("address");
hoplon.core.area = hoplon.core.mkelem("area");
hoplon.core.article = hoplon.core.mkelem("article");
hoplon.core.aside = hoplon.core.mkelem("aside");
hoplon.core.audio = hoplon.core.mkelem("audio");
hoplon.core.b = hoplon.core.mkelem("b");
hoplon.core.base = hoplon.core.mkelem("base");
hoplon.core.bdi = hoplon.core.mkelem("bdi");
hoplon.core.bdo = hoplon.core.mkelem("bdo");
hoplon.core.blockquote = hoplon.core.mkelem("blockquote");
hoplon.core.br = hoplon.core.mkelem("br");
hoplon.core.button = hoplon.core.mkelem("button");
hoplon.core.canvas = hoplon.core.mkelem("canvas");
hoplon.core.caption = hoplon.core.mkelem("caption");
hoplon.core.cite = hoplon.core.mkelem("cite");
hoplon.core.code = hoplon.core.mkelem("code");
hoplon.core.col = hoplon.core.mkelem("col");
hoplon.core.colgroup = hoplon.core.mkelem("colgroup");
hoplon.core.data = hoplon.core.mkelem("data");
hoplon.core.datalist = hoplon.core.mkelem("datalist");
hoplon.core.dd = hoplon.core.mkelem("dd");
hoplon.core.del = hoplon.core.mkelem("del");
hoplon.core.details = hoplon.core.mkelem("details");
hoplon.core.dfn = hoplon.core.mkelem("dfn");
hoplon.core.dialog = hoplon.core.mkelem("dialog");
hoplon.core.div = hoplon.core.mkelem("div");
hoplon.core.dl = hoplon.core.mkelem("dl");
hoplon.core.dt = hoplon.core.mkelem("dt");
hoplon.core.em = hoplon.core.mkelem("em");
hoplon.core.embed = hoplon.core.mkelem("embed");
hoplon.core.fieldset = hoplon.core.mkelem("fieldset");
hoplon.core.figcaption = hoplon.core.mkelem("figcaption");
hoplon.core.figure = hoplon.core.mkelem("figure");
hoplon.core.footer = hoplon.core.mkelem("footer");
hoplon.core.form = hoplon.core.mkelem("form");
hoplon.core.h1 = hoplon.core.mkelem("h1");
hoplon.core.h2 = hoplon.core.mkelem("h2");
hoplon.core.h3 = hoplon.core.mkelem("h3");
hoplon.core.h4 = hoplon.core.mkelem("h4");
hoplon.core.h5 = hoplon.core.mkelem("h5");
hoplon.core.h6 = hoplon.core.mkelem("h6");
hoplon.core.header = hoplon.core.mkelem("header");
hoplon.core.hgroup = hoplon.core.mkelem("hgroup");
hoplon.core.hr = hoplon.core.mkelem("hr");
hoplon.core.i = hoplon.core.mkelem("i");
hoplon.core.iframe = hoplon.core.mkelem("iframe");
hoplon.core.img = hoplon.core.mkelem("img");
hoplon.core.input = hoplon.core.mkelem("input");
hoplon.core.ins = hoplon.core.mkelem("ins");
hoplon.core.kbd = hoplon.core.mkelem("kbd");
hoplon.core.keygen = hoplon.core.mkelem("keygen");
hoplon.core.label = hoplon.core.mkelem("label");
hoplon.core.legend = hoplon.core.mkelem("legend");
hoplon.core.li = hoplon.core.mkelem("li");
hoplon.core.link = hoplon.core.mkelem("link");
hoplon.core.main = hoplon.core.mkelem("main");
hoplon.core.html_map = hoplon.core.mkelem("map");
hoplon.core.mark = hoplon.core.mkelem("mark");
hoplon.core.menu = hoplon.core.mkelem("menu");
hoplon.core.menuitem = hoplon.core.mkelem("menuitem");
hoplon.core.html_meta = hoplon.core.mkelem("meta");
hoplon.core.meter = hoplon.core.mkelem("meter");
hoplon.core.multicol = hoplon.core.mkelem("multicol");
hoplon.core.nav = hoplon.core.mkelem("nav");
hoplon.core.noframes = hoplon.core.mkelem("noframes");
hoplon.core.noscript = hoplon.core.mkelem("noscript");
hoplon.core.html_object = hoplon.core.mkelem("object");
hoplon.core.ol = hoplon.core.mkelem("ol");
hoplon.core.optgroup = hoplon.core.mkelem("optgroup");
hoplon.core.option = hoplon.core.mkelem("option");
hoplon.core.output = hoplon.core.mkelem("output");
hoplon.core.p = hoplon.core.mkelem("p");
hoplon.core.param = hoplon.core.mkelem("param");
hoplon.core.picture = hoplon.core.mkelem("picture");
hoplon.core.pre = hoplon.core.mkelem("pre");
hoplon.core.progress = hoplon.core.mkelem("progress");
hoplon.core.q = hoplon.core.mkelem("q");
hoplon.core.rp = hoplon.core.mkelem("rp");
hoplon.core.rt = hoplon.core.mkelem("rt");
hoplon.core.rtc = hoplon.core.mkelem("rtc");
hoplon.core.ruby = hoplon.core.mkelem("ruby");
hoplon.core.s = hoplon.core.mkelem("s");
hoplon.core.samp = hoplon.core.mkelem("samp");
hoplon.core.script = hoplon.core.mkelem("script");
hoplon.core.section = hoplon.core.mkelem("section");
hoplon.core.select = hoplon.core.mkelem("select");
hoplon.core.shadow = hoplon.core.mkelem("shadow");
hoplon.core.small = hoplon.core.mkelem("small");
hoplon.core.source = hoplon.core.mkelem("source");
hoplon.core.span = hoplon.core.mkelem("span");
hoplon.core.strong = hoplon.core.mkelem("strong");
hoplon.core.style = hoplon.core.mkelem("style");
hoplon.core.sub = hoplon.core.mkelem("sub");
hoplon.core.summary = hoplon.core.mkelem("summary");
hoplon.core.sup = hoplon.core.mkelem("sup");
hoplon.core.table = hoplon.core.mkelem("table");
hoplon.core.tbody = hoplon.core.mkelem("tbody");
hoplon.core.td = hoplon.core.mkelem("td");
hoplon.core.template = hoplon.core.mkelem("template");
hoplon.core.textarea = hoplon.core.mkelem("textarea");
hoplon.core.tfoot = hoplon.core.mkelem("tfoot");
hoplon.core.th = hoplon.core.mkelem("th");
hoplon.core.thead = hoplon.core.mkelem("thead");
hoplon.core.html_time = hoplon.core.mkelem("time");
hoplon.core.title = hoplon.core.mkelem("title");
hoplon.core.tr = hoplon.core.mkelem("tr");
hoplon.core.track = hoplon.core.mkelem("track");
hoplon.core.u = hoplon.core.mkelem("u");
hoplon.core.ul = hoplon.core.mkelem("ul");
hoplon.core.html_var = hoplon.core.mkelem("var");
hoplon.core.video = hoplon.core.mkelem("video");
hoplon.core.wbr = hoplon.core.mkelem("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__10312_SHARP_){
return document.createTextNode(p1__10312_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__10313_SHARP_){
return document.createComment(p1__10313_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
if((typeof hoplon !== 'undefined') && (typeof hoplon.core !== 'undefined') && (typeof hoplon.core.elem_BANG_ !== 'undefined')){
} else {
hoplon.core.elem_BANG_ = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","elem!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
hoplon.core.elem_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,value){
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,(function (p1__10315_SHARP_,p2__10314_SHARP_){
return hoplon.core._do_BANG_(elem,key,p2__10314_SHARP_);
}));
} else {
if(cljs.core.fn_QMARK_(value)){
return hoplon.core._on_BANG_(elem,key,value);
} else {
return hoplon.core._do_BANG_(elem,key,value);

}
}
}));
if((typeof hoplon !== 'undefined') && (typeof hoplon.core !== 'undefined') && (typeof hoplon.core.do_BANG_ !== 'undefined')){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__10316 = elem;
var G__10317 = cljs.core.cst$kw$attr;
var G__10318 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10316,G__10317,G__10318) : hoplon.core.do_BANG_.call(null,G__10316,G__10317,G__10318));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
if((typeof hoplon !== 'undefined') && (typeof hoplon.core !== 'undefined') && (typeof hoplon.core.on_BANG_ !== 'undefined')){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return elem.addEventListener(cljs.core.name(event),callback);
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return elem.addEventListener(cljs.core.name(event),callback);
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template `tpl` is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
var items_seq = (function (){var fexpr__10323 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__10321,G__10322){
return (G__10321.cljs$core$IFn$_invoke$arity$1 ? G__10321.cljs$core$IFn$_invoke$arity$1(G__10322) : G__10321.call(null,G__10322));
});})(on_deck))
);
return (fexpr__10323.cljs$core$IFn$_invoke$arity$2 ? fexpr__10323.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__10323.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__10319_SHARP_){
var fexpr__10327 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__10326,G__10325,G__10324){
return (G__10324.cljs$core$IFn$_invoke$arity$3 ? G__10324.cljs$core$IFn$_invoke$arity$3(G__10325,G__10326,null) : G__10324.call(null,G__10325,G__10326,null));
});})(on_deck,items_seq))
);
return (fexpr__10327.cljs$core$IFn$_invoke$arity$3 ? fexpr__10327.cljs$core$IFn$_invoke$arity$3(p1__10319_SHARP_,items_seq,cljs.core.nth) : fexpr__10327.call(null,p1__10319_SHARP_,items_seq,cljs.core.nth));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__10320_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__10320_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__10320_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__10328 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__10329 = null;
var count__10330 = (0);
var i__10331 = (0);
while(true){
if((i__10331 < count__10330)){
var i = chunk__10329.cljs$core$IIndexed$_nth$arity$2(null,i__10331);
var e_10334 = (function (){var or__3949__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var G__10332 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__10332) : tpl.call(null,G__10332));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_10334);


var G__10335 = seq__10328;
var G__10336 = chunk__10329;
var G__10337 = count__10330;
var G__10338 = (i__10331 + (1));
seq__10328 = G__10335;
chunk__10329 = G__10336;
count__10330 = G__10337;
i__10331 = G__10338;
continue;
} else {
var temp__5559__auto__ = cljs.core.seq(seq__10328);
if(temp__5559__auto__){
var seq__10328__$1 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10328__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10328__$1);
var G__10339 = cljs.core.chunk_rest(seq__10328__$1);
var G__10340 = c__4351__auto__;
var G__10341 = cljs.core.count(c__4351__auto__);
var G__10342 = (0);
seq__10328 = G__10339;
chunk__10329 = G__10340;
count__10330 = G__10341;
i__10331 = G__10342;
continue;
} else {
var i = cljs.core.first(seq__10328__$1);
var e_10343 = (function (){var or__3949__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var G__10333 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__10333) : tpl.call(null,G__10333));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_10343);


var G__10344 = cljs.core.next(seq__10328__$1);
var G__10345 = null;
var G__10346 = (0);
var G__10347 = (0);
seq__10328 = G__10344;
chunk__10329 = G__10345;
count__10330 = G__10346;
i__10331 = G__10347;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__4408__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__4408__auto__)){
var e_10348 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_10348);

var G__10349 = (_ + (1));
_ = G__10349;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
