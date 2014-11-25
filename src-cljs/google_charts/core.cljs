(ns google-charts.core)

(defn add-columns [data-table columns]
  (doall ;gotta keep the doall on maps. lazy sequence...
   (map (fn [[type name]]
          (.addColumn data-table type name)) columns)))


;chart is a js/google.visualization.TypeOfChart object that has already
;been set to a DOM element
(defn draw-chart [columns vectors options chart
                  &{:keys [tooltip]
                    :or {tooltip false}}]
  (let [data (new js/google.visualization.DataTable)]
    (add-columns data columns)
    (if tooltip
      (.addColumn data (clj->js {:type "string" :role "tooltip"})))
    (.addRows data (clj->js vectors))
    (.draw chart data (clj->js options))))

(defn draw-demo-chart []
  ;a line chart example
  (draw-chart
   [["date" "X"] ["number" "Y"]]
   [[(new js/Date "07/11/14") 45] [(new js/Date "07/12/14") 15]
    [(new js/Date "07/13/14") 23] [(new js/Date "07/14/14") 234]]
   {:title "DAS CHART"}
   (new js/google.visualization.LineChart (.getElementById js/document "line_chart_div")))
  ;scatter chart example
  (draw-chart
   [["number" "X"] ["number" "Y"]]
   [[10 4 "TOOLTIP"] [23 12 "TOOLTIP"] [23 41 "TOOLTIP"] [13 4 "TOOLTIP"]
    [12 42 "TOOLTIP"] [21 54 "TOOLTIP"] [12 53 "TOOLTIP"]]
   {:title "My Chart 'o the Scatter variety"}
   (new js/google.visualization.ScatterChart (.getElementById js/document "scatter_chart_div")) ;this should be a macro or function
   :tooltip true)
  ;org chart example
  (draw-chart
   [["string" "Name"] ["string" "Yo Daddy"]]
   [["Mary" "Daddy"] ["Stephen" "Mary"] ["James" "Daddy"] ["Jim" "James"] ["Ted" "Jim"]]
   {}
   (new js/google.visualization.OrgChart (.getElementById js/document "org_chart_div"))))

(.load js/google "visualization" "1" (clj->js {:packages ["corechart"
                                                          "orgchart"]})) ;macro or function

(.setOnLoadCallback js/google draw-demo-chart)
