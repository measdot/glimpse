import { Layout } from "./_core/_layout";
import { Plot } from "./Plot";

export class PanelCloudItems {
  constructor(container) {
    this._container = container;
    this._layoutConfig = {
      settings: {
        showPopoutIcon: false,
        showMaximiseIcon: false,
        showCloseIcon: false
      },
      content: [
        {
          type: "stack",
          activeItemIndex: 0,
          content: [
            {
              type: "component",
              isClosable: false,
              componentName: "ec2",
              title: "EC2",
              component: Plot
            }
          ]
        }
      ]
    };

    return new Layout(this._layoutConfig, this._container);
  }
}
