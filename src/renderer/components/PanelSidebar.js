import { Layout } from "./_core/_layout";
import { Sidebar } from "./Sidebar";

export class PanelSidebar {
  constructor(container) {
    
    this._container = container
    this._layoutConfig = {
      settings: {
        showPopoutIcon: false,
        showMaximiseIcon: false,
        showCloseIcon: false,
        hasHeaders: false
      },
      content: [
        {
          type: "stack",
          content: [
            {
              type: "component",
              isClosable: false,
              componentName: "sidebar",
              title: "Sidebar",
              component: Sidebar
            }
          ]
        }
      ]
    };

    return new Layout(this._layoutConfig, this._container);
  }
}
