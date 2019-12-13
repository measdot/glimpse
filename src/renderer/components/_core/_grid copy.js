export class GridComponent {
  constructor(container, name, gridConfig) {
    this._w2gridConfig = gridConfig;
    this._container = container;
    this._name = name;
    this._grid = null;
    this._container.on("open", this._createGrid.bind(this));
  }
  
  _createGrid() {
    $(this._container).w2grid(this._w2gridConfig)
    this._bindContainerEvents();
  }

  _bindContainerEvents() {
    // this._container.on("resize", this._refreshSize.bind(this));
    // this._container.on("destroy", this._grid.destroy.bind(this._grid));
  }

  _refreshSize() {
    // this._grid.refreshDimensions();
  }
}