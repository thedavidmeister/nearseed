// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clojure.test.check.properties');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.test.check.generators');
clojure.test.check.properties.apply_gen = (function clojure$test$check$properties$apply_gen(function$){
return (function (args){
var result = (function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(function$,args);
}catch (e9583){var t = e9583;
return t;
}})();
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result,cljs.core.cst$kw$function,function$,cljs.core.cst$kw$args,args], null);
});
});
/**
 * Creates a property (properties are also generators). A property
 *   is a generator that generates the result of applying the function
 *   under test with the realized arguments. Once realized, the arguments
 *   will be applied to `function` with `apply`.
 * 
 *   Example:
 * 
 *   (for-all* [gen/int gen/int] (fn [a b] (>= (+ a b) a)))
 *   
 */
clojure.test.check.properties.for_all_STAR_ = (function clojure$test$check$properties$for_all_STAR_(args,function$){
return clojure.test.check.generators.fmap(clojure.test.check.properties.apply_gen(function$),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,args));
});
clojure.test.check.properties.binding_vars = (function clojure$test$check$properties$binding_vars(bindings){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
});
clojure.test.check.properties.binding_gens = (function clojure$test$check$properties$binding_gens(bindings){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
});
var ret__4565__auto___9588 = (function (){
/**
 * Macro sugar for `for-all*`. `for-all` lets you name the parameter
 *   and use them in expression, without wrapping them in a lambda. Like
 *   `for-all*`, it returns a property.
 * 
 *   Examples
 * 
 *   (for-all [a gen/int
 *          b gen/int]
 *  (>= (+ a b) a))
 *   
 */
clojure.test.check.properties.for_all = (function clojure$test$check$properties$for_all(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9589 = arguments.length;
var i__4532__auto___9590 = (0);
while(true){
if((i__4532__auto___9590 < len__4531__auto___9589)){
args__4534__auto__.push((arguments[i__4532__auto___9590]));

var G__9591 = (i__4532__auto___9590 + (1));
i__4532__auto___9590 = G__9591;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clojure.test.check.properties.for_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clojure.test.check.properties.for_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(clojure.test.check.properties.binding_gens(bindings)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(clojure.test.check.properties.binding_vars(bindings))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
});

clojure.test.check.properties.for_all.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clojure.test.check.properties.for_all.cljs$lang$applyTo = (function (seq9584){
var G__9585 = cljs.core.first(seq9584);
var seq9584__$1 = cljs.core.next(seq9584);
var G__9586 = cljs.core.first(seq9584__$1);
var seq9584__$2 = cljs.core.next(seq9584__$1);
var G__9587 = cljs.core.first(seq9584__$2);
var seq9584__$3 = cljs.core.next(seq9584__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9585,G__9586,G__9587,seq9584__$3);
});

return null;
})()
;
clojure.test.check.properties.for_all.cljs$lang$macro = true;

