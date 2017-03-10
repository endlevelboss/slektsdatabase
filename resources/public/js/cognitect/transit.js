// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__20759_20763 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__20760_20764 = null;
var count__20761_20765 = (0);
var i__20762_20766 = (0);
while(true){
if((i__20762_20766 < count__20761_20765)){
var k_20767 = cljs.core._nth.call(null,chunk__20760_20764,i__20762_20766);
var v_20768 = (b[k_20767]);
(a[k_20767] = v_20768);

var G__20769 = seq__20759_20763;
var G__20770 = chunk__20760_20764;
var G__20771 = count__20761_20765;
var G__20772 = (i__20762_20766 + (1));
seq__20759_20763 = G__20769;
chunk__20760_20764 = G__20770;
count__20761_20765 = G__20771;
i__20762_20766 = G__20772;
continue;
} else {
var temp__4425__auto___20773 = cljs.core.seq.call(null,seq__20759_20763);
if(temp__4425__auto___20773){
var seq__20759_20774__$1 = temp__4425__auto___20773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20759_20774__$1)){
var c__17588__auto___20775 = cljs.core.chunk_first.call(null,seq__20759_20774__$1);
var G__20776 = cljs.core.chunk_rest.call(null,seq__20759_20774__$1);
var G__20777 = c__17588__auto___20775;
var G__20778 = cljs.core.count.call(null,c__17588__auto___20775);
var G__20779 = (0);
seq__20759_20763 = G__20776;
chunk__20760_20764 = G__20777;
count__20761_20765 = G__20778;
i__20762_20766 = G__20779;
continue;
} else {
var k_20780 = cljs.core.first.call(null,seq__20759_20774__$1);
var v_20781 = (b[k_20780]);
(a[k_20780] = v_20781);

var G__20782 = cljs.core.next.call(null,seq__20759_20774__$1);
var G__20783 = null;
var G__20784 = (0);
var G__20785 = (0);
seq__20759_20763 = G__20782;
chunk__20760_20764 = G__20783;
count__20761_20765 = G__20784;
i__20762_20766 = G__20785;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args20786 = [];
var len__17843__auto___20789 = arguments.length;
var i__17844__auto___20790 = (0);
while(true){
if((i__17844__auto___20790 < len__17843__auto___20789)){
args20786.push((arguments[i__17844__auto___20790]));

var G__20791 = (i__17844__auto___20790 + (1));
i__17844__auto___20790 = G__20791;
continue;
} else {
}
break;
}

var G__20788 = args20786.length;
switch (G__20788) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20786.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__20793 = (i + (2));
var G__20794 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__20793;
ret = G__20794;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__20795_20799 = cljs.core.seq.call(null,v);
var chunk__20796_20800 = null;
var count__20797_20801 = (0);
var i__20798_20802 = (0);
while(true){
if((i__20798_20802 < count__20797_20801)){
var x_20803 = cljs.core._nth.call(null,chunk__20796_20800,i__20798_20802);
ret.push(x_20803);

var G__20804 = seq__20795_20799;
var G__20805 = chunk__20796_20800;
var G__20806 = count__20797_20801;
var G__20807 = (i__20798_20802 + (1));
seq__20795_20799 = G__20804;
chunk__20796_20800 = G__20805;
count__20797_20801 = G__20806;
i__20798_20802 = G__20807;
continue;
} else {
var temp__4425__auto___20808 = cljs.core.seq.call(null,seq__20795_20799);
if(temp__4425__auto___20808){
var seq__20795_20809__$1 = temp__4425__auto___20808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20795_20809__$1)){
var c__17588__auto___20810 = cljs.core.chunk_first.call(null,seq__20795_20809__$1);
var G__20811 = cljs.core.chunk_rest.call(null,seq__20795_20809__$1);
var G__20812 = c__17588__auto___20810;
var G__20813 = cljs.core.count.call(null,c__17588__auto___20810);
var G__20814 = (0);
seq__20795_20799 = G__20811;
chunk__20796_20800 = G__20812;
count__20797_20801 = G__20813;
i__20798_20802 = G__20814;
continue;
} else {
var x_20815 = cljs.core.first.call(null,seq__20795_20809__$1);
ret.push(x_20815);

var G__20816 = cljs.core.next.call(null,seq__20795_20809__$1);
var G__20817 = null;
var G__20818 = (0);
var G__20819 = (0);
seq__20795_20799 = G__20816;
chunk__20796_20800 = G__20817;
count__20797_20801 = G__20818;
i__20798_20802 = G__20819;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__20820_20824 = cljs.core.seq.call(null,v);
var chunk__20821_20825 = null;
var count__20822_20826 = (0);
var i__20823_20827 = (0);
while(true){
if((i__20823_20827 < count__20822_20826)){
var x_20828 = cljs.core._nth.call(null,chunk__20821_20825,i__20823_20827);
ret.push(x_20828);

var G__20829 = seq__20820_20824;
var G__20830 = chunk__20821_20825;
var G__20831 = count__20822_20826;
var G__20832 = (i__20823_20827 + (1));
seq__20820_20824 = G__20829;
chunk__20821_20825 = G__20830;
count__20822_20826 = G__20831;
i__20823_20827 = G__20832;
continue;
} else {
var temp__4425__auto___20833 = cljs.core.seq.call(null,seq__20820_20824);
if(temp__4425__auto___20833){
var seq__20820_20834__$1 = temp__4425__auto___20833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20820_20834__$1)){
var c__17588__auto___20835 = cljs.core.chunk_first.call(null,seq__20820_20834__$1);
var G__20836 = cljs.core.chunk_rest.call(null,seq__20820_20834__$1);
var G__20837 = c__17588__auto___20835;
var G__20838 = cljs.core.count.call(null,c__17588__auto___20835);
var G__20839 = (0);
seq__20820_20824 = G__20836;
chunk__20821_20825 = G__20837;
count__20822_20826 = G__20838;
i__20823_20827 = G__20839;
continue;
} else {
var x_20840 = cljs.core.first.call(null,seq__20820_20834__$1);
ret.push(x_20840);

var G__20841 = cljs.core.next.call(null,seq__20820_20834__$1);
var G__20842 = null;
var G__20843 = (0);
var G__20844 = (0);
seq__20820_20824 = G__20841;
chunk__20821_20825 = G__20842;
count__20822_20826 = G__20843;
i__20823_20827 = G__20844;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__20845_20849 = cljs.core.seq.call(null,v);
var chunk__20846_20850 = null;
var count__20847_20851 = (0);
var i__20848_20852 = (0);
while(true){
if((i__20848_20852 < count__20847_20851)){
var x_20853 = cljs.core._nth.call(null,chunk__20846_20850,i__20848_20852);
ret.push(x_20853);

var G__20854 = seq__20845_20849;
var G__20855 = chunk__20846_20850;
var G__20856 = count__20847_20851;
var G__20857 = (i__20848_20852 + (1));
seq__20845_20849 = G__20854;
chunk__20846_20850 = G__20855;
count__20847_20851 = G__20856;
i__20848_20852 = G__20857;
continue;
} else {
var temp__4425__auto___20858 = cljs.core.seq.call(null,seq__20845_20849);
if(temp__4425__auto___20858){
var seq__20845_20859__$1 = temp__4425__auto___20858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20845_20859__$1)){
var c__17588__auto___20860 = cljs.core.chunk_first.call(null,seq__20845_20859__$1);
var G__20861 = cljs.core.chunk_rest.call(null,seq__20845_20859__$1);
var G__20862 = c__17588__auto___20860;
var G__20863 = cljs.core.count.call(null,c__17588__auto___20860);
var G__20864 = (0);
seq__20845_20849 = G__20861;
chunk__20846_20850 = G__20862;
count__20847_20851 = G__20863;
i__20848_20852 = G__20864;
continue;
} else {
var x_20865 = cljs.core.first.call(null,seq__20845_20859__$1);
ret.push(x_20865);

var G__20866 = cljs.core.next.call(null,seq__20845_20859__$1);
var G__20867 = null;
var G__20868 = (0);
var G__20869 = (0);
seq__20845_20849 = G__20866;
chunk__20846_20850 = G__20867;
count__20847_20851 = G__20868;
i__20848_20852 = G__20869;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args20870 = [];
var len__17843__auto___20881 = arguments.length;
var i__17844__auto___20882 = (0);
while(true){
if((i__17844__auto___20882 < len__17843__auto___20881)){
args20870.push((arguments[i__17844__auto___20882]));

var G__20883 = (i__17844__auto___20882 + (1));
i__17844__auto___20882 = G__20883;
continue;
} else {
}
break;
}

var G__20872 = args20870.length;
switch (G__20872) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20870.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__20873 = obj;
G__20873.push(kfn.call(null,k),vfn.call(null,v));

return G__20873;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x20874 = cljs.core.clone.call(null,handlers);
x20874.forEach = ((function (x20874,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__20875 = cljs.core.seq.call(null,coll);
var chunk__20876 = null;
var count__20877 = (0);
var i__20878 = (0);
while(true){
if((i__20878 < count__20877)){
var vec__20879 = cljs.core._nth.call(null,chunk__20876,i__20878);
var k = cljs.core.nth.call(null,vec__20879,(0),null);
var v = cljs.core.nth.call(null,vec__20879,(1),null);
f.call(null,v,k);

var G__20885 = seq__20875;
var G__20886 = chunk__20876;
var G__20887 = count__20877;
var G__20888 = (i__20878 + (1));
seq__20875 = G__20885;
chunk__20876 = G__20886;
count__20877 = G__20887;
i__20878 = G__20888;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20875);
if(temp__4425__auto__){
var seq__20875__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20875__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__20875__$1);
var G__20889 = cljs.core.chunk_rest.call(null,seq__20875__$1);
var G__20890 = c__17588__auto__;
var G__20891 = cljs.core.count.call(null,c__17588__auto__);
var G__20892 = (0);
seq__20875 = G__20889;
chunk__20876 = G__20890;
count__20877 = G__20891;
i__20878 = G__20892;
continue;
} else {
var vec__20880 = cljs.core.first.call(null,seq__20875__$1);
var k = cljs.core.nth.call(null,vec__20880,(0),null);
var v = cljs.core.nth.call(null,vec__20880,(1),null);
f.call(null,v,k);

var G__20893 = cljs.core.next.call(null,seq__20875__$1);
var G__20894 = null;
var G__20895 = (0);
var G__20896 = (0);
seq__20875 = G__20893;
chunk__20876 = G__20894;
count__20877 = G__20895;
i__20878 = G__20896;
continue;
}
} else {
return null;
}
}
break;
}
});})(x20874,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x20874;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args20897 = [];
var len__17843__auto___20903 = arguments.length;
var i__17844__auto___20904 = (0);
while(true){
if((i__17844__auto___20904 < len__17843__auto___20903)){
args20897.push((arguments[i__17844__auto___20904]));

var G__20905 = (i__17844__auto___20904 + (1));
i__17844__auto___20904 = G__20905;
continue;
} else {
}
break;
}

var G__20899 = args20897.length;
switch (G__20899) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20897.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit20900 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit20900 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta20901){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta20901 = meta20901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit20900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20902,meta20901__$1){
var self__ = this;
var _20902__$1 = this;
return (new cognitect.transit.t_cognitect$transit20900(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta20901__$1));
});

cognitect.transit.t_cognitect$transit20900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20902){
var self__ = this;
var _20902__$1 = this;
return self__.meta20901;
});

cognitect.transit.t_cognitect$transit20900.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit20900.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit20900.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit20900.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit20900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta20901","meta20901",1316840289,null)], null);
});

cognitect.transit.t_cognitect$transit20900.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit20900.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit20900";

cognitect.transit.t_cognitect$transit20900.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cognitect.transit/t_cognitect$transit20900");
});

cognitect.transit.__GT_t_cognitect$transit20900 = (function cognitect$transit$__GT_t_cognitect$transit20900(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta20901){
return (new cognitect.transit.t_cognitect$transit20900(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta20901));
});

}

return (new cognitect.transit.t_cognitect$transit20900(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__16785__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map