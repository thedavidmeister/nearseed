// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clojure.test.check.rose_tree');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IIndexed}
*/
clojure.test.check.rose_tree.RoseTree = (function (root,children){
this.root = root;
this.children = children;
this.cljs$lang$protocol_mask$partition0$ = 16;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
clojure.test.check.rose_tree.RoseTree.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0))){
return self__.root;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(1))){
return self__.children;
} else {
throw (new Error("Index out of bounds in rose tree"));

}
}
});

clojure.test.check.rose_tree.RoseTree.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0))){
return self__.root;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(1))){
return self__.children;
} else {
return not_found;

}
}
});

clojure.test.check.rose_tree.RoseTree.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$root,cljs.core.cst$sym$children], null);
});

clojure.test.check.rose_tree.RoseTree.cljs$lang$type = true;

clojure.test.check.rose_tree.RoseTree.cljs$lang$ctorStr = "clojure.test.check.rose-tree/RoseTree";

clojure.test.check.rose_tree.RoseTree.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"clojure.test.check.rose-tree/RoseTree");
});

/**
 * Positional factory function for clojure.test.check.rose-tree/RoseTree.
 */
clojure.test.check.rose_tree.__GT_RoseTree = (function clojure$test$check$rose_tree$__GT_RoseTree(root,children){
return (new clojure.test.check.rose_tree.RoseTree(root,children));
});

/**
 * Returns the root of a Rose tree.
 */
clojure.test.check.rose_tree.root = (function clojure$test$check$rose_tree$root(rose){
return rose.root;
});
/**
 * Returns the children of the root of the Rose tree.
 */
clojure.test.check.rose_tree.children = (function clojure$test$check$rose_tree$children(rose){
return rose.children;
});
clojure.test.check.rose_tree.make_rose = (function clojure$test$check$rose_tree$make_rose(root,children){
return (new clojure.test.check.rose_tree.RoseTree(root,children));
});
/**
 * Exclude the nth value in a collection.
 */
clojure.test.check.rose_tree.exclude_nth = (function clojure$test$check$rose_tree$exclude_nth(n,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__5559__auto__ = cljs.core.seq(coll);
if(temp__5559__auto__){
var s = temp__5559__auto__;
if((n === (0))){
return cljs.core.rest(coll);
} else {
return cljs.core.cons(cljs.core.first(s),(function (){var G__8924 = (n - (1));
var G__8925 = cljs.core.rest(s);
return (clojure.test.check.rose_tree.exclude_nth.cljs$core$IFn$_invoke$arity$2 ? clojure.test.check.rose_tree.exclude_nth.cljs$core$IFn$_invoke$arity$2(G__8924,G__8925) : clojure.test.check.rose_tree.exclude_nth.call(null,G__8924,G__8925));
})());
}
} else {
return null;
}
}),null,null));
});
/**
 * Turn a tree of trees into a single tree. Does this by concatenating
 *   children of the inner and outer trees.
 */
clojure.test.check.rose_tree.join = (function clojure$test$check$rose_tree$join(rose){
var outer_root = clojure.test.check.rose_tree.root(rose);
var outer_children = clojure.test.check.rose_tree.children(rose);
var inner_root = clojure.test.check.rose_tree.root(outer_root);
var inner_children = clojure.test.check.rose_tree.children(outer_root);
return clojure.test.check.rose_tree.make_rose(inner_root,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.join,outer_children),inner_children));
});
/**
 * Puts a value `x` into a Rose tree, with no children.
 */
clojure.test.check.rose_tree.pure = (function clojure$test$check$rose_tree$pure(x){
return clojure.test.check.rose_tree.make_rose(x,cljs.core.PersistentVector.EMPTY);
});
/**
 * Applies functions `f` to all values in the tree.
 */
clojure.test.check.rose_tree.fmap = (function clojure$test$check$rose_tree$fmap(f,rose){
return clojure.test.check.rose_tree.make_rose((function (){var G__8927 = clojure.test.check.rose_tree.root(rose);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__8927) : f.call(null,G__8927));
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8926_SHARP_){
return (clojure.test.check.rose_tree.fmap.cljs$core$IFn$_invoke$arity$2 ? clojure.test.check.rose_tree.fmap.cljs$core$IFn$_invoke$arity$2(f,p1__8926_SHARP_) : clojure.test.check.rose_tree.fmap.call(null,f,p1__8926_SHARP_));
}),clojure.test.check.rose_tree.children(rose)));
});
/**
 * Takes a Rose tree (m) and a function (k) from
 *   values to Rose tree and returns a new Rose tree.
 *   This is the monadic bind (>>=) for Rose trees.
 */
