(ns google-charts.core)

(defn add-columns [data-table columns]
  (doall ;gotta keep the doall on maps. lazy sequence...
   (map (fn [[type name]]
          (.addColumn data-table type name)) columns)))

(defn draw-scatter-chart [columns vectors options chart-dom-element
                         &{:keys [tooltip]
                           :or {tooltip false}}]
  (let [chart (new js/google.visualization.ScatterChart 
                   chart-dom-element)
        data (new js/google.visualization.DataTable)]
    (add-columns data columns)
    (if tooltip
      (.addColumn data (clj->js {:type "string" :role "tooltip"})))
    (.addRows data (clj->js vectors))
    (.draw chart data (clj->js options))))

(defn draw-line-chart [columns vectors options chart-dom-element]
  (let [chart (new js/google.visualization.LineChart chart-dom-element)
        data (new js/google.visualization.DataTable)]
    (add-columns data columns) ;gross mutation
    (.addRows data (clj->js vectors))
    (.draw chart data (clj->js options))))

;make this more generic
(defn draw-org-chart [vectors item-col-name item-parent-name chart-dom-element]
  (let [options {:allowHtml true}
        data (new js/google.visualization.DataTable)
        chart (new js/google.visualization.ScatterChart
                   chart-dom-element)]
    (.addColumn data "string" item-col-name)
    (.addColumn data "string" item-parent-name)
    ;(.addColumn "string" "ToolTip")
    (.addRows data (clj->js vectors))
    (.draw chart data (clj->js options))))

(defn draw-chart []
  ;draw a simple line chart
  (draw-line-chart 
   [["number" "X"] ["number" "Y"]]
   [[1 45] [2 15] [3 23] [4 234]]
   {:title "DAS CHART"}
   (.getElementById js/document "chart_div")))

(.load js/google "visualization" "1" (clj->js {:packages ["corechart"
                                                          "orgchart"]}))
                                                         
(.setOnLoadCallback js/google draw-chart)
