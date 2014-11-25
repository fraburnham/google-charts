# google-charts

A ClojureScript library designed to simplify using Google's Charts API

## Usage

###(draw-chart columns vectors options chart)

      columns [["number" "X"] ["number" "Y"] ["type" "Title"]]

      vectors [[X1 Y1] [X2 Y2]]
      The number of columns must match the number of datapoints

      options {:option value}

      chart (new js/google.visualization.TypeOfChart DOM-element)

## License

Copyright © 2014 Frank Burnham

Distributed under the Eclipse Public License version 1.0.