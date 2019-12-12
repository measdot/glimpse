import Layout from "../../components/_core/layout";
import PanelMonitor from "./panel-monitor"; //stays
import PanelCloudItems from "./panel-cloud-items"; //stays
import PanelSidebar from "./panel-sidebar"; //rewrite

const Sidebar = function(container, state) {
  PanelSidebar.init(container.getElement());
};

const Monitor = function(container, state) {
  PanelMonitor.init(container.getElement());
};

const CloudItems = function(container, state) {
  PanelCloudItems.init(container.getElement());
};


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
          componentName: "PanelSidebar",
          title: "Sidebar",
          width: 30,
          component: Sidebar
        },
        {
          type: "component",
          componentName: "PanelItems",
          title: "Cloud Resources",
          width: 30,
          component: CloudItems
        },
        {
          type: "component",
          componentName: "PanelMonitor",
          title: "Cloud Monitor",
          width: 40,
          component: Monitor
        }
      ]
    }
  ]
};

export default {
  init: Layout.init(HomeGLConfig, '#main_app')
};
