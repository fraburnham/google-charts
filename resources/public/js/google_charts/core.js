// Compiled by ClojureScript 0.0-2322
goog.provide('google_charts.core');
goog.require('cljs.core');
google_charts.core.add_columns = (function add_columns(data_table,columns){return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__5067){var vec__5068 = p__5067;var type = cljs.core.nth.call(null,vec__5068,(0),null);var name = cljs.core.nth.call(null,vec__5068,(1),null);return data_table.addColumn(type,name);
}),columns));
});
/**
* @param {...*} var_args
*/
google_charts.core.draw_chart = (function() { 
var draw_chart__delegate = function (columns,vectors,options,chart,p__5069){var map__5071 = p__5069;var map__5071__$1 = ((cljs.core.seq_QMARK_.call(null,map__5071))?cljs.core.apply.call(null,cljs.core.hash_map,map__5071):map__5071);var tooltip = cljs.core.get.call(null,map__5071__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),false);var data = (new google.visualization.DataTable());google_charts.core.add_columns.call(null,data,columns);
if(cljs.core.truth_(tooltip))
{data.addColumn(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"role","role",-736691072),"tooltip"], null)));
} else
{}
data.addRows(cljs.core.clj__GT_js.call(null,vectors));
return chart.draw(data,cljs.core.clj__GT_js.call(null,options));
};
var draw_chart = function (columns,vectors,options,chart,var_args){
var p__5069 = null;if (arguments.length > 4) {
  p__5069 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return draw_chart__delegate.call(this,columns,vectors,options,chart,p__5069);};
draw_chart.cljs$lang$maxFixedArity = 4;
draw_chart.cljs$lang$applyTo = (function (arglist__5072){
var columns = cljs.core.first(arglist__5072);
arglist__5072 = cljs.core.next(arglist__5072);
var vectors = cljs.core.first(arglist__5072);
arglist__5072 = cljs.core.next(arglist__5072);
var options = cljs.core.first(arglist__5072);
arglist__5072 = cljs.core.next(arglist__5072);
var chart = cljs.core.first(arglist__5072);
var p__5069 = cljs.core.rest(arglist__5072);
return draw_chart__delegate(columns,vectors,options,chart,p__5069);
});
draw_chart.cljs$core$IFn$_invoke$arity$variadic = draw_chart__delegate;
return draw_chart;
})()
;
google_charts.core.draw_demo_chart = (function draw_demo_chart(){google_charts.core.draw_chart.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["date","X"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["number","Y"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Date("07/11/14")),(45)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Date("07/12/14")),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Date("07/13/14")),(23)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Date("07/14/14")),(234)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"DAS CHART"], null),(new google.visualization.LineChart(document.getElementById("line_chart_div"))));
google_charts.core.draw_chart.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["number","X"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["number","Y"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(4),"TOOLTIP"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(23),(12),"TOOLTIP"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(23),(41),"TOOLTIP"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(4),"TOOLTIP"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(42),"TOOLTIP"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(21),(54),"TOOLTIP"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(53),"TOOLTIP"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"My Chart 'o the Scatter variety"], null),(new google.visualization.ScatterChart(document.getElementById("scatter_chart_div"))),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true);
return google_charts.core.draw_chart.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["string","Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["string","Yo Daddy"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mary","Daddy"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stephen","Mary"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["James","Daddy"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Jim","James"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ted","Jim"], null)], null),cljs.core.PersistentArrayMap.EMPTY,(new google.visualization.OrgChart(document.getElementById("org_chart_div"))));
});
google.load("visualization","1",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"packages","packages",1549741112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["corechart","orgchart"], null)], null)));
google.setOnLoadCallback(google_charts.core.draw_demo_chart);

//# sourceMappingURL=core.js.map