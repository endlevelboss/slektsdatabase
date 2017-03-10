// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__16785__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_18313 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_18313){
return (function (){
var _STAR_always_update_STAR_18314 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_18314;
}});})(_STAR_always_update_STAR_18313))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_18313;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args18315 = [];
var len__17844__auto___18318 = arguments.length;
var i__17845__auto___18319 = (0);
while(true){
if((i__17845__auto___18319 < len__17844__auto___18318)){
args18315.push((arguments[i__17845__auto___18319]));

var G__18320 = (i__17845__auto___18319 + (1));
i__17845__auto___18319 = G__18320;
continue;
} else {
}
break;
}

var G__18317 = args18315.length;
switch (G__18317) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18315.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__18326_18330 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__18327_18331 = null;
var count__18328_18332 = (0);
var i__18329_18333 = (0);
while(true){
if((i__18329_18333 < count__18328_18332)){
var v_18334 = cljs.core._nth.call(null,chunk__18327_18331,i__18329_18333);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_18334);

var G__18335 = seq__18326_18330;
var G__18336 = chunk__18327_18331;
var G__18337 = count__18328_18332;
var G__18338 = (i__18329_18333 + (1));
seq__18326_18330 = G__18335;
chunk__18327_18331 = G__18336;
count__18328_18332 = G__18337;
i__18329_18333 = G__18338;
continue;
} else {
var temp__4425__auto___18339 = cljs.core.seq.call(null,seq__18326_18330);
if(temp__4425__auto___18339){
var seq__18326_18340__$1 = temp__4425__auto___18339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18326_18340__$1)){
var c__17589__auto___18341 = cljs.core.chunk_first.call(null,seq__18326_18340__$1);
var G__18342 = cljs.core.chunk_rest.call(null,seq__18326_18340__$1);
var G__18343 = c__17589__auto___18341;
var G__18344 = cljs.core.count.call(null,c__17589__auto___18341);
var G__18345 = (0);
seq__18326_18330 = G__18342;
chunk__18327_18331 = G__18343;
count__18328_18332 = G__18344;
i__18329_18333 = G__18345;
continue;
} else {
var v_18346 = cljs.core.first.call(null,seq__18326_18340__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_18346);

var G__18347 = cljs.core.next.call(null,seq__18326_18340__$1);
var G__18348 = null;
var G__18349 = (0);
var G__18350 = (0);
seq__18326_18330 = G__18347;
chunk__18327_18331 = G__18348;
count__18328_18332 = G__18349;
i__18329_18333 = G__18350;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map