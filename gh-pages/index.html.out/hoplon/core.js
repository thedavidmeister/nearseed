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
var a__4405__auto__ = x;
var l__4406__auto__ = a__4405__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4406__auto__)){
var G__9985 = (i + (1));
var G__9986 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__9985;
ret = G__9986;
continue;
} else {
return ret;
}
break;
}
});
/**
 * Takes a sequential collection and returns a flattened vector of any nested
 *   sequential collections.
 */
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__9988 = arguments.length;
switch (G__9988) {
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

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1 = (function (x){
return cljs.core.persistent_BANG_(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(cljs.core.transient$(cljs.core.PersistentVector.EMPTY),x));
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hoplon.core.vflatten,acc,x);
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,x);
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;

hoplon.core.remove_nil = (function hoplon$core$remove_nil(nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__9991_SHARP_,p2__9990_SHARP_){
if(cljs.core.truth_(p2__9990_SHARP_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__9991_SHARP_,p2__9990_SHARP_);
} else {
return p1__9991_SHARP_;
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
var G__9998 = new_kids__$1;
var vec__10000 = G__9998;
var seq__10001 = cljs.core.seq(vec__10000);
var first__10002 = cljs.core.first(seq__10001);
var seq__10001__$1 = cljs.core.next(seq__10001);
var new_kid = first__10002;
var nks = seq__10001__$1;
var G__9999 = hoplon.core.child_vec(elem);
var vec__10003 = G__9999;
var seq__10004 = cljs.core.seq(vec__10003);
var first__10005 = cljs.core.first(seq__10004);
var seq__10004__$1 = cljs.core.next(seq__10004);
var old_kid = first__10005;
var oks = seq__10004__$1;
var old_kids = vec__10003;
var G__9998__$1 = G__9998;
var G__9999__$1 = G__9999;
while(true){
var vec__10006 = G__9998__$1;
var seq__10007 = cljs.core.seq(vec__10006);
var first__10008 = cljs.core.first(seq__10007);
var seq__10007__$1 = cljs.core.next(seq__10007);
var new_kid__$1 = first__10008;
var nks__$1 = seq__10007__$1;
var vec__10009 = G__9999__$1;
var seq__10010 = cljs.core.seq(vec__10009);
var first__10011 = cljs.core.first(seq__10010);
var seq__10010__$1 = cljs.core.next(seq__10010);
var old_kid__$1 = first__10011;
var oks__$1 = seq__10010__$1;
var old_kids__$1 = vec__10009;
if(cljs.core.truth_((function (){var or__3949__auto__ = new_kid__$1;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return old_kid__$1;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_kid__$1,old_kid__$1)){
var G__10012 = nks__$1;
var G__10013 = oks__$1;
G__9998__$1 = G__10012;
G__9999__$1 = G__10013;
continue;
} else {
if(cljs.core.not(old_kid__$1)){
elem.appendChild(new_kid__$1);

var G__10014 = nks__$1;
var G__10015 = oks__$1;
G__9998__$1 = G__10014;
G__9999__$1 = G__10015;
continue;
} else {
if(cljs.core.not(new_kid__$1)){
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(old_kid__$1) : new_QMARK_.call(null,old_kid__$1)))){
} else {
elem.removeChild(old_kid__$1);
}

var G__10016 = nks__$1;
var G__10017 = oks__$1;
G__9998__$1 = G__10016;
G__9999__$1 = G__10017;
continue;
} else {
elem.insertBefore(new_kid__$1,old_kid__$1);

var G__10018 = nks__$1;
var G__10019 = old_kids__$1;
G__9998__$1 = G__10018;
G__9999__$1 = G__10019;
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
var G__10021 = arguments.length;
switch (G__10021) {
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
var G__10022_10025 = init;
var G__10023_10026 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10022_10025,G__10023_10026) : f.call(null,G__10022_10025,G__10023_10026));

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
var __GT_map = (function (p1__10027_SHARP_){
return cljs.core.zipmap(p1__10027_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
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
var G__10029 = arguments.length;
switch (G__10029) {
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
var G__10031_10043 = this$;
var G__10032_10044 = "_hoplonWhenDom";
var G__10033_10045 = [f];
goog.object.set(G__10031_10043,G__10032_10044,G__10033_10045);

return setTimeout(((function (temp__5557__auto__){
return (function (){
var fexpr__10038 = ((function (temp__5557__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
return setTimeout(((function (temp__5557__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5557__auto__))
,(20));
} else {
var seq__10039_10046 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__10040_10047 = null;
var count__10041_10048 = (0);
var i__10042_10049 = (0);
while(true){
if((i__10042_10049 < count__10041_10048)){
var f_10050__$1 = chunk__10040_10047.cljs$core$IIndexed$_nth$arity$2(null,i__10042_10049);
(f_10050__$1.cljs$core$IFn$_invoke$arity$0 ? f_10050__$1.cljs$core$IFn$_invoke$arity$0() : f_10050__$1.call(null));


var G__10051 = seq__10039_10046;
var G__10052 = chunk__10040_10047;
var G__10053 = count__10041_10048;
var G__10054 = (i__10042_10049 + (1));
seq__10039_10046 = G__10051;
chunk__10040_10047 = G__10052;
count__10041_10048 = G__10053;
i__10042_10049 = G__10054;
continue;
} else {
var temp__5559__auto___10055 = cljs.core.seq(seq__10039_10046);
if(temp__5559__auto___10055){
var seq__10039_10056__$1 = temp__5559__auto___10055;
if(cljs.core.chunked_seq_QMARK_(seq__10039_10056__$1)){
var c__4351__auto___10057 = cljs.core.chunk_first(seq__10039_10056__$1);
var G__10058 = cljs.core.chunk_rest(seq__10039_10056__$1);
var G__10059 = c__4351__auto___10057;
var G__10060 = cljs.core.count(c__4351__auto___10057);
var G__10061 = (0);
seq__10039_10046 = G__10058;
chunk__10040_10047 = G__10059;
count__10041_10048 = G__10060;
i__10042_10049 = G__10061;
continue;
} else {
var f_10062__$1 = cljs.core.first(seq__10039_10056__$1);
(f_10062__$1.cljs$core$IFn$_invoke$arity$0 ? f_10062__$1.cljs$core$IFn$_invoke$arity$0() : f_10062__$1.call(null));


var G__10063 = cljs.core.next(seq__10039_10056__$1);
var G__10064 = null;
var G__10065 = (0);
var G__10066 = (0);
seq__10039_10046 = G__10063;
chunk__10040_10047 = G__10064;
count__10041_10048 = G__10065;
i__10042_10049 = G__10066;
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
return fexpr__10038();
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
var G__10072 = args;
var vec__10073 = G__10072;
var seq__10074 = cljs.core.seq(vec__10073);
var first__10075 = cljs.core.first(seq__10074);
var seq__10074__$1 = cljs.core.next(seq__10074);
var arg = first__10075;
var args__$1 = seq__10074__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__10072__$1 = G__10072;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__10076 = G__10072__$1;
var seq__10077 = cljs.core.seq(vec__10076);
var first__10078 = cljs.core.first(seq__10077);
var seq__10077__$1 = cljs.core.next(seq__10077);
var arg__$1 = first__10078;
var args__$2 = seq__10077__$1;
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
var G__10079 = cljs.core.reduce_kv(cljs.core.assoc_BANG_,attr__$2,arg__$1);
var G__10080 = kids__$2;
var G__10081 = args__$2;
attr__$1 = G__10079;
kids__$1 = G__10080;
G__10072__$1 = G__10081;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__10082 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__10072__$1,attr__$2,kids__$2,vec__10076,seq__10077,first__10078,seq__10077__$1,arg__$1,args__$2,attr,kids,G__10072,vec__10073,seq__10074,first__10075,seq__10074__$1,arg,args__$1){
return (function (p1__10067_SHARP_,p2__10068_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__10067_SHARP_,p2__10068_SHARP_,true);
});})(attr__$1,kids__$1,G__10072__$1,attr__$2,kids__$2,vec__10076,seq__10077,first__10078,seq__10077__$1,arg__$1,args__$2,attr,kids,G__10072,vec__10073,seq__10074,first__10075,seq__10074__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__10083 = kids__$2;
var G__10084 = args__$2;
attr__$1 = G__10082;
kids__$1 = G__10083;
G__10072__$1 = G__10084;
continue;
} else {
if(cljs.core.truth_((hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.attribute_QMARK_.call(null,arg__$1)))){
var G__10085 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__10086 = kids__$2;
var G__10087 = cljs.core.rest(args__$2);
attr__$1 = G__10085;
kids__$1 = G__10086;
G__10072__$1 = G__10087;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__10088 = attr__$2;
var G__10089 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__10090 = args__$2;
attr__$1 = G__10088;
kids__$1 = G__10089;
G__10072__$1 = G__10090;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__10091 = attr__$2;
var G__10092 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__10093 = args__$2;
attr__$1 = G__10091;
kids__$1 = G__10092;
G__10072__$1 = G__10093;
continue;
} else {
var G__10094 = attr__$2;
var G__10095 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__10096 = args__$2;
attr__$1 = G__10094;
kids__$1 = G__10095;
G__10072__$1 = G__10096;
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
 *   * `elem`  - the target DOM Element containing the attribute
 *   * `key`   - the attribute keyword
 *   * `value` - the attribute value
 * 
 * The kw-dispatcher will attempt to dispatch agains the key argument.
 * 
 * ex. when key is `:namespace/key` will dispatch on `:namespace/key`
 */
hoplon.core.kw_dispatcher = (function hoplon$core$kw_dispatcher(elem,key,value){
return key;
});
/**
 * A multi-method dispatch function.
 * 
 * Will dispatch against three arguments:
 * 
 *   * `elem`  - the target DOM Element containing the attribute
 *   * `key`   - the attribute keyword
 *   * `value` - the attribute value
 * 
 * The ns-dispatcher will attempt to dispatch agains the key namespace or key.
 * 
 * ex. when key is `:namespace/key` will dispatch on `:namespace/default` otherwise `:namespace/key`
 */
hoplon.core.ns_dispatcher = (function hoplon$core$ns_dispatcher(elem,key,value){
var temp__5557__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5557__auto__)){
var n = temp__5557__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"default");
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

var G__10098_10105 = hoplon.core._node;
var G__10099_10106 = "string";
var G__10100_10107 = ((function (G__10098_10105,G__10099_10106){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__10098_10105,G__10099_10106))
;
goog.object.set(G__10098_10105,G__10099_10106,G__10100_10107);

goog.object.set(hoplon.core.IHoplonNode,"number",true);

var G__10101_10108 = hoplon.core._node;
var G__10102_10109 = "number";
var G__10103_10110 = ((function (G__10101_10108,G__10102_10109){
return (function (this$){
var G__10104 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__10104) : hoplon.core.$text.call(null,G__10104));
});})(G__10101_10108,G__10102_10109))
;
goog.object.set(G__10101_10108,G__10102_10109,G__10103_10110);
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
var opts10114_10142 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts10114_10142){
return (function (ret__9644__auto__,p__10115){
var vec__10116 = p__10115;
var ___9645__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10116,(0),null);
var f__9646__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10116,(1),null);
var sym__9647__auto__ = (f__9646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9646__auto__.cljs$core$IFn$_invoke$arity$0() : f__9646__auto__.call(null));
var G__10119 = ret__9644__auto__;
if(cljs.core.truth_(sym__9647__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10119,sym__9647__auto__);
} else {
return G__10119;
}
});})(opts10114_10142))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts10114_10142){
return (function (p1__9643__9648__auto__){
var G__10121 = cljs.core.first(p1__9643__9648__auto__);
var fexpr__10120 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts10114_10142);
return (fexpr__10120.cljs$core$IFn$_invoke$arity$1 ? fexpr__10120.cljs$core$IFn$_invoke$arity$1(G__10121) : fexpr__10120.call(null,G__10121));
});})(opts10114_10142))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts10114_10142){
return (function (){
var checked__9612__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,new cljs.core.Var(function(){return hoplon.core._elem_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_elem_BANG_,"/home/thedavidmeister/.boot/cache/tmp/home/thedavidmeister/nearseed/hxd/50rfo7/index.html.out/hoplon/core.cljs",14,1,80,80,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._elem_BANG_)?hoplon.core._elem_BANG_.cljs$lang$test:null)])),opts10114_10142);
if(cljs.core.truth_(checked__9612__auto__)){
hoplon.core._elem_BANG_ = checked__9612__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_;
});})(opts10114_10142))
], null)))));

var opts10124_10143 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts10124_10143){
return (function (ret__9644__auto__,p__10125){
var vec__10126 = p__10125;
var ___9645__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10126,(0),null);
var f__9646__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10126,(1),null);
var sym__9647__auto__ = (f__9646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9646__auto__.cljs$core$IFn$_invoke$arity$0() : f__9646__auto__.call(null));
var G__10129 = ret__9644__auto__;
if(cljs.core.truth_(sym__9647__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10129,sym__9647__auto__);
} else {
return G__10129;
}
});})(opts10124_10143))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts10124_10143){
return (function (p1__9643__9648__auto__){
var G__10131 = cljs.core.first(p1__9643__9648__auto__);
var fexpr__10130 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts10124_10143);
return (fexpr__10130.cljs$core$IFn$_invoke$arity$1 ? fexpr__10130.cljs$core$IFn$_invoke$arity$1(G__10131) : fexpr__10130.call(null,G__10131));
});})(opts10124_10143))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts10124_10143){
return (function (){
var checked__9612__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/home/thedavidmeister/.boot/cache/tmp/home/thedavidmeister/nearseed/hxd/50rfo7/index.html.out/hoplon/core.cljs",12,1,70,70,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts10124_10143);
if(cljs.core.truth_(checked__9612__auto__)){
hoplon.core._do_BANG_ = checked__9612__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts10124_10143))
], null)))));

