// Compiled by ClojureScript 1.7.170 {}
goog.provide('slekt.date');
goog.require('cljs.core');
goog.require('clojure.string');
slekt.date.parsemonth = (function slekt$date$parsemonth(value){
var G__30271 = value;
switch (G__30271) {
case (1):
return "jan";

break;
case (2):
return "feb";

break;
case (3):
return "mar";

break;
case (4):
return "apr";

break;
case (5):
return "may";

break;
case (6):
return "jun";

break;
case (7):
return "jul";

break;
case (8):
return "aug";

break;
case (9):
return "sep";

break;
case (10):
return "oct";

break;
case (11):
return "nov";

break;
case (12):
return "dec";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(value)].join('')));

}
});
slekt.date.month_converter = (function slekt$date$month_converter(s){
var firstletter = cljs.core.first.call(null,s);
var G__30274 = firstletter;
switch (G__30274) {
case "j":
if(cljs.core._EQ_.call(null,"a",cljs.core.get.call(null,s,(1)))){
return (1);
} else {
if(cljs.core._EQ_.call(null,"n",cljs.core.get.call(null,s,(2)))){
return (6);
} else {
return (7);
}
}

break;
case "f":
return (2);

break;
case "m":
if(cljs.core._EQ_.call(null,"r",cljs.core.get.call(null,s,(2)))){
return (3);
} else {
return (5);
}

break;
case "a":
if(cljs.core._EQ_.call(null,"p",cljs.core.get.call(null,s,(1)))){
return (4);
} else {
return (8);
}

break;
case "s":
return (9);

break;
case "o":
return (10);

break;
case "n":
return (11);

break;
case "d":
return (12);

break;
default:
return null;

}
});
slekt.date.date_to_string = (function slekt$date$date_to_string(value){
var state = cljs.core.first.call(null,value);
var G__30277 = (((state instanceof cljs.core.Keyword))?state.fqn:null);
switch (G__30277) {
case "parsed":
return [cljs.core.str(cljs.core.get.call(null,value,(1))),cljs.core.str("."),cljs.core.str(slekt.date.parsemonth.call(null,cljs.core.get.call(null,value,(2)))),cljs.core.str(" "),cljs.core.str(cljs.core.get.call(null,value,(3)))].join('');

break;
default:
return null;

}
});
slekt.date.sortable_date = (function slekt$date$sortable_date(date){
return ((cljs.core.get.call(null,date,(1)) + ((100) * cljs.core.get.call(null,date,(2)))) + ((10000) * cljs.core.get.call(null,date,(3))));
});
slekt.date.remove_empty = (function slekt$date$remove_empty(var_args){
var args30279 = [];
var len__17843__auto___30282 = arguments.length;
var i__17844__auto___30283 = (0);
while(true){
if((i__17844__auto___30283 < len__17843__auto___30282)){
args30279.push((arguments[i__17844__auto___30283]));

var G__30284 = (i__17844__auto___30283 + (1));
i__17844__auto___30283 = G__30284;
continue;
} else {
}
break;
}

var G__30281 = args30279.length;
switch (G__30281) {
case 1:
return slekt.date.remove_empty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return slekt.date.remove_empty.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30279.length)].join('')));

}
});

slekt.date.remove_empty.cljs$core$IFn$_invoke$arity$1 = (function (array){
return slekt.date.remove_empty.call(null,array,cljs.core.PersistentVector.EMPTY);
});

slekt.date.remove_empty.cljs$core$IFn$_invoke$arity$2 = (function (array,result){
while(true){
if(cljs.core.empty_QMARK_.call(null,array)){
return result;
} else {
var v = cljs.core.first.call(null,array);
var val = ((cljs.core.empty_QMARK_.call(null,v))?result:cljs.core.conj.call(null,result,v));
var G__30286 = cljs.core.rest.call(null,array);
var G__30287 = val;
array = G__30286;
result = G__30287;
continue;
}
break;
}
});

slekt.date.remove_empty.cljs$lang$maxFixedArity = 2;
slekt.date.parse_element = (function slekt$date$parse_element(s){
var res = (s | (0));
if(cljs.core._EQ_.call(null,(0),res)){
return slekt.date.month_converter.call(null,s);
} else {
return res;
}
});
slekt.date.recur_datearray = (function slekt$date$recur_datearray(var_args){
var args30288 = [];
var len__17843__auto___30291 = arguments.length;
var i__17844__auto___30292 = (0);
while(true){
if((i__17844__auto___30292 < len__17843__auto___30291)){
args30288.push((arguments[i__17844__auto___30292]));

var G__30293 = (i__17844__auto___30292 + (1));
i__17844__auto___30292 = G__30293;
continue;
} else {
}
break;
}

var G__30290 = args30288.length;
switch (G__30290) {
case 1:
return slekt.date.recur_datearray.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return slekt.date.recur_datearray.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30288.length)].join('')));

}
});

slekt.date.recur_datearray.cljs$core$IFn$_invoke$arity$1 = (function (array){
return slekt.date.recur_datearray.call(null,array,cljs.core.PersistentVector.EMPTY);
});

slekt.date.recur_datearray.cljs$core$IFn$_invoke$arity$2 = (function (array,result){
while(true){
if(cljs.core.empty_QMARK_.call(null,array)){
return result;
} else {
var G__30295 = cljs.core.rest.call(null,array);
var G__30296 = cljs.core.conj.call(null,result,slekt.date.parse_element.call(null,cljs.core.first.call(null,array)));
array = G__30295;
result = G__30296;
continue;
}
break;
}
});

slekt.date.recur_datearray.cljs$lang$maxFixedArity = 2;
slekt.date.containsnil_QMARK_ = (function slekt$date$containsnil_QMARK_(arr){
while(true){
if(cljs.core.empty_QMARK_.call(null,arr)){
return false;
} else {
if(cljs.core._EQ_.call(null,null,cljs.core.first.call(null,arr))){
return true;
} else {
var G__30297 = cljs.core.rest.call(null,arr);
arr = G__30297;
continue;
}
}
break;
}
});
slekt.date.string_to_date = (function slekt$date$string_to_date(string){
if(cljs.core.empty_QMARK_.call(null,string)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958)], null);
} else {
var s = clojure.string.lower_case.call(null,clojure.string.trim.call(null,string));
var parts = clojure.string.split.call(null,s,/[\\\\/\-\.\s+]/);
var clean_parts = slekt.date.remove_empty.call(null,parts);
var result = slekt.date.recur_datearray.call(null,clean_parts);
if(cljs.core.truth_(slekt.date.containsnil_QMARK_.call(null,result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unparsed","unparsed",-1771146248),string], null);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parsed","parsed",-819589156)], null),result));
}
}
});
slekt.date.getyear = (function slekt$date$getyear(date){
var state = cljs.core.get.call(null,date,(0));
var G__30299 = (((state instanceof cljs.core.Keyword))?state.fqn:null);
switch (G__30299) {
case "parsed":
return cljs.core.get.call(null,date,(3));

break;
case "unparsed":
return null;

break;
default:
return null;

}
});

//# sourceMappingURL=date.js.map