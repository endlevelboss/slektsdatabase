// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16785__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16785__auto__){
return or__16785__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16785__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24880_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24880_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24885 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24886 = null;
var count__24887 = (0);
var i__24888 = (0);
while(true){
if((i__24888 < count__24887)){
var n = cljs.core._nth.call(null,chunk__24886,i__24888);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24889 = seq__24885;
var G__24890 = chunk__24886;
var G__24891 = count__24887;
var G__24892 = (i__24888 + (1));
seq__24885 = G__24889;
chunk__24886 = G__24890;
count__24887 = G__24891;
i__24888 = G__24892;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24885);
if(temp__4425__auto__){
var seq__24885__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24885__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__24885__$1);
var G__24893 = cljs.core.chunk_rest.call(null,seq__24885__$1);
var G__24894 = c__17588__auto__;
var G__24895 = cljs.core.count.call(null,c__17588__auto__);
var G__24896 = (0);
seq__24885 = G__24893;
chunk__24886 = G__24894;
count__24887 = G__24895;
i__24888 = G__24896;
continue;
} else {
var n = cljs.core.first.call(null,seq__24885__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24897 = cljs.core.next.call(null,seq__24885__$1);
var G__24898 = null;
var G__24899 = (0);
var G__24900 = (0);
seq__24885 = G__24897;
chunk__24886 = G__24898;
count__24887 = G__24899;
i__24888 = G__24900;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24939_24946 = cljs.core.seq.call(null,deps);
var chunk__24940_24947 = null;
var count__24941_24948 = (0);
var i__24942_24949 = (0);
while(true){
if((i__24942_24949 < count__24941_24948)){
var dep_24950 = cljs.core._nth.call(null,chunk__24940_24947,i__24942_24949);
topo_sort_helper_STAR_.call(null,dep_24950,(depth + (1)),state);

var G__24951 = seq__24939_24946;
var G__24952 = chunk__24940_24947;
var G__24953 = count__24941_24948;
var G__24954 = (i__24942_24949 + (1));
seq__24939_24946 = G__24951;
chunk__24940_24947 = G__24952;
count__24941_24948 = G__24953;
i__24942_24949 = G__24954;
continue;
} else {
var temp__4425__auto___24955 = cljs.core.seq.call(null,seq__24939_24946);
if(temp__4425__auto___24955){
var seq__24939_24956__$1 = temp__4425__auto___24955;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24939_24956__$1)){
var c__17588__auto___24957 = cljs.core.chunk_first.call(null,seq__24939_24956__$1);
var G__24958 = cljs.core.chunk_rest.call(null,seq__24939_24956__$1);
var G__24959 = c__17588__auto___24957;
var G__24960 = cljs.core.count.call(null,c__17588__auto___24957);
var G__24961 = (0);
seq__24939_24946 = G__24958;
chunk__24940_24947 = G__24959;
count__24941_24948 = G__24960;
i__24942_24949 = G__24961;
continue;
} else {
var dep_24962 = cljs.core.first.call(null,seq__24939_24956__$1);
topo_sort_helper_STAR_.call(null,dep_24962,(depth + (1)),state);

var G__24963 = cljs.core.next.call(null,seq__24939_24956__$1);
var G__24964 = null;
var G__24965 = (0);
var G__24966 = (0);
seq__24939_24946 = G__24963;
chunk__24940_24947 = G__24964;
count__24941_24948 = G__24965;
i__24942_24949 = G__24966;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24943){
var vec__24945 = p__24943;
var x = cljs.core.nth.call(null,vec__24945,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24945,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24945,x,xs,get_deps__$1){
return (function (p1__24901_SHARP_){
return clojure.set.difference.call(null,p1__24901_SHARP_,x);
});})(vec__24945,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24979 = cljs.core.seq.call(null,provides);
var chunk__24980 = null;
var count__24981 = (0);
var i__24982 = (0);
while(true){
if((i__24982 < count__24981)){
var prov = cljs.core._nth.call(null,chunk__24980,i__24982);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24983_24991 = cljs.core.seq.call(null,requires);
var chunk__24984_24992 = null;
var count__24985_24993 = (0);
var i__24986_24994 = (0);
while(true){
if((i__24986_24994 < count__24985_24993)){
var req_24995 = cljs.core._nth.call(null,chunk__24984_24992,i__24986_24994);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24995,prov);

var G__24996 = seq__24983_24991;
var G__24997 = chunk__24984_24992;
var G__24998 = count__24985_24993;
var G__24999 = (i__24986_24994 + (1));
seq__24983_24991 = G__24996;
chunk__24984_24992 = G__24997;
count__24985_24993 = G__24998;
i__24986_24994 = G__24999;
continue;
} else {
var temp__4425__auto___25000 = cljs.core.seq.call(null,seq__24983_24991);
if(temp__4425__auto___25000){
var seq__24983_25001__$1 = temp__4425__auto___25000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24983_25001__$1)){
var c__17588__auto___25002 = cljs.core.chunk_first.call(null,seq__24983_25001__$1);
var G__25003 = cljs.core.chunk_rest.call(null,seq__24983_25001__$1);
var G__25004 = c__17588__auto___25002;
var G__25005 = cljs.core.count.call(null,c__17588__auto___25002);
var G__25006 = (0);
seq__24983_24991 = G__25003;
chunk__24984_24992 = G__25004;
count__24985_24993 = G__25005;
i__24986_24994 = G__25006;
continue;
} else {
var req_25007 = cljs.core.first.call(null,seq__24983_25001__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25007,prov);

var G__25008 = cljs.core.next.call(null,seq__24983_25001__$1);
var G__25009 = null;
var G__25010 = (0);
var G__25011 = (0);
seq__24983_24991 = G__25008;
chunk__24984_24992 = G__25009;
count__24985_24993 = G__25010;
i__24986_24994 = G__25011;
continue;
}
} else {
}
}
break;
}

var G__25012 = seq__24979;
var G__25013 = chunk__24980;
var G__25014 = count__24981;
var G__25015 = (i__24982 + (1));
seq__24979 = G__25012;
chunk__24980 = G__25013;
count__24981 = G__25014;
i__24982 = G__25015;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24979);
if(temp__4425__auto__){
var seq__24979__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24979__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__24979__$1);
var G__25016 = cljs.core.chunk_rest.call(null,seq__24979__$1);
var G__25017 = c__17588__auto__;
var G__25018 = cljs.core.count.call(null,c__17588__auto__);
var G__25019 = (0);
seq__24979 = G__25016;
chunk__24980 = G__25017;
count__24981 = G__25018;
i__24982 = G__25019;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24979__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24987_25020 = cljs.core.seq.call(null,requires);
var chunk__24988_25021 = null;
var count__24989_25022 = (0);
var i__24990_25023 = (0);
while(true){
if((i__24990_25023 < count__24989_25022)){
var req_25024 = cljs.core._nth.call(null,chunk__24988_25021,i__24990_25023);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25024,prov);

var G__25025 = seq__24987_25020;
var G__25026 = chunk__24988_25021;
var G__25027 = count__24989_25022;
var G__25028 = (i__24990_25023 + (1));
seq__24987_25020 = G__25025;
chunk__24988_25021 = G__25026;
count__24989_25022 = G__25027;
i__24990_25023 = G__25028;
continue;
} else {
var temp__4425__auto___25029__$1 = cljs.core.seq.call(null,seq__24987_25020);
if(temp__4425__auto___25029__$1){
var seq__24987_25030__$1 = temp__4425__auto___25029__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24987_25030__$1)){
var c__17588__auto___25031 = cljs.core.chunk_first.call(null,seq__24987_25030__$1);
var G__25032 = cljs.core.chunk_rest.call(null,seq__24987_25030__$1);
var G__25033 = c__17588__auto___25031;
var G__25034 = cljs.core.count.call(null,c__17588__auto___25031);
var G__25035 = (0);
seq__24987_25020 = G__25032;
chunk__24988_25021 = G__25033;
count__24989_25022 = G__25034;
i__24990_25023 = G__25035;
continue;
} else {
var req_25036 = cljs.core.first.call(null,seq__24987_25030__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25036,prov);

var G__25037 = cljs.core.next.call(null,seq__24987_25030__$1);
var G__25038 = null;
var G__25039 = (0);
var G__25040 = (0);
seq__24987_25020 = G__25037;
chunk__24988_25021 = G__25038;
count__24989_25022 = G__25039;
i__24990_25023 = G__25040;
continue;
}
} else {
}
}
break;
}