var opts10134 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts10134){
return (function (ret__9644__auto__,p__10135){
var vec__10136 = p__10135;
var ___9645__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10136,(0),null);
var f__9646__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10136,(1),null);
var sym__9647__auto__ = (f__9646__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9646__auto__.cljs$core$IFn$_invoke$arity$0() : f__9646__auto__.call(null));
var G__10139 = ret__9644__auto__;
if(cljs.core.truth_(sym__9647__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10139,sym__9647__auto__);
} else {
return G__10139;
}
});})(opts10134))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts10134){
return (function (p1__9643__9648__auto__){
var G__10141 = cljs.core.first(p1__9643__9648__auto__);
var fexpr__10140 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts10134);
return (fexpr__10140.cljs$core$IFn$_invoke$arity$1 ? fexpr__10140.cljs$core$IFn$_invoke$arity$1(G__10141) : fexpr__10140.call(null,G__10141));
});})(opts10134))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts10134){
return (function (){
var checked__9612__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/home/thedavidmeister/.boot/cache/tmp/home/thedavidmeister/nearseed/hxd/50rfo7/index.html.out/hoplon/core.cljs",12,1,75,75,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts10134);
if(cljs.core.truth_(checked__9612__auto__)){
hoplon.core._on_BANG_ = checked__9612__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts10134))
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
var x10154 = elem;
x10154.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

x10154.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = ((function (x10154){
return (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<HoplonElement: ",this$__$1.tagName,">"], 0));
});})(x10154))
;

x10154.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

x10154.cljs$core$ILookup$_lookup$arity$2 = ((function (x10154){
return (function (this$,k){
var this$__$1 = this;
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(k))){
return this$__$1.getAttribute(cljs.core.name(k));
} else {
var G__10155 = this$__$1.children;
var G__10156 = k;
return goog.object.get(G__10155,G__10156);
}
});})(x10154))
;

