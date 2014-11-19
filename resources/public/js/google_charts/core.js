// Compiled by ClojureScript 0.0-2322
goog.provide('google_charts.core');
goog.require('cljs.core');
google_charts.core.add_columns = (function add_columns(data_table,columns){return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__5019){var vec__5020 = p__5019;var type = cljs.core.nth.call(null,vec__5020,(0),null);var name = cljs.core.nth.call(null,vec__5020,(1),null);return data_table.addColumn(type,name);
}),columns));
});
/**
* @param {...*} var_args
*/
google_charts.core.draw_scatter_chart = (function() { 
var draw_scatter_chart__delegate = function (columns,vectors,options,chart_dom_element,p__5021){var map__5023 = p__5021;var map__5023__$1 = ((cljs.core.seq_QMARK_.call(null,map__5023))?cljs.core.apply.call(null,cljs.core.hash_map,map__5023):map__5023);var tooltip = cljs.core.get.call(null,map__5023__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),false);var chart = (new google.visualization.ScatterChart(chart_dom_element));var data = (new google.visualization.DataTable());google_charts.core.add_columns.call(null,data,columns);
if(cljs.core.truth_(tooltip))
{data.addColumn(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"role","role",-736691072),"tooltip"], null)));
} else
{}
data.addRows(cljs.core.clj__GT_js.call(null,vectors));
return chart.draw(data,cljs.core.clj__GT_js.call(null,options));
};
var draw_scatter_chart = function (columns,vectors,options,chart_dom_element,var_args){
var p__5021 = null;if (arguments.length > 4) {
  p__5021 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return draw_scatter_chart__delegate.call(this,columns,vectors,options,chart_dom_element,p__5021);};
draw_scatter_chart.cljs$lang$maxFixedArity = 4;
draw_scatter_chart.cljs$lang$applyTo = (function (arglist__5024){
var columns = cljs.core.first(arglist__5024);
arglist__5024 = cljs.core.next(arglist__5024);
var vectors = cljs.core.first(arglist__5024);
arglist__5024 = cljs.core.next(arglist__5024);
var options = cljs.core.first(arglist__5024);
arglist__5024 = cljs.core.next(arglist__5024);
var chart_dom_element = cljs.core.first(arglist__5024);
var p__5021 = cljs.core.rest(arglist__5024);
return draw_scatter_chart__delegate(columns,vectors,options,chart_dom_element,p__5021);
});
draw_scatter_chart.cljs$core$IFn$_invoke$arity$variadic = draw_scatter_chart__delegate;
return draw_scatter_chart;
})()
;
google_charts.core.draw_line_chart = (function draw_line_chart(columns,vectors,options,chart_dom_element){var chart = (new google.visualization.LineChart(chart_dom_element));var data = (new google.visualization.DataTable());google_charts.core.add_columns.call(null,data,columns);
data.addRows(cljs.core.clj__GT_js.call(null,vectors));
return chart.draw(data,cljs.core.clj__GT_js.call(null,options));
});
google_charts.core.draw_org_chart = (function draw_org_chart(vectors,item_col_name,item_parent_name,chart_dom_element){var options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allowHtml","allowHtml",420231703),true], null);var data = (new google.visualization.DataTable());var chart = (new google.visualization.ScatterChart(chart_dom_element));data.addColumn("string",item_col_name);
data.addColumn("string",item_parent_name);
data.addRows(cljs.core.clj__GT_js.call(null,vectors));
return chart.draw(data,cljs.core.clj__GT_js.call(null,options));
});
google_charts.core.draw_chart = (function draw_chart(){return google_charts.core.draw_line_chart.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["date","X"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["number","Y"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Date("07/11/14")),(45)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Date("07/12/14")),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Date("07/13/14")),(23)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Date("07/14/14")),(234)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"DAS CHART"], null),document.getElementById("chart_div"));
});
google.load("visualization","1",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"packages","packages",1549741112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["corechart","orgchart"], null)], null)));
google.setOnLoadCallback(google_charts.core.draw_chart);

//# sourceMappingURL=core.js.map