// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clojure.test.check');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.test.check.generators');
goog.require('clojure.test.check.clojure_test');
goog.require('clojure.test.check.random');
goog.require('clojure.test.check.rose_tree');
goog.require('clojure.test.check.impl');

clojure.test.check.make_rng = (function clojure$test$check$make_rng(seed){
if(cljs.core.truth_(seed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(seed)], null);
} else {
var non_nil_seed = clojure.test.check.impl.get_current_time_millis();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [non_nil_seed,clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(non_nil_seed)], null);
}
});
clojure.test.check.complete = (function clojure$test$check$complete(property,num_trials,seed){
clojure.test.check.clojure_test.report_trial(property,num_trials,num_trials);

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,true,cljs.core.cst$kw$num_DASH_tests,num_trials,cljs.core.cst$kw$seed,seed], null);
});
/**
 * True if the value is not falsy or an exception
 */
clojure.test.check.not_falsey_or_exception_QMARK_ = (function clojure$test$check$not_falsey_or_exception_QMARK_(value){
var and__3938__auto__ = value;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not(clojure.test.check.impl.exception_like_QMARK_(value));
} else {
return and__3938__auto__;
}
});
/**
 * Tests `property` `num-tests` times.
 *   Takes optional keys `:seed` and `:max-size`. The seed parameter
 *   can be used to re-run previous tests, as the seed used is returned
 *   after a test is run. The max-size can be used to control the 'size'
 *   of generated values. The size will start at 0, and grow up to
 *   max-size, as the number of tests increases. Generators will use
 *   the size parameter to bound their growth. This prevents, for example,
 *   generating a five-thousand element vector on the very first test.
 * 
 *   Examples:
 * 
 *    (def p (for-all [a gen/pos-int] (> (* a a) a)))
 *    (quick-check 100 p)
 *   
 */
