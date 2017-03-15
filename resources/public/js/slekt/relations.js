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
var args22868 = [];
var len__17844__auto___22871 = arguments.length;
var i__17845__auto___22872 = (0);
while(true){
if((i__17845__auto___22872 < len__17844__auto___22871)){
args22868.push((arguments[i__17845__auto___22872]));

var G__22873 = (i__17845__auto___22872 + (1));
i__17845__auto___22872 = G__22873;
continue;
} else {
}
break;
}

var G__22870 = args22868.length;
switch (G__22870) {
case 1:
return slekt.relations.get_events.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return slekt.relations.get_events.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22868.length)].join('')));

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
var G__22875 = cljs.core.rest.call(null,eventids);
var G__22876 = cljs.core.conj.call(null,result,cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("event","by-id","event/by-id",-2100667447),cljs.core.first.call(null,eventids)], null)));
eventids = G__22875;
result = G__22876;
continue;
}
break;
}
});

slekt.relations.get_events.cljs$lang$maxFixedArity = 2;
slekt.relations.role_index_finder = (function slekt$relations$role_index_finder(role,template){
var fields = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"facttemplates","facttemplates",1934305289),template,new cljs.core.Keyword(null,"fields","fields",-1932066230)], null));
var filtered = cljs.core.filter.call(null,((function (fields){
return (function (p1__22877_SHARP_){
return cljs.core._EQ_.call(null,role,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(p1__22877_SHARP_));
});})(fields))
,fields);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (fields,filtered){
return (function (p1__22878_SHARP_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22878_SHARP_);
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
var G__22879 = event;
var G__22880 = pid;
var G__22881 = cljs.core.rest.call(null,indexlist);
event = G__22879;
pid = G__22880;
indexlist = G__22881;
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
var args22882 = [];
var len__17844__auto___22885 = arguments.length;
var i__17845__auto___22886 = (0);
while(true){
if((i__17845__auto___22886 < len__17844__auto___22885)){
args22882.push((arguments[i__17845__auto___22886]));

var G__22887 = (i__17845__auto___22886 + (1));
i__17845__auto___22886 = G__22887;
continue;
} else {
}
break;
}

var G__22884 = args22882.length;
switch (G__22884) {
case 2:
return slekt.relations.pid_by_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return slekt.relations.pid_by_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22882.length)].join('')));

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
var G__22889 = event;
var G__22890 = cljs.core.rest.call(null,index);
var G__22891 = res;
event = G__22889;
index = G__22890;
result = G__22891;
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
var args22892 = [];
var len__17844__auto___22895 = arguments.length;
var i__17845__auto___22896 = (0);
while(true){
if((i__17845__auto___22896 < len__17844__auto___22895)){
args22892.push((arguments[i__17845__auto___22896]));

var G__22897 = (i__17845__auto___22896 + (1));
i__17845__auto___22896 = G__22897;
continue;
} else {
}
break;
}

var G__22894 = args22892.length;
switch (G__22894) {
case 2:
return slekt.relations.pids_of_role.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return slekt.relations.pids_of_role.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22892.length)].join('')));

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
var G__22899 = cljs.core.rest.call(null,events);
var G__22900 = role;
var G__22901 = cljs.core.concat.call(null,result,slekt.relations.pid_of_role.call(null,cljs.core.first.call(null,events),role));
events = G__22899;
role = G__22900;
result = G__22901;
continue;
}
break;
}
});

slekt.relations.pids_of_role.cljs$lang$maxFixedArity = 3;
slekt.relations.findspouse = (function slekt$relations$findspouse(eventids,yourrole,otherrole,pid){
var events = cljs.core.map.call(null,(function (p1__22902_SHARP_){
return slekt.relations.event_by_role.call(null,p1__22902_SHARP_,yourrole,pid);
}),slekt.relations.get_events.call(null,eventids));
var result = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,slekt.relations.pids_of_role.call(null,events,otherrole));
return result;
});
slekt.relations.findparent = (function slekt$relations$findparent(role,pid){
var eventids = new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(slekt.relations.getPersona.call(null,pid));
var events = cljs.core.map.call(null,((function (eventids){
return (function (p1__22903_SHARP_){
return slekt.relations.event_by_role.call(null,p1__22903_SHARP_,new cljs.core.Keyword(null,"child","child",623967545),pid);
});})(eventids))
,slekt.relations.get_events.call(null,eventids));
var result = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,slekt.relations.pids_of_role.call(null,events,role));
return result;
});
slekt.relations.findchildren = (function slekt$relations$findchildren(eventids,pid){
var dad = cljs.core.map.call(null,(function (p1__22904_SHARP_){
return slekt.relations.event_by_role.call(null,p1__22904_SHARP_,new cljs.core.Keyword(null,"father","father",-173311021),pid);
}),slekt.relations.get_events.call(null,eventids));
var mum = cljs.core.map.call(null,((function (dad){
return (function (p1__22905_SHARP_){
return slekt.relations.event_by_role.call(null,p1__22905_SHARP_,new cljs.core.Keyword(null,"mother","mother",1904423947),pid);
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
return (function (p1__22906_SHARP_){
return slekt.relations.findfather.call(null,p1__22906_SHARP_);
});})(children))
,children);
var mothers = cljs.core.map.call(null,((function (children,fathers){
return (function (p1__22907_SHARP_){
return slekt.relations.findmother.call(null,p1__22907_SHARP_);
});})(children,fathers))
,children);
cljs.core.println.call(null,children);

return cljs.core.println.call(null,mothers);
});

//# sourceMappingURL=relations.js.map