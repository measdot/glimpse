// TODO: Ideally this file should be a method that extends(adds on top of) all GL features
import GoldenLayout from "golden-layout";
//TODO Classify layout creation
var glPool = [];

// the below method extracts componets from GL config (custom added attribute)
const componentList = (content, components = []) => {
  content.map(item => {
    switch (item.type) {
      case "component":
        components.push({ name: item.componentName, class: item.component });
        break;
      default:
        componentList(item.content, components);
    }
  });
  return components;
};

export default {
  init: (config, container = "") => {
    // Load GL into whole page if container is not passed
    var layout =
      container == ""
        ? new GoldenLayout(config)
        : new GoldenLayout(config, container);

    // push all GL instances in store for future reference
    glPool.push(layout);

    // register components to golden layout
    componentList(config.content).map(component =>
      layout.registerComponent(component.name, component.class)
    );

    layout.init();

    layout.on("componentCreated", function(component) {
      // if layout has child GL as Content.Item for a parent GL
      // the container for child GL has just been created
      // we might want to resize the layouts to fit container width/height
      glPool.forEach(gl => {
        gl.updateSize();
      });

      component.container.on("resize", function() {
        // Whenever a Ccntent.Item has been resized and it contains a child GL
        // The child will have no idea about that unless we tell them
        // Since we hace no parent-child tree here, lets resize all GLs
        glPool.forEach(gl => {
          gl.updateSize();
        });
      });
    });

    // whenever window resizes refresh golden layout size
    $(window).on("resize", () => layout.updateSize());

    return layout;
  },

  add: (itemConfig, layout) => {
    // for (const [key, value] of Object.entries(itemConfig)) {
    //   console.log(key, value);
    // }
    // console.log(itemConfig.componentName)
    layout.registerComponent(itemConfig.componentName, itemConfig.component);
    layout.root.contentItems[0].addChild(itemConfig);
    return layout;
  }
};