clojure.test.check.quick_check = (function clojure$test$check$quick_check(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9560 = arguments.length;
var i__4532__auto___9561 = (0);
while(true){
if((i__4532__auto___9561 < len__4531__auto___9560)){
args__4534__auto__.push((arguments[i__4532__auto___9561]));

var G__9562 = (i__4532__auto___9561 + (1));
i__4532__auto___9561 = G__9562;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (num_tests,property,p__9548){
var map__9549 = p__9548;
var map__9549__$1 = ((((!((map__9549 == null)))?(((((map__9549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9549):map__9549);
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9549__$1,cljs.core.cst$kw$seed);
var max_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9549__$1,cljs.core.cst$kw$max_DASH_size,(200));
var vec__9551 = clojure.test.check.make_rng(seed);
var created_seed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9551,(0),null);
var rng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9551,(1),null);
var size_seq = clojure.test.check.generators.make_size_range_seq(max_size);
var so_far = (0);
var size_seq__$1 = size_seq;
var rstate = rng;
while(true){
if((so_far === num_tests)){
return clojure.test.check.complete(property,num_tests,created_seed);
} else {
var vec__9554 = size_seq__$1;
var seq__9555 = cljs.core.seq(vec__9554);
var first__9556 = cljs.core.first(seq__9555);
var seq__9555__$1 = cljs.core.next(seq__9555);
var size = first__9556;
var rest_size_seq = seq__9555__$1;
var vec__9557 = clojure.test.check.random.split(rstate);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9557,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9557,(1),null);
var result_map_rose = clojure.test.check.generators.call_gen(property,r1,size);
var result_map = clojure.test.check.rose_tree.root(result_map_rose);
var result = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(result_map);
var args = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(result_map);
if(cljs.core.truth_(clojure.test.check.not_falsey_or_exception_QMARK_(result))){
clojure.test.check.clojure_test.report_trial(property,so_far,num_tests);

var G__9563 = (so_far + (1));
var G__9564 = rest_size_seq;
var G__9565 = r2;
so_far = G__9563;
size_seq__$1 = G__9564;
rstate = G__9565;
continue;
} else {
return (clojure.test.check.failure.cljs$core$IFn$_invoke$arity$5 ? clojure.test.check.failure.cljs$core$IFn$_invoke$arity$5(property,result_map_rose,so_far,size,created_seed) : clojure.test.check.failure.call(null,property,result_map_rose,so_far,size,created_seed));
}
}
break;
}
});

clojure.test.check.quick_check.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clojure.test.check.quick_check.cljs$lang$applyTo = (function (seq9545){
var G__9546 = cljs.core.first(seq9545);
var seq9545__$1 = cljs.core.next(seq9545);
var G__9547 = cljs.core.first(seq9545__$1);
var seq9545__$2 = cljs.core.next(seq9545__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9546,G__9547,seq9545__$2);
});

clojure.test.check.smallest_shrink = (function clojure$test$check$smallest_shrink(total_nodes_visited,depth,smallest){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$total_DASH_nodes_DASH_visited,total_nodes_visited,cljs.core.cst$kw$depth,depth,cljs.core.cst$kw$result,cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(smallest),cljs.core.cst$kw$smallest,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(smallest)], null);
});
/**
 * Shrinking a value produces a sequence of smaller values of the same type.
 *   Each of these values can then be shrunk. Think of this as a tree. We do a
 *   modified depth-first search of the tree:
 * 
 *   Do a non-exhaustive search for a deeper (than the root) failing example.
 *   Additional rules added to depth-first search:
 *   * If a node passes the property, you may continue searching at this depth,
 *   but not backtrack
 *   * If a node fails the property, search its children
 *   The value returned is the left-most failing example at the depth where a
 *   passing example was found.
 */
clojure.test.check.shrink_loop = (function clojure$test$check$shrink_loop(rose_tree){
var shrinks_this_depth = clojure.test.check.rose_tree.children(rose_tree);
var nodes = shrinks_this_depth;
var current_smallest = clojure.test.check.rose_tree.root(rose_tree);
var total_nodes_visited = (0);
var depth = (0);
while(true){
if(cljs.core.empty_QMARK_(nodes)){
return clojure.test.check.smallest_shrink(total_nodes_visited,depth,current_smallest);
} else {
var vec__9566 = nodes;
var seq__9567 = cljs.core.seq(vec__9566);
var first__9568 = cljs.core.first(seq__9567);
var seq__9567__$1 = cljs.core.next(seq__9567);
var head = first__9568;
var tail = seq__9567__$1;
var result = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(clojure.test.check.rose_tree.root(head));
if(cljs.core.truth_(clojure.test.check.not_falsey_or_exception_QMARK_(result))){
var G__9569 = tail;
var G__9570 = current_smallest;
var G__9571 = (total_nodes_visited + (1));
var G__9572 = depth;
nodes = G__9569;
current_smallest = G__9570;
total_nodes_visited = G__9571;
depth = G__9572;
continue;
} else {
var temp__5557__auto__ = cljs.core.seq(clojure.test.check.rose_tree.children(head));
if(temp__5557__auto__){
var children = temp__5557__auto__;
var G__9573 = children;
var G__9574 = clojure.test.check.rose_tree.root(head);
var G__9575 = (total_nodes_visited + (1));
var G__9576 = (depth + (1));
nodes = G__9573;
current_smallest = G__9574;
total_nodes_visited = G__9575;
depth = G__9576;
continue;
} else {
var G__9577 = tail;
var G__9578 = clojure.test.check.rose_tree.root(head);
var G__9579 = (total_nodes_visited + (1));
var G__9580 = depth;
nodes = G__9577;
current_smallest = G__9578;
total_nodes_visited = G__9579;
depth = G__9580;
continue;
}
}
}
break;
}
});
clojure.test.check.failure = (function clojure$test$check$failure(property,failing_rose_tree,trial_number,size,seed){
var root = clojure.test.check.rose_tree.root(failing_rose_tree);
var result = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(root);
var failing_args = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(root);
clojure.test.check.clojure_test.report_failure(property,result,trial_number,failing_args);

return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$result,result,cljs.core.cst$kw$seed,seed,cljs.core.cst$kw$failing_DASH_size,size,cljs.core.cst$kw$num_DASH_tests,(trial_number + (1)),cljs.core.cst$kw$fail,cljs.core.vec(failing_args),cljs.core.cst$kw$shrunk,clojure.test.check.shrink_loop(failing_rose_tree)], null);
});
