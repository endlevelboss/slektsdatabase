// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args21982 = [];
var len__17843__auto___21988 = arguments.length;
var i__17844__auto___21989 = (0);
while(true){
if((i__17844__auto___21989 < len__17843__auto___21988)){
args21982.push((arguments[i__17844__auto___21989]));

var G__21990 = (i__17844__auto___21989 + (1));
i__17844__auto___21989 = G__21990;
continue;
} else {
}
break;
}

var G__21984 = args21982.length;
switch (G__21984) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21982.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21985 = (function (f,blockable,meta21986){
this.f = f;
this.blockable = blockable;
this.meta21986 = meta21986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21987,meta21986__$1){
var self__ = this;
var _21987__$1 = this;
return (new cljs.core.async.t_cljs$core$async21985(self__.f,self__.blockable,meta21986__$1));
});

cljs.core.async.t_cljs$core$async21985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21987){
var self__ = this;
var _21987__$1 = this;
return self__.meta21986;
});

cljs.core.async.t_cljs$core$async21985.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21985.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21985.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21985.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21986","meta21986",991056653,null)], null);
});

cljs.core.async.t_cljs$core$async21985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21985";

cljs.core.async.t_cljs$core$async21985.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async21985");
});

cljs.core.async.__GT_t_cljs$core$async21985 = (function cljs$core$async$__GT_t_cljs$core$async21985(f__$1,blockable__$1,meta21986){
return (new cljs.core.async.t_cljs$core$async21985(f__$1,blockable__$1,meta21986));
});

}

return (new cljs.core.async.t_cljs$core$async21985(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args21994 = [];
var len__17843__auto___21997 = arguments.length;
var i__17844__auto___21998 = (0);
while(true){
if((i__17844__auto___21998 < len__17843__auto___21997)){
args21994.push((arguments[i__17844__auto___21998]));

var G__21999 = (i__17844__auto___21998 + (1));
i__17844__auto___21998 = G__21999;
continue;
} else {
}
break;
}

var G__21996 = args21994.length;
switch (G__21996) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21994.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args22001 = [];
var len__17843__auto___22004 = arguments.length;
var i__17844__auto___22005 = (0);
while(true){
if((i__17844__auto___22005 < len__17843__auto___22004)){
args22001.push((arguments[i__17844__auto___22005]));

var G__22006 = (i__17844__auto___22005 + (1));
i__17844__auto___22005 = G__22006;
continue;
} else {
}
break;
}

var G__22003 = args22001.length;
switch (G__22003) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22001.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args22008 = [];
var len__17843__auto___22011 = arguments.length;
var i__17844__auto___22012 = (0);
while(true){
if((i__17844__auto___22012 < len__17843__auto___22011)){
args22008.push((arguments[i__17844__auto___22012]));

var G__22013 = (i__17844__auto___22012 + (1));
i__17844__auto___22012 = G__22013;
continue;
} else {
}
break;
}

var G__22010 = args22008.length;
switch (G__22010) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22008.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22015 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22015);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22015,ret){
return (function (){
return fn1.call(null,val_22015);
});})(val_22015,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args22016 = [];
var len__17843__auto___22019 = arguments.length;
var i__17844__auto___22020 = (0);
while(true){
if((i__17844__auto___22020 < len__17843__auto___22019)){
args22016.push((arguments[i__17844__auto___22020]));

var G__22021 = (i__17844__auto___22020 + (1));
i__17844__auto___22020 = G__22021;
continue;
} else {
}
break;
}

var G__22018 = args22016.length;
switch (G__22018) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22016.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17688__auto___22023 = n;
var x_22024 = (0);
while(true){
if((x_22024 < n__17688__auto___22023)){
(a[x_22024] = (0));

var G__22025 = (x_22024 + (1));
x_22024 = G__22025;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22026 = (i + (1));
i = G__22026;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22030 = (function (alt_flag,flag,meta22031){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22031 = meta22031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22032,meta22031__$1){
var self__ = this;
var _22032__$1 = this;
return (new cljs.core.async.t_cljs$core$async22030(self__.alt_flag,self__.flag,meta22031__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22032){
var self__ = this;
var _22032__$1 = this;
return self__.meta22031;
});})(flag))
;

cljs.core.async.t_cljs$core$async22030.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22030.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22030.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22030.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22030.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22031","meta22031",1373593228,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22030";

cljs.core.async.t_cljs$core$async22030.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async22030");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22030 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22030(alt_flag__$1,flag__$1,meta22031){
return (new cljs.core.async.t_cljs$core$async22030(alt_flag__$1,flag__$1,meta22031));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22030(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22036 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22036 = (function (alt_handler,flag,cb,meta22037){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22037 = meta22037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22038,meta22037__$1){
var self__ = this;
var _22038__$1 = this;
return (new cljs.core.async.t_cljs$core$async22036(self__.alt_handler,self__.flag,self__.cb,meta22037__$1));
});

cljs.core.async.t_cljs$core$async22036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22038){
var self__ = this;
var _22038__$1 = this;
return self__.meta22037;
});

cljs.core.async.t_cljs$core$async22036.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22036.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22037","meta22037",-1919429509,null)], null);
});

cljs.core.async.t_cljs$core$async22036.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22036";

cljs.core.async.t_cljs$core$async22036.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async22036");
});

cljs.core.async.__GT_t_cljs$core$async22036 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22036(alt_handler__$1,flag__$1,cb__$1,meta22037){
return (new cljs.core.async.t_cljs$core$async22036(alt_handler__$1,flag__$1,cb__$1,meta22037));
});

}

