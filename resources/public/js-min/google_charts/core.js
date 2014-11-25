// Compiled by ClojureScript 0.0-2322
goog.provide('google_charts.core');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
google_charts.core.draw_chart = (function() { 
var draw_chart__delegate = function (columns,vectors,options,chart,p__4977){var map__4981 = p__4977;var map__4981__$1 = ((cljs.core.seq_QMARK_(map__4981))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4981):map__4981);var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__4981__$1,cljs.core.constant$keyword$15,false);var data = (new google.visualization.DataTable());cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (data,map__4981,map__4981__$1,tooltip){
return (function (p__4982){var vec__4983 = p__4982;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4983,(0),null);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4983,(1),null);return data.addColumn(type,name);
});})(data,map__4981,map__4981__$1,tooltip))
,columns));
if(cljs.core.truth_(tooltip))
{data.addColumn(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$16,"string",cljs.core.constant$keyword$17,"tooltip"], null)));
} else
{}
data.addRows(cljs.core.clj__GT_js(vectors));
return chart.draw(data,cljs.core.clj__GT_js(options));
};
var draw_chart = function (columns,vectors,options,chart,var_args){
var p__4977 = null;if (arguments.length > 4) {
  p__4977 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return draw_chart__delegate.call(this,columns,vectors,options,chart,p__4977);};
draw_chart.cljs$lang$maxFixedArity = 4;
draw_chart.cljs$lang$applyTo = (function (arglist__4984){
var columns = cljs.core.first(arglist__4984);
arglist__4984 = cljs.core.next(arglist__4984);
var vectors = cljs.core.first(arglist__4984);
arglist__4984 = cljs.core.next(arglist__4984);
var options = cljs.core.first(arglist__4984);
arglist__4984 = cljs.core.next(arglist__4984);
var chart = cljs.core.first(arglist__4984);
var p__4977 = cljs.core.rest(arglist__4984);
return draw_chart__delegate(columns,vectors,options,chart,p__4977);
});
draw_chart.cljs$core$IFn$_invoke$arity$variadic = draw_chart__delegate;
return draw_chart;
})()
;