var G__25041 = cljs.core.next.call(null,seq__24979__$1);
var G__25042 = null;
var G__25043 = (0);
var G__25044 = (0);
seq__24979 = G__25041;
chunk__24980 = G__25042;
count__24981 = G__25043;
i__24982 = G__25044;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25049_25053 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25050_25054 = null;
var count__25051_25055 = (0);
var i__25052_25056 = (0);
while(true){
if((i__25052_25056 < count__25051_25055)){
var ns_25057 = cljs.core._nth.call(null,chunk__25050_25054,i__25052_25056);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25057);

var G__25058 = seq__25049_25053;
var G__25059 = chunk__25050_25054;
var G__25060 = count__25051_25055;
var G__25061 = (i__25052_25056 + (1));
seq__25049_25053 = G__25058;
chunk__25050_25054 = G__25059;
count__25051_25055 = G__25060;
i__25052_25056 = G__25061;
continue;
} else {
var temp__4425__auto___25062 = cljs.core.seq.call(null,seq__25049_25053);
if(temp__4425__auto___25062){
var seq__25049_25063__$1 = temp__4425__auto___25062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25049_25063__$1)){
var c__17588__auto___25064 = cljs.core.chunk_first.call(null,seq__25049_25063__$1);
var G__25065 = cljs.core.chunk_rest.call(null,seq__25049_25063__$1);
var G__25066 = c__17588__auto___25064;
var G__25067 = cljs.core.count.call(null,c__17588__auto___25064);
var G__25068 = (0);
seq__25049_25053 = G__25065;
chunk__25050_25054 = G__25066;
count__25051_25055 = G__25067;
i__25052_25056 = G__25068;
continue;
} else {
var ns_25069 = cljs.core.first.call(null,seq__25049_25063__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25069);

var G__25070 = cljs.core.next.call(null,seq__25049_25063__$1);
var G__25071 = null;
var G__25072 = (0);
var G__25073 = (0);
seq__25049_25053 = G__25070;
chunk__25050_25054 = G__25071;
count__25051_25055 = G__25072;
i__25052_25056 = G__25073;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16785__auto__ = goog.require__;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25074__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25074 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25075__i = 0, G__25075__a = new Array(arguments.length -  0);
while (G__25075__i < G__25075__a.length) {G__25075__a[G__25075__i] = arguments[G__25075__i + 0]; ++G__25075__i;}
  args = new cljs.core.IndexedSeq(G__25075__a,0);
} 
return G__25074__delegate.call(this,args);};
G__25074.cljs$lang$maxFixedArity = 0;
G__25074.cljs$lang$applyTo = (function (arglist__25076){
var args = cljs.core.seq(arglist__25076);
return G__25074__delegate(args);
});
G__25074.cljs$core$IFn$_invoke$arity$variadic = G__25074__delegate;
return G__25074;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25078 = cljs.core._EQ_;
var expr__25079 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25078.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25079))){
var path_parts = ((function (pred__25078,expr__25079){
return (function (p1__25077_SHARP_){
return clojure.string.split.call(null,p1__25077_SHARP_,/[\/\\]/);
});})(pred__25078,expr__25079))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25078,expr__25079){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25081){if((e25081 instanceof Error)){
var e = e25081;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25081;

}
}})());
});
;})(path_parts,sep,root,pred__25078,expr__25079))
} else {
if(cljs.core.truth_(pred__25078.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25079))){
return ((function (pred__25078,expr__25079){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25078,expr__25079){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25078,expr__25079))
);

return deferred.addErrback(((function (deferred,pred__25078,expr__25079){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25078,expr__25079))
);
});
;})(pred__25078,expr__25079))
} else {
return ((function (pred__25078,expr__25079){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25078,expr__25079))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25082,callback){
var map__25085 = p__25082;
var map__25085__$1 = ((((!((map__25085 == null)))?((((map__25085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25085):map__25085);
var file_msg = map__25085__$1;
var request_url = cljs.core.get.call(null,map__25085__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25085,map__25085__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25085,map__25085__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto__){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto__){
return (function (state_25109){
var state_val_25110 = (state_25109[(1)]);
if((state_val_25110 === (7))){
var inst_25105 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
var statearr_25111_25131 = state_25109__$1;
(statearr_25111_25131[(2)] = inst_25105);

(statearr_25111_25131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (1))){
var state_25109__$1 = state_25109;
var statearr_25112_25132 = state_25109__$1;
(statearr_25112_25132[(2)] = null);

(statearr_25112_25132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (4))){
var inst_25089 = (state_25109[(7)]);
var inst_25089__$1 = (state_25109[(2)]);
var state_25109__$1 = (function (){var statearr_25113 = state_25109;
(statearr_25113[(7)] = inst_25089__$1);

return statearr_25113;
})();
if(cljs.core.truth_(inst_25089__$1)){
var statearr_25114_25133 = state_25109__$1;
(statearr_25114_25133[(1)] = (5));

} else {
var statearr_25115_25134 = state_25109__$1;
(statearr_25115_25134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (6))){
var state_25109__$1 = state_25109;
var statearr_25116_25135 = state_25109__$1;
(statearr_25116_25135[(2)] = null);

(statearr_25116_25135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (3))){
var inst_25107 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25109__$1,inst_25107);
} else {
if((state_val_25110 === (2))){
var state_25109__$1 = state_25109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25109__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25110 === (11))){
var inst_25101 = (state_25109[(2)]);
var state_25109__$1 = (function (){var statearr_25117 = state_25109;
(statearr_25117[(8)] = inst_25101);

return statearr_25117;
})();
var statearr_25118_25136 = state_25109__$1;
(statearr_25118_25136[(2)] = null);

(statearr_25118_25136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (9))){
var inst_25093 = (state_25109[(9)]);
var inst_25095 = (state_25109[(10)]);
var inst_25097 = inst_25095.call(null,inst_25093);
var state_25109__$1 = state_25109;
var statearr_25119_25137 = state_25109__$1;
(statearr_25119_25137[(2)] = inst_25097);

(statearr_25119_25137[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (5))){
var inst_25089 = (state_25109[(7)]);
var inst_25091 = figwheel.client.file_reloading.blocking_load.call(null,inst_25089);
var state_25109__$1 = state_25109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25109__$1,(8),inst_25091);
} else {
if((state_val_25110 === (10))){
var inst_25093 = (state_25109[(9)]);
var inst_25099 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25093);
var state_25109__$1 = state_25109;
var statearr_25120_25138 = state_25109__$1;
(statearr_25120_25138[(2)] = inst_25099);

(statearr_25120_25138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (8))){
var inst_25089 = (state_25109[(7)]);
var inst_25095 = (state_25109[(10)]);
var inst_25093 = (state_25109[(2)]);
var inst_25094 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25095__$1 = cljs.core.get.call(null,inst_25094,inst_25089);
var state_25109__$1 = (function (){var statearr_25121 = state_25109;
(statearr_25121[(9)] = inst_25093);

(statearr_25121[(10)] = inst_25095__$1);

return statearr_25121;
})();
if(cljs.core.truth_(inst_25095__$1)){
var statearr_25122_25139 = state_25109__$1;
(statearr_25122_25139[(1)] = (9));

} else {
var statearr_25123_25140 = state_25109__$1;
(statearr_25123_25140[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21937__auto__))
;
return ((function (switch__18798__auto__,c__21937__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18799__auto__ = null;
var figwheel$client$file_reloading$state_machine__18799__auto____0 = (function (){
var statearr_25127 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25127[(0)] = figwheel$client$file_reloading$state_machine__18799__auto__);

(statearr_25127[(1)] = (1));

return statearr_25127;
});
var figwheel$client$file_reloading$state_machine__18799__auto____1 = (function (state_25109){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_25109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e25128){if((e25128 instanceof Object)){
var ex__18802__auto__ = e25128;
var statearr_25129_25141 = state_25109;
(statearr_25129_25141[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25142 = state_25109;
state_25109 = G__25142;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18799__auto__ = function(state_25109){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18799__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18799__auto____1.call(this,state_25109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18799__auto____0;
figwheel$client$file_reloading$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18799__auto____1;
return figwheel$client$file_reloading$state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto__))
})();
var state__21939__auto__ = (function (){var statearr_25130 = f__21938__auto__.call(null);
(statearr_25130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto__);

return statearr_25130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto__))
);

return c__21937__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25143,callback){
var map__25146 = p__25143;
var map__25146__$1 = ((((!((map__25146 == null)))?((((map__25146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25146):map__25146);
var file_msg = map__25146__$1;
var namespace = cljs.core.get.call(null,map__25146__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25146,map__25146__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25146,map__25146__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25148){
var map__25151 = p__25148;
var map__25151__$1 = ((((!((map__25151 == null)))?((((map__25151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25151):map__25151);
var file_msg = map__25151__$1;
var namespace = cljs.core.get.call(null,map__25151__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16773__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16773__auto__){
var or__16785__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16773__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25153,callback){
var map__25156 = p__25153;
var map__25156__$1 = ((((!((map__25156 == null)))?((((map__25156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25156):map__25156);
var file_msg = map__25156__$1;
var request_url = cljs.core.get.call(null,map__25156__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25156__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21937__auto___25244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto___25244,out){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto___25244,out){
return (function (state_25226){
var state_val_25227 = (state_25226[(1)]);
if((state_val_25227 === (1))){
var inst_25204 = cljs.core.nth.call(null,files,(0),null);
var inst_25205 = cljs.core.nthnext.call(null,files,(1));
var inst_25206 = files;
var state_25226__$1 = (function (){var statearr_25228 = state_25226;
(statearr_25228[(7)] = inst_25204);

(statearr_25228[(8)] = inst_25205);

(statearr_25228[(9)] = inst_25206);

return statearr_25228;
})();
var statearr_25229_25245 = state_25226__$1;
(statearr_25229_25245[(2)] = null);

(statearr_25229_25245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (2))){
var inst_25209 = (state_25226[(10)]);
var inst_25206 = (state_25226[(9)]);
var inst_25209__$1 = cljs.core.nth.call(null,inst_25206,(0),null);
var inst_25210 = cljs.core.nthnext.call(null,inst_25206,(1));
var inst_25211 = (inst_25209__$1 == null);
var inst_25212 = cljs.core.not.call(null,inst_25211);
var state_25226__$1 = (function (){var statearr_25230 = state_25226;
(statearr_25230[(11)] = inst_25210);

(statearr_25230[(10)] = inst_25209__$1);

return statearr_25230;
})();
if(inst_25212){
var statearr_25231_25246 = state_25226__$1;
(statearr_25231_25246[(1)] = (4));

} else {
var statearr_25232_25247 = state_25226__$1;
(statearr_25232_25247[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (3))){
var inst_25224 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25226__$1,inst_25224);
} else {
if((state_val_25227 === (4))){
var inst_25209 = (state_25226[(10)]);
var inst_25214 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25209);
var state_25226__$1 = state_25226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25226__$1,(7),inst_25214);
} else {
if((state_val_25227 === (5))){
var inst_25220 = cljs.core.async.close_BANG_.call(null,out);
var state_25226__$1 = state_25226;
var statearr_25233_25248 = state_25226__$1;
(statearr_25233_25248[(2)] = inst_25220);

(statearr_25233_25248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (6))){
var inst_25222 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
var statearr_25234_25249 = state_25226__$1;
(statearr_25234_25249[(2)] = inst_25222);

(statearr_25234_25249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (7))){
var inst_25210 = (state_25226[(11)]);
var inst_25216 = (state_25226[(2)]);
var inst_25217 = cljs.core.async.put_BANG_.call(null,out,inst_25216);
var inst_25206 = inst_25210;
var state_25226__$1 = (function (){var statearr_25235 = state_25226;
(statearr_25235[(12)] = inst_25217);

(statearr_25235[(9)] = inst_25206);

return statearr_25235;
})();
var statearr_25236_25250 = state_25226__$1;
(statearr_25236_25250[(2)] = null);

(statearr_25236_25250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21937__auto___25244,out))
;
return ((function (switch__18798__auto__,c__21937__auto___25244,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18799__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18799__auto____0 = (function (){
var statearr_25240 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25240[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18799__auto__);

(statearr_25240[(1)] = (1));

return statearr_25240;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18799__auto____1 = (function (state_25226){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_25226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e25241){if((e25241 instanceof Object)){
var ex__18802__auto__ = e25241;
var statearr_25242_25251 = state_25226;
(statearr_25242_25251[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25252 = state_25226;
state_25226 = G__25252;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18799__auto__ = function(state_25226){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18799__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18799__auto____1.call(this,state_25226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18799__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18799__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto___25244,out))
})();
var state__21939__auto__ = (function (){var statearr_25243 = f__21938__auto__.call(null);
(statearr_25243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto___25244);

return statearr_25243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto___25244,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25253,opts){
var map__25257 = p__25253;
var map__25257__$1 = ((((!((map__25257 == null)))?((((map__25257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25257):map__25257);
var eval_body__$1 = cljs.core.get.call(null,map__25257__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25257__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16773__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16773__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16773__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25259){var e = e25259;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25260_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25260_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25265){
var vec__25266 = p__25265;
var k = cljs.core.nth.call(null,vec__25266,(0),null);
var v = cljs.core.nth.call(null,vec__25266,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25267){
var vec__25268 = p__25267;
var k = cljs.core.nth.call(null,vec__25268,(0),null);
var v = cljs.core.nth.call(null,vec__25268,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25272,p__25273){
var map__25520 = p__25272;
var map__25520__$1 = ((((!((map__25520 == null)))?((((map__25520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25520):map__25520);
var opts = map__25520__$1;
var before_jsload = cljs.core.get.call(null,map__25520__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25520__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25520__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25521 = p__25273;
var map__25521__$1 = ((((!((map__25521 == null)))?((((map__25521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25521):map__25521);
var msg = map__25521__$1;
var files = cljs.core.get.call(null,map__25521__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25521__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25521__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25674){
var state_val_25675 = (state_25674[(1)]);
if((state_val_25675 === (7))){
var inst_25537 = (state_25674[(7)]);
var inst_25538 = (state_25674[(8)]);
var inst_25535 = (state_25674[(9)]);
var inst_25536 = (state_25674[(10)]);
var inst_25543 = cljs.core._nth.call(null,inst_25536,inst_25538);
var inst_25544 = figwheel.client.file_reloading.eval_body.call(null,inst_25543,opts);
var inst_25545 = (inst_25538 + (1));
var tmp25676 = inst_25537;
var tmp25677 = inst_25535;
var tmp25678 = inst_25536;
var inst_25535__$1 = tmp25677;
var inst_25536__$1 = tmp25678;
var inst_25537__$1 = tmp25676;
var inst_25538__$1 = inst_25545;
var state_25674__$1 = (function (){var statearr_25679 = state_25674;
(statearr_25679[(11)] = inst_25544);

(statearr_25679[(7)] = inst_25537__$1);

(statearr_25679[(8)] = inst_25538__$1);

(statearr_25679[(9)] = inst_25535__$1);

(statearr_25679[(10)] = inst_25536__$1);

return statearr_25679;
})();
var statearr_25680_25766 = state_25674__$1;
(statearr_25680_25766[(2)] = null);

(statearr_25680_25766[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (20))){
var inst_25578 = (state_25674[(12)]);
var inst_25586 = figwheel.client.file_reloading.sort_files.call(null,inst_25578);
var state_25674__$1 = state_25674;
var statearr_25681_25767 = state_25674__$1;
(statearr_25681_25767[(2)] = inst_25586);

(statearr_25681_25767[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (27))){
var state_25674__$1 = state_25674;
var statearr_25682_25768 = state_25674__$1;
(statearr_25682_25768[(2)] = null);

(statearr_25682_25768[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (1))){
var inst_25527 = (state_25674[(13)]);
var inst_25524 = before_jsload.call(null,files);
var inst_25525 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25526 = (function (){return ((function (inst_25527,inst_25524,inst_25525,state_val_25675,c__21937__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25269_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25269_SHARP_);
});
;})(inst_25527,inst_25524,inst_25525,state_val_25675,c__21937__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25527__$1 = cljs.core.filter.call(null,inst_25526,files);
var inst_25528 = cljs.core.not_empty.call(null,inst_25527__$1);
var state_25674__$1 = (function (){var statearr_25683 = state_25674;
(statearr_25683[(14)] = inst_25525);

(statearr_25683[(15)] = inst_25524);

(statearr_25683[(13)] = inst_25527__$1);

return statearr_25683;
})();
if(cljs.core.truth_(inst_25528)){
var statearr_25684_25769 = state_25674__$1;
(statearr_25684_25769[(1)] = (2));

} else {
var statearr_25685_25770 = state_25674__$1;
(statearr_25685_25770[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (24))){
var state_25674__$1 = state_25674;
var statearr_25686_25771 = state_25674__$1;
(statearr_25686_25771[(2)] = null);

(statearr_25686_25771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (39))){
var inst_25628 = (state_25674[(16)]);
var state_25674__$1 = state_25674;
var statearr_25687_25772 = state_25674__$1;
(statearr_25687_25772[(2)] = inst_25628);

(statearr_25687_25772[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (46))){
var inst_25669 = (state_25674[(2)]);
var state_25674__$1 = state_25674;
var statearr_25688_25773 = state_25674__$1;
(statearr_25688_25773[(2)] = inst_25669);

(statearr_25688_25773[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (4))){
var inst_25572 = (state_25674[(2)]);
var inst_25573 = cljs.core.List.EMPTY;
var inst_25574 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25573);
var inst_25575 = (function (){return ((function (inst_25572,inst_25573,inst_25574,state_val_25675,c__21937__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25270_SHARP_){
var and__16773__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25270_SHARP_);
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25270_SHARP_));
} else {
return and__16773__auto__;
}
});
;})(inst_25572,inst_25573,inst_25574,state_val_25675,c__21937__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25576 = cljs.core.filter.call(null,inst_25575,files);
var inst_25577 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25578 = cljs.core.concat.call(null,inst_25576,inst_25577);
var state_25674__$1 = (function (){var statearr_25689 = state_25674;
(statearr_25689[(17)] = inst_25574);

(statearr_25689[(12)] = inst_25578);

(statearr_25689[(18)] = inst_25572);

return statearr_25689;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25690_25774 = state_25674__$1;
(statearr_25690_25774[(1)] = (16));

} else {
var statearr_25691_25775 = state_25674__$1;
(statearr_25691_25775[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (15))){
var inst_25562 = (state_25674[(2)]);
var state_25674__$1 = state_25674;
var statearr_25692_25776 = state_25674__$1;
(statearr_25692_25776[(2)] = inst_25562);

(statearr_25692_25776[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (21))){
var inst_25588 = (state_25674[(19)]);
var inst_25588__$1 = (state_25674[(2)]);
var inst_25589 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25588__$1);
var state_25674__$1 = (function (){var statearr_25693 = state_25674;
(statearr_25693[(19)] = inst_25588__$1);

return statearr_25693;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25674__$1,(22),inst_25589);
} else {
if((state_val_25675 === (31))){
var inst_25672 = (state_25674[(2)]);
var state_25674__$1 = state_25674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25674__$1,inst_25672);
} else {
if((state_val_25675 === (32))){
var inst_25628 = (state_25674[(16)]);
var inst_25633 = inst_25628.cljs$lang$protocol_mask$partition0$;
var inst_25634 = (inst_25633 & (64));
var inst_25635 = inst_25628.cljs$core$ISeq$;
var inst_25636 = (inst_25634) || (inst_25635);
var state_25674__$1 = state_25674;
if(cljs.core.truth_(inst_25636)){
var statearr_25694_25777 = state_25674__$1;
(statearr_25694_25777[(1)] = (35));

} else {
var statearr_25695_25778 = state_25674__$1;
(statearr_25695_25778[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (40))){
var inst_25649 = (state_25674[(20)]);
var inst_25648 = (state_25674[(2)]);
var inst_25649__$1 = cljs.core.get.call(null,inst_25648,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25650 = cljs.core.get.call(null,inst_25648,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25651 = cljs.core.not_empty.call(null,inst_25649__$1);
var state_25674__$1 = (function (){var statearr_25696 = state_25674;
(statearr_25696[(20)] = inst_25649__$1);

(statearr_25696[(21)] = inst_25650);

return statearr_25696;
})();
if(cljs.core.truth_(inst_25651)){
var statearr_25697_25779 = state_25674__$1;
(statearr_25697_25779[(1)] = (41));

} else {
var statearr_25698_25780 = state_25674__$1;
(statearr_25698_25780[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (33))){
var state_25674__$1 = state_25674;
var statearr_25699_25781 = state_25674__$1;
(statearr_25699_25781[(2)] = false);

(statearr_25699_25781[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (13))){
var inst_25548 = (state_25674[(22)]);
var inst_25552 = cljs.core.chunk_first.call(null,inst_25548);
var inst_25553 = cljs.core.chunk_rest.call(null,inst_25548);
var inst_25554 = cljs.core.count.call(null,inst_25552);
var inst_25535 = inst_25553;
var inst_25536 = inst_25552;
var inst_25537 = inst_25554;
var inst_25538 = (0);
var state_25674__$1 = (function (){var statearr_25700 = state_25674;
(statearr_25700[(7)] = inst_25537);

(statearr_25700[(8)] = inst_25538);

(statearr_25700[(9)] = inst_25535);

(statearr_25700[(10)] = inst_25536);

return statearr_25700;
})();
var statearr_25701_25782 = state_25674__$1;
(statearr_25701_25782[(2)] = null);

(statearr_25701_25782[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (22))){
var inst_25591 = (state_25674[(23)]);
var inst_25592 = (state_25674[(24)]);
var inst_25588 = (state_25674[(19)]);
var inst_25596 = (state_25674[(25)]);
var inst_25591__$1 = (state_25674[(2)]);
var inst_25592__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25591__$1);
var inst_25593 = (function (){var all_files = inst_25588;
var res_SINGLEQUOTE_ = inst_25591__$1;
var res = inst_25592__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25591,inst_25592,inst_25588,inst_25596,inst_25591__$1,inst_25592__$1,state_val_25675,c__21937__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25271_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25271_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25591,inst_25592,inst_25588,inst_25596,inst_25591__$1,inst_25592__$1,state_val_25675,c__21937__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25594 = cljs.core.filter.call(null,inst_25593,inst_25591__$1);
var inst_25595 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25596__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25595);
var inst_25597 = cljs.core.not_empty.call(null,inst_25596__$1);
var state_25674__$1 = (function (){var statearr_25702 = state_25674;
(statearr_25702[(23)] = inst_25591__$1);

(statearr_25702[(26)] = inst_25594);

(statearr_25702[(24)] = inst_25592__$1);

(statearr_25702[(25)] = inst_25596__$1);

return statearr_25702;
})();
if(cljs.core.truth_(inst_25597)){
var statearr_25703_25783 = state_25674__$1;
(statearr_25703_25783[(1)] = (23));

} else {
var statearr_25704_25784 = state_25674__$1;
(statearr_25704_25784[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (36))){
var state_25674__$1 = state_25674;
var statearr_25705_25785 = state_25674__$1;
(statearr_25705_25785[(2)] = false);

(statearr_25705_25785[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (41))){
var inst_25649 = (state_25674[(20)]);
var inst_25653 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25654 = cljs.core.map.call(null,inst_25653,inst_25649);
var inst_25655 = cljs.core.pr_str.call(null,inst_25654);
var inst_25656 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25655)].join('');
var inst_25657 = figwheel.client.utils.log.call(null,inst_25656);
var state_25674__$1 = state_25674;
var statearr_25706_25786 = state_25674__$1;
(statearr_25706_25786[(2)] = inst_25657);

(statearr_25706_25786[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (43))){
var inst_25650 = (state_25674[(21)]);
var inst_25660 = (state_25674[(2)]);
var inst_25661 = cljs.core.not_empty.call(null,inst_25650);
var state_25674__$1 = (function (){var statearr_25707 = state_25674;
(statearr_25707[(27)] = inst_25660);

return statearr_25707;
})();
if(cljs.core.truth_(inst_25661)){
var statearr_25708_25787 = state_25674__$1;
(statearr_25708_25787[(1)] = (44));

} else {
var statearr_25709_25788 = state_25674__$1;
(statearr_25709_25788[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (29))){
var inst_25591 = (state_25674[(23)]);
var inst_25628 = (state_25674[(16)]);
var inst_25594 = (state_25674[(26)]);
var inst_25592 = (state_25674[(24)]);
var inst_25588 = (state_25674[(19)]);
var inst_25596 = (state_25674[(25)]);
var inst_25624 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25627 = (function (){var all_files = inst_25588;
var res_SINGLEQUOTE_ = inst_25591;
var res = inst_25592;
var files_not_loaded = inst_25594;
var dependencies_that_loaded = inst_25596;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25591,inst_25628,inst_25594,inst_25592,inst_25588,inst_25596,inst_25624,state_val_25675,c__21937__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25626){
var map__25710 = p__25626;
var map__25710__$1 = ((((!((map__25710 == null)))?((((map__25710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25710):map__25710);
var namespace = cljs.core.get.call(null,map__25710__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25591,inst_25628,inst_25594,inst_25592,inst_25588,inst_25596,inst_25624,state_val_25675,c__21937__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25628__$1 = cljs.core.group_by.call(null,inst_25627,inst_25594);
var inst_25630 = (inst_25628__$1 == null);
var inst_25631 = cljs.core.not.call(null,inst_25630);
var state_25674__$1 = (function (){var statearr_25712 = state_25674;
(statearr_25712[(16)] = inst_25628__$1);

(statearr_25712[(28)] = inst_25624);

return statearr_25712;
})();
if(inst_25631){
var statearr_25713_25789 = state_25674__$1;
(statearr_25713_25789[(1)] = (32));

} else {
var statearr_25714_25790 = state_25674__$1;
(statearr_25714_25790[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (44))){
var inst_25650 = (state_25674[(21)]);
var inst_25663 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25650);
var inst_25664 = cljs.core.pr_str.call(null,inst_25663);
var inst_25665 = [cljs.core.str("not required: "),cljs.core.str(inst_25664)].join('');
var inst_25666 = figwheel.client.utils.log.call(null,inst_25665);
var state_25674__$1 = state_25674;
var statearr_25715_25791 = state_25674__$1;
(statearr_25715_25791[(2)] = inst_25666);

(statearr_25715_25791[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (6))){
var inst_25569 = (state_25674[(2)]);
var state_25674__$1 = state_25674;
var statearr_25716_25792 = state_25674__$1;
(statearr_25716_25792[(2)] = inst_25569);

(statearr_25716_25792[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (28))){
var inst_25594 = (state_25674[(26)]);
var inst_25621 = (state_25674[(2)]);
var inst_25622 = cljs.core.not_empty.call(null,inst_25594);
var state_25674__$1 = (function (){var statearr_25717 = state_25674;
(statearr_25717[(29)] = inst_25621);

return statearr_25717;
})();
if(cljs.core.truth_(inst_25622)){
var statearr_25718_25793 = state_25674__$1;
(statearr_25718_25793[(1)] = (29));

} else {
var statearr_25719_25794 = state_25674__$1;
(statearr_25719_25794[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (25))){
var inst_25592 = (state_25674[(24)]);
var inst_25608 = (state_25674[(2)]);
var inst_25609 = cljs.core.not_empty.call(null,inst_25592);
var state_25674__$1 = (function (){var statearr_25720 = state_25674;
(statearr_25720[(30)] = inst_25608);

return statearr_25720;
})();
if(cljs.core.truth_(inst_25609)){
var statearr_25721_25795 = state_25674__$1;
(statearr_25721_25795[(1)] = (26));

} else {
var statearr_25722_25796 = state_25674__$1;
(statearr_25722_25796[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (34))){
var inst_25643 = (state_25674[(2)]);
var state_25674__$1 = state_25674;
if(cljs.core.truth_(inst_25643)){
var statearr_25723_25797 = state_25674__$1;
(statearr_25723_25797[(1)] = (38));

} else {
var statearr_25724_25798 = state_25674__$1;
(statearr_25724_25798[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (17))){
var state_25674__$1 = state_25674;
var statearr_25725_25799 = state_25674__$1;
(statearr_25725_25799[(2)] = recompile_dependents);

(statearr_25725_25799[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (3))){
var state_25674__$1 = state_25674;
var statearr_25726_25800 = state_25674__$1;
(statearr_25726_25800[(2)] = null);

(statearr_25726_25800[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (12))){
var inst_25565 = (state_25674[(2)]);
var state_25674__$1 = state_25674;
var statearr_25727_25801 = state_25674__$1;
(statearr_25727_25801[(2)] = inst_25565);

(statearr_25727_25801[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (2))){
var inst_25527 = (state_25674[(13)]);
var inst_25534 = cljs.core.seq.call(null,inst_25527);
var inst_25535 = inst_25534;
var inst_25536 = null;
var inst_25537 = (0);
var inst_25538 = (0);
var state_25674__$1 = (function (){var statearr_25728 = state_25674;
(statearr_25728[(7)] = inst_25537);

(statearr_25728[(8)] = inst_25538);

(statearr_25728[(9)] = inst_25535);

(statearr_25728[(10)] = inst_25536);

return statearr_25728;
})();
var statearr_25729_25802 = state_25674__$1;
(statearr_25729_25802[(2)] = null);

(statearr_25729_25802[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (23))){
var inst_25591 = (state_25674[(23)]);
var inst_25594 = (state_25674[(26)]);
var inst_25592 = (state_25674[(24)]);
var inst_25588 = (state_25674[(19)]);
var inst_25596 = (state_25674[(25)]);
var inst_25599 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25601 = (function (){var all_files = inst_25588;
var res_SINGLEQUOTE_ = inst_25591;
var res = inst_25592;
var files_not_loaded = inst_25594;
var dependencies_that_loaded = inst_25596;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25591,inst_25594,inst_25592,inst_25588,inst_25596,inst_25599,state_val_25675,c__21937__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25600){
var map__25730 = p__25600;
var map__25730__$1 = ((((!((map__25730 == null)))?((((map__25730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25730):map__25730);
var request_url = cljs.core.get.call(null,map__25730__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25591,inst_25594,inst_25592,inst_25588,inst_25596,inst_25599,state_val_25675,c__21937__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25602 = cljs.core.reverse.call(null,inst_25596);
var inst_25603 = cljs.core.map.call(null,inst_25601,inst_25602);
var inst_25604 = cljs.core.pr_str.call(null,inst_25603);
var inst_25605 = figwheel.client.utils.log.call(null,inst_25604);
var state_25674__$1 = (function (){var statearr_25732 = state_25674;
(statearr_25732[(31)] = inst_25599);

return statearr_25732;
})();
var statearr_25733_25803 = state_25674__$1;
(statearr_25733_25803[(2)] = inst_25605);

(statearr_25733_25803[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (35))){
var state_25674__$1 = state_25674;
var statearr_25734_25804 = state_25674__$1;
(statearr_25734_25804[(2)] = true);

(statearr_25734_25804[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (19))){
var inst_25578 = (state_25674[(12)]);
var inst_25584 = figwheel.client.file_reloading.expand_files.call(null,inst_25578);
var state_25674__$1 = state_25674;
var statearr_25735_25805 = state_25674__$1;
(statearr_25735_25805[(2)] = inst_25584);

(statearr_25735_25805[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (11))){
var state_25674__$1 = state_25674;
var statearr_25736_25806 = state_25674__$1;
(statearr_25736_25806[(2)] = null);

(statearr_25736_25806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (9))){
var inst_25567 = (state_25674[(2)]);
var state_25674__$1 = state_25674;
var statearr_25737_25807 = state_25674__$1;
(statearr_25737_25807[(2)] = inst_25567);

(statearr_25737_25807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (5))){
var inst_25537 = (state_25674[(7)]);
var inst_25538 = (state_25674[(8)]);
var inst_25540 = (inst_25538 < inst_25537);
var inst_25541 = inst_25540;
var state_25674__$1 = state_25674;
if(cljs.core.truth_(inst_25541)){
var statearr_25738_25808 = state_25674__$1;
(statearr_25738_25808[(1)] = (7));

} else {
var statearr_25739_25809 = state_25674__$1;
(statearr_25739_25809[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (14))){
var inst_25548 = (state_25674[(22)]);
var inst_25557 = cljs.core.first.call(null,inst_25548);
var inst_25558 = figwheel.client.file_reloading.eval_body.call(null,inst_25557,opts);
var inst_25559 = cljs.core.next.call(null,inst_25548);
var inst_25535 = inst_25559;
var inst_25536 = null;
var inst_25537 = (0);
var inst_25538 = (0);
var state_25674__$1 = (function (){var statearr_25740 = state_25674;
(statearr_25740[(7)] = inst_25537);

(statearr_25740[(8)] = inst_25538);

(statearr_25740[(9)] = inst_25535);

(statearr_25740[(32)] = inst_25558);

(statearr_25740[(10)] = inst_25536);

return statearr_25740;
})();
var statearr_25741_25810 = state_25674__$1;
(statearr_25741_25810[(2)] = null);

(statearr_25741_25810[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (45))){
var state_25674__$1 = state_25674;
var statearr_25742_25811 = state_25674__$1;
(statearr_25742_25811[(2)] = null);

(statearr_25742_25811[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (26))){
var inst_25591 = (state_25674[(23)]);
var inst_25594 = (state_25674[(26)]);
var inst_25592 = (state_25674[(24)]);
var inst_25588 = (state_25674[(19)]);
var inst_25596 = (state_25674[(25)]);
var inst_25611 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25613 = (function (){var all_files = inst_25588;
var res_SINGLEQUOTE_ = inst_25591;
var res = inst_25592;
var files_not_loaded = inst_25594;
var dependencies_that_loaded = inst_25596;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25591,inst_25594,inst_25592,inst_25588,inst_25596,inst_25611,state_val_25675,c__21937__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25612){
var map__25743 = p__25612;
var map__25743__$1 = ((((!((map__25743 == null)))?((((map__25743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25743):map__25743);
var namespace = cljs.core.get.call(null,map__25743__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25743__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25591,inst_25594,inst_25592,inst_25588,inst_25596,inst_25611,state_val_25675,c__21937__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25614 = cljs.core.map.call(null,inst_25613,inst_25592);
var inst_25615 = cljs.core.pr_str.call(null,inst_25614);
var inst_25616 = figwheel.client.utils.log.call(null,inst_25615);
var inst_25617 = (function (){var all_files = inst_25588;
var res_SINGLEQUOTE_ = inst_25591;
var res = inst_25592;
var files_not_loaded = inst_25594;
var dependencies_that_loaded = inst_25596;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25591,inst_25594,inst_25592,inst_25588,inst_25596,inst_25611,inst_25613,inst_25614,inst_25615,inst_25616,state_val_25675,c__21937__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25591,inst_25594,inst_25592,inst_25588,inst_25596,inst_25611,inst_25613,inst_25614,inst_25615,inst_25616,state_val_25675,c__21937__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25618 = setTimeout(inst_25617,(10));
var state_25674__$1 = (function (){var statearr_25745 = state_25674;
(statearr_25745[(33)] = inst_25616);

(statearr_25745[(34)] = inst_25611);

return statearr_25745;
})();
var statearr_25746_25812 = state_25674__$1;
(statearr_25746_25812[(2)] = inst_25618);

(statearr_25746_25812[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (16))){
var state_25674__$1 = state_25674;
var statearr_25747_25813 = state_25674__$1;
(statearr_25747_25813[(2)] = reload_dependents);

(statearr_25747_25813[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (38))){
var inst_25628 = (state_25674[(16)]);
var inst_25645 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25628);
var state_25674__$1 = state_25674;
var statearr_25748_25814 = state_25674__$1;
(statearr_25748_25814[(2)] = inst_25645);

(statearr_25748_25814[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (30))){
var state_25674__$1 = state_25674;
var statearr_25749_25815 = state_25674__$1;
(statearr_25749_25815[(2)] = null);

(statearr_25749_25815[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (10))){
var inst_25548 = (state_25674[(22)]);
var inst_25550 = cljs.core.chunked_seq_QMARK_.call(null,inst_25548);
var state_25674__$1 = state_25674;
if(inst_25550){
var statearr_25750_25816 = state_25674__$1;
(statearr_25750_25816[(1)] = (13));

} else {
var statearr_25751_25817 = state_25674__$1;
(statearr_25751_25817[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (18))){
var inst_25582 = (state_25674[(2)]);
var state_25674__$1 = state_25674;
if(cljs.core.truth_(inst_25582)){
var statearr_25752_25818 = state_25674__$1;
(statearr_25752_25818[(1)] = (19));

} else {
var statearr_25753_25819 = state_25674__$1;
(statearr_25753_25819[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (42))){
var state_25674__$1 = state_25674;
var statearr_25754_25820 = state_25674__$1;
(statearr_25754_25820[(2)] = null);

(statearr_25754_25820[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (37))){
var inst_25640 = (state_25674[(2)]);
var state_25674__$1 = state_25674;
var statearr_25755_25821 = state_25674__$1;
(statearr_25755_25821[(2)] = inst_25640);

(statearr_25755_25821[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (8))){
var inst_25535 = (state_25674[(9)]);
var inst_25548 = (state_25674[(22)]);
var inst_25548__$1 = cljs.core.seq.call(null,inst_25535);
var state_25674__$1 = (function (){var statearr_25756 = state_25674;
(statearr_25756[(22)] = inst_25548__$1);

return statearr_25756;
})();
if(inst_25548__$1){
var statearr_25757_25822 = state_25674__$1;
(statearr_25757_25822[(1)] = (10));

} else {
var statearr_25758_25823 = state_25674__$1;
(statearr_25758_25823[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21937__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18798__auto__,c__21937__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18799__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18799__auto____0 = (function (){
var statearr_25762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25762[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18799__auto__);

(statearr_25762[(1)] = (1));

return statearr_25762;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18799__auto____1 = (function (state_25674){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_25674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e25763){if((e25763 instanceof Object)){
var ex__18802__auto__ = e25763;
var statearr_25764_25824 = state_25674;
(statearr_25764_25824[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25825 = state_25674;
state_25674 = G__25825;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18799__auto__ = function(state_25674){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18799__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18799__auto____1.call(this,state_25674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18799__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18799__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21939__auto__ = (function (){var statearr_25765 = f__21938__auto__.call(null);
(statearr_25765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto__);

return statearr_25765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21937__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25828,link){
var map__25831 = p__25828;
var map__25831__$1 = ((((!((map__25831 == null)))?((((map__25831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25831):map__25831);
var file = cljs.core.get.call(null,map__25831__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25831,map__25831__$1,file){
return (function (p1__25826_SHARP_,p2__25827_SHARP_){
if(cljs.core._EQ_.call(null,p1__25826_SHARP_,p2__25827_SHARP_)){
return p1__25826_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25831,map__25831__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25837){
var map__25838 = p__25837;
var map__25838__$1 = ((((!((map__25838 == null)))?((((map__25838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25838):map__25838);
var match_length = cljs.core.get.call(null,map__25838__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25838__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25833_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25833_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25840 = [];
var len__17843__auto___25843 = arguments.length;
var i__17844__auto___25844 = (0);
while(true){
if((i__17844__auto___25844 < len__17843__auto___25843)){
args25840.push((arguments[i__17844__auto___25844]));

var G__25845 = (i__17844__auto___25844 + (1));
i__17844__auto___25844 = G__25845;
continue;
} else {
}
break;
}

var G__25842 = args25840.length;
switch (G__25842) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25840.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25847_SHARP_,p2__25848_SHARP_){
return cljs.core.assoc.call(null,p1__25847_SHARP_,cljs.core.get.call(null,p2__25848_SHARP_,key),p2__25848_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25849){
var map__25852 = p__25849;
var map__25852__$1 = ((((!((map__25852 == null)))?((((map__25852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25852):map__25852);
var f_data = map__25852__$1;
var file = cljs.core.get.call(null,map__25852__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25854,files_msg){
var map__25861 = p__25854;
var map__25861__$1 = ((((!((map__25861 == null)))?((((map__25861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25861):map__25861);
var opts = map__25861__$1;
var on_cssload = cljs.core.get.call(null,map__25861__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25863_25867 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25864_25868 = null;
var count__25865_25869 = (0);
var i__25866_25870 = (0);
while(true){
if((i__25866_25870 < count__25865_25869)){
var f_25871 = cljs.core._nth.call(null,chunk__25864_25868,i__25866_25870);
figwheel.client.file_reloading.reload_css_file.call(null,f_25871);

var G__25872 = seq__25863_25867;
var G__25873 = chunk__25864_25868;
var G__25874 = count__25865_25869;
var G__25875 = (i__25866_25870 + (1));
seq__25863_25867 = G__25872;
chunk__25864_25868 = G__25873;
count__25865_25869 = G__25874;
i__25866_25870 = G__25875;
continue;
} else {
var temp__4425__auto___25876 = cljs.core.seq.call(null,seq__25863_25867);
if(temp__4425__auto___25876){
var seq__25863_25877__$1 = temp__4425__auto___25876;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25863_25877__$1)){
var c__17588__auto___25878 = cljs.core.chunk_first.call(null,seq__25863_25877__$1);
var G__25879 = cljs.core.chunk_rest.call(null,seq__25863_25877__$1);
var G__25880 = c__17588__auto___25878;
var G__25881 = cljs.core.count.call(null,c__17588__auto___25878);
var G__25882 = (0);
seq__25863_25867 = G__25879;
chunk__25864_25868 = G__25880;
count__25865_25869 = G__25881;
i__25866_25870 = G__25882;
continue;
} else {
var f_25883 = cljs.core.first.call(null,seq__25863_25877__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25883);

var G__25884 = cljs.core.next.call(null,seq__25863_25877__$1);
var G__25885 = null;
var G__25886 = (0);
var G__25887 = (0);
seq__25863_25867 = G__25884;
chunk__25864_25868 = G__25885;
count__25865_25869 = G__25886;
i__25866_25870 = G__25887;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25861,map__25861__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25861,map__25861__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map