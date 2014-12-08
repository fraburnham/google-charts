(ns google-charts.core)

;Basically this whole library is stateful because it has to impact the DOM

;chart is a js/google.visualization.TypeOfChart object that has already
;been set to a DOM element
(defn draw-chart [columns vectors options chart
                  &{:keys [tooltip]
                    :or {tooltip false}}]
  (let [data (new js/google.visualization.DataTable)]
    (doall ;gotta keep the doall on maps. lazy sequence...
     (map (fn [[type name]]
            (.addColumn data type name)) columns))
    (if tooltip
      (.addColumn data (clj->js {:type "string" :role "tooltip"})))
    (.addRows data vectors)
    (.draw chart data options)))

;Example usage below, see resources/public/index.html
;for an example of how the api needs to be "included"
(defn draw-demo-chart []
    ;a line chart example
    (draw-chart
     [["date" "X"] ["number" "Y"]]
     (clj->js [[(new js/Date "07/11/14") 45] [(new js/Date "07/12/14") 15]
               [(new js/Date "07/13/14") 23] [(new js/Date "07/14/14") 234]])
     (clj->js {:title "DAS CHART"})
     (new js/google.visualization.LineChart (.getElementById js/document "line_chart_div")))
    ;scatter chart example
    (draw-chart
     [["number" "X"] ["number" "Y"]]
     (clj->js [[10 4 "TOOLTIP"] [23 12 "TOOLTIP"] [23 41 "TOOLTIP"] [13 4 "TOOLTIP"]
               [12 42 "TOOLTIP"] [21 54 "TOOLTIP"] [12 53 "TOOLTIP"]])
     (clj->js {:title "My Chart 'o the Scatter variety"
               :explorer {}})
     (new js/google.visualization.ScatterChart (.getElementById js/document "scatter_chart_div")) ;this should be a macro or function
     :tooltip true)
    ;org chart example
    (draw-chart
     [["string" "Name"] ["string" "Yo Daddy"]]
     (clj->js [["Mary" "Daddy"] ["Stephen" "Mary"] ["James" "Daddy"] ["Jim" "James"] ["Ted" "Jim"]])
     (clj->js {})
     (new js/google.visualization.OrgChart (.getElementById js/document "org_chart_div")))
    ;area chart example - stolen from google. I'm lazy
    (draw-chart
     [["string" "Year"] ["number" "Sales"] ["number" "Expenses"]]
     (clj->js [["2013" 1000 400] ["2014" 1170 460] ["2015" 660 1120] ["2016" 1030 540]])
     (clj->js {:title "Company Performance"
               :hAxis {:title "Year" :titleTextStyle {:color "#333"}}
               :vAxis {:minValue 0}})
     (new js/google.visualization.AreaChart (.getElementById js/document "area_chart_div")))
    ;calender chart - stolen from google
    (draw-chart
     [["date" "Date"] ["number" "Win/Loss"]]
     (clj->js [[(new js/Date 2012 3 13) 37032] [(new js/Date 2012 3 14) 38024]
               [(new js/Date 2012 3 15) 38024] [(new js/Date 2012 3 16) 38108]
               [(new js/Date 2012 3 17) 38229] [(new js/Date 2013 9 4) 38177]
               [(new js/Date 2013 9 5) 38705] [(new js/Date 2013 9 12) 38210]
               [(new js/Date 2013 9 13) 38029] [(new js/Date 2013 9 19) 38823]
               [(new js/Date 2013 9 23) 38345] [(new js/Date 2013 9 24) 38436]
               [(new js/Date 2013 9 30) 38447]])
     (clj->js {:title "Red Sox Attendance" :height 350})
     (new js/google.visualization.Calendar (.getElementById js/document "calendar_chart_div")))
    ;map example from google
    (draw-chart
     [["string" "Country"] ["string" "Population"]]
     (clj->js [["China" "China: 1,363,800,000"] ["India" "India: 1,242,620,000"]
               ["US" "US: 317,842,000"] ["Indonesia" "Indonesia: 247,424,598"]
               ["Brazil" "Brazil: 201,032,714"] ["Pakistan" "Pakistan: 186,134,000"]
               ["Nigeria" "Nigeria: 173,615,000"] ["Bangladesh" "Bangladesh: 152,518,015"]
               ["Russia" "Russia: 146,019,512"] ["Japan" "Japan: 127,120,000"]])
     (clj->js {:showTip true})
     (new js/google.visualization.Map(.getElementById js/document "map_chart_div")))
    (draw-chart
     [["number" "Latitude"] ["number" "Longitude"] ["number" "Tip"]]
     (clj->js [[44.9836543 -93.2693572 4.34] [38.0000 -97.0000 2.50]])
     (clj->js {:displayMode "markers" :region "US"})
     (new js/google.visualization.GeoChart (.getElementById js/document "geo_chart_div"))))

;You'll also need the below lines, or some modification thereof to load the google packages
;and start the chart drawing
(.load js/google "visualization" "1" (clj->js {:packages ["corechart" "orgchart" "calendar"
                                                          "map" "geochart"]})) ;macro or function
(.setOnLoadCallback js/google draw-demo-chart)
