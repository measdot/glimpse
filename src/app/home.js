import Layout from "./_shared/layout";
import PanelMonitor from "./panel-monitor";
import PanelCloudItems from "./panel-cloud-items";

const Monitor = function (container, state)  {
  PanelMonitor.init(container.getElement());

}
const CloudItems =  function (container, state) {
  PanelCloudItems.init(container.getElement());
}
const HomeGLConfig = {
  settings: {
    hasHeaders: false
  },
  content: [
    {
      type: "row",
      content: [
        {
          type: "component",
          componentName: "PanelMonitor",
          title: "Cloud Monitor",
          width: 65,
          component: Monitor
        },
        {
          type: "component",
          componentName: "PanelItems",
          title: "Cloud Resources",
          width: 35,
          component: CloudItems
        }
      ]
    }
  ]
};

export default {
  init: Layout.init(HomeGLConfig,'.container-after-titlebar')
};