return (new cljs.core.async.t_cljs$core$async22036(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22039_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22039_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22040_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22040_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16785__auto__ = wport;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22041 = (i + (1));
i = G__22041;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16785__auto__ = ret;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16773__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17850__auto__ = [];
var len__17843__auto___22047 = arguments.length;
var i__17844__auto___22048 = (0);
while(true){
if((i__17844__auto___22048 < len__17843__auto___22047)){
args__17850__auto__.push((arguments[i__17844__auto___22048]));

var G__22049 = (i__17844__auto___22048 + (1));
i__17844__auto___22048 = G__22049;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((1) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17851__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22044){
var map__22045 = p__22044;
var map__22045__$1 = ((((!((map__22045 == null)))?((((map__22045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22045):map__22045);
var opts = map__22045__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22042){
var G__22043 = cljs.core.first.call(null,seq22042);
var seq22042__$1 = cljs.core.next.call(null,seq22042);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22043,seq22042__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22050 = [];
var len__17843__auto___22100 = arguments.length;
var i__17844__auto___22101 = (0);
while(true){
if((i__17844__auto___22101 < len__17843__auto___22100)){
args22050.push((arguments[i__17844__auto___22101]));

var G__22102 = (i__17844__auto___22101 + (1));
i__17844__auto___22101 = G__22102;
continue;
} else {
}
break;
}

var G__22052 = args22050.length;
switch (G__22052) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22050.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21937__auto___22104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto___22104){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto___22104){
return (function (state_22076){
var state_val_22077 = (state_22076[(1)]);
if((state_val_22077 === (7))){
var inst_22072 = (state_22076[(2)]);
var state_22076__$1 = state_22076;
var statearr_22078_22105 = state_22076__$1;
(statearr_22078_22105[(2)] = inst_22072);

(statearr_22078_22105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (1))){
var state_22076__$1 = state_22076;
var statearr_22079_22106 = state_22076__$1;
(statearr_22079_22106[(2)] = null);

(statearr_22079_22106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (4))){
var inst_22055 = (state_22076[(7)]);
var inst_22055__$1 = (state_22076[(2)]);
var inst_22056 = (inst_22055__$1 == null);
var state_22076__$1 = (function (){var statearr_22080 = state_22076;
(statearr_22080[(7)] = inst_22055__$1);

return statearr_22080;
})();
if(cljs.core.truth_(inst_22056)){
var statearr_22081_22107 = state_22076__$1;
(statearr_22081_22107[(1)] = (5));

} else {
var statearr_22082_22108 = state_22076__$1;
(statearr_22082_22108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (13))){
var state_22076__$1 = state_22076;
var statearr_22083_22109 = state_22076__$1;
(statearr_22083_22109[(2)] = null);

(statearr_22083_22109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (6))){
var inst_22055 = (state_22076[(7)]);
var state_22076__$1 = state_22076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22076__$1,(11),to,inst_22055);
} else {
if((state_val_22077 === (3))){
var inst_22074 = (state_22076[(2)]);
var state_22076__$1 = state_22076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22076__$1,inst_22074);
} else {
if((state_val_22077 === (12))){
var state_22076__$1 = state_22076;
var statearr_22084_22110 = state_22076__$1;
(statearr_22084_22110[(2)] = null);

(statearr_22084_22110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (2))){
var state_22076__$1 = state_22076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22076__$1,(4),from);
} else {
if((state_val_22077 === (11))){
var inst_22065 = (state_22076[(2)]);
var state_22076__$1 = state_22076;
if(cljs.core.truth_(inst_22065)){
var statearr_22085_22111 = state_22076__$1;
(statearr_22085_22111[(1)] = (12));

} else {
var statearr_22086_22112 = state_22076__$1;
(statearr_22086_22112[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (9))){
var state_22076__$1 = state_22076;
var statearr_22087_22113 = state_22076__$1;
(statearr_22087_22113[(2)] = null);

(statearr_22087_22113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (5))){
var state_22076__$1 = state_22076;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22088_22114 = state_22076__$1;
(statearr_22088_22114[(1)] = (8));

} else {
var statearr_22089_22115 = state_22076__$1;
(statearr_22089_22115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (14))){
var inst_22070 = (state_22076[(2)]);
var state_22076__$1 = state_22076;
var statearr_22090_22116 = state_22076__$1;
(statearr_22090_22116[(2)] = inst_22070);

(statearr_22090_22116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (10))){
var inst_22062 = (state_22076[(2)]);
var state_22076__$1 = state_22076;
var statearr_22091_22117 = state_22076__$1;
(statearr_22091_22117[(2)] = inst_22062);

(statearr_22091_22117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (8))){
var inst_22059 = cljs.core.async.close_BANG_.call(null,to);
var state_22076__$1 = state_22076;
var statearr_22092_22118 = state_22076__$1;
(statearr_22092_22118[(2)] = inst_22059);

(statearr_22092_22118[(1)] = (10));


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
});})(c__21937__auto___22104))
;
return ((function (switch__18798__auto__,c__21937__auto___22104){
return (function() {
var cljs$core$async$state_machine__18799__auto__ = null;
var cljs$core$async$state_machine__18799__auto____0 = (function (){
var statearr_22096 = [null,null,null,null,null,null,null,null];
(statearr_22096[(0)] = cljs$core$async$state_machine__18799__auto__);

(statearr_22096[(1)] = (1));

return statearr_22096;
});
var cljs$core$async$state_machine__18799__auto____1 = (function (state_22076){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_22076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e22097){if((e22097 instanceof Object)){
var ex__18802__auto__ = e22097;
var statearr_22098_22119 = state_22076;
(statearr_22098_22119[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22120 = state_22076;
state_22076 = G__22120;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
cljs$core$async$state_machine__18799__auto__ = function(state_22076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18799__auto____1.call(this,state_22076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18799__auto____0;
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18799__auto____1;
return cljs$core$async$state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto___22104))
})();
var state__21939__auto__ = (function (){var statearr_22099 = f__21938__auto__.call(null);
(statearr_22099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto___22104);

return statearr_22099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto___22104))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22304){
var vec__22305 = p__22304;
var v = cljs.core.nth.call(null,vec__22305,(0),null);
var p = cljs.core.nth.call(null,vec__22305,(1),null);
var job = vec__22305;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21937__auto___22487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto___22487,res,vec__22305,v,p,job,jobs,results){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto___22487,res,vec__22305,v,p,job,jobs,results){
return (function (state_22310){
var state_val_22311 = (state_22310[(1)]);
if((state_val_22311 === (1))){
var state_22310__$1 = state_22310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22310__$1,(2),res,v);
} else {
if((state_val_22311 === (2))){
var inst_22307 = (state_22310[(2)]);
var inst_22308 = cljs.core.async.close_BANG_.call(null,res);
var state_22310__$1 = (function (){var statearr_22312 = state_22310;
(statearr_22312[(7)] = inst_22307);

return statearr_22312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22310__$1,inst_22308);
} else {
return null;
}
}
});})(c__21937__auto___22487,res,vec__22305,v,p,job,jobs,results))
;
return ((function (switch__18798__auto__,c__21937__auto___22487,res,vec__22305,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____0 = (function (){
var statearr_22316 = [null,null,null,null,null,null,null,null];
(statearr_22316[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__);

(statearr_22316[(1)] = (1));

return statearr_22316;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____1 = (function (state_22310){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_22310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e22317){if((e22317 instanceof Object)){
var ex__18802__auto__ = e22317;
var statearr_22318_22488 = state_22310;
(statearr_22318_22488[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22489 = state_22310;
state_22310 = G__22489;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__ = function(state_22310){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____1.call(this,state_22310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto___22487,res,vec__22305,v,p,job,jobs,results))
})();
var state__21939__auto__ = (function (){var statearr_22319 = f__21938__auto__.call(null);
(statearr_22319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto___22487);

return statearr_22319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto___22487,res,vec__22305,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22320){
var vec__22321 = p__22320;
var v = cljs.core.nth.call(null,vec__22321,(0),null);
var p = cljs.core.nth.call(null,vec__22321,(1),null);
var job = vec__22321;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17688__auto___22490 = n;
var __22491 = (0);
while(true){
if((__22491 < n__17688__auto___22490)){
var G__22322_22492 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22322_22492) {
case "compute":
var c__21937__auto___22494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22491,c__21937__auto___22494,G__22322_22492,n__17688__auto___22490,jobs,results,process,async){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (__22491,c__21937__auto___22494,G__22322_22492,n__17688__auto___22490,jobs,results,process,async){
return (function (state_22335){
var state_val_22336 = (state_22335[(1)]);
if((state_val_22336 === (1))){
var state_22335__$1 = state_22335;
var statearr_22337_22495 = state_22335__$1;
(statearr_22337_22495[(2)] = null);

(statearr_22337_22495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (2))){
var state_22335__$1 = state_22335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22335__$1,(4),jobs);
} else {
if((state_val_22336 === (3))){
var inst_22333 = (state_22335[(2)]);
var state_22335__$1 = state_22335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22335__$1,inst_22333);
} else {
if((state_val_22336 === (4))){
var inst_22325 = (state_22335[(2)]);
var inst_22326 = process.call(null,inst_22325);
var state_22335__$1 = state_22335;
if(cljs.core.truth_(inst_22326)){
var statearr_22338_22496 = state_22335__$1;
(statearr_22338_22496[(1)] = (5));

} else {
var statearr_22339_22497 = state_22335__$1;
(statearr_22339_22497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (5))){
var state_22335__$1 = state_22335;
var statearr_22340_22498 = state_22335__$1;
(statearr_22340_22498[(2)] = null);

(statearr_22340_22498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (6))){
var state_22335__$1 = state_22335;
var statearr_22341_22499 = state_22335__$1;
(statearr_22341_22499[(2)] = null);

(statearr_22341_22499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (7))){
var inst_22331 = (state_22335[(2)]);
var state_22335__$1 = state_22335;
var statearr_22342_22500 = state_22335__$1;
(statearr_22342_22500[(2)] = inst_22331);

(statearr_22342_22500[(1)] = (3));


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
});})(__22491,c__21937__auto___22494,G__22322_22492,n__17688__auto___22490,jobs,results,process,async))
;
return ((function (__22491,switch__18798__auto__,c__21937__auto___22494,G__22322_22492,n__17688__auto___22490,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____0 = (function (){
var statearr_22346 = [null,null,null,null,null,null,null];
(statearr_22346[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__);

(statearr_22346[(1)] = (1));

return statearr_22346;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____1 = (function (state_22335){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_22335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e22347){if((e22347 instanceof Object)){
var ex__18802__auto__ = e22347;
var statearr_22348_22501 = state_22335;
(statearr_22348_22501[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22502 = state_22335;
state_22335 = G__22502;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__ = function(state_22335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____1.call(this,state_22335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__;
})()
;})(__22491,switch__18798__auto__,c__21937__auto___22494,G__22322_22492,n__17688__auto___22490,jobs,results,process,async))
})();
var state__21939__auto__ = (function (){var statearr_22349 = f__21938__auto__.call(null);
(statearr_22349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto___22494);

return statearr_22349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(__22491,c__21937__auto___22494,G__22322_22492,n__17688__auto___22490,jobs,results,process,async))
);


break;
case "async":
var c__21937__auto___22503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22491,c__21937__auto___22503,G__22322_22492,n__17688__auto___22490,jobs,results,process,async){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (__22491,c__21937__auto___22503,G__22322_22492,n__17688__auto___22490,jobs,results,process,async){
return (function (state_22362){
var state_val_22363 = (state_22362[(1)]);
if((state_val_22363 === (1))){
var state_22362__$1 = state_22362;
var statearr_22364_22504 = state_22362__$1;
(statearr_22364_22504[(2)] = null);

(statearr_22364_22504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (2))){
var state_22362__$1 = state_22362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22362__$1,(4),jobs);
} else {
if((state_val_22363 === (3))){
var inst_22360 = (state_22362[(2)]);
var state_22362__$1 = state_22362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22362__$1,inst_22360);
} else {
if((state_val_22363 === (4))){
var inst_22352 = (state_22362[(2)]);
var inst_22353 = async.call(null,inst_22352);
var state_22362__$1 = state_22362;
if(cljs.core.truth_(inst_22353)){
var statearr_22365_22505 = state_22362__$1;
(statearr_22365_22505[(1)] = (5));

} else {
var statearr_22366_22506 = state_22362__$1;
(statearr_22366_22506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (5))){
var state_22362__$1 = state_22362;
var statearr_22367_22507 = state_22362__$1;
(statearr_22367_22507[(2)] = null);

(statearr_22367_22507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (6))){
var state_22362__$1 = state_22362;
var statearr_22368_22508 = state_22362__$1;
(statearr_22368_22508[(2)] = null);

(statearr_22368_22508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (7))){
var inst_22358 = (state_22362[(2)]);
var state_22362__$1 = state_22362;
var statearr_22369_22509 = state_22362__$1;
(statearr_22369_22509[(2)] = inst_22358);

(statearr_22369_22509[(1)] = (3));


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
});})(__22491,c__21937__auto___22503,G__22322_22492,n__17688__auto___22490,jobs,results,process,async))
;
return ((function (__22491,switch__18798__auto__,c__21937__auto___22503,G__22322_22492,n__17688__auto___22490,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____0 = (function (){
var statearr_22373 = [null,null,null,null,null,null,null];
(statearr_22373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__);

(statearr_22373[(1)] = (1));

return statearr_22373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____1 = (function (state_22362){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_22362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e22374){if((e22374 instanceof Object)){
var ex__18802__auto__ = e22374;
var statearr_22375_22510 = state_22362;
(statearr_22375_22510[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22511 = state_22362;
state_22362 = G__22511;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__ = function(state_22362){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____1.call(this,state_22362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__;
})()
;})(__22491,switch__18798__auto__,c__21937__auto___22503,G__22322_22492,n__17688__auto___22490,jobs,results,process,async))
})();
var state__21939__auto__ = (function (){var statearr_22376 = f__21938__auto__.call(null);
(statearr_22376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto___22503);

return statearr_22376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(__22491,c__21937__auto___22503,G__22322_22492,n__17688__auto___22490,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22512 = (__22491 + (1));
__22491 = G__22512;
continue;
} else {
}
break;
}

var c__21937__auto___22513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto___22513,jobs,results,process,async){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto___22513,jobs,results,process,async){
return (function (state_22398){
var state_val_22399 = (state_22398[(1)]);
if((state_val_22399 === (1))){
var state_22398__$1 = state_22398;
var statearr_22400_22514 = state_22398__$1;
(statearr_22400_22514[(2)] = null);

(statearr_22400_22514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (2))){
var state_22398__$1 = state_22398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22398__$1,(4),from);
} else {
if((state_val_22399 === (3))){
var inst_22396 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22398__$1,inst_22396);
} else {
if((state_val_22399 === (4))){
var inst_22379 = (state_22398[(7)]);
var inst_22379__$1 = (state_22398[(2)]);
var inst_22380 = (inst_22379__$1 == null);
var state_22398__$1 = (function (){var statearr_22401 = state_22398;
(statearr_22401[(7)] = inst_22379__$1);

return statearr_22401;
})();
if(cljs.core.truth_(inst_22380)){
var statearr_22402_22515 = state_22398__$1;
(statearr_22402_22515[(1)] = (5));

} else {
var statearr_22403_22516 = state_22398__$1;
(statearr_22403_22516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (5))){
var inst_22382 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22398__$1 = state_22398;
var statearr_22404_22517 = state_22398__$1;
(statearr_22404_22517[(2)] = inst_22382);

(statearr_22404_22517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (6))){
var inst_22384 = (state_22398[(8)]);
var inst_22379 = (state_22398[(7)]);
var inst_22384__$1 = cljs.core.async.chan.call(null,(1));
var inst_22385 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22386 = [inst_22379,inst_22384__$1];
var inst_22387 = (new cljs.core.PersistentVector(null,2,(5),inst_22385,inst_22386,null));
var state_22398__$1 = (function (){var statearr_22405 = state_22398;
(statearr_22405[(8)] = inst_22384__$1);

return statearr_22405;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22398__$1,(8),jobs,inst_22387);
} else {
if((state_val_22399 === (7))){
var inst_22394 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
var statearr_22406_22518 = state_22398__$1;
(statearr_22406_22518[(2)] = inst_22394);

(statearr_22406_22518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (8))){
var inst_22384 = (state_22398[(8)]);
var inst_22389 = (state_22398[(2)]);
var state_22398__$1 = (function (){var statearr_22407 = state_22398;
(statearr_22407[(9)] = inst_22389);

return statearr_22407;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22398__$1,(9),results,inst_22384);
} else {
if((state_val_22399 === (9))){
var inst_22391 = (state_22398[(2)]);
var state_22398__$1 = (function (){var statearr_22408 = state_22398;
(statearr_22408[(10)] = inst_22391);

return statearr_22408;
})();
var statearr_22409_22519 = state_22398__$1;
(statearr_22409_22519[(2)] = null);

(statearr_22409_22519[(1)] = (2));


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
});})(c__21937__auto___22513,jobs,results,process,async))
;
return ((function (switch__18798__auto__,c__21937__auto___22513,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____0 = (function (){
var statearr_22413 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22413[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__);

(statearr_22413[(1)] = (1));

return statearr_22413;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____1 = (function (state_22398){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_22398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e22414){if((e22414 instanceof Object)){
var ex__18802__auto__ = e22414;
var statearr_22415_22520 = state_22398;
(statearr_22415_22520[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22521 = state_22398;
state_22398 = G__22521;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__ = function(state_22398){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____1.call(this,state_22398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto___22513,jobs,results,process,async))
})();
var state__21939__auto__ = (function (){var statearr_22416 = f__21938__auto__.call(null);
(statearr_22416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto___22513);

return statearr_22416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto___22513,jobs,results,process,async))
);


var c__21937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto__,jobs,results,process,async){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto__,jobs,results,process,async){
return (function (state_22454){
var state_val_22455 = (state_22454[(1)]);
if((state_val_22455 === (7))){
var inst_22450 = (state_22454[(2)]);
var state_22454__$1 = state_22454;
var statearr_22456_22522 = state_22454__$1;
(statearr_22456_22522[(2)] = inst_22450);

(statearr_22456_22522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22455 === (20))){
var state_22454__$1 = state_22454;
var statearr_22457_22523 = state_22454__$1;
(statearr_22457_22523[(2)] = null);

(statearr_22457_22523[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22455 === (1))){
var state_22454__$1 = state_22454;
var statearr_22458_22524 = state_22454__$1;
(statearr_22458_22524[(2)] = null);

(statearr_22458_22524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22455 === (4))){
var inst_22419 = (state_22454[(7)]);
var inst_22419__$1 = (state_22454[(2)]);
var inst_22420 = (inst_22419__$1 == null);
var state_22454__$1 = (function (){var statearr_22459 = state_22454;
(statearr_22459[(7)] = inst_22419__$1);

return statearr_22459;
})();
if(cljs.core.truth_(inst_22420)){
var statearr_22460_22525 = state_22454__$1;
(statearr_22460_22525[(1)] = (5));

} else {
var statearr_22461_22526 = state_22454__$1;
(statearr_22461_22526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22455 === (15))){
var inst_22432 = (state_22454[(8)]);
var state_22454__$1 = state_22454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22454__$1,(18),to,inst_22432);
} else {
if((state_val_22455 === (21))){
var inst_22445 = (state_22454[(2)]);
var state_22454__$1 = state_22454;
var statearr_22462_22527 = state_22454__$1;
(statearr_22462_22527[(2)] = inst_22445);

(statearr_22462_22527[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22455 === (13))){
var inst_22447 = (state_22454[(2)]);
var state_22454__$1 = (function (){var statearr_22463 = state_22454;
(statearr_22463[(9)] = inst_22447);

return statearr_22463;
})();
var statearr_22464_22528 = state_22454__$1;
(statearr_22464_22528[(2)] = null);

(statearr_22464_22528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22455 === (6))){
var inst_22419 = (state_22454[(7)]);
var state_22454__$1 = state_22454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22454__$1,(11),inst_22419);
} else {
if((state_val_22455 === (17))){
var inst_22440 = (state_22454[(2)]);
var state_22454__$1 = state_22454;
if(cljs.core.truth_(inst_22440)){
var statearr_22465_22529 = state_22454__$1;
(statearr_22465_22529[(1)] = (19));

} else {
var statearr_22466_22530 = state_22454__$1;
(statearr_22466_22530[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22455 === (3))){
var inst_22452 = (state_22454[(2)]);
var state_22454__$1 = state_22454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22454__$1,inst_22452);
} else {
if((state_val_22455 === (12))){
var inst_22429 = (state_22454[(10)]);
var state_22454__$1 = state_22454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22454__$1,(14),inst_22429);
} else {
if((state_val_22455 === (2))){
var state_22454__$1 = state_22454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22454__$1,(4),results);
} else {
if((state_val_22455 === (19))){
var state_22454__$1 = state_22454;
var statearr_22467_22531 = state_22454__$1;
(statearr_22467_22531[(2)] = null);

(statearr_22467_22531[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22455 === (11))){
var inst_22429 = (state_22454[(2)]);
var state_22454__$1 = (function (){var statearr_22468 = state_22454;
(statearr_22468[(10)] = inst_22429);

return statearr_22468;
})();
var statearr_22469_22532 = state_22454__$1;
(statearr_22469_22532[(2)] = null);

(statearr_22469_22532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22455 === (9))){
var state_22454__$1 = state_22454;
var statearr_22470_22533 = state_22454__$1;
(statearr_22470_22533[(2)] = null);

(statearr_22470_22533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22455 === (5))){
var state_22454__$1 = state_22454;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22471_22534 = state_22454__$1;
(statearr_22471_22534[(1)] = (8));

} else {
var statearr_22472_22535 = state_22454__$1;
(statearr_22472_22535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22455 === (14))){
var inst_22434 = (state_22454[(11)]);
var inst_22432 = (state_22454[(8)]);
var inst_22432__$1 = (state_22454[(2)]);
var inst_22433 = (inst_22432__$1 == null);
var inst_22434__$1 = cljs.core.not.call(null,inst_22433);
var state_22454__$1 = (function (){var statearr_22473 = state_22454;
(statearr_22473[(11)] = inst_22434__$1);

(statearr_22473[(8)] = inst_22432__$1);

return statearr_22473;
})();
if(inst_22434__$1){
var statearr_22474_22536 = state_22454__$1;
(statearr_22474_22536[(1)] = (15));

} else {
var statearr_22475_22537 = state_22454__$1;
(statearr_22475_22537[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22455 === (16))){
var inst_22434 = (state_22454[(11)]);
var state_22454__$1 = state_22454;
var statearr_22476_22538 = state_22454__$1;
(statearr_22476_22538[(2)] = inst_22434);

(statearr_22476_22538[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22455 === (10))){
var inst_22426 = (state_22454[(2)]);
var state_22454__$1 = state_22454;
var statearr_22477_22539 = state_22454__$1;
(statearr_22477_22539[(2)] = inst_22426);

(statearr_22477_22539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22455 === (18))){
var inst_22437 = (state_22454[(2)]);
var state_22454__$1 = state_22454;
var statearr_22478_22540 = state_22454__$1;
(statearr_22478_22540[(2)] = inst_22437);

(statearr_22478_22540[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22455 === (8))){
var inst_22423 = cljs.core.async.close_BANG_.call(null,to);
var state_22454__$1 = state_22454;
var statearr_22479_22541 = state_22454__$1;
(statearr_22479_22541[(2)] = inst_22423);

(statearr_22479_22541[(1)] = (10));


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
});})(c__21937__auto__,jobs,results,process,async))
;
return ((function (switch__18798__auto__,c__21937__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____0 = (function (){
var statearr_22483 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22483[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__);

(statearr_22483[(1)] = (1));

return statearr_22483;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____1 = (function (state_22454){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_22454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e22484){if((e22484 instanceof Object)){
var ex__18802__auto__ = e22484;
var statearr_22485_22542 = state_22454;
(statearr_22485_22542[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22543 = state_22454;
state_22454 = G__22543;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__ = function(state_22454){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____1.call(this,state_22454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18799__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto__,jobs,results,process,async))
})();
var state__21939__auto__ = (function (){var statearr_22486 = f__21938__auto__.call(null);
(statearr_22486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto__);

return statearr_22486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto__,jobs,results,process,async))
);

return c__21937__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args22544 = [];
var len__17843__auto___22547 = arguments.length;
var i__17844__auto___22548 = (0);
while(true){
if((i__17844__auto___22548 < len__17843__auto___22547)){
args22544.push((arguments[i__17844__auto___22548]));

var G__22549 = (i__17844__auto___22548 + (1));
i__17844__auto___22548 = G__22549;
continue;
} else {
}
break;
}

var G__22546 = args22544.length;
switch (G__22546) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22544.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args22551 = [];
var len__17843__auto___22554 = arguments.length;
var i__17844__auto___22555 = (0);
while(true){
if((i__17844__auto___22555 < len__17843__auto___22554)){
args22551.push((arguments[i__17844__auto___22555]));

var G__22556 = (i__17844__auto___22555 + (1));
i__17844__auto___22555 = G__22556;
continue;
} else {
}
break;
}

var G__22553 = args22551.length;
switch (G__22553) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22551.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args22558 = [];
var len__17843__auto___22611 = arguments.length;
var i__17844__auto___22612 = (0);
while(true){
if((i__17844__auto___22612 < len__17843__auto___22611)){
args22558.push((arguments[i__17844__auto___22612]));

var G__22613 = (i__17844__auto___22612 + (1));
i__17844__auto___22612 = G__22613;
continue;
} else {
}
break;
}

var G__22560 = args22558.length;
switch (G__22560) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22558.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21937__auto___22615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto___22615,tc,fc){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto___22615,tc,fc){
return (function (state_22586){
var state_val_22587 = (state_22586[(1)]);
if((state_val_22587 === (7))){
var inst_22582 = (state_22586[(2)]);
var state_22586__$1 = state_22586;
var statearr_22588_22616 = state_22586__$1;
(statearr_22588_22616[(2)] = inst_22582);

(statearr_22588_22616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22587 === (1))){
var state_22586__$1 = state_22586;
var statearr_22589_22617 = state_22586__$1;
(statearr_22589_22617[(2)] = null);

(statearr_22589_22617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22587 === (4))){
var inst_22563 = (state_22586[(7)]);
var inst_22563__$1 = (state_22586[(2)]);
var inst_22564 = (inst_22563__$1 == null);
var state_22586__$1 = (function (){var statearr_22590 = state_22586;
(statearr_22590[(7)] = inst_22563__$1);

return statearr_22590;
})();
if(cljs.core.truth_(inst_22564)){
var statearr_22591_22618 = state_22586__$1;
(statearr_22591_22618[(1)] = (5));

} else {
var statearr_22592_22619 = state_22586__$1;
(statearr_22592_22619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22587 === (13))){
var state_22586__$1 = state_22586;
var statearr_22593_22620 = state_22586__$1;
(statearr_22593_22620[(2)] = null);

(statearr_22593_22620[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22587 === (6))){
var inst_22563 = (state_22586[(7)]);
var inst_22569 = p.call(null,inst_22563);
var state_22586__$1 = state_22586;
if(cljs.core.truth_(inst_22569)){
var statearr_22594_22621 = state_22586__$1;
(statearr_22594_22621[(1)] = (9));

} else {
var statearr_22595_22622 = state_22586__$1;
(statearr_22595_22622[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22587 === (3))){
var inst_22584 = (state_22586[(2)]);
var state_22586__$1 = state_22586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22586__$1,inst_22584);
} else {
if((state_val_22587 === (12))){
var state_22586__$1 = state_22586;
var statearr_22596_22623 = state_22586__$1;
(statearr_22596_22623[(2)] = null);

(statearr_22596_22623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22587 === (2))){
var state_22586__$1 = state_22586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22586__$1,(4),ch);
} else {
if((state_val_22587 === (11))){
var inst_22563 = (state_22586[(7)]);
var inst_22573 = (state_22586[(2)]);
var state_22586__$1 = state_22586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22586__$1,(8),inst_22573,inst_22563);
} else {
if((state_val_22587 === (9))){
var state_22586__$1 = state_22586;
var statearr_22597_22624 = state_22586__$1;
(statearr_22597_22624[(2)] = tc);

(statearr_22597_22624[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22587 === (5))){
var inst_22566 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22567 = cljs.core.async.close_BANG_.call(null,fc);
var state_22586__$1 = (function (){var statearr_22598 = state_22586;
(statearr_22598[(8)] = inst_22566);

return statearr_22598;
})();
var statearr_22599_22625 = state_22586__$1;
(statearr_22599_22625[(2)] = inst_22567);

(statearr_22599_22625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22587 === (14))){
var inst_22580 = (state_22586[(2)]);
var state_22586__$1 = state_22586;
var statearr_22600_22626 = state_22586__$1;
(statearr_22600_22626[(2)] = inst_22580);

(statearr_22600_22626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22587 === (10))){
var state_22586__$1 = state_22586;
var statearr_22601_22627 = state_22586__$1;
(statearr_22601_22627[(2)] = fc);

(statearr_22601_22627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22587 === (8))){
var inst_22575 = (state_22586[(2)]);
var state_22586__$1 = state_22586;
if(cljs.core.truth_(inst_22575)){
var statearr_22602_22628 = state_22586__$1;
(statearr_22602_22628[(1)] = (12));

} else {
var statearr_22603_22629 = state_22586__$1;
(statearr_22603_22629[(1)] = (13));

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
});})(c__21937__auto___22615,tc,fc))
;
return ((function (switch__18798__auto__,c__21937__auto___22615,tc,fc){
return (function() {
var cljs$core$async$state_machine__18799__auto__ = null;
var cljs$core$async$state_machine__18799__auto____0 = (function (){
var statearr_22607 = [null,null,null,null,null,null,null,null,null];
(statearr_22607[(0)] = cljs$core$async$state_machine__18799__auto__);

(statearr_22607[(1)] = (1));

return statearr_22607;
});
var cljs$core$async$state_machine__18799__auto____1 = (function (state_22586){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_22586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e22608){if((e22608 instanceof Object)){
var ex__18802__auto__ = e22608;
var statearr_22609_22630 = state_22586;
(statearr_22609_22630[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22631 = state_22586;
state_22586 = G__22631;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
cljs$core$async$state_machine__18799__auto__ = function(state_22586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18799__auto____1.call(this,state_22586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18799__auto____0;
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18799__auto____1;
return cljs$core$async$state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto___22615,tc,fc))
})();
var state__21939__auto__ = (function (){var statearr_22610 = f__21938__auto__.call(null);
(statearr_22610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto___22615);

return statearr_22610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto___22615,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto__){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto__){
return (function (state_22695){
var state_val_22696 = (state_22695[(1)]);
if((state_val_22696 === (7))){
var inst_22691 = (state_22695[(2)]);
var state_22695__$1 = state_22695;
var statearr_22697_22718 = state_22695__$1;
(statearr_22697_22718[(2)] = inst_22691);

(statearr_22697_22718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22696 === (1))){
var inst_22675 = init;
var state_22695__$1 = (function (){var statearr_22698 = state_22695;
(statearr_22698[(7)] = inst_22675);

return statearr_22698;
})();
var statearr_22699_22719 = state_22695__$1;
(statearr_22699_22719[(2)] = null);

(statearr_22699_22719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22696 === (4))){
var inst_22678 = (state_22695[(8)]);
var inst_22678__$1 = (state_22695[(2)]);
var inst_22679 = (inst_22678__$1 == null);
var state_22695__$1 = (function (){var statearr_22700 = state_22695;
(statearr_22700[(8)] = inst_22678__$1);

return statearr_22700;
})();
if(cljs.core.truth_(inst_22679)){
var statearr_22701_22720 = state_22695__$1;
(statearr_22701_22720[(1)] = (5));

} else {
var statearr_22702_22721 = state_22695__$1;
(statearr_22702_22721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22696 === (6))){
var inst_22678 = (state_22695[(8)]);
var inst_22682 = (state_22695[(9)]);
var inst_22675 = (state_22695[(7)]);
var inst_22682__$1 = f.call(null,inst_22675,inst_22678);
var inst_22683 = cljs.core.reduced_QMARK_.call(null,inst_22682__$1);
var state_22695__$1 = (function (){var statearr_22703 = state_22695;
(statearr_22703[(9)] = inst_22682__$1);

return statearr_22703;
})();
if(inst_22683){
var statearr_22704_22722 = state_22695__$1;
(statearr_22704_22722[(1)] = (8));

} else {
var statearr_22705_22723 = state_22695__$1;
(statearr_22705_22723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22696 === (3))){
var inst_22693 = (state_22695[(2)]);
var state_22695__$1 = state_22695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22695__$1,inst_22693);
} else {
if((state_val_22696 === (2))){
var state_22695__$1 = state_22695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22695__$1,(4),ch);
} else {
if((state_val_22696 === (9))){
var inst_22682 = (state_22695[(9)]);
var inst_22675 = inst_22682;
var state_22695__$1 = (function (){var statearr_22706 = state_22695;
(statearr_22706[(7)] = inst_22675);

return statearr_22706;
})();
var statearr_22707_22724 = state_22695__$1;
(statearr_22707_22724[(2)] = null);

(statearr_22707_22724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22696 === (5))){
var inst_22675 = (state_22695[(7)]);
var state_22695__$1 = state_22695;
var statearr_22708_22725 = state_22695__$1;
(statearr_22708_22725[(2)] = inst_22675);

(statearr_22708_22725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22696 === (10))){
var inst_22689 = (state_22695[(2)]);
var state_22695__$1 = state_22695;
var statearr_22709_22726 = state_22695__$1;
(statearr_22709_22726[(2)] = inst_22689);

(statearr_22709_22726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22696 === (8))){
var inst_22682 = (state_22695[(9)]);
var inst_22685 = cljs.core.deref.call(null,inst_22682);
var state_22695__$1 = state_22695;
var statearr_22710_22727 = state_22695__$1;
(statearr_22710_22727[(2)] = inst_22685);

(statearr_22710_22727[(1)] = (10));


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
});})(c__21937__auto__))
;
return ((function (switch__18798__auto__,c__21937__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18799__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18799__auto____0 = (function (){
var statearr_22714 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22714[(0)] = cljs$core$async$reduce_$_state_machine__18799__auto__);

(statearr_22714[(1)] = (1));

return statearr_22714;
});
var cljs$core$async$reduce_$_state_machine__18799__auto____1 = (function (state_22695){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_22695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e22715){if((e22715 instanceof Object)){
var ex__18802__auto__ = e22715;
var statearr_22716_22728 = state_22695;
(statearr_22716_22728[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22729 = state_22695;
state_22695 = G__22729;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18799__auto__ = function(state_22695){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18799__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18799__auto____1.call(this,state_22695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18799__auto____0;
cljs$core$async$reduce_$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18799__auto____1;
return cljs$core$async$reduce_$_state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto__))
})();
var state__21939__auto__ = (function (){var statearr_22717 = f__21938__auto__.call(null);
(statearr_22717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto__);

return statearr_22717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto__))
);

return c__21937__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args22730 = [];
var len__17843__auto___22782 = arguments.length;
var i__17844__auto___22783 = (0);
while(true){
if((i__17844__auto___22783 < len__17843__auto___22782)){
args22730.push((arguments[i__17844__auto___22783]));

var G__22784 = (i__17844__auto___22783 + (1));
i__17844__auto___22783 = G__22784;
continue;
} else {
}
break;
}

var G__22732 = args22730.length;
switch (G__22732) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22730.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto__){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto__){
return (function (state_22757){
var state_val_22758 = (state_22757[(1)]);
if((state_val_22758 === (7))){
var inst_22739 = (state_22757[(2)]);
var state_22757__$1 = state_22757;
var statearr_22759_22786 = state_22757__$1;
(statearr_22759_22786[(2)] = inst_22739);

(statearr_22759_22786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22758 === (1))){
var inst_22733 = cljs.core.seq.call(null,coll);
var inst_22734 = inst_22733;
var state_22757__$1 = (function (){var statearr_22760 = state_22757;
(statearr_22760[(7)] = inst_22734);

return statearr_22760;
})();
var statearr_22761_22787 = state_22757__$1;
(statearr_22761_22787[(2)] = null);

(statearr_22761_22787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22758 === (4))){
var inst_22734 = (state_22757[(7)]);
var inst_22737 = cljs.core.first.call(null,inst_22734);
var state_22757__$1 = state_22757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22757__$1,(7),ch,inst_22737);
} else {
if((state_val_22758 === (13))){
var inst_22751 = (state_22757[(2)]);
var state_22757__$1 = state_22757;
var statearr_22762_22788 = state_22757__$1;
(statearr_22762_22788[(2)] = inst_22751);

(statearr_22762_22788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22758 === (6))){
var inst_22742 = (state_22757[(2)]);
var state_22757__$1 = state_22757;
if(cljs.core.truth_(inst_22742)){
var statearr_22763_22789 = state_22757__$1;
(statearr_22763_22789[(1)] = (8));

} else {
var statearr_22764_22790 = state_22757__$1;
(statearr_22764_22790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22758 === (3))){
var inst_22755 = (state_22757[(2)]);
var state_22757__$1 = state_22757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22757__$1,inst_22755);
} else {
if((state_val_22758 === (12))){
var state_22757__$1 = state_22757;
var statearr_22765_22791 = state_22757__$1;
(statearr_22765_22791[(2)] = null);

(statearr_22765_22791[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22758 === (2))){
var inst_22734 = (state_22757[(7)]);
var state_22757__$1 = state_22757;
if(cljs.core.truth_(inst_22734)){
var statearr_22766_22792 = state_22757__$1;
(statearr_22766_22792[(1)] = (4));

} else {
var statearr_22767_22793 = state_22757__$1;
(statearr_22767_22793[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22758 === (11))){
var inst_22748 = cljs.core.async.close_BANG_.call(null,ch);
var state_22757__$1 = state_22757;
var statearr_22768_22794 = state_22757__$1;
(statearr_22768_22794[(2)] = inst_22748);

(statearr_22768_22794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22758 === (9))){
var state_22757__$1 = state_22757;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22769_22795 = state_22757__$1;
(statearr_22769_22795[(1)] = (11));

} else {
var statearr_22770_22796 = state_22757__$1;
(statearr_22770_22796[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22758 === (5))){
var inst_22734 = (state_22757[(7)]);
var state_22757__$1 = state_22757;
var statearr_22771_22797 = state_22757__$1;
(statearr_22771_22797[(2)] = inst_22734);

(statearr_22771_22797[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22758 === (10))){
var inst_22753 = (state_22757[(2)]);
var state_22757__$1 = state_22757;
var statearr_22772_22798 = state_22757__$1;
(statearr_22772_22798[(2)] = inst_22753);

(statearr_22772_22798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22758 === (8))){
var inst_22734 = (state_22757[(7)]);
var inst_22744 = cljs.core.next.call(null,inst_22734);
var inst_22734__$1 = inst_22744;
var state_22757__$1 = (function (){var statearr_22773 = state_22757;
(statearr_22773[(7)] = inst_22734__$1);

return statearr_22773;
})();
var statearr_22774_22799 = state_22757__$1;
(statearr_22774_22799[(2)] = null);

(statearr_22774_22799[(1)] = (2));


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
});})(c__21937__auto__))
;
return ((function (switch__18798__auto__,c__21937__auto__){
return (function() {
var cljs$core$async$state_machine__18799__auto__ = null;
var cljs$core$async$state_machine__18799__auto____0 = (function (){
var statearr_22778 = [null,null,null,null,null,null,null,null];
(statearr_22778[(0)] = cljs$core$async$state_machine__18799__auto__);

(statearr_22778[(1)] = (1));

return statearr_22778;
});
var cljs$core$async$state_machine__18799__auto____1 = (function (state_22757){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_22757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e22779){if((e22779 instanceof Object)){
var ex__18802__auto__ = e22779;
var statearr_22780_22800 = state_22757;
(statearr_22780_22800[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22801 = state_22757;
state_22757 = G__22801;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
cljs$core$async$state_machine__18799__auto__ = function(state_22757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18799__auto____1.call(this,state_22757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18799__auto____0;
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18799__auto____1;
return cljs$core$async$state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto__))
})();
var state__21939__auto__ = (function (){var statearr_22781 = f__21938__auto__.call(null);
(statearr_22781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto__);

return statearr_22781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto__))
);

return c__21937__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17440__auto__ = (((_ == null))?null:_);
var m__17441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,_);
} else {
var m__17441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m);
} else {
var m__17441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23023 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23023 = (function (mult,ch,cs,meta23024){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23024 = meta23024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23025,meta23024__$1){
var self__ = this;
var _23025__$1 = this;
return (new cljs.core.async.t_cljs$core$async23023(self__.mult,self__.ch,self__.cs,meta23024__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23025){
var self__ = this;
var _23025__$1 = this;
return self__.meta23024;
});})(cs))
;

cljs.core.async.t_cljs$core$async23023.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23023.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23023.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23023.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23023.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23023.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23023.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23024","meta23024",-1652507278,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23023.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23023";

cljs.core.async.t_cljs$core$async23023.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23023");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23023 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23023(mult__$1,ch__$1,cs__$1,meta23024){
return (new cljs.core.async.t_cljs$core$async23023(mult__$1,ch__$1,cs__$1,meta23024));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23023(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21937__auto___23244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto___23244,cs,m,dchan,dctr,done){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto___23244,cs,m,dchan,dctr,done){
return (function (state_23156){
var state_val_23157 = (state_23156[(1)]);
if((state_val_23157 === (7))){
var inst_23152 = (state_23156[(2)]);
var state_23156__$1 = state_23156;
var statearr_23158_23245 = state_23156__$1;
(statearr_23158_23245[(2)] = inst_23152);

(statearr_23158_23245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (20))){
var inst_23057 = (state_23156[(7)]);
var inst_23067 = cljs.core.first.call(null,inst_23057);
var inst_23068 = cljs.core.nth.call(null,inst_23067,(0),null);
var inst_23069 = cljs.core.nth.call(null,inst_23067,(1),null);
var state_23156__$1 = (function (){var statearr_23159 = state_23156;
(statearr_23159[(8)] = inst_23068);

return statearr_23159;
})();
if(cljs.core.truth_(inst_23069)){
var statearr_23160_23246 = state_23156__$1;
(statearr_23160_23246[(1)] = (22));

} else {
var statearr_23161_23247 = state_23156__$1;
(statearr_23161_23247[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (27))){
var inst_23099 = (state_23156[(9)]);
var inst_23104 = (state_23156[(10)]);
var inst_23097 = (state_23156[(11)]);
var inst_23028 = (state_23156[(12)]);
var inst_23104__$1 = cljs.core._nth.call(null,inst_23097,inst_23099);
var inst_23105 = cljs.core.async.put_BANG_.call(null,inst_23104__$1,inst_23028,done);
var state_23156__$1 = (function (){var statearr_23162 = state_23156;
(statearr_23162[(10)] = inst_23104__$1);

return statearr_23162;
})();
if(cljs.core.truth_(inst_23105)){
var statearr_23163_23248 = state_23156__$1;
(statearr_23163_23248[(1)] = (30));

} else {
var statearr_23164_23249 = state_23156__$1;
(statearr_23164_23249[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (1))){
var state_23156__$1 = state_23156;
var statearr_23165_23250 = state_23156__$1;
(statearr_23165_23250[(2)] = null);

(statearr_23165_23250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (24))){
var inst_23057 = (state_23156[(7)]);
var inst_23074 = (state_23156[(2)]);
var inst_23075 = cljs.core.next.call(null,inst_23057);
var inst_23037 = inst_23075;
var inst_23038 = null;
var inst_23039 = (0);
var inst_23040 = (0);
var state_23156__$1 = (function (){var statearr_23166 = state_23156;
(statearr_23166[(13)] = inst_23040);

(statearr_23166[(14)] = inst_23038);

(statearr_23166[(15)] = inst_23037);

(statearr_23166[(16)] = inst_23074);

(statearr_23166[(17)] = inst_23039);

return statearr_23166;
})();
var statearr_23167_23251 = state_23156__$1;
(statearr_23167_23251[(2)] = null);

(statearr_23167_23251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (39))){
var state_23156__$1 = state_23156;
var statearr_23171_23252 = state_23156__$1;
(statearr_23171_23252[(2)] = null);

(statearr_23171_23252[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (4))){
var inst_23028 = (state_23156[(12)]);
var inst_23028__$1 = (state_23156[(2)]);
var inst_23029 = (inst_23028__$1 == null);
var state_23156__$1 = (function (){var statearr_23172 = state_23156;
(statearr_23172[(12)] = inst_23028__$1);

return statearr_23172;
})();
if(cljs.core.truth_(inst_23029)){
var statearr_23173_23253 = state_23156__$1;
(statearr_23173_23253[(1)] = (5));

} else {
var statearr_23174_23254 = state_23156__$1;
(statearr_23174_23254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (15))){
var inst_23040 = (state_23156[(13)]);
var inst_23038 = (state_23156[(14)]);
var inst_23037 = (state_23156[(15)]);
var inst_23039 = (state_23156[(17)]);
var inst_23053 = (state_23156[(2)]);
var inst_23054 = (inst_23040 + (1));
var tmp23168 = inst_23038;
var tmp23169 = inst_23037;
var tmp23170 = inst_23039;
var inst_23037__$1 = tmp23169;
var inst_23038__$1 = tmp23168;
var inst_23039__$1 = tmp23170;
var inst_23040__$1 = inst_23054;
var state_23156__$1 = (function (){var statearr_23175 = state_23156;
(statearr_23175[(13)] = inst_23040__$1);

(statearr_23175[(18)] = inst_23053);

(statearr_23175[(14)] = inst_23038__$1);

(statearr_23175[(15)] = inst_23037__$1);

(statearr_23175[(17)] = inst_23039__$1);

return statearr_23175;
})();
var statearr_23176_23255 = state_23156__$1;
(statearr_23176_23255[(2)] = null);

(statearr_23176_23255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (21))){
var inst_23078 = (state_23156[(2)]);
var state_23156__$1 = state_23156;
var statearr_23180_23256 = state_23156__$1;
(statearr_23180_23256[(2)] = inst_23078);

(statearr_23180_23256[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (31))){
var inst_23104 = (state_23156[(10)]);
var inst_23108 = done.call(null,null);
var inst_23109 = cljs.core.async.untap_STAR_.call(null,m,inst_23104);
var state_23156__$1 = (function (){var statearr_23181 = state_23156;
(statearr_23181[(19)] = inst_23108);

return statearr_23181;
})();
var statearr_23182_23257 = state_23156__$1;
(statearr_23182_23257[(2)] = inst_23109);

(statearr_23182_23257[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (32))){
var inst_23099 = (state_23156[(9)]);
var inst_23096 = (state_23156[(20)]);
var inst_23097 = (state_23156[(11)]);
var inst_23098 = (state_23156[(21)]);
var inst_23111 = (state_23156[(2)]);
var inst_23112 = (inst_23099 + (1));
var tmp23177 = inst_23096;
var tmp23178 = inst_23097;
var tmp23179 = inst_23098;
var inst_23096__$1 = tmp23177;
var inst_23097__$1 = tmp23178;
var inst_23098__$1 = tmp23179;
var inst_23099__$1 = inst_23112;
var state_23156__$1 = (function (){var statearr_23183 = state_23156;
(statearr_23183[(9)] = inst_23099__$1);

(statearr_23183[(20)] = inst_23096__$1);

(statearr_23183[(22)] = inst_23111);

(statearr_23183[(11)] = inst_23097__$1);

(statearr_23183[(21)] = inst_23098__$1);

return statearr_23183;
})();
var statearr_23184_23258 = state_23156__$1;
(statearr_23184_23258[(2)] = null);

(statearr_23184_23258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (40))){
var inst_23124 = (state_23156[(23)]);
var inst_23128 = done.call(null,null);
var inst_23129 = cljs.core.async.untap_STAR_.call(null,m,inst_23124);
var state_23156__$1 = (function (){var statearr_23185 = state_23156;
(statearr_23185[(24)] = inst_23128);

return statearr_23185;
})();
var statearr_23186_23259 = state_23156__$1;
(statearr_23186_23259[(2)] = inst_23129);

(statearr_23186_23259[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (33))){
var inst_23115 = (state_23156[(25)]);
var inst_23117 = cljs.core.chunked_seq_QMARK_.call(null,inst_23115);
var state_23156__$1 = state_23156;
if(inst_23117){
var statearr_23187_23260 = state_23156__$1;
(statearr_23187_23260[(1)] = (36));

} else {
var statearr_23188_23261 = state_23156__$1;
(statearr_23188_23261[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (13))){
var inst_23047 = (state_23156[(26)]);
var inst_23050 = cljs.core.async.close_BANG_.call(null,inst_23047);
var state_23156__$1 = state_23156;
var statearr_23189_23262 = state_23156__$1;
(statearr_23189_23262[(2)] = inst_23050);

(statearr_23189_23262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (22))){
var inst_23068 = (state_23156[(8)]);
var inst_23071 = cljs.core.async.close_BANG_.call(null,inst_23068);
var state_23156__$1 = state_23156;
var statearr_23190_23263 = state_23156__$1;
(statearr_23190_23263[(2)] = inst_23071);

(statearr_23190_23263[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (36))){
var inst_23115 = (state_23156[(25)]);
var inst_23119 = cljs.core.chunk_first.call(null,inst_23115);
var inst_23120 = cljs.core.chunk_rest.call(null,inst_23115);
var inst_23121 = cljs.core.count.call(null,inst_23119);
var inst_23096 = inst_23120;
var inst_23097 = inst_23119;
var inst_23098 = inst_23121;
var inst_23099 = (0);
var state_23156__$1 = (function (){var statearr_23191 = state_23156;
(statearr_23191[(9)] = inst_23099);

(statearr_23191[(20)] = inst_23096);

(statearr_23191[(11)] = inst_23097);

(statearr_23191[(21)] = inst_23098);

return statearr_23191;
})();
var statearr_23192_23264 = state_23156__$1;
(statearr_23192_23264[(2)] = null);

(statearr_23192_23264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (41))){
var inst_23115 = (state_23156[(25)]);
var inst_23131 = (state_23156[(2)]);
var inst_23132 = cljs.core.next.call(null,inst_23115);
var inst_23096 = inst_23132;
var inst_23097 = null;
var inst_23098 = (0);
var inst_23099 = (0);
var state_23156__$1 = (function (){var statearr_23193 = state_23156;
(statearr_23193[(9)] = inst_23099);

(statearr_23193[(20)] = inst_23096);

(statearr_23193[(11)] = inst_23097);

(statearr_23193[(21)] = inst_23098);

(statearr_23193[(27)] = inst_23131);

return statearr_23193;
})();
var statearr_23194_23265 = state_23156__$1;
(statearr_23194_23265[(2)] = null);

(statearr_23194_23265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (43))){
var state_23156__$1 = state_23156;
var statearr_23195_23266 = state_23156__$1;
(statearr_23195_23266[(2)] = null);

(statearr_23195_23266[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (29))){
var inst_23140 = (state_23156[(2)]);
var state_23156__$1 = state_23156;
var statearr_23196_23267 = state_23156__$1;
(statearr_23196_23267[(2)] = inst_23140);

(statearr_23196_23267[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (44))){
var inst_23149 = (state_23156[(2)]);
var state_23156__$1 = (function (){var statearr_23197 = state_23156;
(statearr_23197[(28)] = inst_23149);

return statearr_23197;
})();
var statearr_23198_23268 = state_23156__$1;
(statearr_23198_23268[(2)] = null);

(statearr_23198_23268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (6))){
var inst_23088 = (state_23156[(29)]);
var inst_23087 = cljs.core.deref.call(null,cs);
var inst_23088__$1 = cljs.core.keys.call(null,inst_23087);
var inst_23089 = cljs.core.count.call(null,inst_23088__$1);
var inst_23090 = cljs.core.reset_BANG_.call(null,dctr,inst_23089);
var inst_23095 = cljs.core.seq.call(null,inst_23088__$1);
var inst_23096 = inst_23095;
var inst_23097 = null;
var inst_23098 = (0);
var inst_23099 = (0);
var state_23156__$1 = (function (){var statearr_23199 = state_23156;
(statearr_23199[(9)] = inst_23099);

(statearr_23199[(20)] = inst_23096);

(statearr_23199[(11)] = inst_23097);

(statearr_23199[(21)] = inst_23098);

(statearr_23199[(30)] = inst_23090);

(statearr_23199[(29)] = inst_23088__$1);

return statearr_23199;
})();
var statearr_23200_23269 = state_23156__$1;
(statearr_23200_23269[(2)] = null);

(statearr_23200_23269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (28))){
var inst_23096 = (state_23156[(20)]);
var inst_23115 = (state_23156[(25)]);
var inst_23115__$1 = cljs.core.seq.call(null,inst_23096);
var state_23156__$1 = (function (){var statearr_23201 = state_23156;
(statearr_23201[(25)] = inst_23115__$1);

return statearr_23201;
})();
if(inst_23115__$1){
var statearr_23202_23270 = state_23156__$1;
(statearr_23202_23270[(1)] = (33));

} else {
var statearr_23203_23271 = state_23156__$1;
(statearr_23203_23271[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (25))){
var inst_23099 = (state_23156[(9)]);
var inst_23098 = (state_23156[(21)]);
var inst_23101 = (inst_23099 < inst_23098);
var inst_23102 = inst_23101;
var state_23156__$1 = state_23156;
if(cljs.core.truth_(inst_23102)){
var statearr_23204_23272 = state_23156__$1;
(statearr_23204_23272[(1)] = (27));

} else {
var statearr_23205_23273 = state_23156__$1;
(statearr_23205_23273[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (34))){
var state_23156__$1 = state_23156;
var statearr_23206_23274 = state_23156__$1;
(statearr_23206_23274[(2)] = null);

(statearr_23206_23274[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (17))){
var state_23156__$1 = state_23156;
var statearr_23207_23275 = state_23156__$1;
(statearr_23207_23275[(2)] = null);

(statearr_23207_23275[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (3))){
var inst_23154 = (state_23156[(2)]);
var state_23156__$1 = state_23156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23156__$1,inst_23154);
} else {
if((state_val_23157 === (12))){
var inst_23083 = (state_23156[(2)]);
var state_23156__$1 = state_23156;
var statearr_23208_23276 = state_23156__$1;
(statearr_23208_23276[(2)] = inst_23083);

(statearr_23208_23276[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (2))){
var state_23156__$1 = state_23156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23156__$1,(4),ch);
} else {
if((state_val_23157 === (23))){
var state_23156__$1 = state_23156;
var statearr_23209_23277 = state_23156__$1;
(statearr_23209_23277[(2)] = null);

(statearr_23209_23277[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (35))){
var inst_23138 = (state_23156[(2)]);
var state_23156__$1 = state_23156;
var statearr_23210_23278 = state_23156__$1;
(statearr_23210_23278[(2)] = inst_23138);

(statearr_23210_23278[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (19))){
var inst_23057 = (state_23156[(7)]);
var inst_23061 = cljs.core.chunk_first.call(null,inst_23057);
var inst_23062 = cljs.core.chunk_rest.call(null,inst_23057);
var inst_23063 = cljs.core.count.call(null,inst_23061);
var inst_23037 = inst_23062;
var inst_23038 = inst_23061;
var inst_23039 = inst_23063;
var inst_23040 = (0);
var state_23156__$1 = (function (){var statearr_23211 = state_23156;
(statearr_23211[(13)] = inst_23040);

(statearr_23211[(14)] = inst_23038);

(statearr_23211[(15)] = inst_23037);

(statearr_23211[(17)] = inst_23039);

return statearr_23211;
})();
var statearr_23212_23279 = state_23156__$1;
(statearr_23212_23279[(2)] = null);

(statearr_23212_23279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (11))){
var inst_23057 = (state_23156[(7)]);
var inst_23037 = (state_23156[(15)]);
var inst_23057__$1 = cljs.core.seq.call(null,inst_23037);
var state_23156__$1 = (function (){var statearr_23213 = state_23156;
(statearr_23213[(7)] = inst_23057__$1);

return statearr_23213;
})();
if(inst_23057__$1){
var statearr_23214_23280 = state_23156__$1;
(statearr_23214_23280[(1)] = (16));

} else {
var statearr_23215_23281 = state_23156__$1;
(statearr_23215_23281[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (9))){
var inst_23085 = (state_23156[(2)]);
var state_23156__$1 = state_23156;
var statearr_23216_23282 = state_23156__$1;
(statearr_23216_23282[(2)] = inst_23085);

(statearr_23216_23282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (5))){
var inst_23035 = cljs.core.deref.call(null,cs);
var inst_23036 = cljs.core.seq.call(null,inst_23035);
var inst_23037 = inst_23036;
var inst_23038 = null;
var inst_23039 = (0);
var inst_23040 = (0);
var state_23156__$1 = (function (){var statearr_23217 = state_23156;
(statearr_23217[(13)] = inst_23040);

(statearr_23217[(14)] = inst_23038);

(statearr_23217[(15)] = inst_23037);

(statearr_23217[(17)] = inst_23039);

return statearr_23217;
})();
var statearr_23218_23283 = state_23156__$1;
(statearr_23218_23283[(2)] = null);

(statearr_23218_23283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (14))){
var state_23156__$1 = state_23156;
var statearr_23219_23284 = state_23156__$1;
(statearr_23219_23284[(2)] = null);

(statearr_23219_23284[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (45))){
var inst_23146 = (state_23156[(2)]);
var state_23156__$1 = state_23156;
var statearr_23220_23285 = state_23156__$1;
(statearr_23220_23285[(2)] = inst_23146);

(statearr_23220_23285[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (26))){
var inst_23088 = (state_23156[(29)]);
var inst_23142 = (state_23156[(2)]);
var inst_23143 = cljs.core.seq.call(null,inst_23088);
var state_23156__$1 = (function (){var statearr_23221 = state_23156;
(statearr_23221[(31)] = inst_23142);

return statearr_23221;
})();
if(inst_23143){
var statearr_23222_23286 = state_23156__$1;
(statearr_23222_23286[(1)] = (42));

} else {
var statearr_23223_23287 = state_23156__$1;
(statearr_23223_23287[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (16))){
var inst_23057 = (state_23156[(7)]);
var inst_23059 = cljs.core.chunked_seq_QMARK_.call(null,inst_23057);
var state_23156__$1 = state_23156;
if(inst_23059){
var statearr_23224_23288 = state_23156__$1;
(statearr_23224_23288[(1)] = (19));

} else {
var statearr_23225_23289 = state_23156__$1;
(statearr_23225_23289[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (38))){
var inst_23135 = (state_23156[(2)]);
var state_23156__$1 = state_23156;
var statearr_23226_23290 = state_23156__$1;
(statearr_23226_23290[(2)] = inst_23135);

(statearr_23226_23290[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (30))){
var state_23156__$1 = state_23156;
var statearr_23227_23291 = state_23156__$1;
(statearr_23227_23291[(2)] = null);

(statearr_23227_23291[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (10))){
var inst_23040 = (state_23156[(13)]);
var inst_23038 = (state_23156[(14)]);
var inst_23046 = cljs.core._nth.call(null,inst_23038,inst_23040);
var inst_23047 = cljs.core.nth.call(null,inst_23046,(0),null);
var inst_23048 = cljs.core.nth.call(null,inst_23046,(1),null);
var state_23156__$1 = (function (){var statearr_23228 = state_23156;
(statearr_23228[(26)] = inst_23047);

return statearr_23228;
})();
if(cljs.core.truth_(inst_23048)){
var statearr_23229_23292 = state_23156__$1;
(statearr_23229_23292[(1)] = (13));

} else {
var statearr_23230_23293 = state_23156__$1;
(statearr_23230_23293[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (18))){
var inst_23081 = (state_23156[(2)]);
var state_23156__$1 = state_23156;
var statearr_23231_23294 = state_23156__$1;
(statearr_23231_23294[(2)] = inst_23081);

(statearr_23231_23294[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (42))){
var state_23156__$1 = state_23156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23156__$1,(45),dchan);
} else {
if((state_val_23157 === (37))){
var inst_23124 = (state_23156[(23)]);
var inst_23115 = (state_23156[(25)]);
var inst_23028 = (state_23156[(12)]);
var inst_23124__$1 = cljs.core.first.call(null,inst_23115);
var inst_23125 = cljs.core.async.put_BANG_.call(null,inst_23124__$1,inst_23028,done);
var state_23156__$1 = (function (){var statearr_23232 = state_23156;
(statearr_23232[(23)] = inst_23124__$1);

return statearr_23232;
})();
if(cljs.core.truth_(inst_23125)){
var statearr_23233_23295 = state_23156__$1;
(statearr_23233_23295[(1)] = (39));

} else {
var statearr_23234_23296 = state_23156__$1;
(statearr_23234_23296[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23157 === (8))){
var inst_23040 = (state_23156[(13)]);
var inst_23039 = (state_23156[(17)]);
var inst_23042 = (inst_23040 < inst_23039);
var inst_23043 = inst_23042;
var state_23156__$1 = state_23156;
if(cljs.core.truth_(inst_23043)){
var statearr_23235_23297 = state_23156__$1;
(statearr_23235_23297[(1)] = (10));

} else {
var statearr_23236_23298 = state_23156__$1;
(statearr_23236_23298[(1)] = (11));

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
});})(c__21937__auto___23244,cs,m,dchan,dctr,done))
;
return ((function (switch__18798__auto__,c__21937__auto___23244,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18799__auto__ = null;
var cljs$core$async$mult_$_state_machine__18799__auto____0 = (function (){
var statearr_23240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23240[(0)] = cljs$core$async$mult_$_state_machine__18799__auto__);

(statearr_23240[(1)] = (1));

return statearr_23240;
});
var cljs$core$async$mult_$_state_machine__18799__auto____1 = (function (state_23156){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_23156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e23241){if((e23241 instanceof Object)){
var ex__18802__auto__ = e23241;
var statearr_23242_23299 = state_23156;
(statearr_23242_23299[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23300 = state_23156;
state_23156 = G__23300;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18799__auto__ = function(state_23156){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18799__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18799__auto____1.call(this,state_23156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18799__auto____0;
cljs$core$async$mult_$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18799__auto____1;
return cljs$core$async$mult_$_state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto___23244,cs,m,dchan,dctr,done))
})();
var state__21939__auto__ = (function (){var statearr_23243 = f__21938__auto__.call(null);
(statearr_23243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto___23244);

return statearr_23243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto___23244,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23301 = [];
var len__17843__auto___23304 = arguments.length;
var i__17844__auto___23305 = (0);
while(true){
if((i__17844__auto___23305 < len__17843__auto___23304)){
args23301.push((arguments[i__17844__auto___23305]));

var G__23306 = (i__17844__auto___23305 + (1));
i__17844__auto___23305 = G__23306;
continue;
} else {
}
break;
}

var G__23303 = args23301.length;
switch (G__23303) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23301.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m);
} else {
var m__17441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,state_map);
} else {
var m__17441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,mode);
} else {
var m__17441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17850__auto__ = [];
var len__17843__auto___23318 = arguments.length;
var i__17844__auto___23319 = (0);
while(true){
if((i__17844__auto___23319 < len__17843__auto___23318)){
args__17850__auto__.push((arguments[i__17844__auto___23319]));

var G__23320 = (i__17844__auto___23319 + (1));
i__17844__auto___23319 = G__23320;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((3) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17851__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23312){
var map__23313 = p__23312;
var map__23313__$1 = ((((!((map__23313 == null)))?((((map__23313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23313):map__23313);
var opts = map__23313__$1;
var statearr_23315_23321 = state;
(statearr_23315_23321[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23313,map__23313__$1,opts){
return (function (val){
var statearr_23316_23322 = state;
(statearr_23316_23322[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23313,map__23313__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23317_23323 = state;
(statearr_23317_23323[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23308){
var G__23309 = cljs.core.first.call(null,seq23308);
var seq23308__$1 = cljs.core.next.call(null,seq23308);
var G__23310 = cljs.core.first.call(null,seq23308__$1);
var seq23308__$2 = cljs.core.next.call(null,seq23308__$1);
var G__23311 = cljs.core.first.call(null,seq23308__$2);
var seq23308__$3 = cljs.core.next.call(null,seq23308__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23309,G__23310,G__23311,seq23308__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23487 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23487 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23488){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23488 = meta23488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23489,meta23488__$1){
var self__ = this;
var _23489__$1 = this;
return (new cljs.core.async.t_cljs$core$async23487(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23488__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23487.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23489){
var self__ = this;
var _23489__$1 = this;
return self__.meta23488;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23487.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23487.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23487.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23487.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23487.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23487.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23487.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23487.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23487.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23488","meta23488",-1571518593,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23487.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23487";

cljs.core.async.t_cljs$core$async23487.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23487");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23487 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23487(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23488){
return (new cljs.core.async.t_cljs$core$async23487(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23488));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23487(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21937__auto___23650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto___23650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto___23650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23587){
var state_val_23588 = (state_23587[(1)]);
if((state_val_23588 === (7))){
var inst_23505 = (state_23587[(2)]);
var state_23587__$1 = state_23587;
var statearr_23589_23651 = state_23587__$1;
(statearr_23589_23651[(2)] = inst_23505);

(statearr_23589_23651[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (20))){
var inst_23517 = (state_23587[(7)]);
var state_23587__$1 = state_23587;
var statearr_23590_23652 = state_23587__$1;
(statearr_23590_23652[(2)] = inst_23517);

(statearr_23590_23652[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (27))){
var state_23587__$1 = state_23587;
var statearr_23591_23653 = state_23587__$1;
(statearr_23591_23653[(2)] = null);

(statearr_23591_23653[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (1))){
var inst_23493 = (state_23587[(8)]);
var inst_23493__$1 = calc_state.call(null);
var inst_23495 = (inst_23493__$1 == null);
var inst_23496 = cljs.core.not.call(null,inst_23495);
var state_23587__$1 = (function (){var statearr_23592 = state_23587;
(statearr_23592[(8)] = inst_23493__$1);

return statearr_23592;
})();
if(inst_23496){
var statearr_23593_23654 = state_23587__$1;
(statearr_23593_23654[(1)] = (2));

} else {
var statearr_23594_23655 = state_23587__$1;
(statearr_23594_23655[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (24))){
var inst_23547 = (state_23587[(9)]);
var inst_23540 = (state_23587[(10)]);
var inst_23561 = (state_23587[(11)]);
var inst_23561__$1 = inst_23540.call(null,inst_23547);
var state_23587__$1 = (function (){var statearr_23595 = state_23587;
(statearr_23595[(11)] = inst_23561__$1);

return statearr_23595;
})();
if(cljs.core.truth_(inst_23561__$1)){
var statearr_23596_23656 = state_23587__$1;
(statearr_23596_23656[(1)] = (29));

} else {
var statearr_23597_23657 = state_23587__$1;
(statearr_23597_23657[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (4))){
var inst_23508 = (state_23587[(2)]);
var state_23587__$1 = state_23587;
if(cljs.core.truth_(inst_23508)){
var statearr_23598_23658 = state_23587__$1;
(statearr_23598_23658[(1)] = (8));

} else {
var statearr_23599_23659 = state_23587__$1;
(statearr_23599_23659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (15))){
var inst_23534 = (state_23587[(2)]);
var state_23587__$1 = state_23587;
if(cljs.core.truth_(inst_23534)){
var statearr_23600_23660 = state_23587__$1;
(statearr_23600_23660[(1)] = (19));

} else {
var statearr_23601_23661 = state_23587__$1;
(statearr_23601_23661[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (21))){
var inst_23539 = (state_23587[(12)]);
var inst_23539__$1 = (state_23587[(2)]);
var inst_23540 = cljs.core.get.call(null,inst_23539__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23541 = cljs.core.get.call(null,inst_23539__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23542 = cljs.core.get.call(null,inst_23539__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23587__$1 = (function (){var statearr_23602 = state_23587;
(statearr_23602[(10)] = inst_23540);

(statearr_23602[(13)] = inst_23541);

(statearr_23602[(12)] = inst_23539__$1);

return statearr_23602;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23587__$1,(22),inst_23542);
} else {
if((state_val_23588 === (31))){
var inst_23569 = (state_23587[(2)]);
var state_23587__$1 = state_23587;
if(cljs.core.truth_(inst_23569)){
var statearr_23603_23662 = state_23587__$1;
(statearr_23603_23662[(1)] = (32));

} else {
var statearr_23604_23663 = state_23587__$1;
(statearr_23604_23663[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (32))){
var inst_23546 = (state_23587[(14)]);
var state_23587__$1 = state_23587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23587__$1,(35),out,inst_23546);
} else {
if((state_val_23588 === (33))){
var inst_23539 = (state_23587[(12)]);
var inst_23517 = inst_23539;
var state_23587__$1 = (function (){var statearr_23605 = state_23587;
(statearr_23605[(7)] = inst_23517);

return statearr_23605;
})();
var statearr_23606_23664 = state_23587__$1;
(statearr_23606_23664[(2)] = null);

(statearr_23606_23664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (13))){
var inst_23517 = (state_23587[(7)]);
var inst_23524 = inst_23517.cljs$lang$protocol_mask$partition0$;
var inst_23525 = (inst_23524 & (64));
var inst_23526 = inst_23517.cljs$core$ISeq$;
var inst_23527 = (inst_23525) || (inst_23526);
var state_23587__$1 = state_23587;
if(cljs.core.truth_(inst_23527)){
var statearr_23607_23665 = state_23587__$1;
(statearr_23607_23665[(1)] = (16));

} else {
var statearr_23608_23666 = state_23587__$1;
(statearr_23608_23666[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (22))){
var inst_23547 = (state_23587[(9)]);
var inst_23546 = (state_23587[(14)]);
var inst_23545 = (state_23587[(2)]);
var inst_23546__$1 = cljs.core.nth.call(null,inst_23545,(0),null);
var inst_23547__$1 = cljs.core.nth.call(null,inst_23545,(1),null);
var inst_23548 = (inst_23546__$1 == null);
var inst_23549 = cljs.core._EQ_.call(null,inst_23547__$1,change);
var inst_23550 = (inst_23548) || (inst_23549);
var state_23587__$1 = (function (){var statearr_23609 = state_23587;
(statearr_23609[(9)] = inst_23547__$1);

(statearr_23609[(14)] = inst_23546__$1);

return statearr_23609;
})();
if(cljs.core.truth_(inst_23550)){
var statearr_23610_23667 = state_23587__$1;
(statearr_23610_23667[(1)] = (23));

} else {
var statearr_23611_23668 = state_23587__$1;
(statearr_23611_23668[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (36))){
var inst_23539 = (state_23587[(12)]);
var inst_23517 = inst_23539;
var state_23587__$1 = (function (){var statearr_23612 = state_23587;
(statearr_23612[(7)] = inst_23517);

return statearr_23612;
})();
var statearr_23613_23669 = state_23587__$1;
(statearr_23613_23669[(2)] = null);

(statearr_23613_23669[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (29))){
var inst_23561 = (state_23587[(11)]);
var state_23587__$1 = state_23587;
var statearr_23614_23670 = state_23587__$1;
(statearr_23614_23670[(2)] = inst_23561);

(statearr_23614_23670[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (6))){
var state_23587__$1 = state_23587;
var statearr_23615_23671 = state_23587__$1;
(statearr_23615_23671[(2)] = false);

(statearr_23615_23671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (28))){
var inst_23557 = (state_23587[(2)]);
var inst_23558 = calc_state.call(null);
var inst_23517 = inst_23558;
var state_23587__$1 = (function (){var statearr_23616 = state_23587;
(statearr_23616[(15)] = inst_23557);

(statearr_23616[(7)] = inst_23517);

return statearr_23616;
})();
var statearr_23617_23672 = state_23587__$1;
(statearr_23617_23672[(2)] = null);

(statearr_23617_23672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (25))){
var inst_23583 = (state_23587[(2)]);
var state_23587__$1 = state_23587;
var statearr_23618_23673 = state_23587__$1;
(statearr_23618_23673[(2)] = inst_23583);

(statearr_23618_23673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (34))){
var inst_23581 = (state_23587[(2)]);
var state_23587__$1 = state_23587;
var statearr_23619_23674 = state_23587__$1;
(statearr_23619_23674[(2)] = inst_23581);

(statearr_23619_23674[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (17))){
var state_23587__$1 = state_23587;
var statearr_23620_23675 = state_23587__$1;
(statearr_23620_23675[(2)] = false);

(statearr_23620_23675[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (3))){
var state_23587__$1 = state_23587;
var statearr_23621_23676 = state_23587__$1;
(statearr_23621_23676[(2)] = false);

(statearr_23621_23676[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (12))){
var inst_23585 = (state_23587[(2)]);
var state_23587__$1 = state_23587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23587__$1,inst_23585);
} else {
if((state_val_23588 === (2))){
var inst_23493 = (state_23587[(8)]);
var inst_23498 = inst_23493.cljs$lang$protocol_mask$partition0$;
var inst_23499 = (inst_23498 & (64));
var inst_23500 = inst_23493.cljs$core$ISeq$;
var inst_23501 = (inst_23499) || (inst_23500);
var state_23587__$1 = state_23587;
if(cljs.core.truth_(inst_23501)){
var statearr_23622_23677 = state_23587__$1;
(statearr_23622_23677[(1)] = (5));

} else {
var statearr_23623_23678 = state_23587__$1;
(statearr_23623_23678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (23))){
var inst_23546 = (state_23587[(14)]);
var inst_23552 = (inst_23546 == null);
var state_23587__$1 = state_23587;
if(cljs.core.truth_(inst_23552)){
var statearr_23624_23679 = state_23587__$1;
(statearr_23624_23679[(1)] = (26));

} else {
var statearr_23625_23680 = state_23587__$1;
(statearr_23625_23680[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (35))){
var inst_23572 = (state_23587[(2)]);
var state_23587__$1 = state_23587;
if(cljs.core.truth_(inst_23572)){
var statearr_23626_23681 = state_23587__$1;
(statearr_23626_23681[(1)] = (36));

} else {
var statearr_23627_23682 = state_23587__$1;
(statearr_23627_23682[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (19))){
var inst_23517 = (state_23587[(7)]);
var inst_23536 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23517);
var state_23587__$1 = state_23587;
var statearr_23628_23683 = state_23587__$1;
(statearr_23628_23683[(2)] = inst_23536);

(statearr_23628_23683[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (11))){
var inst_23517 = (state_23587[(7)]);
var inst_23521 = (inst_23517 == null);
var inst_23522 = cljs.core.not.call(null,inst_23521);
var state_23587__$1 = state_23587;
if(inst_23522){
var statearr_23629_23684 = state_23587__$1;
(statearr_23629_23684[(1)] = (13));

} else {
var statearr_23630_23685 = state_23587__$1;
(statearr_23630_23685[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (9))){
var inst_23493 = (state_23587[(8)]);
var state_23587__$1 = state_23587;
var statearr_23631_23686 = state_23587__$1;
(statearr_23631_23686[(2)] = inst_23493);

(statearr_23631_23686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (5))){
var state_23587__$1 = state_23587;
var statearr_23632_23687 = state_23587__$1;
(statearr_23632_23687[(2)] = true);

(statearr_23632_23687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (14))){
var state_23587__$1 = state_23587;
var statearr_23633_23688 = state_23587__$1;
(statearr_23633_23688[(2)] = false);

(statearr_23633_23688[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (26))){
var inst_23547 = (state_23587[(9)]);
var inst_23554 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23547);
var state_23587__$1 = state_23587;
var statearr_23634_23689 = state_23587__$1;
(statearr_23634_23689[(2)] = inst_23554);

(statearr_23634_23689[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (16))){
var state_23587__$1 = state_23587;
var statearr_23635_23690 = state_23587__$1;
(statearr_23635_23690[(2)] = true);

(statearr_23635_23690[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (38))){
var inst_23577 = (state_23587[(2)]);
var state_23587__$1 = state_23587;
var statearr_23636_23691 = state_23587__$1;
(statearr_23636_23691[(2)] = inst_23577);

(statearr_23636_23691[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (30))){
var inst_23547 = (state_23587[(9)]);
var inst_23540 = (state_23587[(10)]);
var inst_23541 = (state_23587[(13)]);
var inst_23564 = cljs.core.empty_QMARK_.call(null,inst_23540);
var inst_23565 = inst_23541.call(null,inst_23547);
var inst_23566 = cljs.core.not.call(null,inst_23565);
var inst_23567 = (inst_23564) && (inst_23566);
var state_23587__$1 = state_23587;
var statearr_23637_23692 = state_23587__$1;
(statearr_23637_23692[(2)] = inst_23567);

(statearr_23637_23692[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (10))){
var inst_23493 = (state_23587[(8)]);
var inst_23513 = (state_23587[(2)]);
var inst_23514 = cljs.core.get.call(null,inst_23513,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23515 = cljs.core.get.call(null,inst_23513,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23516 = cljs.core.get.call(null,inst_23513,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23517 = inst_23493;
var state_23587__$1 = (function (){var statearr_23638 = state_23587;
(statearr_23638[(16)] = inst_23514);

(statearr_23638[(17)] = inst_23516);

(statearr_23638[(18)] = inst_23515);

(statearr_23638[(7)] = inst_23517);

return statearr_23638;
})();
var statearr_23639_23693 = state_23587__$1;
(statearr_23639_23693[(2)] = null);

(statearr_23639_23693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (18))){
var inst_23531 = (state_23587[(2)]);
var state_23587__$1 = state_23587;
var statearr_23640_23694 = state_23587__$1;
(statearr_23640_23694[(2)] = inst_23531);

(statearr_23640_23694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (37))){
var state_23587__$1 = state_23587;
var statearr_23641_23695 = state_23587__$1;
(statearr_23641_23695[(2)] = null);

(statearr_23641_23695[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (8))){
var inst_23493 = (state_23587[(8)]);
var inst_23510 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23493);
var state_23587__$1 = state_23587;
var statearr_23642_23696 = state_23587__$1;
(statearr_23642_23696[(2)] = inst_23510);

(statearr_23642_23696[(1)] = (10));


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
});})(c__21937__auto___23650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18798__auto__,c__21937__auto___23650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18799__auto__ = null;
var cljs$core$async$mix_$_state_machine__18799__auto____0 = (function (){
var statearr_23646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23646[(0)] = cljs$core$async$mix_$_state_machine__18799__auto__);

(statearr_23646[(1)] = (1));

return statearr_23646;
});
var cljs$core$async$mix_$_state_machine__18799__auto____1 = (function (state_23587){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_23587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e23647){if((e23647 instanceof Object)){
var ex__18802__auto__ = e23647;
var statearr_23648_23697 = state_23587;
(statearr_23648_23697[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23698 = state_23587;
state_23587 = G__23698;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18799__auto__ = function(state_23587){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18799__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18799__auto____1.call(this,state_23587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18799__auto____0;
cljs$core$async$mix_$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18799__auto____1;
return cljs$core$async$mix_$_state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto___23650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21939__auto__ = (function (){var statearr_23649 = f__21938__auto__.call(null);
(statearr_23649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto___23650);

return statearr_23649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto___23650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p,v,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23699 = [];
var len__17843__auto___23702 = arguments.length;
var i__17844__auto___23703 = (0);
while(true){
if((i__17844__auto___23703 < len__17843__auto___23702)){
args23699.push((arguments[i__17844__auto___23703]));

var G__23704 = (i__17844__auto___23703 + (1));
i__17844__auto___23703 = G__23704;
continue;
} else {
}
break;
}

var G__23701 = args23699.length;
switch (G__23701) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23699.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p);
} else {
var m__17441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p,v);
} else {
var m__17441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args23707 = [];
var len__17843__auto___23832 = arguments.length;
var i__17844__auto___23833 = (0);
while(true){
if((i__17844__auto___23833 < len__17843__auto___23832)){
args23707.push((arguments[i__17844__auto___23833]));

var G__23834 = (i__17844__auto___23833 + (1));
i__17844__auto___23833 = G__23834;
continue;
} else {
}
break;
}

var G__23709 = args23707.length;
switch (G__23709) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23707.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16785__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16785__auto__,mults){
return (function (p1__23706_SHARP_){
if(cljs.core.truth_(p1__23706_SHARP_.call(null,topic))){
return p1__23706_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23706_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16785__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23710 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23710 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23711){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23711 = meta23711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23712,meta23711__$1){
var self__ = this;
var _23712__$1 = this;
return (new cljs.core.async.t_cljs$core$async23710(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23711__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23710.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23712){
var self__ = this;
var _23712__$1 = this;
return self__.meta23711;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23710.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23710.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23710.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23710.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23710.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23710.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23710.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23710.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23711","meta23711",-1604367670,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23710.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23710";

cljs.core.async.t_cljs$core$async23710.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23710");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23710 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23710(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23711){
return (new cljs.core.async.t_cljs$core$async23710(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23711));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23710(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21937__auto___23836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto___23836,mults,ensure_mult,p){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto___23836,mults,ensure_mult,p){
return (function (state_23784){
var state_val_23785 = (state_23784[(1)]);
if((state_val_23785 === (7))){
var inst_23780 = (state_23784[(2)]);
var state_23784__$1 = state_23784;
var statearr_23786_23837 = state_23784__$1;
(statearr_23786_23837[(2)] = inst_23780);

(statearr_23786_23837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (20))){
var state_23784__$1 = state_23784;
var statearr_23787_23838 = state_23784__$1;
(statearr_23787_23838[(2)] = null);

(statearr_23787_23838[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (1))){
var state_23784__$1 = state_23784;
var statearr_23788_23839 = state_23784__$1;
(statearr_23788_23839[(2)] = null);

(statearr_23788_23839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (24))){
var inst_23763 = (state_23784[(7)]);
var inst_23772 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23763);
var state_23784__$1 = state_23784;
var statearr_23789_23840 = state_23784__$1;
(statearr_23789_23840[(2)] = inst_23772);

(statearr_23789_23840[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (4))){
var inst_23715 = (state_23784[(8)]);
var inst_23715__$1 = (state_23784[(2)]);
var inst_23716 = (inst_23715__$1 == null);
var state_23784__$1 = (function (){var statearr_23790 = state_23784;
(statearr_23790[(8)] = inst_23715__$1);

return statearr_23790;
})();
if(cljs.core.truth_(inst_23716)){
var statearr_23791_23841 = state_23784__$1;
(statearr_23791_23841[(1)] = (5));

} else {
var statearr_23792_23842 = state_23784__$1;
(statearr_23792_23842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (15))){
var inst_23757 = (state_23784[(2)]);
var state_23784__$1 = state_23784;
var statearr_23793_23843 = state_23784__$1;
(statearr_23793_23843[(2)] = inst_23757);

(statearr_23793_23843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (21))){
var inst_23777 = (state_23784[(2)]);
var state_23784__$1 = (function (){var statearr_23794 = state_23784;
(statearr_23794[(9)] = inst_23777);

return statearr_23794;
})();
var statearr_23795_23844 = state_23784__$1;
(statearr_23795_23844[(2)] = null);

(statearr_23795_23844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (13))){
var inst_23739 = (state_23784[(10)]);
var inst_23741 = cljs.core.chunked_seq_QMARK_.call(null,inst_23739);
var state_23784__$1 = state_23784;
if(inst_23741){
var statearr_23796_23845 = state_23784__$1;
(statearr_23796_23845[(1)] = (16));

} else {
var statearr_23797_23846 = state_23784__$1;
(statearr_23797_23846[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (22))){
var inst_23769 = (state_23784[(2)]);
var state_23784__$1 = state_23784;
if(cljs.core.truth_(inst_23769)){
var statearr_23798_23847 = state_23784__$1;
(statearr_23798_23847[(1)] = (23));

} else {
var statearr_23799_23848 = state_23784__$1;
(statearr_23799_23848[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (6))){
var inst_23763 = (state_23784[(7)]);
var inst_23715 = (state_23784[(8)]);
var inst_23765 = (state_23784[(11)]);
var inst_23763__$1 = topic_fn.call(null,inst_23715);
var inst_23764 = cljs.core.deref.call(null,mults);
var inst_23765__$1 = cljs.core.get.call(null,inst_23764,inst_23763__$1);
var state_23784__$1 = (function (){var statearr_23800 = state_23784;
(statearr_23800[(7)] = inst_23763__$1);

(statearr_23800[(11)] = inst_23765__$1);

return statearr_23800;
})();
if(cljs.core.truth_(inst_23765__$1)){
var statearr_23801_23849 = state_23784__$1;
(statearr_23801_23849[(1)] = (19));

} else {
var statearr_23802_23850 = state_23784__$1;
(statearr_23802_23850[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (25))){
var inst_23774 = (state_23784[(2)]);
var state_23784__$1 = state_23784;
var statearr_23803_23851 = state_23784__$1;
(statearr_23803_23851[(2)] = inst_23774);

(statearr_23803_23851[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (17))){
var inst_23739 = (state_23784[(10)]);
var inst_23748 = cljs.core.first.call(null,inst_23739);
var inst_23749 = cljs.core.async.muxch_STAR_.call(null,inst_23748);
var inst_23750 = cljs.core.async.close_BANG_.call(null,inst_23749);
var inst_23751 = cljs.core.next.call(null,inst_23739);
var inst_23725 = inst_23751;
var inst_23726 = null;
var inst_23727 = (0);
var inst_23728 = (0);
var state_23784__$1 = (function (){var statearr_23804 = state_23784;
(statearr_23804[(12)] = inst_23725);

(statearr_23804[(13)] = inst_23750);

(statearr_23804[(14)] = inst_23726);

(statearr_23804[(15)] = inst_23727);

(statearr_23804[(16)] = inst_23728);

return statearr_23804;
})();
var statearr_23805_23852 = state_23784__$1;
(statearr_23805_23852[(2)] = null);

(statearr_23805_23852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (3))){
var inst_23782 = (state_23784[(2)]);
var state_23784__$1 = state_23784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23784__$1,inst_23782);
} else {
if((state_val_23785 === (12))){
var inst_23759 = (state_23784[(2)]);
var state_23784__$1 = state_23784;
var statearr_23806_23853 = state_23784__$1;
(statearr_23806_23853[(2)] = inst_23759);

(statearr_23806_23853[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (2))){
var state_23784__$1 = state_23784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23784__$1,(4),ch);
} else {
if((state_val_23785 === (23))){
var state_23784__$1 = state_23784;
var statearr_23807_23854 = state_23784__$1;
(statearr_23807_23854[(2)] = null);

(statearr_23807_23854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (19))){
var inst_23715 = (state_23784[(8)]);
var inst_23765 = (state_23784[(11)]);
var inst_23767 = cljs.core.async.muxch_STAR_.call(null,inst_23765);
var state_23784__$1 = state_23784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23784__$1,(22),inst_23767,inst_23715);
} else {
if((state_val_23785 === (11))){
var inst_23725 = (state_23784[(12)]);
var inst_23739 = (state_23784[(10)]);
var inst_23739__$1 = cljs.core.seq.call(null,inst_23725);
var state_23784__$1 = (function (){var statearr_23808 = state_23784;
(statearr_23808[(10)] = inst_23739__$1);

return statearr_23808;
})();
if(inst_23739__$1){
var statearr_23809_23855 = state_23784__$1;
(statearr_23809_23855[(1)] = (13));

} else {
var statearr_23810_23856 = state_23784__$1;
(statearr_23810_23856[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (9))){
var inst_23761 = (state_23784[(2)]);
var state_23784__$1 = state_23784;
var statearr_23811_23857 = state_23784__$1;
(statearr_23811_23857[(2)] = inst_23761);

(statearr_23811_23857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (5))){
var inst_23722 = cljs.core.deref.call(null,mults);
var inst_23723 = cljs.core.vals.call(null,inst_23722);
var inst_23724 = cljs.core.seq.call(null,inst_23723);
var inst_23725 = inst_23724;
var inst_23726 = null;
var inst_23727 = (0);
var inst_23728 = (0);
var state_23784__$1 = (function (){var statearr_23812 = state_23784;
(statearr_23812[(12)] = inst_23725);

(statearr_23812[(14)] = inst_23726);

(statearr_23812[(15)] = inst_23727);

(statearr_23812[(16)] = inst_23728);

return statearr_23812;
})();
var statearr_23813_23858 = state_23784__$1;
(statearr_23813_23858[(2)] = null);

(statearr_23813_23858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (14))){
var state_23784__$1 = state_23784;
var statearr_23817_23859 = state_23784__$1;
(statearr_23817_23859[(2)] = null);

(statearr_23817_23859[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (16))){
var inst_23739 = (state_23784[(10)]);
var inst_23743 = cljs.core.chunk_first.call(null,inst_23739);
var inst_23744 = cljs.core.chunk_rest.call(null,inst_23739);
var inst_23745 = cljs.core.count.call(null,inst_23743);
var inst_23725 = inst_23744;
var inst_23726 = inst_23743;
var inst_23727 = inst_23745;
var inst_23728 = (0);
var state_23784__$1 = (function (){var statearr_23818 = state_23784;
(statearr_23818[(12)] = inst_23725);

(statearr_23818[(14)] = inst_23726);

(statearr_23818[(15)] = inst_23727);

(statearr_23818[(16)] = inst_23728);

return statearr_23818;
})();
var statearr_23819_23860 = state_23784__$1;
(statearr_23819_23860[(2)] = null);

(statearr_23819_23860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (10))){
var inst_23725 = (state_23784[(12)]);
var inst_23726 = (state_23784[(14)]);
var inst_23727 = (state_23784[(15)]);
var inst_23728 = (state_23784[(16)]);
var inst_23733 = cljs.core._nth.call(null,inst_23726,inst_23728);
var inst_23734 = cljs.core.async.muxch_STAR_.call(null,inst_23733);
var inst_23735 = cljs.core.async.close_BANG_.call(null,inst_23734);
var inst_23736 = (inst_23728 + (1));
var tmp23814 = inst_23725;
var tmp23815 = inst_23726;
var tmp23816 = inst_23727;
var inst_23725__$1 = tmp23814;
var inst_23726__$1 = tmp23815;
var inst_23727__$1 = tmp23816;
var inst_23728__$1 = inst_23736;
var state_23784__$1 = (function (){var statearr_23820 = state_23784;
(statearr_23820[(12)] = inst_23725__$1);

(statearr_23820[(17)] = inst_23735);

(statearr_23820[(14)] = inst_23726__$1);

(statearr_23820[(15)] = inst_23727__$1);

(statearr_23820[(16)] = inst_23728__$1);

return statearr_23820;
})();
var statearr_23821_23861 = state_23784__$1;
(statearr_23821_23861[(2)] = null);

(statearr_23821_23861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (18))){
var inst_23754 = (state_23784[(2)]);
var state_23784__$1 = state_23784;
var statearr_23822_23862 = state_23784__$1;
(statearr_23822_23862[(2)] = inst_23754);

(statearr_23822_23862[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (8))){
var inst_23727 = (state_23784[(15)]);
var inst_23728 = (state_23784[(16)]);
var inst_23730 = (inst_23728 < inst_23727);
var inst_23731 = inst_23730;
var state_23784__$1 = state_23784;
if(cljs.core.truth_(inst_23731)){
var statearr_23823_23863 = state_23784__$1;
(statearr_23823_23863[(1)] = (10));

} else {
var statearr_23824_23864 = state_23784__$1;
(statearr_23824_23864[(1)] = (11));

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
});})(c__21937__auto___23836,mults,ensure_mult,p))
;
return ((function (switch__18798__auto__,c__21937__auto___23836,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18799__auto__ = null;
var cljs$core$async$state_machine__18799__auto____0 = (function (){
var statearr_23828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23828[(0)] = cljs$core$async$state_machine__18799__auto__);

(statearr_23828[(1)] = (1));

return statearr_23828;
});
var cljs$core$async$state_machine__18799__auto____1 = (function (state_23784){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_23784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e23829){if((e23829 instanceof Object)){
var ex__18802__auto__ = e23829;
var statearr_23830_23865 = state_23784;
(statearr_23830_23865[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23866 = state_23784;
state_23784 = G__23866;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
cljs$core$async$state_machine__18799__auto__ = function(state_23784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18799__auto____1.call(this,state_23784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18799__auto____0;
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18799__auto____1;
return cljs$core$async$state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto___23836,mults,ensure_mult,p))
})();
var state__21939__auto__ = (function (){var statearr_23831 = f__21938__auto__.call(null);
(statearr_23831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto___23836);

return statearr_23831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto___23836,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args23867 = [];
var len__17843__auto___23870 = arguments.length;
var i__17844__auto___23871 = (0);
while(true){
if((i__17844__auto___23871 < len__17843__auto___23870)){
args23867.push((arguments[i__17844__auto___23871]));

var G__23872 = (i__17844__auto___23871 + (1));
i__17844__auto___23871 = G__23872;
continue;
} else {
}
break;
}

var G__23869 = args23867.length;
switch (G__23869) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23867.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args23874 = [];
var len__17843__auto___23877 = arguments.length;
var i__17844__auto___23878 = (0);
while(true){
if((i__17844__auto___23878 < len__17843__auto___23877)){
args23874.push((arguments[i__17844__auto___23878]));

var G__23879 = (i__17844__auto___23878 + (1));
i__17844__auto___23878 = G__23879;
continue;
} else {
}
break;
}

var G__23876 = args23874.length;
switch (G__23876) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23874.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args23881 = [];
var len__17843__auto___23952 = arguments.length;
var i__17844__auto___23953 = (0);
while(true){
if((i__17844__auto___23953 < len__17843__auto___23952)){
args23881.push((arguments[i__17844__auto___23953]));

var G__23954 = (i__17844__auto___23953 + (1));
i__17844__auto___23953 = G__23954;
continue;
} else {
}
break;
}

var G__23883 = args23881.length;
switch (G__23883) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23881.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21937__auto___23956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto___23956,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto___23956,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23922){
var state_val_23923 = (state_23922[(1)]);
if((state_val_23923 === (7))){
var state_23922__$1 = state_23922;
var statearr_23924_23957 = state_23922__$1;
(statearr_23924_23957[(2)] = null);

(statearr_23924_23957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (1))){
var state_23922__$1 = state_23922;
var statearr_23925_23958 = state_23922__$1;
(statearr_23925_23958[(2)] = null);

(statearr_23925_23958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (4))){
var inst_23886 = (state_23922[(7)]);
var inst_23888 = (inst_23886 < cnt);
var state_23922__$1 = state_23922;
if(cljs.core.truth_(inst_23888)){
var statearr_23926_23959 = state_23922__$1;
(statearr_23926_23959[(1)] = (6));

} else {
var statearr_23927_23960 = state_23922__$1;
(statearr_23927_23960[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (15))){
var inst_23918 = (state_23922[(2)]);
var state_23922__$1 = state_23922;
var statearr_23928_23961 = state_23922__$1;
(statearr_23928_23961[(2)] = inst_23918);

(statearr_23928_23961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (13))){
var inst_23911 = cljs.core.async.close_BANG_.call(null,out);
var state_23922__$1 = state_23922;
var statearr_23929_23962 = state_23922__$1;
(statearr_23929_23962[(2)] = inst_23911);

(statearr_23929_23962[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (6))){
var state_23922__$1 = state_23922;
var statearr_23930_23963 = state_23922__$1;
(statearr_23930_23963[(2)] = null);

(statearr_23930_23963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (3))){
var inst_23920 = (state_23922[(2)]);
var state_23922__$1 = state_23922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23922__$1,inst_23920);
} else {
if((state_val_23923 === (12))){
var inst_23908 = (state_23922[(8)]);
var inst_23908__$1 = (state_23922[(2)]);
var inst_23909 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23908__$1);
var state_23922__$1 = (function (){var statearr_23931 = state_23922;
(statearr_23931[(8)] = inst_23908__$1);

return statearr_23931;
})();
if(cljs.core.truth_(inst_23909)){
var statearr_23932_23964 = state_23922__$1;
(statearr_23932_23964[(1)] = (13));

} else {
var statearr_23933_23965 = state_23922__$1;
(statearr_23933_23965[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (2))){
var inst_23885 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23886 = (0);
var state_23922__$1 = (function (){var statearr_23934 = state_23922;
(statearr_23934[(9)] = inst_23885);

(statearr_23934[(7)] = inst_23886);

return statearr_23934;
})();
var statearr_23935_23966 = state_23922__$1;
(statearr_23935_23966[(2)] = null);

(statearr_23935_23966[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (11))){
var inst_23886 = (state_23922[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23922,(10),Object,null,(9));
var inst_23895 = chs__$1.call(null,inst_23886);
var inst_23896 = done.call(null,inst_23886);
var inst_23897 = cljs.core.async.take_BANG_.call(null,inst_23895,inst_23896);
var state_23922__$1 = state_23922;
var statearr_23936_23967 = state_23922__$1;
(statearr_23936_23967[(2)] = inst_23897);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23922__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (9))){
var inst_23886 = (state_23922[(7)]);
var inst_23899 = (state_23922[(2)]);
var inst_23900 = (inst_23886 + (1));
var inst_23886__$1 = inst_23900;
var state_23922__$1 = (function (){var statearr_23937 = state_23922;
(statearr_23937[(10)] = inst_23899);

(statearr_23937[(7)] = inst_23886__$1);

return statearr_23937;
})();
var statearr_23938_23968 = state_23922__$1;
(statearr_23938_23968[(2)] = null);

(statearr_23938_23968[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (5))){
var inst_23906 = (state_23922[(2)]);
var state_23922__$1 = (function (){var statearr_23939 = state_23922;
(statearr_23939[(11)] = inst_23906);

return statearr_23939;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23922__$1,(12),dchan);
} else {
if((state_val_23923 === (14))){
var inst_23908 = (state_23922[(8)]);
var inst_23913 = cljs.core.apply.call(null,f,inst_23908);
var state_23922__$1 = state_23922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23922__$1,(16),out,inst_23913);
} else {
if((state_val_23923 === (16))){
var inst_23915 = (state_23922[(2)]);
var state_23922__$1 = (function (){var statearr_23940 = state_23922;
(statearr_23940[(12)] = inst_23915);

return statearr_23940;
})();
var statearr_23941_23969 = state_23922__$1;
(statearr_23941_23969[(2)] = null);

(statearr_23941_23969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (10))){
var inst_23890 = (state_23922[(2)]);
var inst_23891 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23922__$1 = (function (){var statearr_23942 = state_23922;
(statearr_23942[(13)] = inst_23890);

return statearr_23942;
})();
var statearr_23943_23970 = state_23922__$1;
(statearr_23943_23970[(2)] = inst_23891);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23922__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (8))){
var inst_23904 = (state_23922[(2)]);
var state_23922__$1 = state_23922;
var statearr_23944_23971 = state_23922__$1;
(statearr_23944_23971[(2)] = inst_23904);

(statearr_23944_23971[(1)] = (5));


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
});})(c__21937__auto___23956,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18798__auto__,c__21937__auto___23956,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18799__auto__ = null;
var cljs$core$async$state_machine__18799__auto____0 = (function (){
var statearr_23948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23948[(0)] = cljs$core$async$state_machine__18799__auto__);

(statearr_23948[(1)] = (1));

return statearr_23948;
});
var cljs$core$async$state_machine__18799__auto____1 = (function (state_23922){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_23922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e23949){if((e23949 instanceof Object)){
var ex__18802__auto__ = e23949;
var statearr_23950_23972 = state_23922;
(statearr_23950_23972[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23973 = state_23922;
state_23922 = G__23973;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
cljs$core$async$state_machine__18799__auto__ = function(state_23922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18799__auto____1.call(this,state_23922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18799__auto____0;
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18799__auto____1;
return cljs$core$async$state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto___23956,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21939__auto__ = (function (){var statearr_23951 = f__21938__auto__.call(null);
(statearr_23951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto___23956);

return statearr_23951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto___23956,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args23975 = [];
var len__17843__auto___24031 = arguments.length;
var i__17844__auto___24032 = (0);
while(true){
if((i__17844__auto___24032 < len__17843__auto___24031)){
args23975.push((arguments[i__17844__auto___24032]));

var G__24033 = (i__17844__auto___24032 + (1));
i__17844__auto___24032 = G__24033;
continue;
} else {
}
break;
}

var G__23977 = args23975.length;
switch (G__23977) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23975.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21937__auto___24035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto___24035,out){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto___24035,out){
return (function (state_24007){
var state_val_24008 = (state_24007[(1)]);
if((state_val_24008 === (7))){
var inst_23986 = (state_24007[(7)]);
var inst_23987 = (state_24007[(8)]);
var inst_23986__$1 = (state_24007[(2)]);
var inst_23987__$1 = cljs.core.nth.call(null,inst_23986__$1,(0),null);
var inst_23988 = cljs.core.nth.call(null,inst_23986__$1,(1),null);
var inst_23989 = (inst_23987__$1 == null);
var state_24007__$1 = (function (){var statearr_24009 = state_24007;
(statearr_24009[(7)] = inst_23986__$1);

(statearr_24009[(8)] = inst_23987__$1);

(statearr_24009[(9)] = inst_23988);

return statearr_24009;
})();
if(cljs.core.truth_(inst_23989)){
var statearr_24010_24036 = state_24007__$1;
(statearr_24010_24036[(1)] = (8));

} else {
var statearr_24011_24037 = state_24007__$1;
(statearr_24011_24037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (1))){
var inst_23978 = cljs.core.vec.call(null,chs);
var inst_23979 = inst_23978;
var state_24007__$1 = (function (){var statearr_24012 = state_24007;
(statearr_24012[(10)] = inst_23979);

return statearr_24012;
})();
var statearr_24013_24038 = state_24007__$1;
(statearr_24013_24038[(2)] = null);

(statearr_24013_24038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (4))){
var inst_23979 = (state_24007[(10)]);
var state_24007__$1 = state_24007;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24007__$1,(7),inst_23979);
} else {
if((state_val_24008 === (6))){
var inst_24003 = (state_24007[(2)]);
var state_24007__$1 = state_24007;
var statearr_24014_24039 = state_24007__$1;
(statearr_24014_24039[(2)] = inst_24003);

(statearr_24014_24039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (3))){
var inst_24005 = (state_24007[(2)]);
var state_24007__$1 = state_24007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24007__$1,inst_24005);
} else {
if((state_val_24008 === (2))){
var inst_23979 = (state_24007[(10)]);
var inst_23981 = cljs.core.count.call(null,inst_23979);
var inst_23982 = (inst_23981 > (0));
var state_24007__$1 = state_24007;
if(cljs.core.truth_(inst_23982)){
var statearr_24016_24040 = state_24007__$1;
(statearr_24016_24040[(1)] = (4));

} else {
var statearr_24017_24041 = state_24007__$1;
(statearr_24017_24041[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (11))){
var inst_23979 = (state_24007[(10)]);
var inst_23996 = (state_24007[(2)]);
var tmp24015 = inst_23979;
var inst_23979__$1 = tmp24015;
var state_24007__$1 = (function (){var statearr_24018 = state_24007;
(statearr_24018[(10)] = inst_23979__$1);

(statearr_24018[(11)] = inst_23996);

return statearr_24018;
})();
var statearr_24019_24042 = state_24007__$1;
(statearr_24019_24042[(2)] = null);

(statearr_24019_24042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (9))){
var inst_23987 = (state_24007[(8)]);
var state_24007__$1 = state_24007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24007__$1,(11),out,inst_23987);
} else {
if((state_val_24008 === (5))){
var inst_24001 = cljs.core.async.close_BANG_.call(null,out);
var state_24007__$1 = state_24007;
var statearr_24020_24043 = state_24007__$1;
(statearr_24020_24043[(2)] = inst_24001);

(statearr_24020_24043[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (10))){
var inst_23999 = (state_24007[(2)]);
var state_24007__$1 = state_24007;
var statearr_24021_24044 = state_24007__$1;
(statearr_24021_24044[(2)] = inst_23999);

(statearr_24021_24044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (8))){
var inst_23986 = (state_24007[(7)]);
var inst_23987 = (state_24007[(8)]);
var inst_23988 = (state_24007[(9)]);
var inst_23979 = (state_24007[(10)]);
var inst_23991 = (function (){var cs = inst_23979;
var vec__23984 = inst_23986;
var v = inst_23987;
var c = inst_23988;
return ((function (cs,vec__23984,v,c,inst_23986,inst_23987,inst_23988,inst_23979,state_val_24008,c__21937__auto___24035,out){
return (function (p1__23974_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23974_SHARP_);
});
;})(cs,vec__23984,v,c,inst_23986,inst_23987,inst_23988,inst_23979,state_val_24008,c__21937__auto___24035,out))
})();
var inst_23992 = cljs.core.filterv.call(null,inst_23991,inst_23979);
var inst_23979__$1 = inst_23992;
var state_24007__$1 = (function (){var statearr_24022 = state_24007;
(statearr_24022[(10)] = inst_23979__$1);

return statearr_24022;
})();
var statearr_24023_24045 = state_24007__$1;
(statearr_24023_24045[(2)] = null);

(statearr_24023_24045[(1)] = (2));


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
});})(c__21937__auto___24035,out))
;
return ((function (switch__18798__auto__,c__21937__auto___24035,out){
return (function() {
var cljs$core$async$state_machine__18799__auto__ = null;
var cljs$core$async$state_machine__18799__auto____0 = (function (){
var statearr_24027 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24027[(0)] = cljs$core$async$state_machine__18799__auto__);

(statearr_24027[(1)] = (1));

return statearr_24027;
});
var cljs$core$async$state_machine__18799__auto____1 = (function (state_24007){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_24007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e24028){if((e24028 instanceof Object)){
var ex__18802__auto__ = e24028;
var statearr_24029_24046 = state_24007;
(statearr_24029_24046[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24047 = state_24007;
state_24007 = G__24047;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
cljs$core$async$state_machine__18799__auto__ = function(state_24007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18799__auto____1.call(this,state_24007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18799__auto____0;
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18799__auto____1;
return cljs$core$async$state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto___24035,out))
})();
var state__21939__auto__ = (function (){var statearr_24030 = f__21938__auto__.call(null);
(statearr_24030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto___24035);

return statearr_24030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto___24035,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24048 = [];
var len__17843__auto___24097 = arguments.length;
var i__17844__auto___24098 = (0);
while(true){
if((i__17844__auto___24098 < len__17843__auto___24097)){
args24048.push((arguments[i__17844__auto___24098]));

var G__24099 = (i__17844__auto___24098 + (1));
i__17844__auto___24098 = G__24099;
continue;
} else {
}
break;
}

var G__24050 = args24048.length;
switch (G__24050) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24048.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21937__auto___24101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto___24101,out){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto___24101,out){
return (function (state_24074){
var state_val_24075 = (state_24074[(1)]);
if((state_val_24075 === (7))){
var inst_24056 = (state_24074[(7)]);
var inst_24056__$1 = (state_24074[(2)]);
var inst_24057 = (inst_24056__$1 == null);
var inst_24058 = cljs.core.not.call(null,inst_24057);
var state_24074__$1 = (function (){var statearr_24076 = state_24074;
(statearr_24076[(7)] = inst_24056__$1);

return statearr_24076;
})();
if(inst_24058){
var statearr_24077_24102 = state_24074__$1;
(statearr_24077_24102[(1)] = (8));

} else {
var statearr_24078_24103 = state_24074__$1;
(statearr_24078_24103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (1))){
var inst_24051 = (0);
var state_24074__$1 = (function (){var statearr_24079 = state_24074;
(statearr_24079[(8)] = inst_24051);

return statearr_24079;
})();
var statearr_24080_24104 = state_24074__$1;
(statearr_24080_24104[(2)] = null);

(statearr_24080_24104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (4))){
var state_24074__$1 = state_24074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24074__$1,(7),ch);
} else {
if((state_val_24075 === (6))){
var inst_24069 = (state_24074[(2)]);
var state_24074__$1 = state_24074;
var statearr_24081_24105 = state_24074__$1;
(statearr_24081_24105[(2)] = inst_24069);

(statearr_24081_24105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (3))){
var inst_24071 = (state_24074[(2)]);
var inst_24072 = cljs.core.async.close_BANG_.call(null,out);
var state_24074__$1 = (function (){var statearr_24082 = state_24074;
(statearr_24082[(9)] = inst_24071);

return statearr_24082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24074__$1,inst_24072);
} else {
if((state_val_24075 === (2))){
var inst_24051 = (state_24074[(8)]);
var inst_24053 = (inst_24051 < n);
var state_24074__$1 = state_24074;
if(cljs.core.truth_(inst_24053)){
var statearr_24083_24106 = state_24074__$1;
(statearr_24083_24106[(1)] = (4));

} else {
var statearr_24084_24107 = state_24074__$1;
(statearr_24084_24107[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (11))){
var inst_24051 = (state_24074[(8)]);
var inst_24061 = (state_24074[(2)]);
var inst_24062 = (inst_24051 + (1));
var inst_24051__$1 = inst_24062;
var state_24074__$1 = (function (){var statearr_24085 = state_24074;
(statearr_24085[(8)] = inst_24051__$1);

(statearr_24085[(10)] = inst_24061);

return statearr_24085;
})();
var statearr_24086_24108 = state_24074__$1;
(statearr_24086_24108[(2)] = null);

(statearr_24086_24108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (9))){
var state_24074__$1 = state_24074;
var statearr_24087_24109 = state_24074__$1;
(statearr_24087_24109[(2)] = null);

(statearr_24087_24109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (5))){
var state_24074__$1 = state_24074;
var statearr_24088_24110 = state_24074__$1;
(statearr_24088_24110[(2)] = null);

(statearr_24088_24110[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (10))){
var inst_24066 = (state_24074[(2)]);
var state_24074__$1 = state_24074;
var statearr_24089_24111 = state_24074__$1;
(statearr_24089_24111[(2)] = inst_24066);

(statearr_24089_24111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (8))){
var inst_24056 = (state_24074[(7)]);
var state_24074__$1 = state_24074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24074__$1,(11),out,inst_24056);
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
});})(c__21937__auto___24101,out))
;
return ((function (switch__18798__auto__,c__21937__auto___24101,out){
return (function() {
var cljs$core$async$state_machine__18799__auto__ = null;
var cljs$core$async$state_machine__18799__auto____0 = (function (){
var statearr_24093 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24093[(0)] = cljs$core$async$state_machine__18799__auto__);

(statearr_24093[(1)] = (1));

return statearr_24093;
});
var cljs$core$async$state_machine__18799__auto____1 = (function (state_24074){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_24074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e24094){if((e24094 instanceof Object)){
var ex__18802__auto__ = e24094;
var statearr_24095_24112 = state_24074;
(statearr_24095_24112[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24113 = state_24074;
state_24074 = G__24113;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
cljs$core$async$state_machine__18799__auto__ = function(state_24074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18799__auto____1.call(this,state_24074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18799__auto____0;
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18799__auto____1;
return cljs$core$async$state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto___24101,out))
})();
var state__21939__auto__ = (function (){var statearr_24096 = f__21938__auto__.call(null);
(statearr_24096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto___24101);

return statearr_24096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto___24101,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24121 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24121 = (function (map_LT_,f,ch,meta24122){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24122 = meta24122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24123,meta24122__$1){
var self__ = this;
var _24123__$1 = this;
return (new cljs.core.async.t_cljs$core$async24121(self__.map_LT_,self__.f,self__.ch,meta24122__$1));
});

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24123){
var self__ = this;
var _24123__$1 = this;
return self__.meta24122;
});

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24124 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24124 = (function (map_LT_,f,ch,meta24122,_,fn1,meta24125){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24122 = meta24122;
this._ = _;
this.fn1 = fn1;
this.meta24125 = meta24125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24126,meta24125__$1){
var self__ = this;
var _24126__$1 = this;
return (new cljs.core.async.t_cljs$core$async24124(self__.map_LT_,self__.f,self__.ch,self__.meta24122,self__._,self__.fn1,meta24125__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24126){
var self__ = this;
var _24126__$1 = this;
return self__.meta24125;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24124.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24114_SHARP_){
return f1.call(null,(((p1__24114_SHARP_ == null))?null:self__.f.call(null,p1__24114_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24124.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24122","meta24122",353845817,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24121","cljs.core.async/t_cljs$core$async24121",1304066323,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24125","meta24125",-1476872793,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24124";

cljs.core.async.t_cljs$core$async24124.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async24124");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24124 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24124(map_LT___$1,f__$1,ch__$1,meta24122__$1,___$2,fn1__$1,meta24125){
return (new cljs.core.async.t_cljs$core$async24124(map_LT___$1,f__$1,ch__$1,meta24122__$1,___$2,fn1__$1,meta24125));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24124(self__.map_LT_,self__.f,self__.ch,self__.meta24122,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16773__auto__ = ret;
if(cljs.core.truth_(and__16773__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16773__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24121.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24122","meta24122",353845817,null)], null);
});

cljs.core.async.t_cljs$core$async24121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24121";

cljs.core.async.t_cljs$core$async24121.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async24121");
});

cljs.core.async.__GT_t_cljs$core$async24121 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24121(map_LT___$1,f__$1,ch__$1,meta24122){
return (new cljs.core.async.t_cljs$core$async24121(map_LT___$1,f__$1,ch__$1,meta24122));
});

}

return (new cljs.core.async.t_cljs$core$async24121(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24130 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24130 = (function (map_GT_,f,ch,meta24131){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24131 = meta24131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24132,meta24131__$1){
var self__ = this;
var _24132__$1 = this;
return (new cljs.core.async.t_cljs$core$async24130(self__.map_GT_,self__.f,self__.ch,meta24131__$1));
});

cljs.core.async.t_cljs$core$async24130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24132){
var self__ = this;
var _24132__$1 = this;
return self__.meta24131;
});

cljs.core.async.t_cljs$core$async24130.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24130.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24130.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24130.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24130.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24130.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24131","meta24131",-1464271237,null)], null);
});

cljs.core.async.t_cljs$core$async24130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24130";

cljs.core.async.t_cljs$core$async24130.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async24130");
});

cljs.core.async.__GT_t_cljs$core$async24130 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24130(map_GT___$1,f__$1,ch__$1,meta24131){
return (new cljs.core.async.t_cljs$core$async24130(map_GT___$1,f__$1,ch__$1,meta24131));
});

}

return (new cljs.core.async.t_cljs$core$async24130(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24136 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24136 = (function (filter_GT_,p,ch,meta24137){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24137 = meta24137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24138,meta24137__$1){
var self__ = this;
var _24138__$1 = this;
return (new cljs.core.async.t_cljs$core$async24136(self__.filter_GT_,self__.p,self__.ch,meta24137__$1));
});

cljs.core.async.t_cljs$core$async24136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24138){
var self__ = this;
var _24138__$1 = this;
return self__.meta24137;
});

cljs.core.async.t_cljs$core$async24136.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24136.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24136.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24136.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24136.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24136.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24136.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24137","meta24137",1203772185,null)], null);
});

cljs.core.async.t_cljs$core$async24136.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24136";

cljs.core.async.t_cljs$core$async24136.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async24136");
});

cljs.core.async.__GT_t_cljs$core$async24136 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24136(filter_GT___$1,p__$1,ch__$1,meta24137){
return (new cljs.core.async.t_cljs$core$async24136(filter_GT___$1,p__$1,ch__$1,meta24137));
});

}

return (new cljs.core.async.t_cljs$core$async24136(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24139 = [];
var len__17843__auto___24183 = arguments.length;
var i__17844__auto___24184 = (0);
while(true){
if((i__17844__auto___24184 < len__17843__auto___24183)){
args24139.push((arguments[i__17844__auto___24184]));

var G__24185 = (i__17844__auto___24184 + (1));
i__17844__auto___24184 = G__24185;
continue;
} else {
}
break;
}

var G__24141 = args24139.length;
switch (G__24141) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24139.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21937__auto___24187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto___24187,out){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto___24187,out){
return (function (state_24162){
var state_val_24163 = (state_24162[(1)]);
if((state_val_24163 === (7))){
var inst_24158 = (state_24162[(2)]);
var state_24162__$1 = state_24162;
var statearr_24164_24188 = state_24162__$1;
(statearr_24164_24188[(2)] = inst_24158);

(statearr_24164_24188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (1))){
var state_24162__$1 = state_24162;
var statearr_24165_24189 = state_24162__$1;
(statearr_24165_24189[(2)] = null);

(statearr_24165_24189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (4))){
var inst_24144 = (state_24162[(7)]);
var inst_24144__$1 = (state_24162[(2)]);
var inst_24145 = (inst_24144__$1 == null);
var state_24162__$1 = (function (){var statearr_24166 = state_24162;
(statearr_24166[(7)] = inst_24144__$1);

return statearr_24166;
})();
if(cljs.core.truth_(inst_24145)){
var statearr_24167_24190 = state_24162__$1;
(statearr_24167_24190[(1)] = (5));

} else {
var statearr_24168_24191 = state_24162__$1;
(statearr_24168_24191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (6))){
var inst_24144 = (state_24162[(7)]);
var inst_24149 = p.call(null,inst_24144);
var state_24162__$1 = state_24162;
if(cljs.core.truth_(inst_24149)){
var statearr_24169_24192 = state_24162__$1;
(statearr_24169_24192[(1)] = (8));

} else {
var statearr_24170_24193 = state_24162__$1;
(statearr_24170_24193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (3))){
var inst_24160 = (state_24162[(2)]);
var state_24162__$1 = state_24162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24162__$1,inst_24160);
} else {
if((state_val_24163 === (2))){
var state_24162__$1 = state_24162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24162__$1,(4),ch);
} else {
if((state_val_24163 === (11))){
var inst_24152 = (state_24162[(2)]);
var state_24162__$1 = state_24162;
var statearr_24171_24194 = state_24162__$1;
(statearr_24171_24194[(2)] = inst_24152);

(statearr_24171_24194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (9))){
var state_24162__$1 = state_24162;
var statearr_24172_24195 = state_24162__$1;
(statearr_24172_24195[(2)] = null);

(statearr_24172_24195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (5))){
var inst_24147 = cljs.core.async.close_BANG_.call(null,out);
var state_24162__$1 = state_24162;
var statearr_24173_24196 = state_24162__$1;
(statearr_24173_24196[(2)] = inst_24147);

(statearr_24173_24196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (10))){
var inst_24155 = (state_24162[(2)]);
var state_24162__$1 = (function (){var statearr_24174 = state_24162;
(statearr_24174[(8)] = inst_24155);

return statearr_24174;
})();
var statearr_24175_24197 = state_24162__$1;
(statearr_24175_24197[(2)] = null);

(statearr_24175_24197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (8))){
var inst_24144 = (state_24162[(7)]);
var state_24162__$1 = state_24162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24162__$1,(11),out,inst_24144);
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
});})(c__21937__auto___24187,out))
;
return ((function (switch__18798__auto__,c__21937__auto___24187,out){
return (function() {
var cljs$core$async$state_machine__18799__auto__ = null;
var cljs$core$async$state_machine__18799__auto____0 = (function (){
var statearr_24179 = [null,null,null,null,null,null,null,null,null];
(statearr_24179[(0)] = cljs$core$async$state_machine__18799__auto__);

(statearr_24179[(1)] = (1));

return statearr_24179;
});
var cljs$core$async$state_machine__18799__auto____1 = (function (state_24162){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_24162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e24180){if((e24180 instanceof Object)){
var ex__18802__auto__ = e24180;
var statearr_24181_24198 = state_24162;
(statearr_24181_24198[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24199 = state_24162;
state_24162 = G__24199;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
cljs$core$async$state_machine__18799__auto__ = function(state_24162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18799__auto____1.call(this,state_24162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18799__auto____0;
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18799__auto____1;
return cljs$core$async$state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto___24187,out))
})();
var state__21939__auto__ = (function (){var statearr_24182 = f__21938__auto__.call(null);
(statearr_24182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto___24187);

return statearr_24182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto___24187,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24200 = [];
var len__17843__auto___24203 = arguments.length;
var i__17844__auto___24204 = (0);
while(true){
if((i__17844__auto___24204 < len__17843__auto___24203)){
args24200.push((arguments[i__17844__auto___24204]));

var G__24205 = (i__17844__auto___24204 + (1));
i__17844__auto___24204 = G__24205;
continue;
} else {
}
break;
}

var G__24202 = args24200.length;
switch (G__24202) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24200.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto__){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto__){
return (function (state_24372){
var state_val_24373 = (state_24372[(1)]);
if((state_val_24373 === (7))){
var inst_24368 = (state_24372[(2)]);
var state_24372__$1 = state_24372;
var statearr_24374_24415 = state_24372__$1;
(statearr_24374_24415[(2)] = inst_24368);

(statearr_24374_24415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (20))){
var inst_24338 = (state_24372[(7)]);
var inst_24349 = (state_24372[(2)]);
var inst_24350 = cljs.core.next.call(null,inst_24338);
var inst_24324 = inst_24350;
var inst_24325 = null;
var inst_24326 = (0);
var inst_24327 = (0);
var state_24372__$1 = (function (){var statearr_24375 = state_24372;
(statearr_24375[(8)] = inst_24327);

(statearr_24375[(9)] = inst_24324);

(statearr_24375[(10)] = inst_24325);

(statearr_24375[(11)] = inst_24349);

(statearr_24375[(12)] = inst_24326);

return statearr_24375;
})();
var statearr_24376_24416 = state_24372__$1;
(statearr_24376_24416[(2)] = null);

(statearr_24376_24416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (1))){
var state_24372__$1 = state_24372;
var statearr_24377_24417 = state_24372__$1;
(statearr_24377_24417[(2)] = null);

(statearr_24377_24417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (4))){
var inst_24313 = (state_24372[(13)]);
var inst_24313__$1 = (state_24372[(2)]);
var inst_24314 = (inst_24313__$1 == null);
var state_24372__$1 = (function (){var statearr_24378 = state_24372;
(statearr_24378[(13)] = inst_24313__$1);

return statearr_24378;
})();
if(cljs.core.truth_(inst_24314)){
var statearr_24379_24418 = state_24372__$1;
(statearr_24379_24418[(1)] = (5));

} else {
var statearr_24380_24419 = state_24372__$1;
(statearr_24380_24419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (15))){
var state_24372__$1 = state_24372;
var statearr_24384_24420 = state_24372__$1;
(statearr_24384_24420[(2)] = null);

(statearr_24384_24420[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (21))){
var state_24372__$1 = state_24372;
var statearr_24385_24421 = state_24372__$1;
(statearr_24385_24421[(2)] = null);

(statearr_24385_24421[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (13))){
var inst_24327 = (state_24372[(8)]);
var inst_24324 = (state_24372[(9)]);
var inst_24325 = (state_24372[(10)]);
var inst_24326 = (state_24372[(12)]);
var inst_24334 = (state_24372[(2)]);
var inst_24335 = (inst_24327 + (1));
var tmp24381 = inst_24324;
var tmp24382 = inst_24325;
var tmp24383 = inst_24326;
var inst_24324__$1 = tmp24381;
var inst_24325__$1 = tmp24382;
var inst_24326__$1 = tmp24383;
var inst_24327__$1 = inst_24335;
var state_24372__$1 = (function (){var statearr_24386 = state_24372;
(statearr_24386[(8)] = inst_24327__$1);

(statearr_24386[(9)] = inst_24324__$1);

(statearr_24386[(10)] = inst_24325__$1);

(statearr_24386[(12)] = inst_24326__$1);

(statearr_24386[(14)] = inst_24334);

return statearr_24386;
})();
var statearr_24387_24422 = state_24372__$1;
(statearr_24387_24422[(2)] = null);

(statearr_24387_24422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (22))){
var state_24372__$1 = state_24372;
var statearr_24388_24423 = state_24372__$1;
(statearr_24388_24423[(2)] = null);

(statearr_24388_24423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (6))){
var inst_24313 = (state_24372[(13)]);
var inst_24322 = f.call(null,inst_24313);
var inst_24323 = cljs.core.seq.call(null,inst_24322);
var inst_24324 = inst_24323;
var inst_24325 = null;
var inst_24326 = (0);
var inst_24327 = (0);
var state_24372__$1 = (function (){var statearr_24389 = state_24372;
(statearr_24389[(8)] = inst_24327);

(statearr_24389[(9)] = inst_24324);

(statearr_24389[(10)] = inst_24325);

(statearr_24389[(12)] = inst_24326);

return statearr_24389;
})();
var statearr_24390_24424 = state_24372__$1;
(statearr_24390_24424[(2)] = null);

(statearr_24390_24424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (17))){
var inst_24338 = (state_24372[(7)]);
var inst_24342 = cljs.core.chunk_first.call(null,inst_24338);
var inst_24343 = cljs.core.chunk_rest.call(null,inst_24338);
var inst_24344 = cljs.core.count.call(null,inst_24342);
var inst_24324 = inst_24343;
var inst_24325 = inst_24342;
var inst_24326 = inst_24344;
var inst_24327 = (0);
var state_24372__$1 = (function (){var statearr_24391 = state_24372;
(statearr_24391[(8)] = inst_24327);

(statearr_24391[(9)] = inst_24324);

(statearr_24391[(10)] = inst_24325);

(statearr_24391[(12)] = inst_24326);

return statearr_24391;
})();
var statearr_24392_24425 = state_24372__$1;
(statearr_24392_24425[(2)] = null);

(statearr_24392_24425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (3))){
var inst_24370 = (state_24372[(2)]);
var state_24372__$1 = state_24372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24372__$1,inst_24370);
} else {
if((state_val_24373 === (12))){
var inst_24358 = (state_24372[(2)]);
var state_24372__$1 = state_24372;
var statearr_24393_24426 = state_24372__$1;
(statearr_24393_24426[(2)] = inst_24358);

(statearr_24393_24426[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (2))){
var state_24372__$1 = state_24372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24372__$1,(4),in$);
} else {
if((state_val_24373 === (23))){
var inst_24366 = (state_24372[(2)]);
var state_24372__$1 = state_24372;
var statearr_24394_24427 = state_24372__$1;
(statearr_24394_24427[(2)] = inst_24366);

(statearr_24394_24427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (19))){
var inst_24353 = (state_24372[(2)]);
var state_24372__$1 = state_24372;
var statearr_24395_24428 = state_24372__$1;
(statearr_24395_24428[(2)] = inst_24353);

(statearr_24395_24428[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (11))){
var inst_24324 = (state_24372[(9)]);
var inst_24338 = (state_24372[(7)]);
var inst_24338__$1 = cljs.core.seq.call(null,inst_24324);
var state_24372__$1 = (function (){var statearr_24396 = state_24372;
(statearr_24396[(7)] = inst_24338__$1);

return statearr_24396;
})();
if(inst_24338__$1){
var statearr_24397_24429 = state_24372__$1;
(statearr_24397_24429[(1)] = (14));

} else {
var statearr_24398_24430 = state_24372__$1;
(statearr_24398_24430[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (9))){
var inst_24360 = (state_24372[(2)]);
var inst_24361 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24372__$1 = (function (){var statearr_24399 = state_24372;
(statearr_24399[(15)] = inst_24360);

return statearr_24399;
})();
if(cljs.core.truth_(inst_24361)){
var statearr_24400_24431 = state_24372__$1;
(statearr_24400_24431[(1)] = (21));

} else {
var statearr_24401_24432 = state_24372__$1;
(statearr_24401_24432[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (5))){
var inst_24316 = cljs.core.async.close_BANG_.call(null,out);
var state_24372__$1 = state_24372;
var statearr_24402_24433 = state_24372__$1;
(statearr_24402_24433[(2)] = inst_24316);

(statearr_24402_24433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (14))){
var inst_24338 = (state_24372[(7)]);
var inst_24340 = cljs.core.chunked_seq_QMARK_.call(null,inst_24338);
var state_24372__$1 = state_24372;
if(inst_24340){
var statearr_24403_24434 = state_24372__$1;
(statearr_24403_24434[(1)] = (17));

} else {
var statearr_24404_24435 = state_24372__$1;
(statearr_24404_24435[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (16))){
var inst_24356 = (state_24372[(2)]);
var state_24372__$1 = state_24372;
var statearr_24405_24436 = state_24372__$1;
(statearr_24405_24436[(2)] = inst_24356);

(statearr_24405_24436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (10))){
var inst_24327 = (state_24372[(8)]);
var inst_24325 = (state_24372[(10)]);
var inst_24332 = cljs.core._nth.call(null,inst_24325,inst_24327);
var state_24372__$1 = state_24372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24372__$1,(13),out,inst_24332);
} else {
if((state_val_24373 === (18))){
var inst_24338 = (state_24372[(7)]);
var inst_24347 = cljs.core.first.call(null,inst_24338);
var state_24372__$1 = state_24372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24372__$1,(20),out,inst_24347);
} else {
if((state_val_24373 === (8))){
var inst_24327 = (state_24372[(8)]);
var inst_24326 = (state_24372[(12)]);
var inst_24329 = (inst_24327 < inst_24326);
var inst_24330 = inst_24329;
var state_24372__$1 = state_24372;
if(cljs.core.truth_(inst_24330)){
var statearr_24406_24437 = state_24372__$1;
(statearr_24406_24437[(1)] = (10));

} else {
var statearr_24407_24438 = state_24372__$1;
(statearr_24407_24438[(1)] = (11));

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
});})(c__21937__auto__))
;
return ((function (switch__18798__auto__,c__21937__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18799__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18799__auto____0 = (function (){
var statearr_24411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24411[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18799__auto__);

(statearr_24411[(1)] = (1));

return statearr_24411;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18799__auto____1 = (function (state_24372){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_24372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e24412){if((e24412 instanceof Object)){
var ex__18802__auto__ = e24412;
var statearr_24413_24439 = state_24372;
(statearr_24413_24439[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24440 = state_24372;
state_24372 = G__24440;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18799__auto__ = function(state_24372){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18799__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18799__auto____1.call(this,state_24372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18799__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18799__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto__))
})();
var state__21939__auto__ = (function (){var statearr_24414 = f__21938__auto__.call(null);
(statearr_24414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto__);

return statearr_24414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto__))
);

return c__21937__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24441 = [];
var len__17843__auto___24444 = arguments.length;
var i__17844__auto___24445 = (0);
while(true){
if((i__17844__auto___24445 < len__17843__auto___24444)){
args24441.push((arguments[i__17844__auto___24445]));

var G__24446 = (i__17844__auto___24445 + (1));
i__17844__auto___24445 = G__24446;
continue;
} else {
}
break;
}

var G__24443 = args24441.length;
switch (G__24443) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24441.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24448 = [];
var len__17843__auto___24451 = arguments.length;
var i__17844__auto___24452 = (0);
while(true){
if((i__17844__auto___24452 < len__17843__auto___24451)){
args24448.push((arguments[i__17844__auto___24452]));

var G__24453 = (i__17844__auto___24452 + (1));
i__17844__auto___24452 = G__24453;
continue;
} else {
}
break;
}

var G__24450 = args24448.length;
switch (G__24450) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24448.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24455 = [];
var len__17843__auto___24506 = arguments.length;
var i__17844__auto___24507 = (0);
while(true){
if((i__17844__auto___24507 < len__17843__auto___24506)){
args24455.push((arguments[i__17844__auto___24507]));

var G__24508 = (i__17844__auto___24507 + (1));
i__17844__auto___24507 = G__24508;
continue;
} else {
}
break;
}

var G__24457 = args24455.length;
switch (G__24457) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24455.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21937__auto___24510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto___24510,out){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto___24510,out){
return (function (state_24481){
var state_val_24482 = (state_24481[(1)]);
if((state_val_24482 === (7))){
var inst_24476 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
var statearr_24483_24511 = state_24481__$1;
(statearr_24483_24511[(2)] = inst_24476);

(statearr_24483_24511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (1))){
var inst_24458 = null;
var state_24481__$1 = (function (){var statearr_24484 = state_24481;
(statearr_24484[(7)] = inst_24458);

return statearr_24484;
})();
var statearr_24485_24512 = state_24481__$1;
(statearr_24485_24512[(2)] = null);

(statearr_24485_24512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (4))){
var inst_24461 = (state_24481[(8)]);
var inst_24461__$1 = (state_24481[(2)]);
var inst_24462 = (inst_24461__$1 == null);
var inst_24463 = cljs.core.not.call(null,inst_24462);
var state_24481__$1 = (function (){var statearr_24486 = state_24481;
(statearr_24486[(8)] = inst_24461__$1);

return statearr_24486;
})();
if(inst_24463){
var statearr_24487_24513 = state_24481__$1;
(statearr_24487_24513[(1)] = (5));

} else {
var statearr_24488_24514 = state_24481__$1;
(statearr_24488_24514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (6))){
var state_24481__$1 = state_24481;
var statearr_24489_24515 = state_24481__$1;
(statearr_24489_24515[(2)] = null);

(statearr_24489_24515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (3))){
var inst_24478 = (state_24481[(2)]);
var inst_24479 = cljs.core.async.close_BANG_.call(null,out);
var state_24481__$1 = (function (){var statearr_24490 = state_24481;
(statearr_24490[(9)] = inst_24478);

return statearr_24490;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24481__$1,inst_24479);
} else {
if((state_val_24482 === (2))){
var state_24481__$1 = state_24481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24481__$1,(4),ch);
} else {
if((state_val_24482 === (11))){
var inst_24461 = (state_24481[(8)]);
var inst_24470 = (state_24481[(2)]);
var inst_24458 = inst_24461;
var state_24481__$1 = (function (){var statearr_24491 = state_24481;
(statearr_24491[(10)] = inst_24470);

(statearr_24491[(7)] = inst_24458);

return statearr_24491;
})();
var statearr_24492_24516 = state_24481__$1;
(statearr_24492_24516[(2)] = null);

(statearr_24492_24516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (9))){
var inst_24461 = (state_24481[(8)]);
var state_24481__$1 = state_24481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24481__$1,(11),out,inst_24461);
} else {
if((state_val_24482 === (5))){
var inst_24458 = (state_24481[(7)]);
var inst_24461 = (state_24481[(8)]);
var inst_24465 = cljs.core._EQ_.call(null,inst_24461,inst_24458);
var state_24481__$1 = state_24481;
if(inst_24465){
var statearr_24494_24517 = state_24481__$1;
(statearr_24494_24517[(1)] = (8));

} else {
var statearr_24495_24518 = state_24481__$1;
(statearr_24495_24518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (10))){
var inst_24473 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
var statearr_24496_24519 = state_24481__$1;
(statearr_24496_24519[(2)] = inst_24473);

(statearr_24496_24519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (8))){
var inst_24458 = (state_24481[(7)]);
var tmp24493 = inst_24458;
var inst_24458__$1 = tmp24493;
var state_24481__$1 = (function (){var statearr_24497 = state_24481;
(statearr_24497[(7)] = inst_24458__$1);

return statearr_24497;
})();
var statearr_24498_24520 = state_24481__$1;
(statearr_24498_24520[(2)] = null);

(statearr_24498_24520[(1)] = (2));


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
});})(c__21937__auto___24510,out))
;
return ((function (switch__18798__auto__,c__21937__auto___24510,out){
return (function() {
var cljs$core$async$state_machine__18799__auto__ = null;
var cljs$core$async$state_machine__18799__auto____0 = (function (){
var statearr_24502 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24502[(0)] = cljs$core$async$state_machine__18799__auto__);

(statearr_24502[(1)] = (1));

return statearr_24502;
});
var cljs$core$async$state_machine__18799__auto____1 = (function (state_24481){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_24481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e24503){if((e24503 instanceof Object)){
var ex__18802__auto__ = e24503;
var statearr_24504_24521 = state_24481;
(statearr_24504_24521[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24522 = state_24481;
state_24481 = G__24522;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
cljs$core$async$state_machine__18799__auto__ = function(state_24481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18799__auto____1.call(this,state_24481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18799__auto____0;
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18799__auto____1;
return cljs$core$async$state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto___24510,out))
})();
var state__21939__auto__ = (function (){var statearr_24505 = f__21938__auto__.call(null);
(statearr_24505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto___24510);

return statearr_24505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto___24510,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24523 = [];
var len__17843__auto___24593 = arguments.length;
var i__17844__auto___24594 = (0);
while(true){
if((i__17844__auto___24594 < len__17843__auto___24593)){
args24523.push((arguments[i__17844__auto___24594]));

var G__24595 = (i__17844__auto___24594 + (1));
i__17844__auto___24594 = G__24595;
continue;
} else {
}
break;
}

var G__24525 = args24523.length;
switch (G__24525) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24523.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21937__auto___24597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto___24597,out){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto___24597,out){
return (function (state_24563){
var state_val_24564 = (state_24563[(1)]);
if((state_val_24564 === (7))){
var inst_24559 = (state_24563[(2)]);
var state_24563__$1 = state_24563;
var statearr_24565_24598 = state_24563__$1;
(statearr_24565_24598[(2)] = inst_24559);

(statearr_24565_24598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (1))){
var inst_24526 = (new Array(n));
var inst_24527 = inst_24526;
var inst_24528 = (0);
var state_24563__$1 = (function (){var statearr_24566 = state_24563;
(statearr_24566[(7)] = inst_24528);

(statearr_24566[(8)] = inst_24527);

return statearr_24566;
})();
var statearr_24567_24599 = state_24563__$1;
(statearr_24567_24599[(2)] = null);

(statearr_24567_24599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (4))){
var inst_24531 = (state_24563[(9)]);
var inst_24531__$1 = (state_24563[(2)]);
var inst_24532 = (inst_24531__$1 == null);
var inst_24533 = cljs.core.not.call(null,inst_24532);
var state_24563__$1 = (function (){var statearr_24568 = state_24563;
(statearr_24568[(9)] = inst_24531__$1);

return statearr_24568;
})();
if(inst_24533){
var statearr_24569_24600 = state_24563__$1;
(statearr_24569_24600[(1)] = (5));

} else {
var statearr_24570_24601 = state_24563__$1;
(statearr_24570_24601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (15))){
var inst_24553 = (state_24563[(2)]);
var state_24563__$1 = state_24563;
var statearr_24571_24602 = state_24563__$1;
(statearr_24571_24602[(2)] = inst_24553);

(statearr_24571_24602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (13))){
var state_24563__$1 = state_24563;
var statearr_24572_24603 = state_24563__$1;
(statearr_24572_24603[(2)] = null);

(statearr_24572_24603[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (6))){
var inst_24528 = (state_24563[(7)]);
var inst_24549 = (inst_24528 > (0));
var state_24563__$1 = state_24563;
if(cljs.core.truth_(inst_24549)){
var statearr_24573_24604 = state_24563__$1;
(statearr_24573_24604[(1)] = (12));

} else {
var statearr_24574_24605 = state_24563__$1;
(statearr_24574_24605[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (3))){
var inst_24561 = (state_24563[(2)]);
var state_24563__$1 = state_24563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24563__$1,inst_24561);
} else {
if((state_val_24564 === (12))){
var inst_24527 = (state_24563[(8)]);
var inst_24551 = cljs.core.vec.call(null,inst_24527);
var state_24563__$1 = state_24563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24563__$1,(15),out,inst_24551);
} else {
if((state_val_24564 === (2))){
var state_24563__$1 = state_24563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24563__$1,(4),ch);
} else {
if((state_val_24564 === (11))){
var inst_24543 = (state_24563[(2)]);
var inst_24544 = (new Array(n));
var inst_24527 = inst_24544;
var inst_24528 = (0);
var state_24563__$1 = (function (){var statearr_24575 = state_24563;
(statearr_24575[(7)] = inst_24528);

(statearr_24575[(8)] = inst_24527);

(statearr_24575[(10)] = inst_24543);

return statearr_24575;
})();
var statearr_24576_24606 = state_24563__$1;
(statearr_24576_24606[(2)] = null);

(statearr_24576_24606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (9))){
var inst_24527 = (state_24563[(8)]);
var inst_24541 = cljs.core.vec.call(null,inst_24527);
var state_24563__$1 = state_24563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24563__$1,(11),out,inst_24541);
} else {
if((state_val_24564 === (5))){
var inst_24536 = (state_24563[(11)]);
var inst_24528 = (state_24563[(7)]);
var inst_24527 = (state_24563[(8)]);
var inst_24531 = (state_24563[(9)]);
var inst_24535 = (inst_24527[inst_24528] = inst_24531);
var inst_24536__$1 = (inst_24528 + (1));
var inst_24537 = (inst_24536__$1 < n);
var state_24563__$1 = (function (){var statearr_24577 = state_24563;
(statearr_24577[(11)] = inst_24536__$1);

(statearr_24577[(12)] = inst_24535);

return statearr_24577;
})();
if(cljs.core.truth_(inst_24537)){
var statearr_24578_24607 = state_24563__$1;
(statearr_24578_24607[(1)] = (8));

} else {
var statearr_24579_24608 = state_24563__$1;
(statearr_24579_24608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (14))){
var inst_24556 = (state_24563[(2)]);
var inst_24557 = cljs.core.async.close_BANG_.call(null,out);
var state_24563__$1 = (function (){var statearr_24581 = state_24563;
(statearr_24581[(13)] = inst_24556);

return statearr_24581;
})();
var statearr_24582_24609 = state_24563__$1;
(statearr_24582_24609[(2)] = inst_24557);

(statearr_24582_24609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (10))){
var inst_24547 = (state_24563[(2)]);
var state_24563__$1 = state_24563;
var statearr_24583_24610 = state_24563__$1;
(statearr_24583_24610[(2)] = inst_24547);

(statearr_24583_24610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (8))){
var inst_24536 = (state_24563[(11)]);
var inst_24527 = (state_24563[(8)]);
var tmp24580 = inst_24527;
var inst_24527__$1 = tmp24580;
var inst_24528 = inst_24536;
var state_24563__$1 = (function (){var statearr_24584 = state_24563;
(statearr_24584[(7)] = inst_24528);

(statearr_24584[(8)] = inst_24527__$1);

return statearr_24584;
})();
var statearr_24585_24611 = state_24563__$1;
(statearr_24585_24611[(2)] = null);

(statearr_24585_24611[(1)] = (2));


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
});})(c__21937__auto___24597,out))
;
return ((function (switch__18798__auto__,c__21937__auto___24597,out){
return (function() {
var cljs$core$async$state_machine__18799__auto__ = null;
var cljs$core$async$state_machine__18799__auto____0 = (function (){
var statearr_24589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24589[(0)] = cljs$core$async$state_machine__18799__auto__);

(statearr_24589[(1)] = (1));

return statearr_24589;
});
var cljs$core$async$state_machine__18799__auto____1 = (function (state_24563){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_24563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e24590){if((e24590 instanceof Object)){
var ex__18802__auto__ = e24590;
var statearr_24591_24612 = state_24563;
(statearr_24591_24612[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24613 = state_24563;
state_24563 = G__24613;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
cljs$core$async$state_machine__18799__auto__ = function(state_24563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18799__auto____1.call(this,state_24563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18799__auto____0;
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18799__auto____1;
return cljs$core$async$state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto___24597,out))
})();
var state__21939__auto__ = (function (){var statearr_24592 = f__21938__auto__.call(null);
(statearr_24592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto___24597);

return statearr_24592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto___24597,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24614 = [];
var len__17843__auto___24688 = arguments.length;
var i__17844__auto___24689 = (0);
while(true){
if((i__17844__auto___24689 < len__17843__auto___24688)){
args24614.push((arguments[i__17844__auto___24689]));

var G__24690 = (i__17844__auto___24689 + (1));
i__17844__auto___24689 = G__24690;
continue;
} else {
}
break;
}

var G__24616 = args24614.length;
switch (G__24616) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24614.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21937__auto___24692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto___24692,out){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto___24692,out){
return (function (state_24658){
var state_val_24659 = (state_24658[(1)]);
if((state_val_24659 === (7))){
var inst_24654 = (state_24658[(2)]);
var state_24658__$1 = state_24658;
var statearr_24660_24693 = state_24658__$1;
(statearr_24660_24693[(2)] = inst_24654);

(statearr_24660_24693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24659 === (1))){
var inst_24617 = [];
var inst_24618 = inst_24617;
var inst_24619 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24658__$1 = (function (){var statearr_24661 = state_24658;
(statearr_24661[(7)] = inst_24619);

(statearr_24661[(8)] = inst_24618);

return statearr_24661;
})();
var statearr_24662_24694 = state_24658__$1;
(statearr_24662_24694[(2)] = null);

(statearr_24662_24694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24659 === (4))){
var inst_24622 = (state_24658[(9)]);
var inst_24622__$1 = (state_24658[(2)]);
var inst_24623 = (inst_24622__$1 == null);
var inst_24624 = cljs.core.not.call(null,inst_24623);
var state_24658__$1 = (function (){var statearr_24663 = state_24658;
(statearr_24663[(9)] = inst_24622__$1);

return statearr_24663;
})();
if(inst_24624){
var statearr_24664_24695 = state_24658__$1;
(statearr_24664_24695[(1)] = (5));

} else {
var statearr_24665_24696 = state_24658__$1;
(statearr_24665_24696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24659 === (15))){
var inst_24648 = (state_24658[(2)]);
var state_24658__$1 = state_24658;
var statearr_24666_24697 = state_24658__$1;
(statearr_24666_24697[(2)] = inst_24648);

(statearr_24666_24697[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24659 === (13))){
var state_24658__$1 = state_24658;
var statearr_24667_24698 = state_24658__$1;
(statearr_24667_24698[(2)] = null);

(statearr_24667_24698[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24659 === (6))){
var inst_24618 = (state_24658[(8)]);
var inst_24643 = inst_24618.length;
var inst_24644 = (inst_24643 > (0));
var state_24658__$1 = state_24658;
if(cljs.core.truth_(inst_24644)){
var statearr_24668_24699 = state_24658__$1;
(statearr_24668_24699[(1)] = (12));

} else {
var statearr_24669_24700 = state_24658__$1;
(statearr_24669_24700[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24659 === (3))){
var inst_24656 = (state_24658[(2)]);
var state_24658__$1 = state_24658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24658__$1,inst_24656);
} else {
if((state_val_24659 === (12))){
var inst_24618 = (state_24658[(8)]);
var inst_24646 = cljs.core.vec.call(null,inst_24618);
var state_24658__$1 = state_24658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24658__$1,(15),out,inst_24646);
} else {
if((state_val_24659 === (2))){
var state_24658__$1 = state_24658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24658__$1,(4),ch);
} else {
if((state_val_24659 === (11))){
var inst_24626 = (state_24658[(10)]);
var inst_24622 = (state_24658[(9)]);
var inst_24636 = (state_24658[(2)]);
var inst_24637 = [];
var inst_24638 = inst_24637.push(inst_24622);
var inst_24618 = inst_24637;
var inst_24619 = inst_24626;
var state_24658__$1 = (function (){var statearr_24670 = state_24658;
(statearr_24670[(7)] = inst_24619);

(statearr_24670[(8)] = inst_24618);

(statearr_24670[(11)] = inst_24636);

(statearr_24670[(12)] = inst_24638);

return statearr_24670;
})();
var statearr_24671_24701 = state_24658__$1;
(statearr_24671_24701[(2)] = null);

(statearr_24671_24701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24659 === (9))){
var inst_24618 = (state_24658[(8)]);
var inst_24634 = cljs.core.vec.call(null,inst_24618);
var state_24658__$1 = state_24658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24658__$1,(11),out,inst_24634);
} else {
if((state_val_24659 === (5))){
var inst_24619 = (state_24658[(7)]);
var inst_24626 = (state_24658[(10)]);
var inst_24622 = (state_24658[(9)]);
var inst_24626__$1 = f.call(null,inst_24622);
var inst_24627 = cljs.core._EQ_.call(null,inst_24626__$1,inst_24619);
var inst_24628 = cljs.core.keyword_identical_QMARK_.call(null,inst_24619,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24629 = (inst_24627) || (inst_24628);
var state_24658__$1 = (function (){var statearr_24672 = state_24658;
(statearr_24672[(10)] = inst_24626__$1);

return statearr_24672;
})();
if(cljs.core.truth_(inst_24629)){
var statearr_24673_24702 = state_24658__$1;
(statearr_24673_24702[(1)] = (8));

} else {
var statearr_24674_24703 = state_24658__$1;
(statearr_24674_24703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24659 === (14))){
var inst_24651 = (state_24658[(2)]);
var inst_24652 = cljs.core.async.close_BANG_.call(null,out);
var state_24658__$1 = (function (){var statearr_24676 = state_24658;
(statearr_24676[(13)] = inst_24651);

return statearr_24676;
})();
var statearr_24677_24704 = state_24658__$1;
(statearr_24677_24704[(2)] = inst_24652);

(statearr_24677_24704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24659 === (10))){
var inst_24641 = (state_24658[(2)]);
var state_24658__$1 = state_24658;
var statearr_24678_24705 = state_24658__$1;
(statearr_24678_24705[(2)] = inst_24641);

(statearr_24678_24705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24659 === (8))){
var inst_24618 = (state_24658[(8)]);
var inst_24626 = (state_24658[(10)]);
var inst_24622 = (state_24658[(9)]);
var inst_24631 = inst_24618.push(inst_24622);
var tmp24675 = inst_24618;
var inst_24618__$1 = tmp24675;
var inst_24619 = inst_24626;
var state_24658__$1 = (function (){var statearr_24679 = state_24658;
(statearr_24679[(7)] = inst_24619);

(statearr_24679[(8)] = inst_24618__$1);

(statearr_24679[(14)] = inst_24631);

return statearr_24679;
})();
var statearr_24680_24706 = state_24658__$1;
(statearr_24680_24706[(2)] = null);

(statearr_24680_24706[(1)] = (2));


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
});})(c__21937__auto___24692,out))
;
return ((function (switch__18798__auto__,c__21937__auto___24692,out){
return (function() {
var cljs$core$async$state_machine__18799__auto__ = null;
var cljs$core$async$state_machine__18799__auto____0 = (function (){
var statearr_24684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24684[(0)] = cljs$core$async$state_machine__18799__auto__);

(statearr_24684[(1)] = (1));

return statearr_24684;
});
var cljs$core$async$state_machine__18799__auto____1 = (function (state_24658){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_24658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e24685){if((e24685 instanceof Object)){
var ex__18802__auto__ = e24685;
var statearr_24686_24707 = state_24658;
(statearr_24686_24707[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24708 = state_24658;
state_24658 = G__24708;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
cljs$core$async$state_machine__18799__auto__ = function(state_24658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18799__auto____1.call(this,state_24658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18799__auto____0;
cljs$core$async$state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18799__auto____1;
return cljs$core$async$state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto___24692,out))
})();
var state__21939__auto__ = (function (){var statearr_24687 = f__21938__auto__.call(null);
(statearr_24687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto___24692);

return statearr_24687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto___24692,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map