export class W2Layout {
  constructor(config, container) {
    this._container = $(container);
    this._config = config;

    // Layout instance
    this._w2Layout = this._container.w2layout(this._config);


    // Layout panel containers
    this._left = this._w2Layout.el("left");
    this._main = this._w2Layout.el("main");
    this._preview = this._w2Layout.el("preview");
    this._right = this._w2Layout.el("right");
    this._top = this._w2Layout.el("top");
    this._bottom = this._w2Layout.el("bottom");

    // Manual resizes of any panel in layout should immediately be followed 
    // by an element "resize" event emitter 
    this._w2Layout.on(
      "resize",
      function(e) {
        e.done(
          function() {
            $(this._left).trigger("containerResize");
            $(this._main).trigger("containerResize");
            $(this._preview).trigger("containerResize");
            $(this._right).trigger("containerResize");
            $(this._top).trigger("containerResize");
            $(this._bottom).trigger("containerResize");
          }.bind(this)
        );
      }.bind(this)
    );
  }
}
