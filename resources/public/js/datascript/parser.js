// Compiled by ClojureScript 1.7.170 {}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('datascript.db');
datascript.parser.collect_vars_acc;

/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
var x__17441__auto__ = (((_ == null))?null:_);
var m__17442__auto__ = (datascript.parser._collect[goog.typeOf(x__17441__auto__)]);
if(!((m__17442__auto__ == null))){
return m__17442__auto__.call(null,_,pred,acc);
} else {
var m__17442__auto____$1 = (datascript.parser._collect["_"]);
if(!((m__17442__auto____$1 == null))){
return m__17442__auto____$1.call(null,_,pred,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect",_);
}
}
}
});

datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
var x__17441__auto__ = (((_ == null))?null:_);
var m__17442__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__17441__auto__)]);
if(!((m__17442__auto__ == null))){
return m__17442__auto__.call(null,_,acc);
} else {
var m__17442__auto____$1 = (datascript.parser._collect_vars["_"]);
if(!((m__17442__auto____$1 == null))){
return m__17442__auto____$1.call(null,_,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect-vars",_);
}
}
}
});

datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
var x__17441__auto__ = (((_ == null))?null:_);
var m__17442__auto__ = (datascript.parser._postwalk[goog.typeOf(x__17441__auto__)]);
if(!((m__17442__auto__ == null))){
return m__17442__auto__.call(null,_,f);
} else {
var m__17442__auto____$1 = (datascript.parser._postwalk["_"]);
if(!((m__17442__auto____$1 == null))){
return m__17442__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-postwalk",_);
}
}
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),size));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (p1__20394_SHARP_,p2__20393_SHARP_){
var temp__4423__auto__ = parse_el.call(null,p2__20393_SHARP_);
if(cljs.core.truth_(temp__4423__auto__)){
var parsed = temp__4423__auto__;
return cljs.core.conj.call(null,p1__20394_SHARP_,parsed);
} else {
return cljs.core.reduced.call(null,null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var args__17851__auto__ = [];
var len__17844__auto___20401 = arguments.length;
var i__17845__auto___20402 = (0);
while(true){
if((i__17845__auto___20402 < len__17844__auto___20401)){
args__17851__auto__.push((arguments[i__17845__auto___20402]));

var G__20403 = (i__17845__auto___20402 + (1));
i__17845__auto___20402 = G__20403;
continue;
} else {
}
break;
}

var argseq__17852__auto__ = ((((2) < args__17851__auto__.length))?(new cljs.core.IndexedSeq(args__17851__auto__.slice((2)),(0))):null);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17852__auto__);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic = (function (pred,form,p__20398){
var vec__20399 = p__20398;
var acc = cljs.core.nth.call(null,vec__20399,(0),null);
var acc__$1 = (function (){var or__16785__auto__ = acc;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.truth_(pred.call(null,form))){
return cljs.core.conj.call(null,acc__$1,form);
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect.call(null,form,pred,acc__$1);
} else {
if(cljs.core.truth_(datascript.db.seqable_QMARK_.call(null,form))){
return cljs.core.reduce.call(null,((function (acc__$1,vec__20399,acc){
return (function (acc__$2,form__$1){
return datascript.parser.collect.call(null,pred,form__$1,acc__$2);
});})(acc__$1,vec__20399,acc))
,acc__$1,form);
} else {
return acc__$1;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = (2);

datascript.parser.collect.cljs$lang$applyTo = (function (seq20395){
var G__20396 = cljs.core.first.call(null,seq20395);
var seq20395__$1 = cljs.core.next.call(null,seq20395);
var G__20397 = cljs.core.first.call(null,seq20395__$1);
var seq20395__$2 = cljs.core.next.call(null,seq20395__$1);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(G__20396,G__20397,seq20395__$2);
});
datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__16785__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__16785__auto__){
return or__16785__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return f.call(null,datascript.parser._postwalk.call(null,form,f));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__20410){
var vec__20411 = p__20410;
var k = cljs.core.nth.call(null,vec__20411,(0),null);
var v = cljs.core.nth.call(null,vec__20411,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datascript$parser$postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__20404_SHARP_){
return datascript$parser$postwalk.call(null,p1__20404_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__20405_SHARP_){
return datascript$parser$postwalk.call(null,p1__20405_SHARP_,f);
}),form)));
} else {
return f.call(null,form);

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__16785__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj));
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return obj;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20416,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20418 = k20416;
switch (G__20418) {
default:
return cljs.core.get.call(null,self__.__extmap,k20416,else__17403__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.Placeholder{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IIterable$ = true;

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20415){
var self__ = this;
var G__20415__$1 = this;
return (new cljs.core.RecordIter((0),G__20415__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20415){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20419 = cljs.core.keyword_identical_QMARK_;
var expr__20420 = k__17408__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20415),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20415){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.Placeholder(G__20415,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20412){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20413,acc20414){
var self__ = this;
var ___19338__auto____$1 = this;
return acc20414;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20414){
var self__ = this;
var ___19338__auto____$1 = this;
return acc20414;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Placeholder");
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/Placeholder");
});

datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__20417){
return (new datascript.parser.Placeholder(null,cljs.core.dissoc.call(null,G__20417),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20427,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20429 = (((k20427 instanceof cljs.core.Keyword))?k20427.fqn:null);
switch (G__20429) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20427,else__17403__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.Variable{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IIterable$ = true;

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20426){
var self__ = this;
var G__20426__$1 = this;
return (new cljs.core.RecordIter((0),G__20426__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20426){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20430 = cljs.core.keyword_identical_QMARK_;
var expr__20431 = k__17408__auto__;
if(cljs.core.truth_(pred__20430.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__20431))){
return (new datascript.parser.Variable(G__20426,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20426),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20426){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__20426,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20423){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk.call(null,self__.symbol,f20423),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20424,acc20425){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20424,self__.symbol,acc20425);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20425){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc20425,self__.symbol);
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Variable");
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/Variable");
});

datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__20428){
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__20428),null,cljs.core.dissoc.call(null,G__20428,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20438,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20440 = (((k20438 instanceof cljs.core.Keyword))?k20438.fqn:null);
switch (G__20440) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20438,else__17403__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.SrcVar{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20437){
var self__ = this;
var G__20437__$1 = this;
return (new cljs.core.RecordIter((0),G__20437__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20437){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20441 = cljs.core.keyword_identical_QMARK_;
var expr__20442 = k__17408__auto__;
if(cljs.core.truth_(pred__20441.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__20442))){
return (new datascript.parser.SrcVar(G__20437,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20437),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20437){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__20437,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20434){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk.call(null,self__.symbol,f20434),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20435,acc20436){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20435,self__.symbol,acc20436);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20436){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc20436,self__.symbol);
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/SrcVar");
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/SrcVar");
});

datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__20439){
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__20439),null,cljs.core.dissoc.call(null,G__20439,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20449,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20451 = k20449;
switch (G__20451) {
default:
return cljs.core.get.call(null,self__.__extmap,k20449,else__17403__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$ = true;

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20448){
var self__ = this;
var G__20448__$1 = this;
return (new cljs.core.RecordIter((0),G__20448__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20448){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20452 = cljs.core.keyword_identical_QMARK_;
var expr__20453 = k__17408__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20448),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20448){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__20448,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20445){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20446,acc20447){
var self__ = this;
var ___19338__auto____$1 = this;
return acc20447;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20447){
var self__ = this;
var ___19338__auto____$1 = this;
return acc20447;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/DefaultSrc");
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/DefaultSrc");
});

datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__20450){
return (new datascript.parser.DefaultSrc(null,cljs.core.dissoc.call(null,G__20450),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20460,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20462 = k20460;
switch (G__20462) {
default:
return cljs.core.get.call(null,self__.__extmap,k20460,else__17403__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.RulesVar{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20459){
var self__ = this;
var G__20459__$1 = this;
return (new cljs.core.RecordIter((0),G__20459__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20459){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20463 = cljs.core.keyword_identical_QMARK_;
var expr__20464 = k__17408__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20459),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20459){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.RulesVar(G__20459,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20456){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20457,acc20458){
var self__ = this;
var ___19338__auto____$1 = this;
return acc20458;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20458){
var self__ = this;
var ___19338__auto____$1 = this;
return acc20458;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RulesVar");
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/RulesVar");
});

datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__20461){
return (new datascript.parser.RulesVar(null,cljs.core.dissoc.call(null,G__20461),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20471,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20473 = (((k20471 instanceof cljs.core.Keyword))?k20471.fqn:null);
switch (G__20473) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20471,else__17403__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.Constant{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IIterable$ = true;

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20470){
var self__ = this;
var G__20470__$1 = this;
return (new cljs.core.RecordIter((0),G__20470__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20470){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20474 = cljs.core.keyword_identical_QMARK_;
var expr__20475 = k__17408__auto__;
if(cljs.core.truth_(pred__20474.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__20475))){
return (new datascript.parser.Constant(G__20470,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20470),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20470){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__20470,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20467){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk.call(null,self__.value,f20467),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20468,acc20469){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20468,self__.value,acc20469);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20469){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc20469,self__.value);
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Constant");
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/Constant");
});

datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__20472){
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__20472),null,cljs.core.dissoc.call(null,G__20472,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20482,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20484 = (((k20482 instanceof cljs.core.Keyword))?k20482.fqn:null);
switch (G__20484) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20482,else__17403__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$ = true;

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20481){
var self__ = this;
var G__20481__$1 = this;
return (new cljs.core.RecordIter((0),G__20481__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20481){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20485 = cljs.core.keyword_identical_QMARK_;
var expr__20486 = k__17408__auto__;
if(cljs.core.truth_(pred__20485.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__20486))){
return (new datascript.parser.PlainSymbol(G__20481,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20481),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20481){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__20481,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20478){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk.call(null,self__.symbol,f20478),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20479,acc20480){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20479,self__.symbol,acc20480);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20480){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc20480,self__.symbol);
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/PlainSymbol");
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/PlainSymbol");
});

datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__20483){
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__20483),null,cljs.core.dissoc.call(null,G__20483,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"?"))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"$"))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if(!((form instanceof cljs.core.Symbol))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,datascript.parser.parse_variable.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_src_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_rules_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_placeholder.call(null,form)))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_variable = (function datascript$parser$parse_plain_variable(form){
if(cljs.core.truth_(datascript.parser.parse_plain_symbol.call(null,form))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__16785__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = datascript.parser.parse_constant.call(null,form);
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return datascript.parser.parse_src_var.call(null,form);
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20493,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20495 = (((k20493 instanceof cljs.core.Keyword))?k20493.fqn:null);
switch (G__20495) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20493,else__17403__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.RuleVars{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20492){
var self__ = this;
var G__20492__$1 = this;
return (new cljs.core.RecordIter((0),G__20492__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20492){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20496 = cljs.core.keyword_identical_QMARK_;
var expr__20497 = k__17408__auto__;
if(cljs.core.truth_(pred__20496.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__20497))){
return (new datascript.parser.RuleVars(G__20492,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20496.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__20497))){
return (new datascript.parser.RuleVars(self__.required,G__20492,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20492),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20492){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__20492,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20489){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk.call(null,self__.required,f20489),datascript.parser.postwalk.call(null,self__.free,f20489),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20490,acc20491){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20490,self__.free,datascript.parser.collect.call(null,pred20490,self__.required,acc20491));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20491){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc20491,self__.required),self__.free);
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleVars");
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/RuleVars");
});

datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__20494){
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__20494),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__20494),null,cljs.core.dissoc.call(null,G__20494,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__20501 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__20501,(0),null);
var rest = cljs.core.nth.call(null,vec__20501,(1),null);
var required_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,required);
var free_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,rest);
if((cljs.core.empty_QMARK_.call(null,required_STAR_)) && (cljs.core.empty_QMARK_.call(null,free_STAR_))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,cljs.core.concat.call(null,required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule variables should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20506,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20508 = k20506;
switch (G__20508) {
default:
return cljs.core.get.call(null,self__.__extmap,k20506,else__17403__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20505){
var self__ = this;
var G__20505__$1 = this;
return (new cljs.core.RecordIter((0),G__20505__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20505){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20509 = cljs.core.keyword_identical_QMARK_;
var expr__20510 = k__17408__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20505),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20505){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__20505,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20502){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20503,acc20504){
var self__ = this;
var ___19338__auto____$1 = this;
return acc20504;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20504){
var self__ = this;
var ___19338__auto____$1 = this;
return acc20504;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindIgnore");
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/BindIgnore");
});

datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__20507){
return (new datascript.parser.BindIgnore(null,cljs.core.dissoc.call(null,G__20507),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20517,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20519 = (((k20517 instanceof cljs.core.Keyword))?k20517.fqn:null);
switch (G__20519) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20517,else__17403__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.BindScalar{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20516){
var self__ = this;
var G__20516__$1 = this;
return (new cljs.core.RecordIter((0),G__20516__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20516){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20520 = cljs.core.keyword_identical_QMARK_;
var expr__20521 = k__17408__auto__;
if(cljs.core.truth_(pred__20520.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__20521))){
return (new datascript.parser.BindScalar(G__20516,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20516),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20516){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__20516,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20513){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk.call(null,self__.variable,f20513),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20514,acc20515){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20514,self__.variable,acc20515);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20515){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc20515,self__.variable);
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindScalar");
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/BindScalar");
});

datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__20518){
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__20518),null,cljs.core.dissoc.call(null,G__20518,new cljs.core.Keyword(null,"variable","variable",-281346492)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20528,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20530 = (((k20528 instanceof cljs.core.Keyword))?k20528.fqn:null);
switch (G__20530) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20528,else__17403__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.BindTuple{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20527){
var self__ = this;
var G__20527__$1 = this;
return (new cljs.core.RecordIter((0),G__20527__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20527){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20531 = cljs.core.keyword_identical_QMARK_;
var expr__20532 = k__17408__auto__;
if(cljs.core.truth_(pred__20531.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__20532))){
return (new datascript.parser.BindTuple(G__20527,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20527),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20527){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__20527,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20524){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk.call(null,self__.bindings,f20524),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20525,acc20526){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20525,self__.bindings,acc20526);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20526){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc20526,self__.bindings);
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindTuple");
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/BindTuple");
});

datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__20529){
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__20529),null,cljs.core.dissoc.call(null,G__20529,new cljs.core.Keyword(null,"bindings","bindings",1271397192)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20539,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20541 = (((k20539 instanceof cljs.core.Keyword))?k20539.fqn:null);
switch (G__20541) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20539,else__17403__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.BindColl{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20538){
var self__ = this;
var G__20538__$1 = this;
return (new cljs.core.RecordIter((0),G__20538__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20538){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20542 = cljs.core.keyword_identical_QMARK_;
var expr__20543 = k__17408__auto__;
if(cljs.core.truth_(pred__20542.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__20543))){
return (new datascript.parser.BindColl(G__20538,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20538),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20538){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__20538,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20535){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk.call(null,self__.binding,f20535),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20536,acc20537){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20536,self__.binding,acc20537);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20537){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc20537,self__.binding);
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindColl");
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/BindColl");
});

datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__20540){
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__20540),null,cljs.core.dissoc.call(null,G__20540,new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});

datascript.parser.parse_binding;
datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source.call(null,(new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__4425__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var var$ = temp__4425__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__16773__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(2));
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null));
} else {
return and__16773__auto__;
}
})())){
var temp__4423__auto__ = datascript.parser.parse_binding.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4423__auto__)){
var sub_bind = temp__4423__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse collection binding")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__16785__auto__ = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__4425__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__4425__auto__)){
var sub_bindings = temp__4425__auto__;
if(!(cljs.core.empty_QMARK_.call(null,sub_bindings))){
return datascript.parser.with_source.call(null,(new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Tuple binding cannot be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(cljs.core.truth_((function (){var and__16773__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(1));
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form));
} else {
return and__16773__auto__;
}
})())){
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(datascript.parser.parse_bind_tuple.call(null,cljs.core.first.call(null,form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__16785__auto__ = datascript.parser.parse_bind_coll.call(null,form);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = datascript.parser.parse_bind_rel.call(null,form);
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
var or__16785__auto____$2 = datascript.parser.parse_bind_tuple.call(null,form);
if(cljs.core.truth_(or__16785__auto____$2)){
return or__16785__auto____$2;
} else {
var or__16785__auto____$3 = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__16785__auto____$3)){
return or__16785__auto____$3;
} else {
var or__16785__auto____$4 = datascript.parser.parse_bind_scalar.call(null,form);
if(cljs.core.truth_(or__16785__auto____$4)){
return or__16785__auto____$4;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
var x__17441__auto__ = (((this$ == null))?null:this$);
var m__17442__auto__ = (datascript.parser._find_vars[goog.typeOf(x__17441__auto__)]);
if(!((m__17442__auto__ == null))){
return m__17442__auto__.call(null,this$);
} else {
var m__17442__auto____$1 = (datascript.parser._find_vars["_"]);
if(!((m__17442__auto____$1 == null))){
return m__17442__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindVars.-find-vars",this$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,cljs.core.last.call(null,self__.args));
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20550,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20552 = (((k20550 instanceof cljs.core.Keyword))?k20550.fqn:null);
switch (G__20552) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20550,else__17403__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.Aggregate{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20549){
var self__ = this;
var G__20549__$1 = this;
return (new cljs.core.RecordIter((0),G__20549__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20549){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20553 = cljs.core.keyword_identical_QMARK_;
var expr__20554 = k__17408__auto__;
if(cljs.core.truth_(pred__20553.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__20554))){
return (new datascript.parser.Aggregate(G__20549,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20553.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__20554))){
return (new datascript.parser.Aggregate(self__.fn,G__20549,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20549),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20549){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__20549,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20546){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk.call(null,self__.fn,f20546),datascript.parser.postwalk.call(null,self__.args,f20546),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20547,acc20548){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20547,self__.args,datascript.parser.collect.call(null,pred20547,self__.fn,acc20548));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20548){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc20548,self__.fn),self__.args);
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Aggregate");
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/Aggregate");
});

datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__20551){
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__20551),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__20551),null,cljs.core.dissoc.call(null,G__20551,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,self__.variable);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20561,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20563 = (((k20561 instanceof cljs.core.Keyword))?k20561.fqn:null);
switch (G__20563) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20561,else__17403__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.Pull{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20560){
var self__ = this;
var G__20560__$1 = this;
return (new cljs.core.RecordIter((0),G__20560__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20560){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20564 = cljs.core.keyword_identical_QMARK_;
var expr__20565 = k__17408__auto__;
if(cljs.core.truth_(pred__20564.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__20565))){
return (new datascript.parser.Pull(G__20560,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20564.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__20565))){
return (new datascript.parser.Pull(self__.source,G__20560,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20564.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__20565))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__20560,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20560),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20560){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__20560,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20557){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk.call(null,self__.source,f20557),datascript.parser.postwalk.call(null,self__.variable,f20557),datascript.parser.postwalk.call(null,self__.pattern,f20557),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20558,acc20559){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20558,self__.pattern,datascript.parser.collect.call(null,pred20558,self__.variable,datascript.parser.collect.call(null,pred20558,self__.source,acc20559)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20559){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc20559,self__.source),self__.variable),self__.pattern);
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pull");
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/Pull");
});

datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__20562){
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__20562),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__20562),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__20562),null,cljs.core.dissoc.call(null,G__20562,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__17441__auto__ = (((this$ == null))?null:this$);
var m__17442__auto__ = (datascript.parser.find_elements[goog.typeOf(x__17441__auto__)]);
if(!((m__17442__auto__ == null))){
return m__17442__auto__.call(null,this$);
} else {
var m__17442__auto____$1 = (datascript.parser.find_elements["_"]);
if(!((m__17442__auto____$1 == null))){
return m__17442__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindElements.find-elements",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20572,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20574 = (((k20572 instanceof cljs.core.Keyword))?k20572.fqn:null);
switch (G__20574) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20572,else__17403__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.FindRel{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20571){
var self__ = this;
var G__20571__$1 = this;
return (new cljs.core.RecordIter((0),G__20571__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20571){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20575 = cljs.core.keyword_identical_QMARK_;
var expr__20576 = k__17408__auto__;
if(cljs.core.truth_(pred__20575.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__20576))){
return (new datascript.parser.FindRel(G__20571,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20571),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20571){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__20571,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20568){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk.call(null,self__.elements,f20568),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20569,acc20570){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20569,self__.elements,acc20570);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20570){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc20570,self__.elements);
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindRel");
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/FindRel");
});

datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__20573){
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__20573),null,cljs.core.dissoc.call(null,G__20573,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20583,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20585 = (((k20583 instanceof cljs.core.Keyword))?k20583.fqn:null);
switch (G__20585) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20583,else__17403__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.FindColl{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20582){
var self__ = this;
var G__20582__$1 = this;
return (new cljs.core.RecordIter((0),G__20582__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20582){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20586 = cljs.core.keyword_identical_QMARK_;
var expr__20587 = k__17408__auto__;
if(cljs.core.truth_(pred__20586.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__20587))){
return (new datascript.parser.FindColl(G__20582,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20582),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20582){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__20582,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20579){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk.call(null,self__.element,f20579),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20580,acc20581){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20580,self__.element,acc20581);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20581){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc20581,self__.element);
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindColl");
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/FindColl");
});

datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__20584){
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__20584),null,cljs.core.dissoc.call(null,G__20584,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20594,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20596 = (((k20594 instanceof cljs.core.Keyword))?k20594.fqn:null);
switch (G__20596) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20594,else__17403__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.FindScalar{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20593){
var self__ = this;
var G__20593__$1 = this;
return (new cljs.core.RecordIter((0),G__20593__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20593){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20597 = cljs.core.keyword_identical_QMARK_;
var expr__20598 = k__17408__auto__;
if(cljs.core.truth_(pred__20597.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__20598))){
return (new datascript.parser.FindScalar(G__20593,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20593),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20593){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__20593,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20590){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk.call(null,self__.element,f20590),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20591,acc20592){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20591,self__.element,acc20592);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20592){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc20592,self__.element);
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindScalar");
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/FindScalar");
});

datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__20595){
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__20595),null,cljs.core.dissoc.call(null,G__20595,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20605,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20607 = (((k20605 instanceof cljs.core.Keyword))?k20605.fqn:null);
switch (G__20607) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20605,else__17403__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.FindTuple{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20604){
var self__ = this;
var G__20604__$1 = this;
return (new cljs.core.RecordIter((0),G__20604__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20604){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20608 = cljs.core.keyword_identical_QMARK_;
var expr__20609 = k__17408__auto__;
if(cljs.core.truth_(pred__20608.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__20609))){
return (new datascript.parser.FindTuple(G__20604,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20604),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20604){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__20604,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20601){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk.call(null,self__.elements,f20601),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20602,acc20603){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20602,self__.elements,acc20603);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20603){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc20603,self__.elements);
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindTuple");
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/FindTuple");
});

datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__20606){
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__20606),null,cljs.core.dissoc.call(null,G__20606,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.call(null,datascript.parser._find_vars,datascript.parser.find_elements.call(null,find));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && ((cljs.core.count.call(null,form) >= (2)))){
var vec__20613 = form;
var fn = cljs.core.nth.call(null,vec__20613,(0),null);
var args = cljs.core.nthnext.call(null,vec__20613,(1));
var fn_STAR_ = datascript.parser.parse_plain_symbol.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__16773__auto__ = fn_STAR_;
if(cljs.core.truth_(and__16773__auto__)){
return args_STAR_;
} else {
return and__16773__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null)))){
if((cljs.core.count.call(null,form) >= (3))){
var vec__20615 = form;
var _ = cljs.core.nth.call(null,vec__20615,(0),null);
var fn = cljs.core.nth.call(null,vec__20615,(1),null);
var args = cljs.core.nthnext.call(null,vec__20615,(2));
var fn_STAR_ = datascript.parser.parse_variable.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__16773__auto__ = fn_STAR_;
if(cljs.core.truth_(and__16773__auto__)){
return args_STAR_;
} else {
return and__16773__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"pull","pull",779986722,null)))){
if((((3) <= cljs.core.count.call(null,form))) && ((cljs.core.count.call(null,form) <= (4)))){
var long_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(4));
var src = ((long_QMARK_)?cljs.core.nth.call(null,form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__20617 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__20617,(0),null);
var pattern = cljs.core.nth.call(null,vec__20617,(1),null);
var src_STAR_ = datascript.parser.parse_src_var.call(null,src);
var var_STAR_ = datascript.parser.parse_variable.call(null,var$);
var pattern_STAR_ = (function (){var or__16785__auto__ = datascript.parser.parse_variable.call(null,pattern);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = datascript.parser.parse_plain_variable.call(null,pattern);
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__16773__auto__ = src_STAR_;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__16773__auto____$1)){
return pattern_STAR_;
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__16785__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = datascript.parser.parse_pull_expr.call(null,form);
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
var or__16785__auto____$2 = datascript.parser.parse_aggregate_custom.call(null,form);
if(cljs.core.truth_(or__16785__auto____$2)){
return or__16785__auto____$2;
} else {
return datascript.parser.parse_aggregate.call(null,form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__20619 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,form);
var G__20619__$1 = (((G__20619 == null))?null:(new datascript.parser.FindRel(G__20619,null,null,null)));
return G__20619__$1;
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
if((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null)))){
var G__20621 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
var G__20621__$1 = (((G__20621 == null))?null:(new datascript.parser.FindColl(G__20621,null,null,null)));
return G__20621__$1;
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,".",".",1975675962,null)))){
var G__20623 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
var G__20623__$1 = (((G__20623 == null))?null:(new datascript.parser.FindScalar(G__20623,null,null,null)));
return G__20623__$1;
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
var G__20625 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,inner);
var G__20625__$1 = (((G__20625 == null))?null:(new datascript.parser.FindTuple(G__20625,null,null,null)));
return G__20625__$1;
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__16785__auto__ = datascript.parser.parse_find_rel.call(null,form);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = datascript.parser.parse_find_coll.call(null,form);
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
var or__16785__auto____$2 = datascript.parser.parse_find_scalar.call(null,form);
if(cljs.core.truth_(or__16785__auto____$2)){
return or__16785__auto____$2;
} else {
var or__16785__auto____$3 = datascript.parser.parse_find_tuple.call(null,form);
if(cljs.core.truth_(or__16785__auto____$3)){
return or__16785__auto____$3;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__16785__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :with clause, expected [ variable+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__4423__auto__ = (function (){var or__16785__auto__ = datascript.parser.parse_src_var.call(null,form);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = datascript.parser.parse_rules_var.call(null,form);
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return datascript.parser.parse_plain_variable.call(null,form);
}
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var var$ = temp__4423__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__16785__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :in clause, expected (src-var | % | plain-symbol | bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20630,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20632 = (((k20630 instanceof cljs.core.Keyword))?k20630.fqn:null);
switch (G__20632) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20630,else__17403__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.Pattern{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20629){
var self__ = this;
var G__20629__$1 = this;
return (new cljs.core.RecordIter((0),G__20629__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20629){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20633 = cljs.core.keyword_identical_QMARK_;
var expr__20634 = k__17408__auto__;
if(cljs.core.truth_(pred__20633.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__20634))){
return (new datascript.parser.Pattern(G__20629,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20633.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__20634))){
return (new datascript.parser.Pattern(self__.source,G__20629,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20629),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20629){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__20629,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20626){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk.call(null,self__.source,f20626),datascript.parser.postwalk.call(null,self__.pattern,f20626),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20627,acc20628){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20627,self__.pattern,datascript.parser.collect.call(null,pred20627,self__.source,acc20628));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20628){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc20628,self__.source),self__.pattern);
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pattern");
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/Pattern");
});

datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__20631){
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__20631),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__20631),null,cljs.core.dissoc.call(null,G__20631,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20641,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20643 = (((k20641 instanceof cljs.core.Keyword))?k20641.fqn:null);
switch (G__20643) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20641,else__17403__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.Predicate{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20640){
var self__ = this;
var G__20640__$1 = this;
return (new cljs.core.RecordIter((0),G__20640__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20640){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20644 = cljs.core.keyword_identical_QMARK_;
var expr__20645 = k__17408__auto__;
if(cljs.core.truth_(pred__20644.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__20645))){
return (new datascript.parser.Predicate(G__20640,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20644.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__20645))){
return (new datascript.parser.Predicate(self__.fn,G__20640,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20640),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20640){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__20640,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20637){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk.call(null,self__.fn,f20637),datascript.parser.postwalk.call(null,self__.args,f20637),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20638,acc20639){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20638,self__.args,datascript.parser.collect.call(null,pred20638,self__.fn,acc20639));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20639){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc20639,self__.fn),self__.args);
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Predicate");
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/Predicate");
});

datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__20642){
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__20642),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__20642),null,cljs.core.dissoc.call(null,G__20642,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20652,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20654 = (((k20652 instanceof cljs.core.Keyword))?k20652.fqn:null);
switch (G__20654) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20652,else__17403__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.Function{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IIterable$ = true;

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20651){
var self__ = this;
var G__20651__$1 = this;
return (new cljs.core.RecordIter((0),G__20651__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20651){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20655 = cljs.core.keyword_identical_QMARK_;
var expr__20656 = k__17408__auto__;
if(cljs.core.truth_(pred__20655.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__20656))){
return (new datascript.parser.Function(G__20651,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20655.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__20656))){
return (new datascript.parser.Function(self__.fn,G__20651,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20655.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__20656))){
return (new datascript.parser.Function(self__.fn,self__.args,G__20651,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20651),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20651){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__20651,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20648){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.Function(datascript.parser.postwalk.call(null,self__.fn,f20648),datascript.parser.postwalk.call(null,self__.args,f20648),datascript.parser.postwalk.call(null,self__.binding,f20648),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20649,acc20650){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20649,self__.binding,datascript.parser.collect.call(null,pred20649,self__.args,datascript.parser.collect.call(null,pred20649,self__.fn,acc20650)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20650){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc20650,self__.fn),self__.args),self__.binding);
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Function");
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/Function");
});

datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__20653){
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__20653),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__20653),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__20653),null,cljs.core.dissoc.call(null,G__20653,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20663,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20665 = (((k20663 instanceof cljs.core.Keyword))?k20663.fqn:null);
switch (G__20665) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20663,else__17403__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20662){
var self__ = this;
var G__20662__$1 = this;
return (new cljs.core.RecordIter((0),G__20662__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20662){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20666 = cljs.core.keyword_identical_QMARK_;
var expr__20667 = k__17408__auto__;
if(cljs.core.truth_(pred__20666.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__20667))){
return (new datascript.parser.RuleExpr(G__20662,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20666.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__20667))){
return (new datascript.parser.RuleExpr(self__.source,G__20662,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20666.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__20667))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__20662,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20662),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20662){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__20662,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20659){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk.call(null,self__.source,f20659),datascript.parser.postwalk.call(null,self__.name,f20659),datascript.parser.postwalk.call(null,self__.args,f20659),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20660,acc20661){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20660,self__.args,datascript.parser.collect.call(null,pred20660,self__.name,datascript.parser.collect.call(null,pred20660,self__.source,acc20661)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20661){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc20661,self__.source),self__.name),self__.args);
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleExpr");
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/RuleExpr");
});

datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__20664){
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__20664),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__20664),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__20664),null,cljs.core.dissoc.call(null,G__20664,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20674,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20676 = (((k20674 instanceof cljs.core.Keyword))?k20674.fqn:null);
switch (G__20676) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20674,else__17403__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.Not{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IIterable$ = true;

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20673){
var self__ = this;
var G__20673__$1 = this;
return (new cljs.core.RecordIter((0),G__20673__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20673){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20677 = cljs.core.keyword_identical_QMARK_;
var expr__20678 = k__17408__auto__;
if(cljs.core.truth_(pred__20677.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__20678))){
return (new datascript.parser.Not(G__20673,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20677.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__20678))){
return (new datascript.parser.Not(self__.source,G__20673,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20677.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__20678))){
return (new datascript.parser.Not(self__.source,self__.vars,G__20673,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20673),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20673){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__20673,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20670){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.Not(datascript.parser.postwalk.call(null,self__.source,f20670),datascript.parser.postwalk.call(null,self__.vars,f20670),datascript.parser.postwalk.call(null,self__.clauses,f20670),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20671,acc20672){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20671,self__.clauses,datascript.parser.collect.call(null,pred20671,self__.vars,datascript.parser.collect.call(null,pred20671,self__.source,acc20672)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20672){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc20672,self__.source),self__.vars),self__.clauses);
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Not");
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/Not");
});

datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__20675){
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__20675),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__20675),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__20675),null,cljs.core.dissoc.call(null,G__20675,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20685,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20687 = (((k20685 instanceof cljs.core.Keyword))?k20685.fqn:null);
switch (G__20687) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20685,else__17403__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.Or{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IIterable$ = true;

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20684){
var self__ = this;
var G__20684__$1 = this;
return (new cljs.core.RecordIter((0),G__20684__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20684){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20688 = cljs.core.keyword_identical_QMARK_;
var expr__20689 = k__17408__auto__;
if(cljs.core.truth_(pred__20688.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__20689))){
return (new datascript.parser.Or(G__20684,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20688.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__20689))){
return (new datascript.parser.Or(self__.source,G__20684,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20688.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__20689))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__20684,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20684),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20684){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__20684,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20681){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.Or(datascript.parser.postwalk.call(null,self__.source,f20681),datascript.parser.postwalk.call(null,self__.rule_vars,f20681),datascript.parser.postwalk.call(null,self__.clauses,f20681),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20682,acc20683){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20682,self__.clauses,datascript.parser.collect.call(null,pred20682,self__.rule_vars,datascript.parser.collect.call(null,pred20682,self__.source,acc20683)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20683){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc20683,self__.source),self__.rule_vars),self__.clauses);
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Or");
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/Or");
});

datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__20686){
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__20686),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__20686),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__20686),null,cljs.core.dissoc.call(null,G__20686,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20696,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20698 = (((k20696 instanceof cljs.core.Keyword))?k20696.fqn:null);
switch (G__20698) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20696,else__17403__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.And{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IIterable$ = true;

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20695){
var self__ = this;
var G__20695__$1 = this;
return (new cljs.core.RecordIter((0),G__20695__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20695){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20699 = cljs.core.keyword_identical_QMARK_;
var expr__20700 = k__17408__auto__;
if(cljs.core.truth_(pred__20699.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__20700))){
return (new datascript.parser.And(G__20695,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20695),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20695){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__20695,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20692){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.And(datascript.parser.postwalk.call(null,self__.clauses,f20692),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20693,acc20694){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20693,self__.clauses,acc20694);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20694){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc20694,self__.clauses);
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/And");
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/And");
});

datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__20697){
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__20697),null,cljs.core.dissoc.call(null,G__20697,new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});

datascript.parser.parse_clause;

datascript.parser.parse_clauses;
datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__16785__auto__ = datascript.parser.parse_placeholder.call(null,form);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var temp__4423__auto__ = datascript.parser.parse_src_var.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4423__auto__)){
var source_STAR_ = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next.call(null,form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__20704 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__20704,(0),null);
var next_form = cljs.core.nth.call(null,vec__20704,(1),null);
var temp__4425__auto____$1 = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__4425__auto____$1)){
var pattern_STAR_ = temp__4425__auto____$1;
if(!(cljs.core.empty_QMARK_.call(null,pattern_STAR_))){
return datascript.parser.with_source.call(null,(new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Pattern could not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__20706 = form;
var fn = cljs.core.nth.call(null,vec__20706,(0),null);
var args = cljs.core.nthnext.call(null,vec__20706,(1));
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__16785__auto__ = datascript.parser.parse_plain_symbol.call(null,fn);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return datascript.parser.parse_variable.call(null,fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__16773__auto__ = fn_STAR_;
if(cljs.core.truth_(and__16773__auto__)){
return args_STAR_;
} else {
return and__16773__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(1)))){
var temp__4425__auto__ = datascript.parser.parse_call.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4425__auto__)){
var vec__20708 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__20708,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__20708,(1),null);
return datascript.parser.with_source.call(null,(new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(2)))){
var vec__20711 = form;
var call = cljs.core.nth.call(null,vec__20711,(0),null);
var binding = cljs.core.nth.call(null,vec__20711,(1),null);
var temp__4425__auto__ = datascript.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__20712 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__20712,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__20712,(1),null);
var temp__4425__auto____$1 = datascript.parser.parse_binding.call(null,binding);
if(cljs.core.truth_(temp__4425__auto____$1)){
var binding_STAR_ = temp__4425__auto____$1;
return datascript.parser.with_source.call(null,(new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__20715 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__20715,(0),null);
var next_form = cljs.core.nth.call(null,vec__20715,(1),null);
var vec__20716 = next_form;
var name = cljs.core.nth.call(null,vec__20716,(0),null);
var args = cljs.core.nthnext.call(null,vec__20716,(1));
var name_STAR_ = datascript.parser.parse_plain_symbol.call(null,name);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_.call(null,args)){
throw cljs.core.ex_info.call(null,[cljs.core.str("rule-expr requires at least one argument")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.call(null,acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.call(null,acc,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(form));
} else {
if((form instanceof datascript.parser.Or)){
return datascript$parser$collect_vars_acc.call(null,acc,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(form));
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars.call(null,form,acc);
} else {
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,datascript$parser$collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc.call(null,cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,datascript.parser.collect_vars.call(null,form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(vars,clauses,form){
var undeclared_20719 = clojure.set.difference.call(null,cljs.core.set.call(null,vars),cljs.core.set.call(null,datascript.parser.collect_vars.call(null,clauses)));
if(cljs.core.empty_QMARK_.call(null,undeclared_20719)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variable not declared inside clauses: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_20719)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,vars)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variables should not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__20722 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__20722,(0),null);
var next_form = cljs.core.nth.call(null,vec__20722,(1),null);
var vec__20723 = next_form;
var sym = cljs.core.nth.call(null,vec__20723,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__20723,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__4423__auto__ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_(temp__4423__auto__)){
var clauses_STAR_ = temp__4423__auto__;
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__20726 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__20726,(0),null);
var next_form = cljs.core.nth.call(null,vec__20726,(1),null);
var vec__20727 = next_form;
var sym = cljs.core.nth.call(null,vec__20727,(0),null);
var vars = cljs.core.nth.call(null,vec__20727,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__20727,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,vars);
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_((function (){var and__16773__auto__ = vars_STAR_;
if(cljs.core.truth_(and__16773__auto__)){
return clauses_STAR_;
} else {
return and__16773__auto__;
}
})())){
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__20736 = clause;
var map__20736__$1 = ((((!((map__20736 == null)))?((((map__20736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20736):map__20736);
var map__20737 = cljs.core.get.call(null,map__20736__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__20737__$1 = ((((!((map__20737 == null)))?((((map__20737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20737):map__20737);
var required = cljs.core.get.call(null,map__20737__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__20737__$1,new cljs.core.Keyword(null,"free","free",801364328));
var clauses = cljs.core.get.call(null,map__20736__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var vars = cljs.core.concat.call(null,required,free);
var seq__20740_20744 = cljs.core.seq.call(null,clauses);
var chunk__20741_20745 = null;
var count__20742_20746 = (0);
var i__20743_20747 = (0);
while(true){
if((i__20743_20747 < count__20742_20746)){
var clause_20748__$1 = cljs.core._nth.call(null,chunk__20741_20745,i__20743_20747);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_20748__$1], null),form);

var G__20749 = seq__20740_20744;
var G__20750 = chunk__20741_20745;
var G__20751 = count__20742_20746;
var G__20752 = (i__20743_20747 + (1));
seq__20740_20744 = G__20749;
chunk__20741_20745 = G__20750;
count__20742_20746 = G__20751;
i__20743_20747 = G__20752;
continue;
} else {
var temp__4425__auto___20753 = cljs.core.seq.call(null,seq__20740_20744);
if(temp__4425__auto___20753){
var seq__20740_20754__$1 = temp__4425__auto___20753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20740_20754__$1)){
var c__17589__auto___20755 = cljs.core.chunk_first.call(null,seq__20740_20754__$1);
var G__20756 = cljs.core.chunk_rest.call(null,seq__20740_20754__$1);
var G__20757 = c__17589__auto___20755;
var G__20758 = cljs.core.count.call(null,c__17589__auto___20755);
var G__20759 = (0);
seq__20740_20744 = G__20756;
chunk__20741_20745 = G__20757;
count__20742_20746 = G__20758;
i__20743_20747 = G__20759;
continue;
} else {
var clause_20760__$1 = cljs.core.first.call(null,seq__20740_20754__$1);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_20760__$1], null),form);

var G__20761 = cljs.core.next.call(null,seq__20740_20754__$1);
var G__20762 = null;
var G__20763 = (0);
var G__20764 = (0);
seq__20740_20744 = G__20761;
chunk__20741_20745 = G__20762;
count__20742_20746 = G__20763;
i__20743_20747 = G__20764;
continue;
}
} else {
}
}
break;
}

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,form)))){
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,cljs.core.next.call(null,form));
if(cljs.core.truth_(cljs.core.not_empty.call(null,clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'and' clause, expected [ 'and' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__20767 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__20767,(0),null);
var next_form = cljs.core.nth.call(null,vec__20767,(1),null);
var vec__20768 = next_form;
var sym = cljs.core.nth.call(null,vec__20768,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__20768,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__4423__auto__ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__4423__auto__)){
var clauses_STAR_ = temp__4423__auto__;
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__20771 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__20771,(0),null);
var next_form = cljs.core.nth.call(null,vec__20771,(1),null);
var vec__20772 = next_form;
var sym = cljs.core.nth.call(null,vec__20772,(0),null);
var vars = cljs.core.nth.call(null,vec__20772,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__20772,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__16773__auto__ = vars_STAR_;
if(cljs.core.truth_(and__16773__auto__)){
return clauses_STAR_;
} else {
return and__16773__auto__;
}
})())){
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__16785__auto__ = datascript.parser.parse_not.call(null,form);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = datascript.parser.parse_not_join.call(null,form);
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
var or__16785__auto____$2 = datascript.parser.parse_or.call(null,form);
if(cljs.core.truth_(or__16785__auto____$2)){
return or__16785__auto____$2;
} else {
var or__16785__auto____$3 = datascript.parser.parse_or_join.call(null,form);
if(cljs.core.truth_(or__16785__auto____$3)){
return or__16785__auto____$3;
} else {
var or__16785__auto____$4 = datascript.parser.parse_pred.call(null,form);
if(cljs.core.truth_(or__16785__auto____$4)){
return or__16785__auto____$4;
} else {
var or__16785__auto____$5 = datascript.parser.parse_fn.call(null,form);
if(cljs.core.truth_(or__16785__auto____$5)){
return or__16785__auto____$5;
} else {
var or__16785__auto____$6 = datascript.parser.parse_rule_expr.call(null,form);
if(cljs.core.truth_(or__16785__auto____$6)){
return or__16785__auto____$6;
} else {
var or__16785__auto____$7 = datascript.parser.parse_pattern.call(null,form);
if(cljs.core.truth_(or__16785__auto____$7)){
return or__16785__auto____$7;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__16785__auto__ = datascript.parser.parse_clauses.call(null,form);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :where clause, expected [clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20778,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20780 = (((k20778 instanceof cljs.core.Keyword))?k20778.fqn:null);
switch (G__20780) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20778,else__17403__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20777){
var self__ = this;
var G__20777__$1 = this;
return (new cljs.core.RecordIter((0),G__20777__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20777){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20781 = cljs.core.keyword_identical_QMARK_;
var expr__20782 = k__17408__auto__;
if(cljs.core.truth_(pred__20781.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__20782))){
return (new datascript.parser.RuleBranch(G__20777,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20781.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__20782))){
return (new datascript.parser.RuleBranch(self__.vars,G__20777,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20777),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20777){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__20777,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20774){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk.call(null,self__.vars,f20774),datascript.parser.postwalk.call(null,self__.clauses,f20774),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20775,acc20776){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20775,self__.clauses,datascript.parser.collect.call(null,pred20775,self__.vars,acc20776));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20776){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc20776,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleBranch");
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/RuleBranch");
});

datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__20779){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__20779),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__20779),null,cljs.core.dissoc.call(null,G__20779,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20789,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20791 = (((k20789 instanceof cljs.core.Keyword))?k20789.fqn:null);
switch (G__20791) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20789,else__17403__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.Rule{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IIterable$ = true;

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20788){
var self__ = this;
var G__20788__$1 = this;
return (new cljs.core.RecordIter((0),G__20788__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20788){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20792 = cljs.core.keyword_identical_QMARK_;
var expr__20793 = k__17408__auto__;
if(cljs.core.truth_(pred__20792.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__20793))){
return (new datascript.parser.Rule(G__20788,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20792.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__20793))){
return (new datascript.parser.Rule(self__.name,G__20788,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20788),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20788){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__20788,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20785){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk.call(null,self__.name,f20785),datascript.parser.postwalk.call(null,self__.branches,f20785),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20786,acc20787){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20786,self__.branches,datascript.parser.collect.call(null,pred20786,self__.name,acc20787));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20787){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc20787,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Rule");
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/Rule");
});

datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__20790){
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__20790),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__20790),null,cljs.core.dissoc.call(null,G__20790,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.call(null,(function (p1__20796_SHARP_){
return (p1__20796_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.call(null,((function (declared_vars){
return (function (p1__20797_SHARP_){
return (p1__20797_SHARP_ instanceof datascript.parser.Variable);
});})(declared_vars))
,clauses,cljs.core.PersistentHashSet.EMPTY);
var undeclared_vars = clojure.set.difference.call(null,used_vars,declared_vars);
if(cljs.core.empty_QMARK_.call(null,undeclared_vars)){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Reference to the unknown variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_vars)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),undeclared_vars], null));
}
});
datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__20800 = form;
var head = cljs.core.nth.call(null,vec__20800,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__20800,(1));
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__20801 = head;
var name = cljs.core.nth.call(null,vec__20801,(0),null);
var vars = cljs.core.nthnext.call(null,vec__20801,(1));
var name_STAR_ = (function (){var or__16785__auto__ = datascript.parser.parse_plain_symbol.call(null,name);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule name, expected plain-symbol")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = (function (){var or__16785__auto__ = cljs.core.not_empty.call(null,datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule branch should have clauses")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
datascript.parser.validate_vars.call(null,vars_STAR_,clauses_STAR_,form);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule head, expected [rule-name rule-vars]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule, expected [rule-head clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,branches));
var arity0 = datascript.parser.rule_vars_arity.call(null,vars0);
var seq__20808 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__20810 = null;
var count__20811 = (0);
var i__20812 = (0);
while(true){
if((i__20812 < count__20811)){
var b = cljs.core._nth.call(null,chunk__20810,i__20812);
var vars_20814 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_20814))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_20814)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__20815 = seq__20808;
var G__20816 = chunk__20810;
var G__20817 = count__20811;
var G__20818 = (i__20812 + (1));
seq__20808 = G__20815;
chunk__20810 = G__20816;
count__20811 = G__20817;
i__20812 = G__20818;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20808);
if(temp__4425__auto__){
var seq__20808__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20808__$1)){
var c__17589__auto__ = cljs.core.chunk_first.call(null,seq__20808__$1);
var G__20819 = cljs.core.chunk_rest.call(null,seq__20808__$1);
var G__20820 = c__17589__auto__;
var G__20821 = cljs.core.count.call(null,c__17589__auto__);
var G__20822 = (0);
seq__20808 = G__20819;
chunk__20810 = G__20820;
count__20811 = G__20821;
i__20812 = G__20822;
continue;
} else {
var b = cljs.core.first.call(null,seq__20808__$1);
var vars_20823 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_20823))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_20823)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__20824 = cljs.core.next.call(null,seq__20808__$1);
var G__20825 = null;
var G__20826 = (0);
var G__20827 = (0);
seq__20808 = G__20824;
chunk__20810 = G__20825;
count__20811 = G__20826;
i__20812 = G__20827;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec.call(null,(function (){var iter__17558__auto__ = (function datascript$parser$parse_rules_$_iter__20837(s__20838){
return (new cljs.core.LazySeq(null,(function (){
var s__20838__$1 = s__20838;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20838__$1);
if(temp__4425__auto__){
var s__20838__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20838__$2)){
var c__17556__auto__ = cljs.core.chunk_first.call(null,s__20838__$2);
var size__17557__auto__ = cljs.core.count.call(null,c__17556__auto__);
var b__20840 = cljs.core.chunk_buffer.call(null,size__17557__auto__);
if((function (){var i__20839 = (0);
while(true){
if((i__20839 < size__17557__auto__)){
var vec__20843 = cljs.core._nth.call(null,c__17556__auto__,i__20839);
var name = cljs.core.nth.call(null,vec__20843,(0),null);
var branches = cljs.core.nth.call(null,vec__20843,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__20839,vec__20843,name,branches,c__17556__auto__,size__17557__auto__,b__20840,s__20838__$2,temp__4425__auto__){
return (function (p1__20828_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__20828_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__20828_SHARP_),null,null,null));
});})(i__20839,vec__20843,name,branches,c__17556__auto__,size__17557__auto__,b__20840,s__20838__$2,temp__4425__auto__))
,branches);
cljs.core.chunk_append.call(null,b__20840,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__20845 = (i__20839 + (1));
i__20839 = G__20845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20840),datascript$parser$parse_rules_$_iter__20837.call(null,cljs.core.chunk_rest.call(null,s__20838__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20840),null);
}
} else {
var vec__20844 = cljs.core.first.call(null,s__20838__$2);
var name = cljs.core.nth.call(null,vec__20844,(0),null);
var branches = cljs.core.nth.call(null,vec__20844,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__20844,name,branches,s__20838__$2,temp__4425__auto__){
return (function (p1__20828_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__20828_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__20828_SHARP_),null,null,null));
});})(vec__20844,name,branches,s__20838__$2,temp__4425__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__20837.call(null,cljs.core.rest.call(null,s__20838__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17558__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq.call(null,datascript.parser.parse_rule,form)));
})());
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (find,with$,in$,where,__meta,__extmap,__hash){
this.find = find;
this.with$ = with$;
this.in$ = in$;
this.where = where;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17400__auto__,k__17401__auto__){
var self__ = this;
var this__17400__auto____$1 = this;
return cljs.core._lookup.call(null,this__17400__auto____$1,k__17401__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17402__auto__,k20850,else__17403__auto__){
var self__ = this;
var this__17402__auto____$1 = this;
var G__20852 = (((k20850 instanceof cljs.core.Keyword))?k20850.fqn:null);
switch (G__20852) {
case "find":
return self__.find;

break;
case "with":
return self__.with$;

break;
case "in":
return self__.in$;

break;
case "where":
return self__.where;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20850,else__17403__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17414__auto__,writer__17415__auto__,opts__17416__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var pr_pair__17417__auto__ = ((function (this__17414__auto____$1){
return (function (keyval__17418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,cljs.core.pr_writer,""," ","",opts__17416__auto__,keyval__17418__auto__);
});})(this__17414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17415__auto__,pr_pair__17417__auto__,"#datascript.parser.Query{",", ","}",opts__17416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IIterable$ = true;

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20849){
var self__ = this;
var G__20849__$1 = this;
return (new cljs.core.RecordIter((0),G__20849__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17398__auto__){
var self__ = this;
var this__17398__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17394__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17395__auto__){
var self__ = this;
var this__17395__auto____$1 = this;
var h__17220__auto__ = self__.__hash;
if(!((h__17220__auto__ == null))){
return h__17220__auto__;
} else {
var h__17220__auto____$1 = cljs.core.hash_imap.call(null,this__17395__auto____$1);
self__.__hash = h__17220__auto____$1;

return h__17220__auto____$1;
}
});

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17396__auto__,other__17397__auto__){
var self__ = this;
var this__17396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16773__auto__ = other__17397__auto__;
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = (this__17396__auto____$1.constructor === other__17397__auto__.constructor);
if(and__16773__auto____$1){
return cljs.core.equiv_map.call(null,this__17396__auto____$1,other__17397__auto__);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),null,new cljs.core.Keyword(null,"where","where",-2044795965),null,new cljs.core.Keyword(null,"with","with",-1536296876),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__17410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17409__auto____$1),self__.__meta),k__17410__auto__);
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17410__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17407__auto__,k__17408__auto__,G__20849){
var self__ = this;
var this__17407__auto____$1 = this;
var pred__20853 = cljs.core.keyword_identical_QMARK_;
var expr__20854 = k__17408__auto__;
if(cljs.core.truth_(pred__20853.call(null,new cljs.core.Keyword(null,"find","find",496279456),expr__20854))){
return (new datascript.parser.Query(G__20849,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20853.call(null,new cljs.core.Keyword(null,"with","with",-1536296876),expr__20854))){
return (new datascript.parser.Query(self__.find,G__20849,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20853.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__20854))){
return (new datascript.parser.Query(self__.find,self__.with$,G__20849,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20853.call(null,new cljs.core.Keyword(null,"where","where",-2044795965),expr__20854))){
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,G__20849,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17408__auto__,G__20849),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17412__auto__){
var self__ = this;
var this__17412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17399__auto__,G__20849){
var self__ = this;
var this__17399__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,G__20849,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17405__auto__,entry__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17406__auto__)){
return cljs.core._assoc.call(null,this__17405__auto____$1,cljs.core._nth.call(null,entry__17406__auto__,(0)),cljs.core._nth.call(null,entry__17406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17405__auto____$1,entry__17406__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19335__auto__,f20846){
var self__ = this;
var this__19335__auto____$1 = this;
var new__19336__auto__ = (new datascript.parser.Query(datascript.parser.postwalk.call(null,self__.find,f20846),datascript.parser.postwalk.call(null,self__.with$,f20846),datascript.parser.postwalk.call(null,self__.in$,f20846),datascript.parser.postwalk.call(null,self__.where,f20846),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19335__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19337__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19336__auto__,meta__19337__auto__);
} else {
return new__19336__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19338__auto__,pred20847,acc20848){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect.call(null,pred20847,self__.where,datascript.parser.collect.call(null,pred20847,self__.in$,datascript.parser.collect.call(null,pred20847,self__.with$,datascript.parser.collect.call(null,pred20847,self__.find,acc20848))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19338__auto__,acc20848){
var self__ = this;
var ___19338__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc20848,self__.find),self__.with$),self__.in$),self__.where);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"with","with",104234651,null),new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"where","where",-404264438,null)], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__17434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Query");
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__17434__auto__,writer__17435__auto__){
return cljs.core._write.call(null,writer__17435__auto__,"datascript.parser/Query");
});

datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(find,with$,in$,where){
return (new datascript.parser.Query(find,with$,in$,where,null,null,null));
});

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__20851){
return (new datascript.parser.Query(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(G__20851),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(G__20851),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__20851),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(G__20851),null,cljs.core.dissoc.call(null,G__20851,new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,qs);
if(cljs.core.truth_(temp__4423__auto__)){
var q = temp__4423__auto__;
if((q instanceof cljs.core.Keyword)){
var G__20857 = parsed;
var G__20858 = q;
var G__20859 = cljs.core.next.call(null,qs);
parsed = G__20857;
key = G__20858;
qs = G__20859;
continue;
} else {
var G__20860 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__20861 = key;
var G__20862 = cljs.core.next.call(null,qs);
parsed = G__20860;
key = G__20861;
qs = G__20862;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_20869 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_20870 = cljs.core.set.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_20871 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_20872 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_20873 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_20869,with_vars_20870),clojure.set.union.call(null,where_vars_20872,in_vars_20871));
var shared_20874 = clojure.set.intersection.call(null,find_vars_20869,with_vars_20870);
if(cljs.core.empty_QMARK_.call(null,unknown_20873)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Query for unknown vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_20873)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_20873,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_20874)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":in and :with should not use same variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_20874)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_20874,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_vars_20875 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_20876 = datascript.parser.collect.call(null,((function (in_vars_20875){
return (function (p1__20863_SHARP_){
return (p1__20863_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_20875))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_20877 = datascript.parser.collect.call(null,((function (in_vars_20875,in_sources_20876){
return (function (p1__20864_SHARP_){
return (p1__20864_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_20875,in_sources_20876))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__16773__auto__ = datascript.parser.distinct_QMARK_.call(null,in_vars_20875);
if(cljs.core.truth_(and__16773__auto__)){
var and__16773__auto____$1 = datascript.parser.distinct_QMARK_.call(null,in_sources_20876);
if(cljs.core.truth_(and__16773__auto____$1)){
return datascript.parser.distinct_QMARK_.call(null,in_rules_20877);
} else {
return and__16773__auto____$1;
}
} else {
return and__16773__auto__;
}
})())){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :in should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_20878 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,with_vars_20878))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :with should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_20879 = datascript.parser.collect.call(null,(function (p1__20865_SHARP_){
return (p1__20865_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_20880 = datascript.parser.collect.call(null,((function (in_sources_20879){
return (function (p1__20866_SHARP_){
return (p1__20866_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_20879))
,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_20881 = clojure.set.difference.call(null,where_sources_20880,in_sources_20879);
if(cljs.core.empty_QMARK_.call(null,unknown_20881)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Where uses unknown source vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_20881)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_20881,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.call(null,(function (p1__20867_SHARP_){
return (p1__20867_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.call(null,((function (rule_exprs){
return (function (p1__20868_SHARP_){
return (p1__20868_SHARP_ instanceof datascript.parser.RulesVar);
});})(rule_exprs))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if((!(cljs.core.empty_QMARK_.call(null,rule_exprs))) && (cljs.core.empty_QMARK_.call(null,rules_vars))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Missing rules var '%' in :in")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_.call(null,q))?q:((cljs.core.sequential_QMARK_.call(null,q))?datascript.parser.query__GT_map.call(null,q):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Query should be a vector or a map")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var res = datascript.parser.map__GT_Query.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),datascript.parser.parse_find.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"with","with",-1536296876),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__4425__auto__)){
var with$ = temp__4425__auto__;
return datascript.parser.parse_with.call(null,with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"in","in",-1531184865),datascript.parser.parse_in.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null))),new cljs.core.Keyword(null,"where","where",-2044795965),datascript.parser.parse_where.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datascript.parser.validate_query.call(null,res,q);

return res;
});

//# sourceMappingURL=parser.js.map