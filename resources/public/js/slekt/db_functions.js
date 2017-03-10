// Compiled by ClojureScript 1.7.170 {}
goog.provide('slekt.db_functions');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('slekt.date');
goog.require('slekt.events');
goog.require('slekt.relations');
goog.require('slekt.database');
cljs.core.enable_console_print_BANG_.call(null);
slekt.db_functions.getPersona = (function slekt$db_functions$getPersona(id){
return cljs.core.get.call(null,new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,slekt.database.state)),id);
});
slekt.db_functions.getEvent = (function slekt$db_functions$getEvent(id){
return cljs.core.get.call(null,new cljs.core.Keyword("event","by-id","event/by-id",-2100667447).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,slekt.database.state)),id);
});
slekt.db_functions.add_sortable_date = (function slekt$db_functions$add_sortable_date(event,dateinfo){
var e = cljs.core.get_in.call(null,event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dateinfo)], null));
var date = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(e);
var address = cljs.core.get_in.call(null,e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"value","value",305978217)], null));
var sortable = slekt.date.sortable_date.call(null,date);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"date","date",-1463434462),date,new cljs.core.Keyword(null,"sortable","sortable",2109633621),sortable,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(dateinfo),new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"event","event",301435442),event], null);
});
slekt.db_functions.parse_event = (function slekt$db_functions$parse_event(event){
var type = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"facttemplates","facttemplates",1934305289),new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(event)], null));
var events = cljs.core.filter.call(null,((function (type){
return (function (p1__30334_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__30334_SHARP_));
});})(type))
,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(type));
return cljs.core.map.call(null,((function (type,events){
return (function (p1__30335_SHARP_){
return slekt.db_functions.add_sortable_date.call(null,event,p1__30335_SHARP_);
});})(type,events))
,events);
});
slekt.db_functions.events_into_list = (function slekt$db_functions$events_into_list(var_args){
var args30336 = [];
var len__17843__auto___30339 = arguments.length;
var i__17844__auto___30340 = (0);
while(true){
if((i__17844__auto___30340 < len__17843__auto___30339)){
args30336.push((arguments[i__17844__auto___30340]));

var G__30341 = (i__17844__auto___30340 + (1));
i__17844__auto___30340 = G__30341;
continue;
} else {
}
break;
}

var G__30338 = args30336.length;
switch (G__30338) {
case 1:
return slekt.db_functions.events_into_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return slekt.db_functions.events_into_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30336.length)].join('')));

}
});

slekt.db_functions.events_into_list.cljs$core$IFn$_invoke$arity$1 = (function (nestedlist){
return slekt.db_functions.events_into_list.call(null,nestedlist,cljs.core.List.EMPTY);
});

slekt.db_functions.events_into_list.cljs$core$IFn$_invoke$arity$2 = (function (nestedlist,final_list){
while(true){
if(cljs.core.empty_QMARK_.call(null,nestedlist)){
return final_list;
} else {
var G__30343 = cljs.core.rest.call(null,nestedlist);
var G__30344 = cljs.core.concat.call(null,final_list,cljs.core.first.call(null,nestedlist));
nestedlist = G__30343;
final_list = G__30344;
continue;
}
break;
}
});

slekt.db_functions.events_into_list.cljs$lang$maxFixedArity = 2;
slekt.db_functions.compare_dates = (function slekt$db_functions$compare_dates(event1,event2){
var date1 = new cljs.core.Keyword(null,"sortable","sortable",2109633621).cljs$core$IFn$_invoke$arity$1(event1);
var date2 = new cljs.core.Keyword(null,"sortable","sortable",2109633621).cljs$core$IFn$_invoke$arity$1(event2);
if((date1 < date2)){
return true;
} else {
return false;
}
});
slekt.db_functions.event_list = (function slekt$db_functions$event_list(links){
var parsed = cljs.core.map.call(null,(function (p1__30345_SHARP_){
return slekt.db_functions.parse_event.call(null,slekt.db_functions.getEvent.call(null,p1__30345_SHARP_));
}),links);
var merged = slekt.db_functions.events_into_list.call(null,parsed);
return cljs.core.filter.call(null,((function (parsed,merged){
return (function (p1__30346_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__30346_SHARP_));
});})(parsed,merged))
,cljs.core.sort.call(null,cljs.core.comp.call(null,slekt.db_functions.compare_dates),merged));
});
slekt.db_functions.setCurrentSelected = (function slekt$db_functions$setCurrentSelected(id){
var current = slekt.db_functions.getPersona.call(null,id);
var father = slekt.relations.findfather.call(null,id);
var mother = slekt.relations.findmother.call(null,id);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),id,new cljs.core.Keyword(null,"father","father",-173311021),cljs.core.first.call(null,father),new cljs.core.Keyword(null,"mother","mother",1904423947),cljs.core.first.call(null,mother)], null);
});
slekt.db_functions.setCurrent = (function slekt$db_functions$setCurrent(value){
return cljs.core.swap_BANG_.call(null,slekt.database.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword(null,"current","current",-1088038603)], null),slekt.db_functions.setCurrentSelected.call(null,value));
});
slekt.db_functions.getFieldTypeID = (function slekt$db_functions$getFieldTypeID(type,fields){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30347_SHARP_){
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__30347_SHARP_));
}),fields));
});
slekt.db_functions.getPlaceDeprecated = (function slekt$db_functions$getPlaceDeprecated(event){
var template = new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(event);
var t = template.call(null,new cljs.core.Keyword(null,"facttemplates","facttemplates",1934305289).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,slekt.database.state)));
var fields = new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(t);
var fieldindex = slekt.db_functions.getFieldTypeID.call(null,new cljs.core.Keyword(null,"place","place",-819689466),fields);
return cljs.core.get.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(fieldindex));
});
/**
 * Creates map of name according to its template
 */
