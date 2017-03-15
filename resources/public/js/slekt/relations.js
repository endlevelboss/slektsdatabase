// Compiled by ClojureScript 1.7.170 {}
goog.provide('slekt.relations');
goog.require('cljs.core');
goog.require('slekt.database');
slekt.relations.getPersona = (function slekt$relations$getPersona(id){
return cljs.core.get.call(null,new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,slekt.database.state)),id);
});
slekt.relations.findrelation = (function slekt$relations$findrelation(factid,relation){
var facts = new cljs.core.Keyword("event","by-id","event/by-id",-2100667447).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,slekt.database.state));
var fact = cljs.core.get.call(null,facts,factid);
return new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(fact),relation));
});
slekt.relations.get_events = (function slekt$relations$get_events(var_args){
var args18075 = [];
var len__17843__auto___18078 = arguments.length;
var i__17844__auto___18079 = (0);
while(true){
if((i__17844__auto___18079 < len__17843__auto___18078)){
args18075.push((arguments[i__17844__auto___18079]));

var G__18080 = (i__17844__auto___18079 + (1));
i__17844__auto___18079 = G__18080;
continue;
} else {
}
break;
}

var G__18077 = args18075.length;
switch (G__18077) {
case 1:
return slekt.relations.get_events.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return slekt.relations.get_events.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18075.length)].join('')));

}
});

slekt.relations.get_events.cljs$core$IFn$_invoke$arity$1 = (function (eventids){
return slekt.relations.get_events.call(null,eventids,cljs.core.PersistentVector.EMPTY);
});

slekt.relations.get_events.cljs$core$IFn$_invoke$arity$2 = (function (eventids,result){
while(true){
if(cljs.core.empty_QMARK_.call(null,eventids)){
return result;
} else {
var G__18082 = cljs.core.rest.call(null,eventids);
var G__18083 = cljs.core.conj.call(null,result,cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("event","by-id","event/by-id",-2100667447),cljs.core.first.call(null,eventids)], null)));
eventids = G__18082;
result = G__18083;
continue;
}
break;
}
});

slekt.relations.get_events.cljs$lang$maxFixedArity = 2;
slekt.relations.role_index_finder = (function slekt$relations$role_index_finder(role,template){
var fields = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"facttemplates","facttemplates",1934305289),template,new cljs.core.Keyword(null,"fields","fields",-1932066230)], null));
var filtered = cljs.core.filter.call(null,((function (fields){
return (function (p1__18084_SHARP_){
return cljs.core._EQ_.call(null,role,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(p1__18084_SHARP_));
});})(fields))
,fields);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (fields,filtered){
return (function (p1__18085_SHARP_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__18085_SHARP_);
});})(fields,filtered))
,filtered));
});
slekt.relations.filter_by_index = (function slekt$relations$filter_by_index(event,pid,indexlist){
while(true){
if(cljs.core.empty_QMARK_.call(null,indexlist)){
return false;
} else {
var field = cljs.core.get_in.call(null,event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first.call(null,indexlist)], null));
if(cljs.core._EQ_.call(null,pid,new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151).cljs$core$IFn$_invoke$arity$1(field))){
return true;
} else {
var G__18086 = event;
var G__18087 = pid;
var G__18088 = cljs.core.rest.call(null,indexlist);
event = G__18086;
pid = G__18087;
indexlist = G__18088;
continue;
}
}
break;
}
});
slekt.relations.event_by_role = (function slekt$relations$event_by_role(event,role,pid){
var template = new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(event);
var roleindex = slekt.relations.role_index_finder.call(null,role,template);
if(cljs.core.truth_(slekt.relations.filter_by_index.call(null,event,pid,roleindex))){
return event;
} else {
return null;
}
});
slekt.relations.pid_by_index = (function slekt$relations$pid_by_index(var_args){
var args18089 = [];
var len__17843__auto___18092 = arguments.length;
var i__17844__auto___18093 = (0);
while(true){
if((i__17844__auto___18093 < len__17843__auto___18092)){
args18089.push((arguments[i__17844__auto___18093]));

var G__18094 = (i__17844__auto___18093 + (1));
i__17844__auto___18093 = G__18094;
continue;
} else {
}
break;
}

var G__18091 = args18089.length;
switch (G__18091) {
case 2:
return slekt.relations.pid_by_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return slekt.relations.pid_by_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18089.length)].join('')));

}
});

slekt.relations.pid_by_index.cljs$core$IFn$_invoke$arity$2 = (function (event,index){
return slekt.relations.pid_by_index.call(null,event,index,cljs.core.PersistentVector.EMPTY);
});

slekt.relations.pid_by_index.cljs$core$IFn$_invoke$arity$3 = (function (event,index,result){
while(true){
if(cljs.core.empty_QMARK_.call(null,index)){
return result;
} else {
var v = new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first.call(null,index)], null)));
var res = ((cljs.core._EQ_.call(null,null,v))?result:cljs.core.conj.call(null,result,v));
var G__18096 = event;
var G__18097 = cljs.core.rest.call(null,index);
var G__18098 = res;
event = G__18096;
index = G__18097;
result = G__18098;
continue;
}
break;
}
});

