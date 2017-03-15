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
return (function (p1__18117_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__18117_SHARP_));
});})(type))
,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(type));
return cljs.core.map.call(null,((function (type,events){
return (function (p1__18118_SHARP_){
return slekt.db_functions.add_sortable_date.call(null,event,p1__18118_SHARP_);
});})(type,events))
,events);
});
slekt.db_functions.events_into_list = (function slekt$db_functions$events_into_list(var_args){
var args18119 = [];
var len__17843__auto___18122 = arguments.length;
var i__17844__auto___18123 = (0);
while(true){
if((i__17844__auto___18123 < len__17843__auto___18122)){
args18119.push((arguments[i__17844__auto___18123]));

var G__18124 = (i__17844__auto___18123 + (1));
i__17844__auto___18123 = G__18124;
continue;
} else {
}
break;
}

var G__18121 = args18119.length;
switch (G__18121) {
case 1:
return slekt.db_functions.events_into_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return slekt.db_functions.events_into_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18119.length)].join('')));

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
var G__18126 = cljs.core.rest.call(null,nestedlist);
var G__18127 = cljs.core.concat.call(null,final_list,cljs.core.first.call(null,nestedlist));
nestedlist = G__18126;
final_list = G__18127;
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
var parsed = cljs.core.map.call(null,(function (p1__18128_SHARP_){
return slekt.db_functions.parse_event.call(null,slekt.db_functions.getEvent.call(null,p1__18128_SHARP_));
}),links);
var merged = slekt.db_functions.events_into_list.call(null,parsed);
return cljs.core.filter.call(null,((function (parsed,merged){
return (function (p1__18129_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__18129_SHARP_));
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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__18130_SHARP_){
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__18130_SHARP_));
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
var args18131 = [];
var len__17843__auto___18134 = arguments.length;
var i__17844__auto___18135 = (0);
while(true){
if((i__17844__auto___18135 < len__17843__auto___18134)){
args18131.push((arguments[i__17844__auto___18135]));

var G__18136 = (i__17844__auto___18135 + (1));
i__17844__auto___18135 = G__18136;
continue;
} else {
}
break;
}

var G__18133 = args18131.length;
switch (G__18133) {
case 1:
return slekt.db_functions.parse_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return slekt.db_functions.parse_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18131.length)].join('')));

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
var G__18138 = name;
var G__18139 = cljs.core.rest.call(null,fields);
var G__18140 = cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,fields)),cljs.core.get.call(null,name,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,fields))));
name = G__18138;
fields = G__18139;
result = G__18140;
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
var args18141 = [];
var len__17843__auto___18144 = arguments.length;
var i__17844__auto___18145 = (0);
while(true){
if((i__17844__auto___18145 < len__17843__auto___18144)){
args18141.push((arguments[i__17844__auto___18145]));

var G__18146 = (i__17844__auto___18145 + (1));
i__17844__auto___18145 = G__18146;
continue;
} else {
}
break;
}

var G__18143 = args18141.length;
switch (G__18143) {
case 1:
return slekt.db_functions.name_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return slekt.db_functions.name_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18141.length)].join('')));

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
var G__18148 = cljs.core.rest.call(null,nameparts);
var G__18149 = [cljs.core.str(name),cljs.core.str(" "),cljs.core.str(cljs.core.first.call(null,nameparts))].join('');
nameparts = G__18148;
name = G__18149;
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
var G__18151 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18151) {
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
var args18153 = [];
var len__17843__auto___18156 = arguments.length;
var i__17844__auto___18157 = (0);
while(true){
if((i__17844__auto___18157 < len__17843__auto___18156)){
args18153.push((arguments[i__17844__auto___18157]));

var G__18158 = (i__17844__auto___18157 + (1));
i__17844__auto___18157 = G__18158;
continue;
} else {
}
break;
}

var G__18155 = args18153.length;
switch (G__18155) {
case 1:
return slekt.db_functions.populate_event_field.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return slekt.db_functions.populate_event_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18153.length)].join('')));

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
var G__18160 = cljs.core.rest.call(null,fields);
var G__18161 = event;
var G__18162 = cljs.core.assoc.call(null,result,id,value);
fields = G__18160;
event = G__18161;
result = G__18162;
continue;
}
break;
}
});

slekt.db_functions.populate_event_field.cljs$lang$maxFixedArity = 3;
slekt.db_functions.set_event_edit_field = (function slekt$db_functions$set_event_edit_field(var_args){
var args18163 = [];
var len__17843__auto___18166 = arguments.length;
var i__17844__auto___18167 = (0);
while(true){
if((i__17844__auto___18167 < len__17843__auto___18166)){
args18163.push((arguments[i__17844__auto___18167]));

var G__18168 = (i__17844__auto___18167 + (1));
i__17844__auto___18167 = G__18168;
continue;
} else {
}
break;
}

var G__18165 = args18163.length;
switch (G__18165) {
case 2:
return slekt.db_functions.set_event_edit_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return slekt.db_functions.set_event_edit_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18163.length)].join('')));

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
var G__18170 = role;
var G__18171 = cljs.core.rest.call(null,fields);
role = G__18170;
fields = G__18171;
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
var args18172 = [];
var len__17843__auto___18175 = arguments.length;
var i__17844__auto___18176 = (0);
while(true){
if((i__17844__auto___18176 < len__17843__auto___18175)){
args18172.push((arguments[i__17844__auto___18176]));

var G__18177 = (i__17844__auto___18176 + (1));
i__17844__auto___18176 = G__18177;
continue;
} else {
}
break;
}

var G__18174 = args18172.length;
switch (G__18174) {
case 0:
return slekt.db_functions.get_nametemplate.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return slekt.db_functions.get_nametemplate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18172.length)].join('')));

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