x10154.cljs$core$ILookup$_lookup$arity$3 = ((function (x10154){
return (function (this$,k,not_found){
var this$__$1 = this;
var or__3949__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(this$__$1,k);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return not_found;
}
});})(x10154))
;

x10154.hoplon$core$IHoplonElement$ = cljs.core.PROTOCOL_SENTINEL;

x10154.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 = ((function (x10154){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__10157 = cljs.core.seq(kvs);
var chunk__10159 = null;
var count__10160 = (0);
var i__10161 = (0);
while(true){
if((i__10161 < count__10160)){
var vec__10163 = chunk__10159.cljs$core$IIndexed$_nth$arity$2(null,i__10161);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10163,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10163,(1),null);
var k_10185__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_10185__$1);
} else {
e.setAttribute(k_10185__$1,((v === true)?k_10185__$1:v));
}


var G__10186 = seq__10157;
var G__10187 = chunk__10159;
var G__10188 = count__10160;
var G__10189 = (i__10161 + (1));
seq__10157 = G__10186;
chunk__10159 = G__10187;
count__10160 = G__10188;
i__10161 = G__10189;
continue;
} else {
var temp__5559__auto__ = cljs.core.seq(seq__10157);
if(temp__5559__auto__){
var seq__10157__$1 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10157__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10157__$1);
var G__10190 = cljs.core.chunk_rest(seq__10157__$1);
var G__10191 = c__4351__auto__;
var G__10192 = cljs.core.count(c__4351__auto__);
var G__10193 = (0);
seq__10157 = G__10190;
chunk__10159 = G__10191;
count__10160 = G__10192;
i__10161 = G__10193;
continue;
} else {
var vec__10166 = cljs.core.first(seq__10157__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10166,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10166,(1),null);
var k_10194__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_10194__$1);
} else {
e.setAttribute(k_10194__$1,((v === true)?k_10194__$1:v));
}


var G__10195 = cljs.core.next(seq__10157__$1);
var G__10196 = null;
var G__10197 = (0);
var G__10198 = (0);
seq__10157 = G__10195;
chunk__10159 = G__10196;
count__10160 = G__10197;
i__10161 = G__10198;
continue;
}
} else {
return null;
}
}
break;
}
});})(x10154))
;

