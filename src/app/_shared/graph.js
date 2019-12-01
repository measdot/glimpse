import Chart from "chart.js";

class GraphComponent {
    constructor(container, name, graphConfig) {
        this._chartJsConfig = graphConfig;
        this._container = container;
        this._name = name;
        this._graph = null;
        this._container.on("open", this._createGraph.bind(this));
    }
    _createGraph() {
        var renderTo = $(this._container.getElement().find("#myChart"));
        this._graph = new Chart(renderTo, this._chartJsConfig);
        this._bindContainerEvents();
    }
    _bindContainerEvents() {
        this._container.on("resize", this._setSize.bind(this));
        // this._container.on( 'destroy', this._chart.destroy.bind( this._chart ) );
    }
    _setSize() {
        console.log(1)
        // this._chart.setSize( this._container.width, this._container.height );
    }
}

var config = {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

export default {
  Plot : function(container, state) {
    container
      .getElement()
      .html(`<canvas id="myChart" width="300px" height="200px"></canvas>`);

    return new GraphComponent(container, "graph", config);
  }
};