slekt.relations.pid_by_index.cljs$lang$maxFixedArity = 3;
slekt.relations.pid_of_role = (function slekt$relations$pid_of_role(event,role){
var template = new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(event);
var roleindex = slekt.relations.role_index_finder.call(null,role,template);
var result = slekt.relations.pid_by_index.call(null,event,roleindex);
if(cljs.core.empty_QMARK_.call(null,result)){
return null;
} else {
return result;
}
});
slekt.relations.pids_of_role = (function slekt$relations$pids_of_role(var_args){
var args18099 = [];
var len__17843__auto___18102 = arguments.length;
var i__17844__auto___18103 = (0);
while(true){
if((i__17844__auto___18103 < len__17843__auto___18102)){
args18099.push((arguments[i__17844__auto___18103]));

var G__18104 = (i__17844__auto___18103 + (1));
i__17844__auto___18103 = G__18104;
continue;
} else {
}
break;
}

var G__18101 = args18099.length;
switch (G__18101) {
case 2:
return slekt.relations.pids_of_role.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return slekt.relations.pids_of_role.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18099.length)].join('')));

}
});

slekt.relations.pids_of_role.cljs$core$IFn$_invoke$arity$2 = (function (events,role){
return slekt.relations.pids_of_role.call(null,events,role,cljs.core.PersistentVector.EMPTY);
});

slekt.relations.pids_of_role.cljs$core$IFn$_invoke$arity$3 = (function (events,role,result){
while(true){
if(cljs.core.empty_QMARK_.call(null,events)){
return result;
} else {
var G__18106 = cljs.core.rest.call(null,events);
var G__18107 = role;
var G__18108 = cljs.core.concat.call(null,result,slekt.relations.pid_of_role.call(null,cljs.core.first.call(null,events),role));
events = G__18106;
role = G__18107;
result = G__18108;
continue;
}
break;
}
});

slekt.relations.pids_of_role.cljs$lang$maxFixedArity = 3;
slekt.relations.findspouse = (function slekt$relations$findspouse(eventids,yourrole,otherrole,pid){
var events = cljs.core.map.call(null,(function (p1__18109_SHARP_){
return slekt.relations.event_by_role.call(null,p1__18109_SHARP_,yourrole,pid);
}),slekt.relations.get_events.call(null,eventids));
var result = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,slekt.relations.pids_of_role.call(null,events,otherrole));
return result;
});
slekt.relations.findparent = (function slekt$relations$findparent(role,pid){
var eventids = new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(slekt.relations.getPersona.call(null,pid));
var events = cljs.core.map.call(null,((function (eventids){
return (function (p1__18110_SHARP_){
return slekt.relations.event_by_role.call(null,p1__18110_SHARP_,new cljs.core.Keyword(null,"child","child",623967545),pid);
});})(eventids))
,slekt.relations.get_events.call(null,eventids));
var result = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,slekt.relations.pids_of_role.call(null,events,role));
return result;
});
slekt.relations.findchildren = (function slekt$relations$findchildren(eventids,pid){
var dad = cljs.core.map.call(null,(function (p1__18111_SHARP_){
return slekt.relations.event_by_role.call(null,p1__18111_SHARP_,new cljs.core.Keyword(null,"father","father",-173311021),pid);
}),slekt.relations.get_events.call(null,eventids));
var mum = cljs.core.map.call(null,((function (dad){
return (function (p1__18112_SHARP_){
return slekt.relations.event_by_role.call(null,p1__18112_SHARP_,new cljs.core.Keyword(null,"mother","mother",1904423947),pid);
});})(dad))
,slekt.relations.get_events.call(null,eventids));
var events = cljs.core.concat.call(null,dad,mum);
var result = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,slekt.relations.pids_of_role.call(null,events,new cljs.core.Keyword(null,"child","child",623967545)));
return result;
});
slekt.relations.findfather = (function slekt$relations$findfather(pid){
return slekt.relations.findparent.call(null,new cljs.core.Keyword(null,"father","father",-173311021),pid);
});
slekt.relations.findmother = (function slekt$relations$findmother(pid){
return slekt.relations.findparent.call(null,new cljs.core.Keyword(null,"mother","mother",1904423947),pid);
});
slekt.relations.findhusband = (function slekt$relations$findhusband(facts,pid){
return slekt.relations.findspouse.call(null,facts,new cljs.core.Keyword(null,"wife","wife",2005722828),new cljs.core.Keyword(null,"husband","husband",940603053),pid);
});
slekt.relations.findwife = (function slekt$relations$findwife(facts,pid){
return slekt.relations.findspouse.call(null,facts,new cljs.core.Keyword(null,"husband","husband",940603053),new cljs.core.Keyword(null,"wife","wife",2005722828),pid);
});
/**
 * Arranges children by their other parent
 */
slekt.relations.arrange_children = (function slekt$relations$arrange_children(eventids,pid){
var children = slekt.relations.findchildren.call(null,eventids,pid);
var fathers = cljs.core.map.call(null,((function (children){
return (function (p1__18113_SHARP_){
return slekt.relations.findfather.call(null,p1__18113_SHARP_);
});})(children))
,children);
var mothers = cljs.core.map.call(null,((function (children,fathers){
return (function (p1__18114_SHARP_){
return slekt.relations.findmother.call(null,p1__18114_SHARP_);
});})(children,fathers))
,children);
cljs.core.println.call(null,children);

return cljs.core.println.call(null,mothers);
});

//# sourceMappingURL=relations.js.map