x10154.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 = ((function (x10154){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__10169 = cljs.core.seq(kvs);
var chunk__10170 = null;
var count__10171 = (0);
var i__10172 = (0);
while(true){
if((i__10172 < count__10171)){
var vec__10173 = chunk__10170.cljs$core$IIndexed$_nth$arity$2(null,i__10172);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,(1),null);
var G__10176_10199 = e.style;
var G__10177_10200 = cljs.core.name(k);
var G__10178_10201 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__10176_10199,G__10177_10200,G__10178_10201);


var G__10202 = seq__10169;
var G__10203 = chunk__10170;
var G__10204 = count__10171;
var G__10205 = (i__10172 + (1));
seq__10169 = G__10202;
chunk__10170 = G__10203;
count__10171 = G__10204;
i__10172 = G__10205;
continue;
} else {
var temp__5559__auto__ = cljs.core.seq(seq__10169);
if(temp__5559__auto__){
var seq__10169__$1 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10169__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10169__$1);
var G__10206 = cljs.core.chunk_rest(seq__10169__$1);
var G__10207 = c__4351__auto__;
var G__10208 = cljs.core.count(c__4351__auto__);
var G__10209 = (0);
seq__10169 = G__10206;
chunk__10170 = G__10207;
count__10171 = G__10208;
i__10172 = G__10209;
continue;
} else {
var vec__10179 = cljs.core.first(seq__10169__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,(1),null);
var G__10182_10210 = e.style;
var G__10183_10211 = cljs.core.name(k);
var G__10184_10212 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__10182_10210,G__10183_10211,G__10184_10212);


var G__10213 = cljs.core.next(seq__10169__$1);
var G__10214 = null;
var G__10215 = (0);
var G__10216 = (0);
seq__10169 = G__10213;
chunk__10170 = G__10214;
count__10171 = G__10215;
i__10172 = G__10216;
continue;
}
} else {
return null;
}
}
break;
}
});})(x10154))
;

x10154.hoplon$core$IHoplonElement$_hoplon_kids$arity$1 = ((function (x10154){
return (function (this$){
var this$__$1 = this;
var temp__5557__auto__ = this$__$1.hoplonKids;
if(cljs.core.truth_(temp__5557__auto__)){
var hl_kids = temp__5557__auto__;
return hl_kids;
} else {
var kids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids,((function (kids,temp__5557__auto__,this$__$1,x10154){
return (function (p1__10147_SHARP_,p2__10146_SHARP_){
return hoplon.core.set_dom_children_BANG_(this$__$1,p2__10146_SHARP_);
});})(kids,temp__5557__auto__,this$__$1,x10154))
);

return kids;
}
});})(x10154))
;

x10154.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 = ((function (x10154){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_10217 = hoplon.core._hoplon_kids(this$__$1);
var i_10218 = cljs.core.count(cljs.core.deref(kids_10217));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_10217,i_10218,child__$1,this$__$1,x10154){
return (function (p1__10149_SHARP_,p2__10148_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_10217,cljs.core.assoc,i_10218,p2__10148_SHARP_);
});})(kids_10217,i_10218,child__$1,this$__$1,x10154))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_10217,cljs.core.assoc,i_10218,child__$1);
}

return child__$1;
});})(x10154))
;

x10154.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 = ((function (x10154){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_10219 = hoplon.core._hoplon_kids(this$__$1);
var before_count_10220 = cljs.core.count(cljs.core.deref(kids_10219));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_10219,((function (kids_10219,before_count_10220,child__$1,this$__$1,x10154){
return (function (p1__10150_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.deref(child__$1)),p1__10150_SHARP_));
});})(kids_10219,before_count_10220,child__$1,this$__$1,x10154))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_10219,((function (kids_10219,before_count_10220,child__$1,this$__$1,x10154){
return (function (p1__10151_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,child__$1),p1__10151_SHARP_));
});})(kids_10219,before_count_10220,child__$1,this$__$1,x10154))
);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(kids_10219)),(before_count_10220 - (1)))){
} else {
throw (new Error("Attempted to remove a node that is not a child of parent."));
}

return child__$1;
});})(x10154))
;

x10154.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 = ((function (x10154){
return (function (this$,new$,existing){
var this$__$1 = this;
var existing__$1 = existing;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (existing__$1,this$__$1,x10154){
return (function (p1__10152_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (existing__$1,this$__$1,x10154){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing__$1)){
return new$;
} else {
return el;
}
});})(existing__$1,this$__$1,x10154))
,p1__10152_SHARP_);
});})(existing__$1,this$__$1,x10154))
);

return existing__$1;
});})(x10154))
;

x10154.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 = ((function (x10154){
return (function (this$,new$,existing){
var this$__$1 = this;
var new$__$1 = new$;
if(cljs.core.not(existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hoplon.core._hoplon_kids(this$__$1),cljs.core.conj,new$__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$__$1,existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (new$__$1,this$__$1,x10154){
return (function (p1__10153_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (new$__$1,this$__$1,x10154){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new$__$1,el], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null);
}
});})(new$__$1,this$__$1,x10154))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__10153_SHARP_], 0)));
});})(new$__$1,this$__$1,x10154))
);
} else {
}
}

return new$__$1;
});})(x10154))
;