slekt.db_functions.parse_name = (function slekt$db_functions$parse_name(var_args){
var args30348 = [];
var len__17843__auto___30351 = arguments.length;
var i__17844__auto___30352 = (0);
while(true){
if((i__17844__auto___30352 < len__17843__auto___30351)){
args30348.push((arguments[i__17844__auto___30352]));

var G__30353 = (i__17844__auto___30352 + (1));
i__17844__auto___30352 = G__30353;
continue;
} else {
}
break;
}

var G__30350 = args30348.length;
switch (G__30350) {
case 1:
return slekt.db_functions.parse_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return slekt.db_functions.parse_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30348.length)].join('')));

}
});

slekt.db_functions.parse_name.cljs$core$IFn$_invoke$arity$1 = (function (value){
var template = new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(value);
var f = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldtemplates","fieldtemplates",1636462446),template], null));
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(value);
return slekt.db_functions.parse_name.call(null,name,f,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"template","template",-702405684),template], null));
});

slekt.db_functions.parse_name.cljs$core$IFn$_invoke$arity$3 = (function (name,fields,result){
while(true){
if(cljs.core.empty_QMARK_.call(null,fields)){
return result;
} else {
var G__30355 = name;
var G__30356 = cljs.core.rest.call(null,fields);
var G__30357 = cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,fields)),cljs.core.get.call(null,name,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,fields))));
name = G__30355;
fields = G__30356;
result = G__30357;
continue;
}
break;
}
});

slekt.db_functions.parse_name.cljs$lang$maxFixedArity = 3;
slekt.db_functions.parse_event_date = (function slekt$db_functions$parse_event_date(value){
var date = slekt.date.date_to_string.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(value));
var place = cljs.core.get_in.call(null,value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"value","value",305978217)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),date,new cljs.core.Keyword(null,"place","place",-819689466),place], null);
});
slekt.db_functions.name_string = (function slekt$db_functions$name_string(var_args){
var args30358 = [];
var len__17843__auto___30361 = arguments.length;
var i__17844__auto___30362 = (0);
while(true){
if((i__17844__auto___30362 < len__17843__auto___30361)){
args30358.push((arguments[i__17844__auto___30362]));

var G__30363 = (i__17844__auto___30362 + (1));
i__17844__auto___30362 = G__30363;
continue;
} else {
}
break;
}

var G__30360 = args30358.length;
switch (G__30360) {
case 1:
return slekt.db_functions.name_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return slekt.db_functions.name_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30358.length)].join('')));

}
});

slekt.db_functions.name_string.cljs$core$IFn$_invoke$arity$1 = (function (props){
var nameparts = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(props);
return slekt.db_functions.name_string.call(null,nameparts,"");
});

slekt.db_functions.name_string.cljs$core$IFn$_invoke$arity$2 = (function (nameparts,name){
while(true){
if(cljs.core.empty_QMARK_.call(null,nameparts)){
return name;
} else {
var G__30365 = cljs.core.rest.call(null,nameparts);
var G__30366 = [cljs.core.str(name),cljs.core.str(" "),cljs.core.str(cljs.core.first.call(null,nameparts))].join('');
nameparts = G__30365;
name = G__30366;
continue;
}
break;
}
});