clojure.test.check.rose_tree.bind = (function clojure$test$check$rose_tree$bind(m,k){
return clojure.test.check.rose_tree.join(clojure.test.check.rose_tree.fmap(k,m));
});
/**
 * Returns a new Rose tree whose values pass `pred`. Values who
 *   do not pass `pred` have their children cut out as well.
 *   Takes a list of roses, not a rose
 */
clojure.test.check.rose_tree.filter = (function clojure$test$check$rose_tree$filter(pred,rose){
return clojure.test.check.rose_tree.make_rose(clojure.test.check.rose_tree.root(rose),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8928_SHARP_){
return (clojure.test.check.rose_tree.filter.cljs$core$IFn$_invoke$arity$2 ? clojure.test.check.rose_tree.filter.cljs$core$IFn$_invoke$arity$2(pred,p1__8928_SHARP_) : clojure.test.check.rose_tree.filter.call(null,pred,p1__8928_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__8929_SHARP_){
var G__8930 = clojure.test.check.rose_tree.root(p1__8929_SHARP_);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__8930) : pred.call(null,G__8930));
}),clojure.test.check.rose_tree.children(rose))));
});
/**
 * Create a seq of vectors, where each rose in turn, has been replaced
 *   by its children.
 */
clojure.test.check.rose_tree.permutations = (function clojure$test$check$rose_tree$permutations(roses){
var iter__4324__auto__ = (function clojure$test$check$rose_tree$permutations_$_iter__8931(s__8932){
return (new cljs.core.LazySeq(null,(function (){
var s__8932__$1 = s__8932;
while(true){
var temp__5559__auto__ = cljs.core.seq(s__8932__$1);
if(temp__5559__auto__){
var xs__6116__auto__ = temp__5559__auto__;
var vec__8937 = cljs.core.first(xs__6116__auto__);
var rose = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8937,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8937,(1),null);
var iterys__4320__auto__ = ((function (s__8932__$1,vec__8937,rose,index,xs__6116__auto__,temp__5559__auto__){
return (function clojure$test$check$rose_tree$permutations_$_iter__8931_$_iter__8933(s__8934){
return (new cljs.core.LazySeq(null,((function (s__8932__$1,vec__8937,rose,index,xs__6116__auto__,temp__5559__auto__){
return (function (){
var s__8934__$1 = s__8934;
while(true){
var temp__5559__auto____$1 = cljs.core.seq(s__8934__$1);
if(temp__5559__auto____$1){
var s__8934__$2 = temp__5559__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__8934__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__8934__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__8936 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__8935 = (0);
while(true){
if((i__8935 < size__4323__auto__)){
var child = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__8935);
cljs.core.chunk_append(b__8936,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(roses,index,child));

var G__8940 = (i__8935 + (1));
i__8935 = G__8940;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8936),clojure$test$check$rose_tree$permutations_$_iter__8931_$_iter__8933(cljs.core.chunk_rest(s__8934__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8936),null);
}
} else {
var child = cljs.core.first(s__8934__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(roses,index,child),clojure$test$check$rose_tree$permutations_$_iter__8931_$_iter__8933(cljs.core.rest(s__8934__$2)));
}
} else {
return null;
}
break;
}
});})(s__8932__$1,vec__8937,rose,index,xs__6116__auto__,temp__5559__auto__))
,null,null));
});})(s__8932__$1,vec__8937,rose,index,xs__6116__auto__,temp__5559__auto__))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(clojure.test.check.rose_tree.children(rose)));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,clojure$test$check$rose_tree$permutations_$_iter__8931(cljs.core.rest(s__8932__$1)));
} else {
var G__8941 = cljs.core.rest(s__8932__$1);
s__8932__$1 = G__8941;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,roses,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
/**
 * Apply `f` to the sequence of Rose trees `roses`.
 */
clojure.test.check.rose_tree.zip = (function clojure$test$check$rose_tree$zip(f,roses){
return clojure.test.check.rose_tree.make_rose(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root,roses)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8942_SHARP_){
return (clojure.test.check.rose_tree.zip.cljs$core$IFn$_invoke$arity$2 ? clojure.test.check.rose_tree.zip.cljs$core$IFn$_invoke$arity$2(f,p1__8942_SHARP_) : clojure.test.check.rose_tree.zip.call(null,f,p1__8942_SHARP_));
}),clojure.test.check.rose_tree.permutations(roses)));
});
clojure.test.check.rose_tree.remove = (function clojure$test$check$rose_tree$remove(roses){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,_){
return clojure.test.check.rose_tree.exclude_nth(index,roses);
}),roses),clojure.test.check.rose_tree.permutations(cljs.core.vec(roses)));
});
clojure.test.check.rose_tree.shrink = (function clojure$test$check$rose_tree$shrink(f,roses){
if(cljs.core.seq(roses)){
return clojure.test.check.rose_tree.make_rose(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root,roses)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8943_SHARP_){
return (clojure.test.check.rose_tree.shrink.cljs$core$IFn$_invoke$arity$2 ? clojure.test.check.rose_tree.shrink.cljs$core$IFn$_invoke$arity$2(f,p1__8943_SHARP_) : clojure.test.check.rose_tree.shrink.call(null,f,p1__8943_SHARP_));
}),clojure.test.check.rose_tree.remove(roses)));
} else {
return clojure.test.check.rose_tree.make_rose((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),cljs.core.PersistentVector.EMPTY);
}
});
/**
 * Return a new rose-tree whose depth-one children
 *   are the children from depth one _and_ two of the input
 *   tree.
 */