return x10154;
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
var G__10226 = arguments.length;
switch (G__10226) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___10228 = arguments.length;
var i__4532__auto___10229 = (0);
while(true){
if((i__4532__auto___10229 < len__4531__auto___10228)){
args_arr__4546__auto__.push((arguments[i__4532__auto___10229]));

var G__10230 = (i__4532__auto___10229 + (1));
i__4532__auto___10229 = G__10230;
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
hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq10222){
var G__10223 = cljs.core.first(seq10222);
var seq10222__$1 = cljs.core.next(seq10222);
var G__10224 = cljs.core.first(seq10222__$1);
var seq10222__$2 = cljs.core.next(seq10222__$1);
var G__10225 = cljs.core.first(seq10222__$2);
var seq10222__$3 = cljs.core.next(seq10222__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10223,G__10224,G__10225,seq10222__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__10236 = arguments.length;
switch (G__10236) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___10238 = arguments.length;
var i__4532__auto___10239 = (0);
while(true){
if((i__4532__auto___10239 < len__4531__auto___10238)){
args_arr__4546__auto__.push((arguments[i__4532__auto___10239]));

var G__10240 = (i__4532__auto___10239 + (1));
i__4532__auto___10239 = G__10240;
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
hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq10232){
var G__10233 = cljs.core.first(seq10232);
var seq10232__$1 = cljs.core.next(seq10232);
var G__10234 = cljs.core.first(seq10232__$1);
var seq10232__$2 = cljs.core.next(seq10232__$1);
var G__10235 = cljs.core.first(seq10232__$2);
var seq10232__$3 = cljs.core.next(seq10232__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10233,G__10234,G__10235,seq10232__$3);
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
return hoplon.core._elem_BANG_(this$,cljs.core.cst$kw$hoplon_SLASH_attr,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,kids){
return hoplon.core._elem_BANG_(this$,cljs.core.cst$kw$hoplon_SLASH_kids,kids);
});
hoplon.core.invoke_BANG_ = (function hoplon$core$invoke_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10243 = arguments.length;
var i__4532__auto___10244 = (0);
while(true){
if((i__4532__auto___10244 < len__4531__auto___10243)){
args__4534__auto__.push((arguments[i__4532__auto___10244]));

var G__10245 = (i__4532__auto___10244 + (1));
i__4532__auto___10244 = G__10245;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return hoplon.core._elem_BANG_(this$,cljs.core.cst$kw$hoplon_SLASH_invoke,args);
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq10241){
var G__10242 = cljs.core.first(seq10241);
var seq10241__$1 = cljs.core.next(seq10241);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10242,seq10241__$1);
});

if((typeof hoplon !== 'undefined') && (typeof hoplon.core !== 'undefined') && (typeof hoplon.core.elem_BANG_ !== 'undefined')){
} else {
hoplon.core.elem_BANG_ = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","elem!"),hoplon.core.ns_dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
hoplon.core.elem_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,value){
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,(function (p1__10247_SHARP_,p2__10246_SHARP_){
return hoplon.core._do_BANG_(elem,key,p2__10246_SHARP_);
}));
} else {
if(cljs.core.fn_QMARK_(value)){
return hoplon.core._on_BANG_(elem,key,value);
} else {
return hoplon.core._do_BANG_(elem,key,value);

}
}
}));
if((typeof hoplon !== 'undefined') && (typeof hoplon.core !== 'undefined') && (typeof hoplon.core.hl_BANG_ !== 'undefined')){
} else {
hoplon.core.hl_BANG_ = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","hl!"),hoplon.core.kw_dispatcher,cljs.core.cst$kw$default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
hoplon.core.elem_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon_SLASH_default,(function (elem,key,args){
return (hoplon.core.hl_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.hl_BANG_.cljs$core$IFn$_invoke$arity$3(elem,key,args) : hoplon.core.hl_BANG_.call(null,elem,key,args));
}));
hoplon.core.hl_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon_SLASH_singleton,(function (elem,key,args){
var vec__10248 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10248,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10248,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$hoplon_SLASH_static.cljs$core$IFn$_invoke$arity$1(attr))){
return elem;
} else {
var G__10251 = hoplon.core.__GT_hoplon(elem);
var G__10252_10261 = G__10251;
var G__10253_10262 = cljs.core.cst$kw$hoplon_SLASH_reset;
var G__10254_10263 = null;
(hoplon.core.hl_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.hl_BANG_.cljs$core$IFn$_invoke$arity$3(G__10252_10261,G__10253_10262,G__10254_10263) : hoplon.core.hl_BANG_.call(null,G__10252_10261,G__10253_10262,G__10254_10263));

var G__10255_10264 = G__10251;
var G__10256_10265 = cljs.core.cst$kw$hoplon_SLASH_attr;
var G__10257_10266 = attr;
(hoplon.core.hl_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.hl_BANG_.cljs$core$IFn$_invoke$arity$3(G__10255_10264,G__10256_10265,G__10257_10266) : hoplon.core.hl_BANG_.call(null,G__10255_10264,G__10256_10265,G__10257_10266));

var G__10258_10267 = G__10251;
var G__10259_10268 = cljs.core.cst$kw$hoplon_SLASH_kids;
var G__10260_10269 = kids;
(hoplon.core.hl_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.hl_BANG_.cljs$core$IFn$_invoke$arity$3(G__10258_10267,G__10259_10268,G__10260_10269) : hoplon.core.hl_BANG_.call(null,G__10258_10267,G__10259_10268,G__10260_10269));

return G__10251;
}
}));
hoplon.core.hl_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon_SLASH_reset,(function (elem,key,val){
var elem__$1 = elem;
var kids_10274 = hoplon.core._hoplon_kids(elem__$1);
var seq__10270_10275 = cljs.core.seq(cljs.core.keys(kids_10274.watches));
var chunk__10271_10276 = null;
var count__10272_10277 = (0);
var i__10273_10278 = (0);
while(true){
if((i__10273_10278 < count__10272_10277)){
var w_10279 = chunk__10271_10276.cljs$core$IIndexed$_nth$arity$2(null,i__10273_10278);
cljs.core.remove_watch(kids_10274,w_10279);


var G__10280 = seq__10270_10275;
var G__10281 = chunk__10271_10276;
var G__10282 = count__10272_10277;
var G__10283 = (i__10273_10278 + (1));
seq__10270_10275 = G__10280;
chunk__10271_10276 = G__10281;
count__10272_10277 = G__10282;
i__10273_10278 = G__10283;
continue;
} else {
var temp__5559__auto___10284 = cljs.core.seq(seq__10270_10275);
if(temp__5559__auto___10284){
var seq__10270_10285__$1 = temp__5559__auto___10284;
if(cljs.core.chunked_seq_QMARK_(seq__10270_10285__$1)){
var c__4351__auto___10286 = cljs.core.chunk_first(seq__10270_10285__$1);
var G__10287 = cljs.core.chunk_rest(seq__10270_10285__$1);
var G__10288 = c__4351__auto___10286;
var G__10289 = cljs.core.count(c__4351__auto___10286);
var G__10290 = (0);
seq__10270_10275 = G__10287;
chunk__10271_10276 = G__10288;
count__10272_10277 = G__10289;
i__10273_10278 = G__10290;
continue;
} else {
var w_10291 = cljs.core.first(seq__10270_10285__$1);
cljs.core.remove_watch(kids_10274,w_10291);


var G__10292 = cljs.core.next(seq__10270_10285__$1);
var G__10293 = null;
var G__10294 = (0);
var G__10295 = (0);
seq__10270_10275 = G__10292;
chunk__10271_10276 = G__10293;
count__10272_10277 = G__10294;
i__10273_10278 = G__10295;
continue;
}
} else {
}
}
break;
}

elem__$1.hoplonKids = val;

return elem__$1;
}));
hoplon.core.hl_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon_SLASH_invoke,(function (elem,key,args){
var vec__10296 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10296,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10296,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$hoplon_SLASH_static.cljs$core$IFn$_invoke$arity$1(attr))){
return elem;
} else {
var G__10299 = hoplon.core.__GT_hoplon(elem);
var G__10300_10306 = G__10299;
var G__10301_10307 = cljs.core.cst$kw$hoplon_SLASH_attr;
var G__10302_10308 = attr;
(hoplon.core.hl_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.hl_BANG_.cljs$core$IFn$_invoke$arity$3(G__10300_10306,G__10301_10307,G__10302_10308) : hoplon.core.hl_BANG_.call(null,G__10300_10306,G__10301_10307,G__10302_10308));

var G__10303_10309 = G__10299;
var G__10304_10310 = cljs.core.cst$kw$hoplon_SLASH_kids;
var G__10305_10311 = kids;
(hoplon.core.hl_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.hl_BANG_.cljs$core$IFn$_invoke$arity$3(G__10303_10309,G__10304_10310,G__10305_10311) : hoplon.core.hl_BANG_.call(null,G__10303_10309,G__10304_10310,G__10305_10311));

return G__10299;
}
}));
hoplon.core.hl_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon_SLASH_attr,(function (elem,key,attr){
var elem__$1 = elem;
cljs.core.reduce_kv(((function (elem__$1){
return (function (p1__10313_SHARP_,p2__10312_SHARP_,p3__10314_SHARP_){
hoplon.core._attribute_BANG_(p2__10312_SHARP_,p1__10313_SHARP_,p3__10314_SHARP_);

return p1__10313_SHARP_;
});})(elem__$1))
,elem__$1,attr);

return elem__$1;
}));
hoplon.core.hl_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon_SLASH_kids,(function (elem,key,kids){
var elem__$1 = elem;
var seq__10315_10319 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__10316_10320 = null;
var count__10317_10321 = (0);
var i__10318_10322 = (0);
while(true){
if((i__10318_10322 < count__10317_10321)){
var x_10323 = chunk__10316_10320.cljs$core$IIndexed$_nth$arity$2(null,i__10318_10322);
var temp__5559__auto___10324 = hoplon.core.__GT_node(x_10323);
if(cljs.core.truth_(temp__5559__auto___10324)){
var x_10325__$1 = temp__5559__auto___10324;
hoplon.core._append_child_BANG_(elem__$1,x_10325__$1);
} else {
}


var G__10326 = seq__10315_10319;
var G__10327 = chunk__10316_10320;
var G__10328 = count__10317_10321;
var G__10329 = (i__10318_10322 + (1));
seq__10315_10319 = G__10326;
chunk__10316_10320 = G__10327;
count__10317_10321 = G__10328;
i__10318_10322 = G__10329;
continue;
} else {
var temp__5559__auto___10330 = cljs.core.seq(seq__10315_10319);
if(temp__5559__auto___10330){
var seq__10315_10331__$1 = temp__5559__auto___10330;
if(cljs.core.chunked_seq_QMARK_(seq__10315_10331__$1)){
var c__4351__auto___10332 = cljs.core.chunk_first(seq__10315_10331__$1);
var G__10333 = cljs.core.chunk_rest(seq__10315_10331__$1);
var G__10334 = c__4351__auto___10332;
var G__10335 = cljs.core.count(c__4351__auto___10332);
var G__10336 = (0);
seq__10315_10319 = G__10333;
chunk__10316_10320 = G__10334;
count__10317_10321 = G__10335;
i__10318_10322 = G__10336;
continue;
} else {
var x_10337 = cljs.core.first(seq__10315_10331__$1);
var temp__5559__auto___10338__$1 = hoplon.core.__GT_node(x_10337);
if(cljs.core.truth_(temp__5559__auto___10338__$1)){
var x_10339__$1 = temp__5559__auto___10338__$1;
hoplon.core._append_child_BANG_(elem__$1,x_10339__$1);
} else {
}


var G__10340 = cljs.core.next(seq__10315_10331__$1);
var G__10341 = null;
var G__10342 = (0);
var G__10343 = (0);
seq__10315_10319 = G__10340;
chunk__10316_10320 = G__10341;
count__10317_10321 = G__10342;
i__10318_10322 = G__10343;
continue;
}
} else {
}
}
break;
}

return elem__$1;
}));
if((typeof hoplon !== 'undefined') && (typeof hoplon.core !== 'undefined') && (typeof hoplon.core.do_BANG_ !== 'undefined')){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),hoplon.core.ns_dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,k,v){
return hoplon.core.set_attributes_BANG_(elem,k,v);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_attr,(function (elem,key,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attr,cljs.core.cst$kw$hoplon$core_SLASH_attr);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attr_SLASH_default,cljs.core.cst$kw$hoplon$core_SLASH_attr);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$html_SLASH_default,cljs.core.cst$kw$hoplon$core_SLASH_attr);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$svg_SLASH_default,cljs.core.cst$kw$hoplon$core_SLASH_attr);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$css,cljs.core.cst$kw$hoplon$core_SLASH_css);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$css_SLASH_default,cljs.core.cst$kw$hoplon$core_SLASH_css);
if((typeof hoplon !== 'undefined') && (typeof hoplon.core !== 'undefined') && (typeof hoplon.core.on_BANG_ !== 'undefined')){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),hoplon.core.ns_dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return elem.addEventListener(cljs.core.name(event),callback);
}));
Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() {
var G__10345 = null;
var G__10345__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__10345__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__10345__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__10345__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__10345__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__10345__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__10345__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__10345__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__10345__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__10345__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__10345__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__10345__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__10345__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__10345__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__10345__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__10345__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__10345__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__10345__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__10345__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__10345__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__10345__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__10345__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__10345 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__10345__1.call(this,self__);
case 2:
return G__10345__2.call(this,self__,a);
case 3:
return G__10345__3.call(this,self__,a,b);
case 4:
return G__10345__4.call(this,self__,a,b,c);
case 5:
return G__10345__5.call(this,self__,a,b,c,d);
case 6:
return G__10345__6.call(this,self__,a,b,c,d,e);
case 7:
return G__10345__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__10345__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__10345__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__10345__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__10345__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__10345__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__10345__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__10345__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__10345__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__10345__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__10345__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__10345__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__10345__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__10345__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__10345__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__10345__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10345.cljs$core$IFn$_invoke$arity$1 = G__10345__1;
G__10345.cljs$core$IFn$_invoke$arity$2 = G__10345__2;
G__10345.cljs$core$IFn$_invoke$arity$3 = G__10345__3;
G__10345.cljs$core$IFn$_invoke$arity$4 = G__10345__4;
G__10345.cljs$core$IFn$_invoke$arity$5 = G__10345__5;
G__10345.cljs$core$IFn$_invoke$arity$6 = G__10345__6;
G__10345.cljs$core$IFn$_invoke$arity$7 = G__10345__7;
G__10345.cljs$core$IFn$_invoke$arity$8 = G__10345__8;
G__10345.cljs$core$IFn$_invoke$arity$9 = G__10345__9;
G__10345.cljs$core$IFn$_invoke$arity$10 = G__10345__10;
G__10345.cljs$core$IFn$_invoke$arity$11 = G__10345__11;
G__10345.cljs$core$IFn$_invoke$arity$12 = G__10345__12;
G__10345.cljs$core$IFn$_invoke$arity$13 = G__10345__13;
G__10345.cljs$core$IFn$_invoke$arity$14 = G__10345__14;
G__10345.cljs$core$IFn$_invoke$arity$15 = G__10345__15;
G__10345.cljs$core$IFn$_invoke$arity$16 = G__10345__16;
G__10345.cljs$core$IFn$_invoke$arity$17 = G__10345__17;
G__10345.cljs$core$IFn$_invoke$arity$18 = G__10345__18;
G__10345.cljs$core$IFn$_invoke$arity$19 = G__10345__19;
G__10345.cljs$core$IFn$_invoke$arity$20 = G__10345__20;
G__10345.cljs$core$IFn$_invoke$arity$21 = G__10345__21;
G__10345.cljs$core$IFn$_invoke$arity$22 = G__10345__22;
return G__10345;
})()
;

