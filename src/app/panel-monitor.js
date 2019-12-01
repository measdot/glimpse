import Layout from "./_shared/layout";
import Graph from "./_shared/graph"

var ChartGLConfig = {
  settings: {
    showPopoutIcon: false,
    showMaximiseIcon: false,
    showCloseIcon: true
  },
  content: [
    {
      type: "stack",
      content: [
        {
          type: "component",
          componentName: "cpuUtilization",
          title: "CPU Utilization",
          component: Graph.Plot
        },
        {
          type: "component",
          componentName: "networkIn",
          title: "Network In",
          component: Graph.Plot
        },
        {
          type: "component",
          componentName: "networkOut",
          title: "Network Out",
          component: function(container, state) {}
        }
      ]
    }
  ]
};
export default {
  init: function(container) {
    Layout.init(ChartGLConfig, container);
  }
};
