// Compiled by ClojureScript 1.7.170 {}
goog.provide('slekt.gui');
goog.require('cljs.core');
goog.require('slekt.db_functions');
goog.require('reagent.core');
goog.require('slekt.date');
goog.require('slekt.relations');
goog.require('slekt.database');
cljs.core.enable_console_print_BANG_.call(null);
slekt.gui.person_display_component = (function slekt$gui$person_display_component(id){
var name = slekt.db_functions.name_string.call(null,slekt.db_functions.getPersona.call(null,id));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name){
return (function (){
return slekt.db_functions.setCurrent.call(null,id);
});})(name))
], null),name], null);
});
slekt.gui.name_part_component = (function slekt$gui$name_part_component(label,id,part){
var value = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword("window","edit","window/edit",1864887642),new cljs.core.Keyword(null,"values","values",372645556),id,part], null));
var v = ((cljs.core._EQ_.call(null,null,value))?"":value);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str(label),cljs.core.str(": ")].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value,v){
return (function (p1__18181_SHARP_){
return slekt.db_functions.set_event_edit_field.call(null,p1__18181_SHARP_.target.value,id,part);
});})(value,v))
], null)], null)], null);
});
slekt.gui.name_component = (function slekt$gui$name_component(field){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(field);
var t = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword("window","edit","window/edit",1864887642),new cljs.core.Keyword(null,"values","values",372645556),id,new cljs.core.Keyword(null,"template","template",-702405684)], null));
var personid = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword("window","edit","window/edit",1864887642),new cljs.core.Keyword(null,"values","values",372645556),id,new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151)], null));
var template = ((cljs.core._EQ_.call(null,null,t))?slekt.db_functions.get_nametemplate.call(null):slekt.db_functions.get_nametemplate.call(null,t));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(field)),cljs.core.str(" : "),cljs.core.str(personid)].join('')], null),(function (){var iter__17557__auto__ = ((function (id,t,personid,template){
return (function slekt$gui$name_component_$_iter__18186(s__18187){
return (new cljs.core.LazySeq(null,((function (id,t,personid,template){
return (function (){
var s__18187__$1 = s__18187;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18187__$1);
if(temp__4425__auto__){
var s__18187__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18187__$2)){
var c__17555__auto__ = cljs.core.chunk_first.call(null,s__18187__$2);
var size__17556__auto__ = cljs.core.count.call(null,c__17555__auto__);
var b__18189 = cljs.core.chunk_buffer.call(null,size__17556__auto__);
if((function (){var i__18188 = (0);
while(true){
if((i__18188 < size__17556__auto__)){
var field__$1 = cljs.core._nth.call(null,c__17555__auto__,i__18188);
cljs.core.chunk_append.call(null,b__18189,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [slekt.gui.name_part_component,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(field__$1),id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(field__$1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(field__$1)], null)));

var G__18190 = (i__18188 + (1));
i__18188 = G__18190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18189),slekt$gui$name_component_$_iter__18186.call(null,cljs.core.chunk_rest.call(null,s__18187__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18189),null);
}
} else {
var field__$1 = cljs.core.first.call(null,s__18187__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [slekt.gui.name_part_component,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(field__$1),id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(field__$1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(field__$1)], null)),slekt$gui$name_component_$_iter__18186.call(null,cljs.core.rest.call(null,s__18187__$2)));
}
} else {
return null;
}
break;
}
});})(id,t,personid,template))
,null,null));
});})(id,t,personid,template))
;
return iter__17557__auto__.call(null,template);
})()], null);
});
slekt.gui.date_component = (function slekt$gui$date_component(field){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(field);
var date = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword("window","edit","window/edit",1864887642),new cljs.core.Keyword(null,"values","values",372645556),id,new cljs.core.Keyword(null,"date","date",-1463434462)], null));
var place = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword("window","edit","window/edit",1864887642),new cljs.core.Keyword(null,"values","values",372645556),id,new cljs.core.Keyword(null,"place","place",-819689466)], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(field)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(field)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),date,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id,date,place){
return (function (p1__18191_SHARP_){
return slekt.db_functions.set_event_edit_field.call(null,p1__18191_SHARP_.target.value,id,new cljs.core.Keyword(null,"date","date",-1463434462));
});})(id,date,place))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Place"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),place,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id,date,place){
return (function (p1__18192_SHARP_){
return slekt.db_functions.set_event_edit_field.call(null,p1__18192_SHARP_.target.value,id,new cljs.core.Keyword(null,"place","place",-819689466));
});})(id,date,place))
], null)], null)], null);
});
slekt.gui.field_generator = (function slekt$gui$field_generator(fields){
var iter__17557__auto__ = (function slekt$gui$field_generator_$_iter__18201(s__18202){
return (new cljs.core.LazySeq(null,(function (){
var s__18202__$1 = s__18202;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18202__$1);
if(temp__4425__auto__){
var s__18202__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18202__$2)){
var c__17555__auto__ = cljs.core.chunk_first.call(null,s__18202__$2);
var size__17556__auto__ = cljs.core.count.call(null,c__17555__auto__);
var b__18204 = cljs.core.chunk_buffer.call(null,size__17556__auto__);
if((function (){var i__18203 = (0);
while(true){
if((i__18203 < size__17556__auto__)){
var field = cljs.core._nth.call(null,c__17555__auto__,i__18203);
cljs.core.chunk_append.call(null,b__18204,(function (){var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(field);
var G__18207 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18207) {
case "name":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slekt.gui.name_component,field], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(field)], null));

break;
case "event":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slekt.gui.date_component,field], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(field)], null));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})());

var G__18210 = (i__18203 + (1));
i__18203 = G__18210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18204),slekt$gui$field_generator_$_iter__18201.call(null,cljs.core.chunk_rest.call(null,s__18202__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18204),null);
}
} else {
var field = cljs.core.first.call(null,s__18202__$2);
return cljs.core.cons.call(null,(function (){var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(field);
var G__18208 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18208) {
case "name":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slekt.gui.name_component,field], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(field)], null));

break;
case "event":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slekt.gui.date_component,field], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(field)], null));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})(),slekt$gui$field_generator_$_iter__18201.call(null,cljs.core.rest.call(null,s__18202__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17557__auto__.call(null,fields);
});
slekt.gui.event_edit_component = (function slekt$gui$event_edit_component(){
var current = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"selected","selected",574897764)], null));
var eventtype = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword("window","edit","window/edit",1864887642),new cljs.core.Keyword(null,"type","type",1174270348)], null));
var event = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("event","by-id","event/by-id",-2100667447),cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword("window","edit","window/edit",1864887642),new cljs.core.Keyword("event","by-id","event/by-id",-2100667447)], null))], null));
var template = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"facttemplates","facttemplates",1934305289),eventtype], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"arial"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(template)], null),slekt.gui.field_generator.call(null,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(template)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Ok",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current,eventtype,event,template){
return (function (){
return slekt.db_functions.save_event.call(null);
});})(current,eventtype,event,template))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current,eventtype,event,template){
return (function (){
return slekt.db_functions.set_event_edit.call(null,null,null);
});})(current,eventtype,event,template))
], null)], null)], null);
});
slekt.gui.event_display_component = (function slekt$gui$event_display_component(event){
var label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(event);
var date = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event);
var year = slekt.date.getyear.call(null,date);
var main = cljs.core.get.call(null,cljs.core.get_in.call(null,event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"value","value",305978217)], null)),(0));
var name = ((cljs.core._EQ_.call(null,new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151).cljs$core$IFn$_invoke$arity$1(main),cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"selected","selected",574897764)], null))))?new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(event):slekt.db_functions.name_string.call(null,slekt.db_functions.getPersona.call(null,new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151).cljs$core$IFn$_invoke$arity$1(main))));
var eventstring = [cljs.core.str(year),cljs.core.str(" - "),cljs.core.str(label),cljs.core.str(" : ")].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (label,date,year,main,name,eventstring){
return (function (){
return slekt.db_functions.edit_event.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(event));
});})(label,date,year,main,name,eventstring))
], null),eventstring], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (label,date,year,main,name,eventstring){
return (function (){
return slekt.db_functions.setCurrent.call(null,new cljs.core.Keyword("persona","by-id","persona/by-id",2038628151).cljs$core$IFn$_invoke$arity$1(main));
});})(label,date,year,main,name,eventstring))
], null),name], null)], null);
});
slekt.gui.current_selected_component = (function slekt$gui$current_selected_component(){
var current = cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var personinfo = slekt.db_functions.getPersona.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(current));
var dad = new cljs.core.Keyword(null,"father","father",-173311021).cljs$core$IFn$_invoke$arity$1(current);
var mum = new cljs.core.Keyword(null,"mother","mother",1904423947).cljs$core$IFn$_invoke$arity$1(current);
var children = slekt.relations.findchildren.call(null,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(personinfo),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(current));
var events = slekt.db_functions.event_list.call(null,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(personinfo));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"arial"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"powderblue",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"height","height",1025178622),"70px",new cljs.core.Keyword(null,"top","top",-1856271961),"20px",new cljs.core.Keyword(null,"left","left",-399115937),"20px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"140%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),slekt.db_functions.name_string.call(null,personinfo)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"cadetblue",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"height","height",1025178622),"35px",new cljs.core.Keyword(null,"top","top",-1856271961),"20px",new cljs.core.Keyword(null,"left","left",-399115937),"420px"], null)], null),"Father: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slekt.gui.person_display_component,dad], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightcoral",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"height","height",1025178622),"35px",new cljs.core.Keyword(null,"top","top",-1856271961),"55px",new cljs.core.Keyword(null,"left","left",-399115937),"420px"], null)], null),"Mother: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slekt.gui.person_display_component,mum], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"wheat",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"top","top",-1856271961),"90px",new cljs.core.Keyword(null,"left","left",-399115937),"420px"], null)], null),"Children:",(function (){var iter__17557__auto__ = ((function (current,personinfo,dad,mum,children,events){
return (function slekt$gui$current_selected_component_$_iter__18220(s__18221){
return (new cljs.core.LazySeq(null,((function (current,personinfo,dad,mum,children,events){
return (function (){
var s__18221__$1 = s__18221;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18221__$1);
if(temp__4425__auto__){
var s__18221__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18221__$2)){
var c__17555__auto__ = cljs.core.chunk_first.call(null,s__18221__$2);
var size__17556__auto__ = cljs.core.count.call(null,c__17555__auto__);
var b__18223 = cljs.core.chunk_buffer.call(null,size__17556__auto__);
if((function (){var i__18222 = (0);
while(true){
if((i__18222 < size__17556__auto__)){
var child = cljs.core._nth.call(null,c__17555__auto__,i__18222);
cljs.core.chunk_append.call(null,b__18223,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slekt.gui.person_display_component,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),child], null)));

var G__18228 = (i__18222 + (1));
i__18222 = G__18228;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18223),slekt$gui$current_selected_component_$_iter__18220.call(null,cljs.core.chunk_rest.call(null,s__18221__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18223),null);
}
} else {
var child = cljs.core.first.call(null,s__18221__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slekt.gui.person_display_component,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),child], null)),slekt$gui$current_selected_component_$_iter__18220.call(null,cljs.core.rest.call(null,s__18221__$2)));
}
} else {
return null;
}
break;
}
});})(current,personinfo,dad,mum,children,events))
,null,null));
});})(current,personinfo,dad,mum,children,events))
;
return iter__17557__auto__.call(null,children);
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"wheat",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"380px",new cljs.core.Keyword(null,"top","top",-1856271961),"100px",new cljs.core.Keyword(null,"left","left",-399115937),"30px"], null)], null),"Events:",(function (){var iter__17557__auto__ = ((function (current,personinfo,dad,mum,children,events){
return (function slekt$gui$current_selected_component_$_iter__18224(s__18225){
return (new cljs.core.LazySeq(null,((function (current,personinfo,dad,mum,children,events){
return (function (){
var s__18225__$1 = s__18225;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18225__$1);
if(temp__4425__auto__){
var s__18225__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18225__$2)){
var c__17555__auto__ = cljs.core.chunk_first.call(null,s__18225__$2);
var size__17556__auto__ = cljs.core.count.call(null,c__17555__auto__);
var b__18227 = cljs.core.chunk_buffer.call(null,size__17556__auto__);
if((function (){var i__18226 = (0);
while(true){
if((i__18226 < size__17556__auto__)){
var event = cljs.core._nth.call(null,c__17555__auto__,i__18226);
cljs.core.chunk_append.call(null,b__18227,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slekt.gui.event_display_component,event], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.get_in.call(null,event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"id","id",-1388402092)], null))),cljs.core.str(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(event))].join('')], null)));

var G__18229 = (i__18226 + (1));
i__18226 = G__18229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18227),slekt$gui$current_selected_component_$_iter__18224.call(null,cljs.core.chunk_rest.call(null,s__18225__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18227),null);
}
} else {
var event = cljs.core.first.call(null,s__18225__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slekt.gui.event_display_component,event], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.get_in.call(null,event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"id","id",-1388402092)], null))),cljs.core.str(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(event))].join('')], null)),slekt$gui$current_selected_component_$_iter__18224.call(null,cljs.core.rest.call(null,s__18225__$2)));
}
} else {
return null;
}
break;
}
});})(current,personinfo,dad,mum,children,events))
,null,null));
});})(current,personinfo,dad,mum,children,events))
;
return iter__17557__auto__.call(null,events);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"450px",new cljs.core.Keyword(null,"left","left",-399115937),"20px"], null),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Add birth/baptism",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current,personinfo,dad,mum,children,events){
return (function (){
return slekt.db_functions.set_event_edit.call(null,new cljs.core.Keyword(null,"baptism","baptism",-470250055),new cljs.core.Keyword(null,"child","child",623967545));
});})(current,personinfo,dad,mum,children,events))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"450px",new cljs.core.Keyword(null,"left","left",-399115937),"140px"], null),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Add burial/death",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current,personinfo,dad,mum,children,events){
return (function (){
return slekt.db_functions.set_event_edit.call(null,new cljs.core.Keyword(null,"burial","burial",-1479194104),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(current,personinfo,dad,mum,children,events))
], null)], null)], null);
});
slekt.gui.start_window = (function slekt$gui$start_window(){
cljs.core.println.call(null,"*");

if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,slekt.database.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gui","state","gui/state",-1988590902),new cljs.core.Keyword("window","edit","window/edit",1864887642),new cljs.core.Keyword(null,"type","type",1174270348)], null)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slekt.gui.event_edit_component], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slekt.gui.current_selected_component], null);
}
});

//# sourceMappingURL=gui.js.map