// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__17997__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__17997 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17998__i = 0, G__17998__a = new Array(arguments.length -  0);
while (G__17998__i < G__17998__a.length) {G__17998__a[G__17998__i] = arguments[G__17998__i + 0]; ++G__17998__i;}
  args = new cljs.core.IndexedSeq(G__17998__a,0);
} 
return G__17997__delegate.call(this,args);};
G__17997.cljs$lang$maxFixedArity = 0;
G__17997.cljs$lang$applyTo = (function (arglist__17999){
var args = cljs.core.seq(arglist__17999);
return G__17997__delegate(args);
});
G__17997.cljs$core$IFn$_invoke$arity$variadic = G__17997__delegate;
return G__17997;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__18000__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__18000 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18001__i = 0, G__18001__a = new Array(arguments.length -  0);
while (G__18001__i < G__18001__a.length) {G__18001__a[G__18001__i] = arguments[G__18001__i + 0]; ++G__18001__i;}
  args = new cljs.core.IndexedSeq(G__18001__a,0);
} 
return G__18000__delegate.call(this,args);};
G__18000.cljs$lang$maxFixedArity = 0;
G__18000.cljs$lang$applyTo = (function (arglist__18002){
var args = cljs.core.seq(arglist__18002);
return G__18000__delegate(args);
});
G__18000.cljs$core$IFn$_invoke$arity$variadic = G__18000__delegate;
return G__18000;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map