Element.prototype.apply = (function (self__,args10344){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args10344)));
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
hoplon.core.mksingleton = (function hoplon$core$mksingleton(tag){

return (function() { 
var G__10346__delegate = function (args){
var temp__5557__auto__ = goog.object.get(document,tag);
if(cljs.core.truth_(temp__5557__auto__)){
var elem = temp__5557__auto__;
return hoplon.core._elem_BANG_(elem,cljs.core.cst$kw$hoplon_SLASH_singleton,args);
} else {
var elem = document.createElement(tag);
goog.object.set(document,tag,elem);

hoplon.core._elem_BANG_(elem,cljs.core.cst$kw$hoplon_SLASH_invoke,args);

return elem;
}
};
var G__10346 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10347__i = 0, G__10347__a = new Array(arguments.length -  0);
while (G__10347__i < G__10347__a.length) {G__10347__a[G__10347__i] = arguments[G__10347__i + 0]; ++G__10347__i;}
  args = new cljs.core.IndexedSeq(G__10347__a,0,null);
} 
return G__10346__delegate.call(this,args);};
G__10346.cljs$lang$maxFixedArity = 0;
G__10346.cljs$lang$applyTo = (function (arglist__10348){
var args = cljs.core.seq(arglist__10348);
return G__10346__delegate(args);
});
G__10346.cljs$core$IFn$_invoke$arity$variadic = G__10346__delegate;
return G__10346;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){

return (function() { 
var G__10349__delegate = function (args){
var elem = document.createElement(tag);
hoplon.core._elem_BANG_(elem,cljs.core.cst$kw$hoplon_SLASH_invoke,args);

return elem;
};
var G__10349 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10350__i = 0, G__10350__a = new Array(arguments.length -  0);
while (G__10350__i < G__10350__a.length) {G__10350__a[G__10350__i] = arguments[G__10350__i + 0]; ++G__10350__i;}
  args = new cljs.core.IndexedSeq(G__10350__a,0,null);
} 
return G__10349__delegate.call(this,args);};
G__10349.cljs$lang$maxFixedArity = 0;
G__10349.cljs$lang$applyTo = (function (arglist__10351){
var args = cljs.core.seq(arglist__10351);
return G__10349__delegate(args);
});
G__10349.cljs$core$IFn$_invoke$arity$variadic = G__10349__delegate;
return G__10349;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10354 = arguments.length;
var i__4532__auto___10355 = (0);
while(true){
if((i__4532__auto___10355 < len__4531__auto___10354)){
args__4534__auto__.push((arguments[i__4532__auto___10355]));

var G__10356 = (i__4532__auto___10355 + (1));
i__4532__auto___10355 = G__10356;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

var elem = hoplon.core.mksingleton("documentElement");
var G__10353 = cljs.core.first(hoplon.core.parse_args(args));
return (elem.cljs$core$IFn$_invoke$arity$1 ? elem.cljs$core$IFn$_invoke$arity$1(G__10353) : elem.call(null,G__10353));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
hoplon.core.html.cljs$lang$applyTo = (function (seq10352){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10352));
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
hoplon.core.$text = (function hoplon$core$$text(p1__10357_SHARP_){
return document.createTextNode(p1__10357_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__10358_SHARP_){
return document.createComment(p1__10358_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
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
var els = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var itemsv = (function (){var fexpr__10361 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (els){
return (function (G__10360,G__10359){
return (G__10359.cljs$core$IFn$_invoke$arity$1 ? G__10359.cljs$core$IFn$_invoke$arity$1(G__10360) : G__10359.call(null,G__10360));
});})(els))
);
return (fexpr__10361.cljs$core$IFn$_invoke$arity$2 ? fexpr__10361.cljs$core$IFn$_invoke$arity$2(items,cljs.core.vec) : fexpr__10361.call(null,items,cljs.core.vec));
})();
var items_count = (function (){var fexpr__10364 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (els,itemsv){
return (function (G__10363,G__10362){
return (G__10362.cljs$core$IFn$_invoke$arity$1 ? G__10362.cljs$core$IFn$_invoke$arity$1(G__10363) : G__10362.call(null,G__10363));
});})(els,itemsv))
);
return (fexpr__10364.cljs$core$IFn$_invoke$arity$2 ? fexpr__10364.cljs$core$IFn$_invoke$arity$2(items,cljs.core.count) : fexpr__10364.call(null,items,cljs.core.count));
})();
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_count,((function (els,itemsv,items_count){
return (function (_,n){
if((cljs.core.count(cljs.core.deref(els)) < n)){
var seq__10365 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(els)),n));
var chunk__10366 = null;
var count__10367 = (0);
var i__10368 = (0);
while(true){
if((i__10368 < count__10367)){
var i = chunk__10366.cljs$core$IIndexed$_nth$arity$2(null,i__10368);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(els,cljs.core.assoc,i,(function (){var G__10369 = (function (){var fexpr__10373 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (seq__10365,chunk__10366,count__10367,i__10368,i,els,itemsv,items_count){
return (function (G__10372,G__10371,G__10370){
return (G__10370.cljs$core$IFn$_invoke$arity$3 ? G__10370.cljs$core$IFn$_invoke$arity$3(G__10371,G__10372,null) : G__10370.call(null,G__10371,G__10372,null));
});})(seq__10365,chunk__10366,count__10367,i__10368,i,els,itemsv,items_count))
);
return (fexpr__10373.cljs$core$IFn$_invoke$arity$3 ? fexpr__10373.cljs$core$IFn$_invoke$arity$3(i,itemsv,cljs.core.get) : fexpr__10373.call(null,i,itemsv,cljs.core.get));
})();
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__10369) : tpl.call(null,G__10369));
})());


var G__10390 = seq__10365;
var G__10391 = chunk__10366;
var G__10392 = count__10367;
var G__10393 = (i__10368 + (1));
seq__10365 = G__10390;
chunk__10366 = G__10391;
count__10367 = G__10392;
i__10368 = G__10393;
continue;
} else {
var temp__5559__auto__ = cljs.core.seq(seq__10365);
if(temp__5559__auto__){
var seq__10365__$1 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10365__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10365__$1);
var G__10394 = cljs.core.chunk_rest(seq__10365__$1);
var G__10395 = c__4351__auto__;
var G__10396 = cljs.core.count(c__4351__auto__);
var G__10397 = (0);
seq__10365 = G__10394;
chunk__10366 = G__10395;
count__10367 = G__10396;
i__10368 = G__10397;
continue;
} else {
var i = cljs.core.first(seq__10365__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(els,cljs.core.assoc,i,(function (){var G__10374 = (function (){var fexpr__10378 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (seq__10365,chunk__10366,count__10367,i__10368,i,seq__10365__$1,temp__5559__auto__,els,itemsv,items_count){
return (function (G__10377,G__10376,G__10375){
return (G__10375.cljs$core$IFn$_invoke$arity$3 ? G__10375.cljs$core$IFn$_invoke$arity$3(G__10376,G__10377,null) : G__10375.call(null,G__10376,G__10377,null));
});})(seq__10365,chunk__10366,count__10367,i__10368,i,seq__10365__$1,temp__5559__auto__,els,itemsv,items_count))
);
return (fexpr__10378.cljs$core$IFn$_invoke$arity$3 ? fexpr__10378.cljs$core$IFn$_invoke$arity$3(i,itemsv,cljs.core.get) : fexpr__10378.call(null,i,itemsv,cljs.core.get));
})();
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__10374) : tpl.call(null,G__10374));
})());


