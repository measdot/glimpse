import Handsontable from "handsontable";

export class GridComponent {
  constructor(container, name, gridConfig) {
    this._hotConfig = gridConfig;
    this._container = container;
    this._name = name;
    this._grid = null;
    this._container.on("open", this._createGrid.bind(this));
  }
  _createGrid() {
    var gridContainer = this._container.getElement()[0];
    this._grid = new Handsontable(gridContainer, this._hotConfig);
    this._grid.updateSettings({
      contextMenu: {
        items: {
          cpu_util: {
            name: "CPU Utilization Chart",
            callback: function(key, options) {}
          },
          network_in: {
            name: "Network In Chart",
            callback: function(key, options) {}
          }
        }
      }
    });

    this._bindContainerEvents();
  }

  _bindContainerEvents() {
    this._container.on("resize", this._refreshSize.bind(this));
    this._container.on("destroy", this._grid.destroy.bind(this._grid));
  }

  _refreshSize() {
    this._grid.refreshDimensions();
  }
}