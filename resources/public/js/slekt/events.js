// Compiled by ClojureScript 1.7.170 {}
goog.provide('slekt.events');
goog.require('cljs.core');
goog.require('slekt.database');
goog.require('slekt.date');
slekt.events.create_new_eventid = (function slekt$events$create_new_eventid(){
return cljs.core.count.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("event","by-id","event/by-id",-2100667447)], null)));
});
slekt.events.control_personaid = (function slekt$events$control_personaid(data){
var pid = new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core._EQ_.call(null,null,pid)){
var id = cljs.core.count.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151)], null)));
cljs.core.swap_BANG_.call(null,slekt.database.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151),id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.PersistentVector.EMPTY], null));

return cljs.core.assoc.call(null,data,new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151),id);
} else {
return data;
}
});
slekt.events.get_nametemplate = (function slekt$events$get_nametemplate(template){
if(cljs.core._EQ_.call(null,null,template)){
return slekt$events$get_nametemplate.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldtemplates","fieldtemplates",1636462446),new cljs.core.Keyword(null,"defaultnametemplate","defaultnametemplate",762260382)], null)));
} else {
return cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldtemplates","fieldtemplates",1636462446),template], null));
}
});
slekt.events.get_nametemplate_name = (function slekt$events$get_nametemplate_name(templatename){
if(cljs.core._EQ_.call(null,null,templatename)){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldtemplates","fieldtemplates",1636462446),new cljs.core.Keyword(null,"defaultnametemplate","defaultnametemplate",762260382)], null));
} else {
return templatename;
}
});
slekt.events.parse_name_part = (function slekt$events$parse_name_part(var_args){
var args18044 = [];
var len__17843__auto___18047 = arguments.length;
var i__17844__auto___18048 = (0);
while(true){
if((i__17844__auto___18048 < len__17843__auto___18047)){
args18044.push((arguments[i__17844__auto___18048]));

var G__18049 = (i__17844__auto___18048 + (1));
i__17844__auto___18048 = G__18049;
continue;
} else {
}
break;
}

var G__18046 = args18044.length;
switch (G__18046) {
case 1:
return slekt.events.parse_name_part.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return slekt.events.parse_name_part.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18044.length)].join('')));

}
});

slekt.events.parse_name_part.cljs$core$IFn$_invoke$arity$1 = (function (data){
var template = slekt.events.get_nametemplate.call(null,new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(data));
return slekt.events.parse_name_part.call(null,data,template,cljs.core.PersistentVector.EMPTY);
});

slekt.events.parse_name_part.cljs$core$IFn$_invoke$arity$3 = (function (data,fields,result){
while(true){
if(cljs.core.empty_QMARK_.call(null,fields)){
return result;
} else {
var index = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,fields));
var value = cljs.core.get.call(null,data,index);
var val = ((cljs.core._EQ_.call(null,null,value))?"":value);
var G__18051 = data;
var G__18052 = cljs.core.rest.call(null,fields);
var G__18053 = cljs.core.assoc.call(null,result,index,val);
data = G__18051;
fields = G__18052;
result = G__18053;
continue;
}
break;
}
});

slekt.events.parse_name_part.cljs$lang$maxFixedArity = 3;
slekt.events.parse_name = (function slekt$events$parse_name(data){
var name = slekt.events.parse_name_part.call(null,data);
var template = slekt.events.get_nametemplate_name.call(null,new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(data));
var address = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword("place","by-id","place/by-id",-2102393538),null], null);
var val = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"template","template",-702405684),template,new cljs.core.Keyword(null,"addresss","addresss",-1386760045),address,new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151),new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151).cljs$core$IFn$_invoke$arity$1(data)], null);
return slekt.events.control_personaid.call(null,val);
});
slekt.events.parse_event = (function slekt$events$parse_event(data){
var date = slekt.date.string_to_date.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(data));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),date,new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"place","place",-819689466).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword("place","by-id","place/by-id",-2102393538),null], null)], null);
});
slekt.events.parse_data = (function slekt$events$parse_data(data,field){
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(field);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(field);
var d = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),id], null));
if(cljs.core.not_EQ_.call(null,null,d)){
var G__18055 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18055) {
case "name":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,slekt.events.parse_name.call(null,d)], null);