var G__10398 = cljs.core.next(seq__10365__$1);
var G__10399 = null;
var G__10400 = (0);
var G__10401 = (0);
seq__10365 = G__10398;
chunk__10366 = G__10399;
count__10367 = G__10400;
i__10368 = G__10401;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});})(els,itemsv,items_count))
);

var fexpr__10386 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (els,itemsv,items_count){
return (function (G__10380,G__10379,G__10382,G__10381){
var G__10387 = G__10380;
var G__10388 = (0);
var G__10389 = (function (){var x__4040__auto__ = G__10381;
var y__4041__auto__ = (G__10382.cljs$core$IFn$_invoke$arity$1 ? G__10382.cljs$core$IFn$_invoke$arity$1(G__10380) : G__10382.call(null,G__10380));
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})();
return (G__10379.cljs$core$IFn$_invoke$arity$3 ? G__10379.cljs$core$IFn$_invoke$arity$3(G__10387,G__10388,G__10389) : G__10379.call(null,G__10387,G__10388,G__10389));
});})(els,itemsv,items_count))
);
return (fexpr__10386.cljs$core$IFn$_invoke$arity$4 ? fexpr__10386.cljs$core$IFn$_invoke$arity$4(els,cljs.core.subvec,cljs.core.count,items_count) : fexpr__10386.call(null,els,cljs.core.subvec,cljs.core.count,items_count));
});
