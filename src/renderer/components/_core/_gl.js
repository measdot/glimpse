import GoldenLayout from "golden-layout";

export class Gl {
  constructor(config, container = "") {
    this._container = $(container); //GL prefers a jq equivalent of an HtmlElement DOM
    this._config = config;
    this._components = this._listComponent(this._config.content);
    this._layout =
      container == ""
        ? new GoldenLayout(config)
        : new GoldenLayout(config, this._container);

    this._init();
  }

  _refresh() {
    this._layout.updateSize();
  }

  _init() {
    var self = this;

    // register each component to be fixed into GL
    this._components.map(function({ name, component }) {
      self._layout.registerComponent(name, component);
    });

    // only time when GL can cause a unhandled resize is on component creation
    // lets trigger a resize event to whomesoever it may concern
    this._layout.on("componentCreated", function(component) {
      component.container.trigger("resize");
    });

    // Gl instance could be a victim of window or container resize
    // lets handle them
    $(window).on("resize", () => self._refresh());
    this._container.on("containerResize", () => self._refresh());

    // Aight, we are set to create the ever so cool GL instance
    this._layout.init();
  }

  _addComponent(itemConfig) {
    this._layout.registerComponent(
      itemConfig.componentName,
      itemConfig.component
    );
    this._layout.root.contentItems[0].addChild(itemConfig);
  }

  _listComponent(content, components = []) {
    var self = this;
    content.map(
      function(item) {
        switch (item.type) {
          case "component":
            components.push({
              name: item.componentName,
              component: item.component
            });
            break;
          default:
            this._listComponent(item.content, components);
        }
      }.bind(self)
    );

    return components;
  }
}
