import { Layout } from "./_core/_layout";
import { Plot } from "./Plot";
import { SettingUp } from "./SettingUp";
import { Preferences } from "./Preferences";


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
              title: "AWS EC2",
              component: Plot
            },
            {
              type: "component",
              isClosable: false,
              componentName: "preferences",
              title: "Preferences",
              component: Preferences
            },
            {
              type: "component",
              isClosable: false,
              componentName: "setting-up",
              title: "Setting Up",
              component: SettingUp
            }
          ]
        }
      ]
    };

    return new Layout(this._layoutConfig, this._container);
  }
}
