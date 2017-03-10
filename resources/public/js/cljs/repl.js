// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25904_25918 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25905_25919 = null;
var count__25906_25920 = (0);
var i__25907_25921 = (0);
while(true){
if((i__25907_25921 < count__25906_25920)){
var f_25922 = cljs.core._nth.call(null,chunk__25905_25919,i__25907_25921);
cljs.core.println.call(null,"  ",f_25922);

var G__25923 = seq__25904_25918;
var G__25924 = chunk__25905_25919;
var G__25925 = count__25906_25920;
var G__25926 = (i__25907_25921 + (1));
seq__25904_25918 = G__25923;
chunk__25905_25919 = G__25924;
count__25906_25920 = G__25925;
i__25907_25921 = G__25926;
continue;
} else {
var temp__4425__auto___25927 = cljs.core.seq.call(null,seq__25904_25918);
if(temp__4425__auto___25927){
var seq__25904_25928__$1 = temp__4425__auto___25927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25904_25928__$1)){
var c__17588__auto___25929 = cljs.core.chunk_first.call(null,seq__25904_25928__$1);
var G__25930 = cljs.core.chunk_rest.call(null,seq__25904_25928__$1);
var G__25931 = c__17588__auto___25929;
var G__25932 = cljs.core.count.call(null,c__17588__auto___25929);
var G__25933 = (0);
seq__25904_25918 = G__25930;
chunk__25905_25919 = G__25931;
count__25906_25920 = G__25932;
i__25907_25921 = G__25933;
continue;
} else {
var f_25934 = cljs.core.first.call(null,seq__25904_25928__$1);
cljs.core.println.call(null,"  ",f_25934);

var G__25935 = cljs.core.next.call(null,seq__25904_25928__$1);
var G__25936 = null;
var G__25937 = (0);
var G__25938 = (0);
seq__25904_25918 = G__25935;
chunk__25905_25919 = G__25936;
count__25906_25920 = G__25937;
i__25907_25921 = G__25938;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25939 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16785__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25939);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25939)))?cljs.core.second.call(null,arglists_25939):arglists_25939));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25908 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25909 = null;
var count__25910 = (0);
var i__25911 = (0);
while(true){
if((i__25911 < count__25910)){
var vec__25912 = cljs.core._nth.call(null,chunk__25909,i__25911);
var name = cljs.core.nth.call(null,vec__25912,(0),null);
var map__25913 = cljs.core.nth.call(null,vec__25912,(1),null);
var map__25913__$1 = ((((!((map__25913 == null)))?((((map__25913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25913):map__25913);
var doc = cljs.core.get.call(null,map__25913__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25913__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25940 = seq__25908;
var G__25941 = chunk__25909;
var G__25942 = count__25910;
var G__25943 = (i__25911 + (1));
seq__25908 = G__25940;
chunk__25909 = G__25941;
count__25910 = G__25942;
i__25911 = G__25943;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25908);
if(temp__4425__auto__){
var seq__25908__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25908__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__25908__$1);
var G__25944 = cljs.core.chunk_rest.call(null,seq__25908__$1);
var G__25945 = c__17588__auto__;
var G__25946 = cljs.core.count.call(null,c__17588__auto__);
var G__25947 = (0);
seq__25908 = G__25944;
chunk__25909 = G__25945;
count__25910 = G__25946;
i__25911 = G__25947;
continue;
} else {
var vec__25915 = cljs.core.first.call(null,seq__25908__$1);
var name = cljs.core.nth.call(null,vec__25915,(0),null);
var map__25916 = cljs.core.nth.call(null,vec__25915,(1),null);
var map__25916__$1 = ((((!((map__25916 == null)))?((((map__25916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25916):map__25916);
var doc = cljs.core.get.call(null,map__25916__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25916__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25948 = cljs.core.next.call(null,seq__25908__$1);
var G__25949 = null;
var G__25950 = (0);
var G__25951 = (0);
seq__25908 = G__25948;
chunk__25909 = G__25949;
count__25910 = G__25950;
i__25911 = G__25951;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map