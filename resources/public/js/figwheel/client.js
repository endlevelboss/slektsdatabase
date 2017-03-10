// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26323 = cljs.core._EQ_;
var expr__26324 = (function (){var or__16785__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26323.call(null,"true",expr__26324))){
return true;
} else {
if(cljs.core.truth_(pred__26323.call(null,"false",expr__26324))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26324)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26326__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26327__i = 0, G__26327__a = new Array(arguments.length -  0);
while (G__26327__i < G__26327__a.length) {G__26327__a[G__26327__i] = arguments[G__26327__i + 0]; ++G__26327__i;}
  args = new cljs.core.IndexedSeq(G__26327__a,0);
} 
return G__26326__delegate.call(this,args);};
G__26326.cljs$lang$maxFixedArity = 0;
G__26326.cljs$lang$applyTo = (function (arglist__26328){
var args = cljs.core.seq(arglist__26328);
return G__26326__delegate(args);
});
G__26326.cljs$core$IFn$_invoke$arity$variadic = G__26326__delegate;
return G__26326;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26329){
var map__26332 = p__26329;
var map__26332__$1 = ((((!((map__26332 == null)))?((((map__26332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26332):map__26332);
var message = cljs.core.get.call(null,map__26332__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26332__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16785__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16773__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16773__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16773__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21937__auto___26494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto___26494,ch){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto___26494,ch){
return (function (state_26463){
var state_val_26464 = (state_26463[(1)]);
if((state_val_26464 === (7))){
var inst_26459 = (state_26463[(2)]);
var state_26463__$1 = state_26463;
var statearr_26465_26495 = state_26463__$1;
(statearr_26465_26495[(2)] = inst_26459);

(statearr_26465_26495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (1))){
var state_26463__$1 = state_26463;
var statearr_26466_26496 = state_26463__$1;
(statearr_26466_26496[(2)] = null);

(statearr_26466_26496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (4))){
var inst_26416 = (state_26463[(7)]);
var inst_26416__$1 = (state_26463[(2)]);
var state_26463__$1 = (function (){var statearr_26467 = state_26463;
(statearr_26467[(7)] = inst_26416__$1);

return statearr_26467;
})();
if(cljs.core.truth_(inst_26416__$1)){
var statearr_26468_26497 = state_26463__$1;
(statearr_26468_26497[(1)] = (5));

} else {
var statearr_26469_26498 = state_26463__$1;
(statearr_26469_26498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (15))){
var inst_26423 = (state_26463[(8)]);
var inst_26438 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26423);
var inst_26439 = cljs.core.first.call(null,inst_26438);
var inst_26440 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26439);
var inst_26441 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26440)].join('');
var inst_26442 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26441);
var state_26463__$1 = state_26463;
var statearr_26470_26499 = state_26463__$1;
(statearr_26470_26499[(2)] = inst_26442);

(statearr_26470_26499[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (13))){
var inst_26447 = (state_26463[(2)]);
var state_26463__$1 = state_26463;
var statearr_26471_26500 = state_26463__$1;
(statearr_26471_26500[(2)] = inst_26447);

(statearr_26471_26500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (6))){
var state_26463__$1 = state_26463;
var statearr_26472_26501 = state_26463__$1;
(statearr_26472_26501[(2)] = null);

(statearr_26472_26501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (17))){
var inst_26445 = (state_26463[(2)]);
var state_26463__$1 = state_26463;
var statearr_26473_26502 = state_26463__$1;
(statearr_26473_26502[(2)] = inst_26445);

(statearr_26473_26502[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (3))){
var inst_26461 = (state_26463[(2)]);
var state_26463__$1 = state_26463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26463__$1,inst_26461);
} else {
if((state_val_26464 === (12))){
var inst_26422 = (state_26463[(9)]);
var inst_26436 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26422,opts);
var state_26463__$1 = state_26463;
if(cljs.core.truth_(inst_26436)){
var statearr_26474_26503 = state_26463__$1;
(statearr_26474_26503[(1)] = (15));

} else {
var statearr_26475_26504 = state_26463__$1;
(statearr_26475_26504[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (2))){
var state_26463__$1 = state_26463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26463__$1,(4),ch);
} else {
if((state_val_26464 === (11))){
var inst_26423 = (state_26463[(8)]);
var inst_26428 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26429 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26423);
var inst_26430 = cljs.core.async.timeout.call(null,(1000));
var inst_26431 = [inst_26429,inst_26430];
var inst_26432 = (new cljs.core.PersistentVector(null,2,(5),inst_26428,inst_26431,null));
var state_26463__$1 = state_26463;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26463__$1,(14),inst_26432);
} else {
if((state_val_26464 === (9))){
var inst_26423 = (state_26463[(8)]);
var inst_26449 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26450 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26423);
var inst_26451 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26450);
var inst_26452 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26451)].join('');
var inst_26453 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26452);
var state_26463__$1 = (function (){var statearr_26476 = state_26463;
(statearr_26476[(10)] = inst_26449);

return statearr_26476;
})();
var statearr_26477_26505 = state_26463__$1;
(statearr_26477_26505[(2)] = inst_26453);

(statearr_26477_26505[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (5))){
var inst_26416 = (state_26463[(7)]);
var inst_26418 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26419 = (new cljs.core.PersistentArrayMap(null,2,inst_26418,null));
var inst_26420 = (new cljs.core.PersistentHashSet(null,inst_26419,null));
var inst_26421 = figwheel.client.focus_msgs.call(null,inst_26420,inst_26416);
var inst_26422 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26421);
var inst_26423 = cljs.core.first.call(null,inst_26421);
var inst_26424 = figwheel.client.autoload_QMARK_.call(null);
var state_26463__$1 = (function (){var statearr_26478 = state_26463;
(statearr_26478[(8)] = inst_26423);

(statearr_26478[(9)] = inst_26422);

return statearr_26478;
})();
if(cljs.core.truth_(inst_26424)){
var statearr_26479_26506 = state_26463__$1;
(statearr_26479_26506[(1)] = (8));

} else {
var statearr_26480_26507 = state_26463__$1;
(statearr_26480_26507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (14))){
var inst_26434 = (state_26463[(2)]);
var state_26463__$1 = state_26463;
var statearr_26481_26508 = state_26463__$1;
(statearr_26481_26508[(2)] = inst_26434);

(statearr_26481_26508[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (16))){
var state_26463__$1 = state_26463;
var statearr_26482_26509 = state_26463__$1;
(statearr_26482_26509[(2)] = null);

(statearr_26482_26509[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (10))){
var inst_26455 = (state_26463[(2)]);
var state_26463__$1 = (function (){var statearr_26483 = state_26463;
(statearr_26483[(11)] = inst_26455);

return statearr_26483;
})();
var statearr_26484_26510 = state_26463__$1;
(statearr_26484_26510[(2)] = null);

(statearr_26484_26510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (8))){
var inst_26422 = (state_26463[(9)]);
var inst_26426 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26422,opts);
var state_26463__$1 = state_26463;
if(cljs.core.truth_(inst_26426)){
var statearr_26485_26511 = state_26463__$1;
(statearr_26485_26511[(1)] = (11));

} else {
var statearr_26486_26512 = state_26463__$1;
(statearr_26486_26512[(1)] = (12));

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
});})(c__21937__auto___26494,ch))
;
return ((function (switch__18798__auto__,c__21937__auto___26494,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18799__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18799__auto____0 = (function (){
var statearr_26490 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26490[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18799__auto__);

(statearr_26490[(1)] = (1));

return statearr_26490;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18799__auto____1 = (function (state_26463){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_26463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e26491){if((e26491 instanceof Object)){
var ex__18802__auto__ = e26491;
var statearr_26492_26513 = state_26463;
(statearr_26492_26513[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26514 = state_26463;
state_26463 = G__26514;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18799__auto__ = function(state_26463){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18799__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18799__auto____1.call(this,state_26463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18799__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18799__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto___26494,ch))
})();
var state__21939__auto__ = (function (){var statearr_26493 = f__21938__auto__.call(null);
(statearr_26493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto___26494);

return statearr_26493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto___26494,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26515_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26515_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26522 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26522){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26520 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26521 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26520,_STAR_print_newline_STAR_26521,base_path_26522){
return (function() { 
var G__26523__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26523 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26524__i = 0, G__26524__a = new Array(arguments.length -  0);
while (G__26524__i < G__26524__a.length) {G__26524__a[G__26524__i] = arguments[G__26524__i + 0]; ++G__26524__i;}
  args = new cljs.core.IndexedSeq(G__26524__a,0);
} 
return G__26523__delegate.call(this,args);};
G__26523.cljs$lang$maxFixedArity = 0;
G__26523.cljs$lang$applyTo = (function (arglist__26525){
var args = cljs.core.seq(arglist__26525);
return G__26523__delegate(args);
});
G__26523.cljs$core$IFn$_invoke$arity$variadic = G__26523__delegate;
return G__26523;
})()
;})(_STAR_print_fn_STAR_26520,_STAR_print_newline_STAR_26521,base_path_26522))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26521;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26520;
}}catch (e26519){if((e26519 instanceof Error)){
var e = e26519;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26522], null));
} else {
var e = e26519;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26522))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26526){
var map__26533 = p__26526;
var map__26533__$1 = ((((!((map__26533 == null)))?((((map__26533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26533):map__26533);
var opts = map__26533__$1;
var build_id = cljs.core.get.call(null,map__26533__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26533,map__26533__$1,opts,build_id){
return (function (p__26535){
var vec__26536 = p__26535;
var map__26537 = cljs.core.nth.call(null,vec__26536,(0),null);
var map__26537__$1 = ((((!((map__26537 == null)))?((((map__26537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26537):map__26537);
var msg = map__26537__$1;
var msg_name = cljs.core.get.call(null,map__26537__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26536,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26536,map__26537,map__26537__$1,msg,msg_name,_,map__26533,map__26533__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26536,map__26537,map__26537__$1,msg,msg_name,_,map__26533,map__26533__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26533,map__26533__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26543){
var vec__26544 = p__26543;
var map__26545 = cljs.core.nth.call(null,vec__26544,(0),null);
var map__26545__$1 = ((((!((map__26545 == null)))?((((map__26545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26545):map__26545);
var msg = map__26545__$1;
var msg_name = cljs.core.get.call(null,map__26545__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26544,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26547){
var map__26557 = p__26547;
var map__26557__$1 = ((((!((map__26557 == null)))?((((map__26557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26557):map__26557);
var on_compile_warning = cljs.core.get.call(null,map__26557__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26557__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26557,map__26557__$1,on_compile_warning,on_compile_fail){
return (function (p__26559){
var vec__26560 = p__26559;
var map__26561 = cljs.core.nth.call(null,vec__26560,(0),null);
var map__26561__$1 = ((((!((map__26561 == null)))?((((map__26561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26561):map__26561);
var msg = map__26561__$1;
var msg_name = cljs.core.get.call(null,map__26561__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26560,(1));
var pred__26563 = cljs.core._EQ_;
var expr__26564 = msg_name;
if(cljs.core.truth_(pred__26563.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26564))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26563.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26564))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26557,map__26557__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto__,msg_hist,msg_names,msg){
return (function (state_26780){
var state_val_26781 = (state_26780[(1)]);
if((state_val_26781 === (7))){
var inst_26704 = (state_26780[(2)]);
var state_26780__$1 = state_26780;
if(cljs.core.truth_(inst_26704)){
var statearr_26782_26828 = state_26780__$1;
(statearr_26782_26828[(1)] = (8));

} else {
var statearr_26783_26829 = state_26780__$1;
(statearr_26783_26829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (20))){
var inst_26774 = (state_26780[(2)]);
var state_26780__$1 = state_26780;
var statearr_26784_26830 = state_26780__$1;
(statearr_26784_26830[(2)] = inst_26774);

(statearr_26784_26830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (27))){
var inst_26770 = (state_26780[(2)]);
var state_26780__$1 = state_26780;
var statearr_26785_26831 = state_26780__$1;
(statearr_26785_26831[(2)] = inst_26770);

(statearr_26785_26831[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (1))){
var inst_26697 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26780__$1 = state_26780;
if(cljs.core.truth_(inst_26697)){
var statearr_26786_26832 = state_26780__$1;
(statearr_26786_26832[(1)] = (2));

} else {
var statearr_26787_26833 = state_26780__$1;
(statearr_26787_26833[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (24))){
var inst_26772 = (state_26780[(2)]);
var state_26780__$1 = state_26780;
var statearr_26788_26834 = state_26780__$1;
(statearr_26788_26834[(2)] = inst_26772);

(statearr_26788_26834[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (4))){
var inst_26778 = (state_26780[(2)]);
var state_26780__$1 = state_26780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26780__$1,inst_26778);
} else {
if((state_val_26781 === (15))){
var inst_26776 = (state_26780[(2)]);
var state_26780__$1 = state_26780;
var statearr_26789_26835 = state_26780__$1;
(statearr_26789_26835[(2)] = inst_26776);

(statearr_26789_26835[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (21))){
var inst_26735 = (state_26780[(2)]);
var state_26780__$1 = state_26780;
var statearr_26790_26836 = state_26780__$1;
(statearr_26790_26836[(2)] = inst_26735);

(statearr_26790_26836[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (31))){
var inst_26759 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26780__$1 = state_26780;
if(cljs.core.truth_(inst_26759)){
var statearr_26791_26837 = state_26780__$1;
(statearr_26791_26837[(1)] = (34));

} else {
var statearr_26792_26838 = state_26780__$1;
(statearr_26792_26838[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (32))){
var inst_26768 = (state_26780[(2)]);
var state_26780__$1 = state_26780;
var statearr_26793_26839 = state_26780__$1;
(statearr_26793_26839[(2)] = inst_26768);

(statearr_26793_26839[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (33))){
var inst_26757 = (state_26780[(2)]);
var state_26780__$1 = state_26780;
var statearr_26794_26840 = state_26780__$1;
(statearr_26794_26840[(2)] = inst_26757);

(statearr_26794_26840[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (13))){
var inst_26718 = figwheel.client.heads_up.clear.call(null);
var state_26780__$1 = state_26780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26780__$1,(16),inst_26718);
} else {
if((state_val_26781 === (22))){
var inst_26739 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26740 = figwheel.client.heads_up.append_message.call(null,inst_26739);
var state_26780__$1 = state_26780;
var statearr_26795_26841 = state_26780__$1;
(statearr_26795_26841[(2)] = inst_26740);

(statearr_26795_26841[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (36))){
var inst_26766 = (state_26780[(2)]);
var state_26780__$1 = state_26780;
var statearr_26796_26842 = state_26780__$1;
(statearr_26796_26842[(2)] = inst_26766);

(statearr_26796_26842[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (29))){
var inst_26750 = (state_26780[(2)]);
var state_26780__$1 = state_26780;
var statearr_26797_26843 = state_26780__$1;
(statearr_26797_26843[(2)] = inst_26750);

(statearr_26797_26843[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (6))){
var inst_26699 = (state_26780[(7)]);
var state_26780__$1 = state_26780;
var statearr_26798_26844 = state_26780__$1;
(statearr_26798_26844[(2)] = inst_26699);

(statearr_26798_26844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (28))){
var inst_26746 = (state_26780[(2)]);
var inst_26747 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26748 = figwheel.client.heads_up.display_warning.call(null,inst_26747);
var state_26780__$1 = (function (){var statearr_26799 = state_26780;
(statearr_26799[(8)] = inst_26746);

return statearr_26799;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26780__$1,(29),inst_26748);
} else {
if((state_val_26781 === (25))){
var inst_26744 = figwheel.client.heads_up.clear.call(null);
var state_26780__$1 = state_26780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26780__$1,(28),inst_26744);
} else {
if((state_val_26781 === (34))){
var inst_26761 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26780__$1 = state_26780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26780__$1,(37),inst_26761);
} else {
if((state_val_26781 === (17))){
var inst_26726 = (state_26780[(2)]);
var state_26780__$1 = state_26780;
var statearr_26800_26845 = state_26780__$1;
(statearr_26800_26845[(2)] = inst_26726);

(statearr_26800_26845[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (3))){
var inst_26716 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26780__$1 = state_26780;
if(cljs.core.truth_(inst_26716)){
var statearr_26801_26846 = state_26780__$1;
(statearr_26801_26846[(1)] = (13));

} else {
var statearr_26802_26847 = state_26780__$1;
(statearr_26802_26847[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (12))){
var inst_26712 = (state_26780[(2)]);
var state_26780__$1 = state_26780;
var statearr_26803_26848 = state_26780__$1;
(statearr_26803_26848[(2)] = inst_26712);

(statearr_26803_26848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (2))){
var inst_26699 = (state_26780[(7)]);
var inst_26699__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26780__$1 = (function (){var statearr_26804 = state_26780;
(statearr_26804[(7)] = inst_26699__$1);

return statearr_26804;
})();
if(cljs.core.truth_(inst_26699__$1)){
var statearr_26805_26849 = state_26780__$1;
(statearr_26805_26849[(1)] = (5));

} else {
var statearr_26806_26850 = state_26780__$1;
(statearr_26806_26850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (23))){
var inst_26742 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26780__$1 = state_26780;
if(cljs.core.truth_(inst_26742)){
var statearr_26807_26851 = state_26780__$1;
(statearr_26807_26851[(1)] = (25));

} else {
var statearr_26808_26852 = state_26780__$1;
(statearr_26808_26852[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (35))){
var state_26780__$1 = state_26780;
var statearr_26809_26853 = state_26780__$1;
(statearr_26809_26853[(2)] = null);

(statearr_26809_26853[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (19))){
var inst_26737 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26780__$1 = state_26780;
if(cljs.core.truth_(inst_26737)){
var statearr_26810_26854 = state_26780__$1;
(statearr_26810_26854[(1)] = (22));

} else {
var statearr_26811_26855 = state_26780__$1;
(statearr_26811_26855[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (11))){
var inst_26708 = (state_26780[(2)]);
var state_26780__$1 = state_26780;
var statearr_26812_26856 = state_26780__$1;
(statearr_26812_26856[(2)] = inst_26708);

(statearr_26812_26856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (9))){
var inst_26710 = figwheel.client.heads_up.clear.call(null);
var state_26780__$1 = state_26780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26780__$1,(12),inst_26710);
} else {
if((state_val_26781 === (5))){
var inst_26701 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26780__$1 = state_26780;
var statearr_26813_26857 = state_26780__$1;
(statearr_26813_26857[(2)] = inst_26701);

(statearr_26813_26857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (14))){
var inst_26728 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26780__$1 = state_26780;
if(cljs.core.truth_(inst_26728)){
var statearr_26814_26858 = state_26780__$1;
(statearr_26814_26858[(1)] = (18));

} else {
var statearr_26815_26859 = state_26780__$1;
(statearr_26815_26859[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (26))){
var inst_26752 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26780__$1 = state_26780;
if(cljs.core.truth_(inst_26752)){
var statearr_26816_26860 = state_26780__$1;
(statearr_26816_26860[(1)] = (30));

} else {
var statearr_26817_26861 = state_26780__$1;
(statearr_26817_26861[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (16))){
var inst_26720 = (state_26780[(2)]);
var inst_26721 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26722 = figwheel.client.format_messages.call(null,inst_26721);
var inst_26723 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26724 = figwheel.client.heads_up.display_error.call(null,inst_26722,inst_26723);
var state_26780__$1 = (function (){var statearr_26818 = state_26780;
(statearr_26818[(9)] = inst_26720);

return statearr_26818;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26780__$1,(17),inst_26724);
} else {
if((state_val_26781 === (30))){
var inst_26754 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26755 = figwheel.client.heads_up.display_warning.call(null,inst_26754);
var state_26780__$1 = state_26780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26780__$1,(33),inst_26755);
} else {
if((state_val_26781 === (10))){
var inst_26714 = (state_26780[(2)]);
var state_26780__$1 = state_26780;
var statearr_26819_26862 = state_26780__$1;
(statearr_26819_26862[(2)] = inst_26714);

(statearr_26819_26862[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (18))){
var inst_26730 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26731 = figwheel.client.format_messages.call(null,inst_26730);
var inst_26732 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26733 = figwheel.client.heads_up.display_error.call(null,inst_26731,inst_26732);
var state_26780__$1 = state_26780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26780__$1,(21),inst_26733);
} else {
if((state_val_26781 === (37))){
var inst_26763 = (state_26780[(2)]);
var state_26780__$1 = state_26780;
var statearr_26820_26863 = state_26780__$1;
(statearr_26820_26863[(2)] = inst_26763);

(statearr_26820_26863[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (8))){
var inst_26706 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26780__$1 = state_26780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26780__$1,(11),inst_26706);
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
});})(c__21937__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18798__auto__,c__21937__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18799__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18799__auto____0 = (function (){
var statearr_26824 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26824[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18799__auto__);

(statearr_26824[(1)] = (1));

return statearr_26824;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18799__auto____1 = (function (state_26780){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_26780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e26825){if((e26825 instanceof Object)){
var ex__18802__auto__ = e26825;
var statearr_26826_26864 = state_26780;
(statearr_26826_26864[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26865 = state_26780;
state_26780 = G__26865;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18799__auto__ = function(state_26780){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18799__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18799__auto____1.call(this,state_26780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18799__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18799__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto__,msg_hist,msg_names,msg))
})();
var state__21939__auto__ = (function (){var statearr_26827 = f__21938__auto__.call(null);
(statearr_26827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto__);

return statearr_26827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto__,msg_hist,msg_names,msg))
);

return c__21937__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21937__auto___26928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto___26928,ch){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto___26928,ch){
return (function (state_26911){
var state_val_26912 = (state_26911[(1)]);
if((state_val_26912 === (1))){
var state_26911__$1 = state_26911;
var statearr_26913_26929 = state_26911__$1;
(statearr_26913_26929[(2)] = null);

(statearr_26913_26929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26912 === (2))){
var state_26911__$1 = state_26911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26911__$1,(4),ch);
} else {
if((state_val_26912 === (3))){
var inst_26909 = (state_26911[(2)]);
var state_26911__$1 = state_26911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26911__$1,inst_26909);
} else {
if((state_val_26912 === (4))){
var inst_26899 = (state_26911[(7)]);
var inst_26899__$1 = (state_26911[(2)]);
var state_26911__$1 = (function (){var statearr_26914 = state_26911;
(statearr_26914[(7)] = inst_26899__$1);

return statearr_26914;
})();
if(cljs.core.truth_(inst_26899__$1)){
var statearr_26915_26930 = state_26911__$1;
(statearr_26915_26930[(1)] = (5));

} else {
var statearr_26916_26931 = state_26911__$1;
(statearr_26916_26931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26912 === (5))){
var inst_26899 = (state_26911[(7)]);
var inst_26901 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26899);
var state_26911__$1 = state_26911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26911__$1,(8),inst_26901);
} else {
if((state_val_26912 === (6))){
var state_26911__$1 = state_26911;
var statearr_26917_26932 = state_26911__$1;
(statearr_26917_26932[(2)] = null);

(statearr_26917_26932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26912 === (7))){
var inst_26907 = (state_26911[(2)]);
var state_26911__$1 = state_26911;
var statearr_26918_26933 = state_26911__$1;
(statearr_26918_26933[(2)] = inst_26907);

(statearr_26918_26933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26912 === (8))){
var inst_26903 = (state_26911[(2)]);
var state_26911__$1 = (function (){var statearr_26919 = state_26911;
(statearr_26919[(8)] = inst_26903);

return statearr_26919;
})();
var statearr_26920_26934 = state_26911__$1;
(statearr_26920_26934[(2)] = null);

(statearr_26920_26934[(1)] = (2));


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
});})(c__21937__auto___26928,ch))
;
return ((function (switch__18798__auto__,c__21937__auto___26928,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18799__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18799__auto____0 = (function (){
var statearr_26924 = [null,null,null,null,null,null,null,null,null];
(statearr_26924[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18799__auto__);

(statearr_26924[(1)] = (1));

return statearr_26924;
});
var figwheel$client$heads_up_plugin_$_state_machine__18799__auto____1 = (function (state_26911){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_26911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e26925){if((e26925 instanceof Object)){
var ex__18802__auto__ = e26925;
var statearr_26926_26935 = state_26911;
(statearr_26926_26935[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26936 = state_26911;
state_26911 = G__26936;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18799__auto__ = function(state_26911){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18799__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18799__auto____1.call(this,state_26911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18799__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18799__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto___26928,ch))
})();
var state__21939__auto__ = (function (){var statearr_26927 = f__21938__auto__.call(null);
(statearr_26927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto___26928);

return statearr_26927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto___26928,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21937__auto__){
return (function (){
var f__21938__auto__ = (function (){var switch__18798__auto__ = ((function (c__21937__auto__){
return (function (state_26957){
var state_val_26958 = (state_26957[(1)]);
if((state_val_26958 === (1))){
var inst_26952 = cljs.core.async.timeout.call(null,(3000));
var state_26957__$1 = state_26957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26957__$1,(2),inst_26952);
} else {
if((state_val_26958 === (2))){
var inst_26954 = (state_26957[(2)]);
var inst_26955 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26957__$1 = (function (){var statearr_26959 = state_26957;
(statearr_26959[(7)] = inst_26954);

return statearr_26959;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26957__$1,inst_26955);
} else {
return null;
}
}
});})(c__21937__auto__))
;
return ((function (switch__18798__auto__,c__21937__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18799__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18799__auto____0 = (function (){
var statearr_26963 = [null,null,null,null,null,null,null,null];
(statearr_26963[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18799__auto__);

(statearr_26963[(1)] = (1));

return statearr_26963;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18799__auto____1 = (function (state_26957){
while(true){
var ret_value__18800__auto__ = (function (){try{while(true){
var result__18801__auto__ = switch__18798__auto__.call(null,state_26957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18801__auto__;
}
break;
}
}catch (e26964){if((e26964 instanceof Object)){
var ex__18802__auto__ = e26964;
var statearr_26965_26967 = state_26957;
(statearr_26965_26967[(5)] = ex__18802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26968 = state_26957;
state_26957 = G__26968;
continue;
} else {
return ret_value__18800__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18799__auto__ = function(state_26957){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18799__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18799__auto____1.call(this,state_26957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18799__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18799__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18799__auto__;
})()
;})(switch__18798__auto__,c__21937__auto__))
})();
var state__21939__auto__ = (function (){var statearr_26966 = f__21938__auto__.call(null);
(statearr_26966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21937__auto__);

return statearr_26966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21939__auto__);
});})(c__21937__auto__))
);

return c__21937__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26969){
var map__26976 = p__26969;
var map__26976__$1 = ((((!((map__26976 == null)))?((((map__26976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26976):map__26976);
var ed = map__26976__$1;
var formatted_exception = cljs.core.get.call(null,map__26976__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26976__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26976__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26978_26982 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26979_26983 = null;
var count__26980_26984 = (0);
var i__26981_26985 = (0);
while(true){
if((i__26981_26985 < count__26980_26984)){
var msg_26986 = cljs.core._nth.call(null,chunk__26979_26983,i__26981_26985);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26986);

var G__26987 = seq__26978_26982;
var G__26988 = chunk__26979_26983;
var G__26989 = count__26980_26984;
var G__26990 = (i__26981_26985 + (1));
seq__26978_26982 = G__26987;
chunk__26979_26983 = G__26988;
count__26980_26984 = G__26989;
i__26981_26985 = G__26990;
continue;
} else {
var temp__4425__auto___26991 = cljs.core.seq.call(null,seq__26978_26982);
if(temp__4425__auto___26991){
var seq__26978_26992__$1 = temp__4425__auto___26991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26978_26992__$1)){
var c__17588__auto___26993 = cljs.core.chunk_first.call(null,seq__26978_26992__$1);
var G__26994 = cljs.core.chunk_rest.call(null,seq__26978_26992__$1);
var G__26995 = c__17588__auto___26993;
var G__26996 = cljs.core.count.call(null,c__17588__auto___26993);
var G__26997 = (0);
seq__26978_26982 = G__26994;
chunk__26979_26983 = G__26995;
count__26980_26984 = G__26996;
i__26981_26985 = G__26997;
continue;
} else {
var msg_26998 = cljs.core.first.call(null,seq__26978_26992__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26998);

var G__26999 = cljs.core.next.call(null,seq__26978_26992__$1);
var G__27000 = null;
var G__27001 = (0);
var G__27002 = (0);
seq__26978_26982 = G__26999;
chunk__26979_26983 = G__27000;
count__26980_26984 = G__27001;
i__26981_26985 = G__27002;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27003){
var map__27006 = p__27003;
var map__27006__$1 = ((((!((map__27006 == null)))?((((map__27006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27006):map__27006);
var w = map__27006__$1;
var message = cljs.core.get.call(null,map__27006__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16773__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16773__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16773__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27014 = cljs.core.seq.call(null,plugins);
var chunk__27015 = null;
var count__27016 = (0);
var i__27017 = (0);
while(true){
if((i__27017 < count__27016)){
var vec__27018 = cljs.core._nth.call(null,chunk__27015,i__27017);
var k = cljs.core.nth.call(null,vec__27018,(0),null);
var plugin = cljs.core.nth.call(null,vec__27018,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27020 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27014,chunk__27015,count__27016,i__27017,pl_27020,vec__27018,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27020.call(null,msg_hist);
});})(seq__27014,chunk__27015,count__27016,i__27017,pl_27020,vec__27018,k,plugin))
);
} else {
}

var G__27021 = seq__27014;
var G__27022 = chunk__27015;
var G__27023 = count__27016;
var G__27024 = (i__27017 + (1));
seq__27014 = G__27021;
chunk__27015 = G__27022;
count__27016 = G__27023;
i__27017 = G__27024;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27014);
if(temp__4425__auto__){
var seq__27014__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27014__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__27014__$1);
var G__27025 = cljs.core.chunk_rest.call(null,seq__27014__$1);
var G__27026 = c__17588__auto__;
var G__27027 = cljs.core.count.call(null,c__17588__auto__);
var G__27028 = (0);
seq__27014 = G__27025;
chunk__27015 = G__27026;
count__27016 = G__27027;
i__27017 = G__27028;
continue;
} else {
var vec__27019 = cljs.core.first.call(null,seq__27014__$1);
var k = cljs.core.nth.call(null,vec__27019,(0),null);
var plugin = cljs.core.nth.call(null,vec__27019,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27029 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27014,chunk__27015,count__27016,i__27017,pl_27029,vec__27019,k,plugin,seq__27014__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27029.call(null,msg_hist);
});})(seq__27014,chunk__27015,count__27016,i__27017,pl_27029,vec__27019,k,plugin,seq__27014__$1,temp__4425__auto__))
);
} else {
}

var G__27030 = cljs.core.next.call(null,seq__27014__$1);
var G__27031 = null;
var G__27032 = (0);
var G__27033 = (0);
seq__27014 = G__27030;
chunk__27015 = G__27031;
count__27016 = G__27032;
i__27017 = G__27033;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27034 = [];
var len__17843__auto___27037 = arguments.length;
var i__17844__auto___27038 = (0);
while(true){
if((i__17844__auto___27038 < len__17843__auto___27037)){
args27034.push((arguments[i__17844__auto___27038]));

var G__27039 = (i__17844__auto___27038 + (1));
i__17844__auto___27038 = G__27039;
continue;
} else {
}
break;
}

var G__27036 = args27034.length;
switch (G__27036) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27034.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17850__auto__ = [];
var len__17843__auto___27045 = arguments.length;
var i__17844__auto___27046 = (0);
while(true){
if((i__17844__auto___27046 < len__17843__auto___27045)){
args__17850__auto__.push((arguments[i__17844__auto___27046]));

var G__27047 = (i__17844__auto___27046 + (1));
i__17844__auto___27046 = G__27047;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((0) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17851__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27042){
var map__27043 = p__27042;
var map__27043__$1 = ((((!((map__27043 == null)))?((((map__27043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27043):map__27043);
var opts = map__27043__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27041){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27041));
});

//# sourceMappingURL=client.js.map