break;
case "event":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,slekt.events.parse_event.call(null,d)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
} else {
return null;
}
});
slekt.events.recur_data = (function slekt$events$recur_data(var_args){
var args18057 = [];
var len__17843__auto___18060 = arguments.length;
var i__17844__auto___18061 = (0);
while(true){
if((i__17844__auto___18061 < len__17843__auto___18060)){
args18057.push((arguments[i__17844__auto___18061]));

var G__18062 = (i__17844__auto___18061 + (1));
i__17844__auto___18061 = G__18062;
continue;
} else {
}
break;
}

var G__18059 = args18057.length;
switch (G__18059) {
case 2:
return slekt.events.recur_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return slekt.events.recur_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18057.length)].join('')));

}
});

slekt.events.recur_data.cljs$core$IFn$_invoke$arity$2 = (function (data,fields){
return slekt.events.recur_data.call(null,data,fields,cljs.core.PersistentArrayMap.EMPTY);
});

slekt.events.recur_data.cljs$core$IFn$_invoke$arity$3 = (function (data,fields,result){
while(true){
if(cljs.core.empty_QMARK_.call(null,fields)){
return result;
} else {
var d = slekt.events.parse_data.call(null,data,cljs.core.first.call(null,fields));
var id = cljs.core.get.call(null,d,(0));
var val = cljs.core.get.call(null,d,(1));
var res = ((cljs.core.not_EQ_.call(null,null,id))?cljs.core.assoc.call(null,result,id,val):result);
var G__18064 = data;
var G__18065 = cljs.core.rest.call(null,fields);
var G__18066 = res;
data = G__18064;
fields = G__18065;
result = G__18066;
continue;
}
break;
}
});

slekt.events.recur_data.cljs$lang$maxFixedArity = 3;
slekt.events.update_persona = (function slekt$events$update_persona(data,eid){
var pid = new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151).cljs$core$IFn$_invoke$arity$1(data);
var links = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151),pid,new cljs.core.Keyword(null,"links","links",-654507394)], null));
var newlinks = cljs.core.conj.call(null,links,eid);
return cljs.core.swap_BANG_.call(null,slekt.database.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151),pid,new cljs.core.Keyword(null,"links","links",-654507394)], null),newlinks);
});
slekt.events.recur_personas = (function slekt$events$recur_personas(data,fields){
while(true){
if(cljs.core.empty_QMARK_.call(null,fields)){
return null;
} else {
var f = cljs.core.first.call(null,fields);
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(f);
var val = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(f)], null));
var event_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data);
var G__18068_18069 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18068_18069) {
case "name":
slekt.events.update_persona.call(null,val,event_id);

break;
case "event":

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18071 = data;
var G__18072 = cljs.core.rest.call(null,fields);
data = G__18071;
fields = G__18072;
continue;
}
break;
}
});
slekt.events.create_event = (function slekt$events$create_event(data){
var event_id = slekt.events.create_new_eventid.call(null);
var d = cljs.core.assoc.call(null,data,new cljs.core.Keyword("event","by-id","event/by-id",-2100667447),event_id);
var template = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"facttemplates","facttemplates",1934305289),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(d)], null));
var fields = new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(template);
var parsed = slekt.events.recur_data.call(null,d,fields);
var value = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_id,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"value","value",305978217),parsed], null);
slekt.events.recur_personas.call(null,value,fields);

return cljs.core.swap_BANG_.call(null,slekt.database.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("event","by-id","event/by-id",-2100667447),event_id], null),value);
});
slekt.events.update_event = (function slekt$events$update_event(data){
return cljs.core.println.call(null,"updating event");
});
slekt.events.save_event = (function slekt$events$save_event(){
var data = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword("window","edit","window/edit",1864887642)], null));
var eventid = new cljs.core.Keyword("event","by-id","event/by-id",-2100667447).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core._EQ_.call(null,null,eventid)){
return slekt.events.create_event.call(null,data);
} else {
return slekt.events.update_event.call(null,data);
}
});

//# sourceMappingURL=events.js.map