clojure.test.check.rose_tree.collapse = (function clojure$test$check$rose_tree$collapse(rose){
return clojure.test.check.rose_tree.make_rose(clojure.test.check.rose_tree.root(rose),(function (){var the_children = clojure.test.check.rose_tree.children(rose);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.collapse,the_children),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.collapse,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.test.check.rose_tree.children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([the_children], 0))));
})());
});
clojure.test.check.rose_tree.make_stack = (function clojure$test$check$rose_tree$make_stack(children,stack){
var temp__5557__auto__ = cljs.core.seq(children);
if(temp__5557__auto__){
var s = temp__5557__auto__;
return cljs.core.cons(children,stack);
} else {
return stack;
}
});
/**
 * Create a lazy-seq of all of the (unique) nodes in a shrink-tree.
 *   This assumes that two nodes with the same value have the same children.
 *   While it's not common, it's possible to create trees that don't
 *   fit that description. This function is significantly faster than
 *   brute-force enumerating all of the nodes in a tree, as there will
 *   be many duplicates.
 */
clojure.test.check.rose_tree.seq = (function clojure$test$check$rose_tree$seq(rose){
var helper = (function clojure$test$check$rose_tree$seq_$_helper(rose__$1,seen,stack){
var node = clojure.test.check.rose_tree.root(rose__$1);
var the_children = clojure.test.check.rose_tree.children(rose__$1);
return (new cljs.core.LazySeq(null,((function (node,the_children){
return (function (){
if(cljs.core.not((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(node) : seen.call(null,node)))){
return cljs.core.cons(node,((cljs.core.seq(the_children))?clojure$test$check$rose_tree$seq_$_helper(cljs.core.first(the_children),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,node),clojure.test.check.rose_tree.make_stack(cljs.core.rest(the_children),stack)):(function (){var temp__5559__auto__ = cljs.core.seq(stack);
if(temp__5559__auto__){
var s = temp__5559__auto__;
var f = cljs.core.ffirst(s);
var r = cljs.core.rest(cljs.core.first(s));
return clojure$test$check$rose_tree$seq_$_helper(f,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,node),clojure.test.check.rose_tree.make_stack(r,cljs.core.rest(s)));
} else {
return null;
}
})()));
} else {
var temp__5559__auto__ = cljs.core.seq(stack);
if(temp__5559__auto__){
var s = temp__5559__auto__;
var f = cljs.core.ffirst(s);
var r = cljs.core.rest(cljs.core.first(s));
return clojure$test$check$rose_tree$seq_$_helper(f,seen,clojure.test.check.rose_tree.make_stack(r,cljs.core.rest(s)));
} else {
return null;
}
}
});})(node,the_children))
,null,null));
});
return helper(rose,cljs.core.PersistentHashSet.EMPTY,cljs.core.List.EMPTY);
});
