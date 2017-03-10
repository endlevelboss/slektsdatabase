// Compiled by ClojureScript 1.7.170 {}
goog.provide('slekt.core');
goog.require('cljs.core');
goog.require('slekt.db_functions');
goog.require('reagent.core');
goog.require('slekt.date');
goog.require('slekt.gui');
goog.require('slekt.database');
cljs.core.enable_console_print_BANG_.call(null);
slekt.core.render_app = (function slekt$core$render_app(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slekt.gui.start_window], null),document.getElementById("app"));
});
slekt.db_functions.setCurrent.call(null,(0));
slekt.core.render_app.call(null);

//# sourceMappingURL=core.js.map