slekt.db_functions.name_string.cljs$lang$maxFixedArity = 2;
/**
 * Parses the event field to get correct values and updates the gui state
 */
slekt.db_functions.parse_event_field = (function slekt$db_functions$parse_event_field(field,event){
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(field);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(field);
var values = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(event);
var value = cljs.core.get.call(null,values,id);
var pid = new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151).cljs$core$IFn$_invoke$arity$1(value);
var returnvalue = ((function (type,id,values,value,pid){
return (function (i,vals){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.assoc.call(null,vals,new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151),pid)], null);
});})(type,id,values,value,pid))
;
var G__30368 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30368) {
case "name":
return returnvalue.call(null,id,slekt.db_functions.parse_name.call(null,value));

break;
case "event":
return returnvalue.call(null,id,slekt.db_functions.parse_event_date.call(null,value));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
/**
 * Loops through the template of an event to make sure each field gets the correct value from the event
 */
slekt.db_functions.populate_event_field = (function slekt$db_functions$populate_event_field(var_args){
var args30370 = [];
var len__17843__auto___30373 = arguments.length;
var i__17844__auto___30374 = (0);
while(true){
if((i__17844__auto___30374 < len__17843__auto___30373)){
args30370.push((arguments[i__17844__auto___30374]));

var G__30375 = (i__17844__auto___30374 + (1));
i__17844__auto___30374 = G__30375;
continue;
} else {
}
break;
}

var G__30372 = args30370.length;
switch (G__30372) {
case 1:
return slekt.db_functions.populate_event_field.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return slekt.db_functions.populate_event_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30370.length)].join('')));

}
});

slekt.db_functions.populate_event_field.cljs$core$IFn$_invoke$arity$1 = (function (event){
var template = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"facttemplates","facttemplates",1934305289),new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(event)], null));
var fields = new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(template);
return slekt.db_functions.populate_event_field.call(null,fields,event,cljs.core.PersistentArrayMap.EMPTY);
});

slekt.db_functions.populate_event_field.cljs$core$IFn$_invoke$arity$3 = (function (fields,event,result){
while(true){
if(cljs.core.empty_QMARK_.call(null,fields)){
return result;
} else {
var parsed = slekt.db_functions.parse_event_field.call(null,cljs.core.first.call(null,fields),event);
var id = cljs.core.get.call(null,parsed,(0));
var value = cljs.core.get.call(null,parsed,(1));
var G__30377 = cljs.core.rest.call(null,fields);
var G__30378 = event;
var G__30379 = cljs.core.assoc.call(null,result,id,value);
fields = G__30377;
event = G__30378;
result = G__30379;
continue;
}
break;
}
});

slekt.db_functions.populate_event_field.cljs$lang$maxFixedArity = 3;
slekt.db_functions.set_event_edit_field = (function slekt$db_functions$set_event_edit_field(var_args){
var args30380 = [];
var len__17843__auto___30383 = arguments.length;
var i__17844__auto___30384 = (0);
while(true){
if((i__17844__auto___30384 < len__17843__auto___30383)){
args30380.push((arguments[i__17844__auto___30384]));

var G__30385 = (i__17844__auto___30384 + (1));
i__17844__auto___30384 = G__30385;
continue;
} else {
}
break;
}

var G__30382 = args30380.length;
switch (G__30382) {
case 2:
return slekt.db_functions.set_event_edit_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return slekt.db_functions.set_event_edit_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30380.length)].join('')));

}
});

slekt.db_functions.set_event_edit_field.cljs$core$IFn$_invoke$arity$2 = (function (value,key){
return cljs.core.swap_BANG_.call(null,slekt.database.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword("window","edit","window/edit",1864887642),new cljs.core.Keyword(null,"values","values",372645556),key], null),value);
});

slekt.db_functions.set_event_edit_field.cljs$core$IFn$_invoke$arity$3 = (function (value,key,subid){
return cljs.core.swap_BANG_.call(null,slekt.database.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword("window","edit","window/edit",1864887642),new cljs.core.Keyword(null,"values","values",372645556),key,subid], null),value);
});

