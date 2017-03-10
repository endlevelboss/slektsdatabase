// Compiled by ClojureScript 1.7.170 {}
goog.provide('slektsdatabase.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
slektsdatabase.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"nametemplate","nametemplate",-1917548325),new cljs.core.Keyword(null,"firstname","firstname",1659984849),"Lars",new cljs.core.Keyword(null,"lastname","lastname",-265181465),"Oppholdsstuen",new cljs.core.Keyword(null,"born","born",-461260488),"1703"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"nametemplate","nametemplate",-1917548325),new cljs.core.Keyword(null,"firstname","firstname",1659984849),"Laila",new cljs.core.Keyword(null,"lastname","lastname",-265181465),"Bakstikkstuen",new cljs.core.Keyword(null,"born","born",-461260488),"1880"], null)], null),new cljs.core.Keyword(null,"templates","templates",-1237401733),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nametemplate","nametemplate",-1917548325),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Navn",new cljs.core.Keyword(null,"born","born",-461260488),"Foedselsaar"], null)], null)], null));
slektsdatabase.core.read = (function slektsdatabase$core$read(p__21853,key,params){
var map__21857 = p__21853;
var map__21857__$1 = ((((!((map__21857 == null)))?((((map__21857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21857):map__21857);
var env = map__21857__$1;
var state = cljs.core.get.call(null,map__21857__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__21859 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__21859,(0),null);
var value = cljs.core.nth.call(null,vec__21859,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
/**
 * @constructor
 */
slektsdatabase.core.NameDisplay = (function slektsdatabase$core$NameDisplay(){
var this__21037__auto__ = this;
React.Component.apply(this__21037__auto__,arguments);

if(!((this__21037__auto__.initLocalState == null))){
this__21037__auto__.state = this__21037__auto__.initLocalState();
} else {
this__21037__auto__.state = {};
}

return this__21037__auto__;
});

slektsdatabase.core.NameDisplay.prototype = goog.object.clone(React.Component.prototype);

var x21864_21874 = slektsdatabase.core.NameDisplay.prototype;
x21864_21874.componentWillUpdate = ((function (x21864_21874){
return (function (next_props__20973__auto__,next_state__20974__auto__){
var this__20972__auto__ = this;
if(((!((this__20972__auto__ == null)))?(((false) || (this__20972__auto__.om$next$Ident$))?true:false):false)){
var ident__20976__auto___21875 = om.next.ident.call(null,this__20972__auto__,om.next.props.call(null,this__20972__auto__));
var next_ident__20977__auto___21876 = om.next.ident.call(null,this__20972__auto__,om.next._next_props.call(null,next_props__20973__auto__,this__20972__auto__));
if(cljs.core.not_EQ_.call(null,ident__20976__auto___21875,next_ident__20977__auto___21876)){
var idxr__20978__auto___21877 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20972__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__20978__auto___21877 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__20978__auto___21877),((function (idxr__20978__auto___21877,ident__20976__auto___21875,next_ident__20977__auto___21876,this__20972__auto__,x21864_21874){
return (function (indexes__20979__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__20979__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__20976__auto___21875], null),cljs.core.disj,this__20972__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__20977__auto___21876], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__20972__auto__);
});})(idxr__20978__auto___21877,ident__20976__auto___21875,next_ident__20977__auto___21876,this__20972__auto__,x21864_21874))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__20972__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20972__auto__);
});})(x21864_21874))
;

x21864_21874.shouldComponentUpdate = ((function (x21864_21874){
return (function (next_props__20973__auto__,next_state__20974__auto__){
var this__20972__auto__ = this;
var next_children__20975__auto__ = next_props__20973__auto__.children;
var next_props__20973__auto____$1 = goog.object.get(next_props__20973__auto__,"omcljs$value");
var next_props__20973__auto____$2 = (function (){var G__21866 = next_props__20973__auto____$1;
var G__21866__$1 = (((next_props__20973__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__21866):G__21866);
return G__21866__$1;
})();
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20972__auto__),next_props__20973__auto____$2);
if(or__16785__auto__){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = (function (){var and__16773__auto__ = this__20972__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20972__auto__.state,"omcljs$state"),goog.object.get(next_state__20974__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__20972__auto__.props.children,next_children__20975__auto__);
}
}
});})(x21864_21874))
;

x21864_21874.componentWillUnmount = ((function (x21864_21874){
return (function (){
var this__20972__auto__ = this;
var r__20983__auto__ = om.next.get_reconciler.call(null,this__20972__auto__);
var cfg__20984__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20983__auto__);
var st__20985__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20984__auto__);
var indexer__20982__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20984__auto__);
if(cljs.core.truth_((function (){var and__16773__auto__ = !((st__20985__auto__ == null));
if(and__16773__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__20985__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__20972__auto__], null));
} else {
return and__16773__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__20985__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20972__auto__);
} else {
}

if((indexer__20982__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20982__auto__,this__20972__auto__);
}
});})(x21864_21874))
;

x21864_21874.componentDidUpdate = ((function (x21864_21874){
return (function (prev_props__20980__auto__,prev_state__20981__auto__){
var this__20972__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20972__auto__);
});})(x21864_21874))
;

x21864_21874.isMounted = ((function (x21864_21874){
return (function (){
var this__20972__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20972__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21864_21874))
;

x21864_21874.componentWillMount = ((function (x21864_21874){
return (function (){
var this__20972__auto__ = this;
var indexer__20982__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20972__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20982__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20982__auto__,this__20972__auto__);
}
});})(x21864_21874))
;

x21864_21874.render = ((function (x21864_21874){
return (function (){
var this__20971__auto__ = this;
var this$ = this__20971__auto__;
var _STAR_reconciler_STAR_21867 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21868 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21869 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21870 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21871 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__20971__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__20971__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__20971__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__20971__auto__);

om.next._STAR_parent_STAR_ = this__20971__auto__;

try{return React.DOM.div(null,om.util.force_children.call(null,"Starting up"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21871;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21870;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21869;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21868;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21867;
}});})(x21864_21874))
;


slektsdatabase.core.NameDisplay.prototype.constructor = slektsdatabase.core.NameDisplay;

slektsdatabase.core.NameDisplay.prototype.constructor.displayName = "slektsdatabase.core/NameDisplay";

slektsdatabase.core.NameDisplay.prototype.om$isComponent = true;

var x21872_21878 = slektsdatabase.core.NameDisplay;
x21872_21878.om$next$IQuery$ = true;

x21872_21878.om$next$IQuery$query$arity$1 = ((function (x21872_21878){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"templates","templates",-1237401733)], null);
});})(x21872_21878))
;


var x21873_21879 = slektsdatabase.core.NameDisplay.prototype;
x21873_21879.om$next$IQuery$ = true;

x21873_21879.om$next$IQuery$query$arity$1 = ((function (x21873_21879){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"templates","templates",-1237401733)], null);
});})(x21873_21879))
;


slektsdatabase.core.NameDisplay.cljs$lang$type = true;

slektsdatabase.core.NameDisplay.cljs$lang$ctorStr = "slektsdatabase.core/NameDisplay";

slektsdatabase.core.NameDisplay.cljs$lang$ctorPrWriter = (function (this__21039__auto__,writer__21040__auto__,opt__21041__auto__){
return cljs.core._write.call(null,writer__21040__auto__,"slektsdatabase.core/NameDisplay");
});
slektsdatabase.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),slektsdatabase.core.state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),slektsdatabase.core.read], null))], null));
om.next.add_root_BANG_.call(null,slektsdatabase.core.reconciler,slektsdatabase.core.NameDisplay,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map