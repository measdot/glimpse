import Highcharts from "highcharts";

export class GraphComponent {
  constructor(container, name, graphConfig) {
    this._config = graphConfig;
    this._container = container;
    this._name = name;
    this._graph = null;

    this._container.on("open", this._createGraph.bind(this));
  }
  _createGraph() {
    var renderTo = $(this._container.getElement())[0];
    this._graph = new Highcharts.chart(renderTo, this._config);
    this._bindContainerEvents();
  }

  _bindContainerEvents() {
    this._container.on("resize", this._setSize.bind(this));
    this._container.on("destroy", this._graph.destroy.bind(this._graph));
  }
  _setSize() {
    this._graph.setSize(this._container.width, this._container.height);
  }
}