slekt.db_functions.set_event_edit_field.cljs$lang$maxFixedArity = 3;
slekt.db_functions.find_role_id = (function slekt$db_functions$find_role_id(role,fields){
while(true){
if(cljs.core._EQ_.call(null,role,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,fields)))){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,fields));
} else {
if(cljs.core.empty_QMARK_.call(null,fields)){
return null;
} else {
var G__30387 = role;
var G__30388 = cljs.core.rest.call(null,fields);
role = G__30387;
fields = G__30388;
continue;
}
}
break;
}
});
slekt.db_functions.set_current_role = (function slekt$db_functions$set_current_role(role,template){
var id = slekt.db_functions.find_role_id.call(null,role,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(template));
var pid = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"selected","selected",574897764)], null));
var persona = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151),pid], null));
var value = cljs.core.assoc.call(null,slekt.db_functions.parse_name.call(null,persona),new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151),pid);
return cljs.core.swap_BANG_.call(null,slekt.database.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword("window","edit","window/edit",1864887642),new cljs.core.Keyword(null,"values","values",372645556),id], null),value);
});
slekt.db_functions.set_event_edit = (function slekt$db_functions$set_event_edit(key,role){
if(cljs.core._EQ_.call(null,key,null)){
cljs.core.swap_BANG_.call(null,slekt.database.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword("window","edit","window/edit",1864887642),new cljs.core.Keyword(null,"type","type",1174270348)], null),null);

cljs.core.swap_BANG_.call(null,slekt.database.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword("window","edit","window/edit",1864887642),new cljs.core.Keyword("event","by-id","event/by-id",-2100667447)], null),null);

return cljs.core.swap_BANG_.call(null,slekt.database.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword("window","edit","window/edit",1864887642),new cljs.core.Keyword(null,"values","values",372645556)], null),cljs.core.PersistentArrayMap.EMPTY);
} else {
var template = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"facttemplates","facttemplates",1934305289),key], null));
if(cljs.core.not_EQ_.call(null,null,role)){
slekt.db_functions.set_current_role.call(null,role,template);
} else {
}

return cljs.core.swap_BANG_.call(null,slekt.database.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword("window","edit","window/edit",1864887642),new cljs.core.Keyword(null,"type","type",1174270348)], null),key);
}
});
slekt.db_functions.edit_event = (function slekt$db_functions$edit_event(event){
cljs.core.swap_BANG_.call(null,slekt.database.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword("window","edit","window/edit",1864887642),new cljs.core.Keyword("event","by-id","event/by-id",-2100667447)], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event));

cljs.core.swap_BANG_.call(null,slekt.database.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword("window","edit","window/edit",1864887642),new cljs.core.Keyword(null,"values","values",372645556)], null),slekt.db_functions.populate_event_field.call(null,event));

return slekt.db_functions.set_event_edit.call(null,new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(event),null);
});
slekt.db_functions.get_nametemplate = (function slekt$db_functions$get_nametemplate(var_args){
var args30389 = [];
var len__17843__auto___30392 = arguments.length;
var i__17844__auto___30393 = (0);
while(true){
if((i__17844__auto___30393 < len__17843__auto___30392)){
args30389.push((arguments[i__17844__auto___30393]));

var G__30394 = (i__17844__auto___30393 + (1));
i__17844__auto___30393 = G__30394;
continue;
} else {
}
break;
}

var G__30391 = args30389.length;
switch (G__30391) {
case 0:
return slekt.db_functions.get_nametemplate.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return slekt.db_functions.get_nametemplate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30389.length)].join('')));

}
});

slekt.db_functions.get_nametemplate.cljs$core$IFn$_invoke$arity$0 = (function (){
var default$ = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldtemplates","fieldtemplates",1636462446),new cljs.core.Keyword(null,"defaultnametemplate","defaultnametemplate",762260382)], null));
return cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldtemplates","fieldtemplates",1636462446),default$], null));
});

slekt.db_functions.get_nametemplate.cljs$core$IFn$_invoke$arity$1 = (function (templatename){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldtemplates","fieldtemplates",1636462446),templatename], null));
});

slekt.db_functions.get_nametemplate.cljs$lang$maxFixedArity = 1;
slekt.db_functions.save_event = (function slekt$db_functions$save_event(){
var edit = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword("window","edit","window/edit",1864887642),new cljs.core.Keyword(null,"values","values",372645556)], null));
var originalevent = slekt.db_functions.getEvent.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword("window","edit","window/edit",1864887642),new cljs.core.Keyword("event","by-id","event/by-id",-2100667447)], null)));
var originaldata = slekt.db_functions.populate_event_field.call(null,originalevent);
var currentuser = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"selected","selected",574897764)], null));
if(cljs.core._EQ_.call(null,originaldata,edit)){
slekt.db_functions.set_event_edit.call(null,null,null);
} else {
slekt.events.save_event.call(null);

slekt.db_functions.set_event_edit.call(null,null,null);
}

return slekt.db_functions.setCurrent.call(null,currentuser);
});

//# sourceMappingURL=db_functions.js.map