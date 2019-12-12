import { Layout } from "./_core/_layout";
import { Pie } from "./ChartPie";
import { Column } from "./ChartColumn";
import { Stock } from "./ChartStock";

export class PanelMonitor {
  constructor(container) {
    this._container = $(container)
    this._layoutConfig = {
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
              component: Stock
            },
            {
              type: "component",
              componentName: "networkIn",
              title: "Network In",
              component: Pie
            },
            {
              type: "component",
              componentName: "networkOut",
              title: "Network Out",
              component: Column
            }
          ]
        }
      ]
    };

    return new Layout(this._layoutConfig,this._container)
  }
}
