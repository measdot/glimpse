import { W2Layout } from "./_core/_w2Layout";
import { Toolbar } from "./_core/_htmlTemplates";
import { SidebarMenu } from "./SidebarMenu";
import { MainbarTabs } from "./MainbarTabs";

export class AppLanding {
  constructor(
    container,
    menuConfig = [
      {
        name: "AWS Services",
        items: [{ name: "EC2" }, { name: "ASG" }, { name: "RDS" }]
      }
    ],
    mainConfig = [
      { name: "EC2" },
      { name: "Auto Scaling Groups" },
      { name: "RDS" },
      { name: "How To?" },
      { name: "FAQs" },
      { name: "Feedback" }
    ],
    toolConfig = []
  ) {
    var _container = container;

    this.sidebarMenu = new SidebarMenu(menuConfig);
    this.mainbarTabs = new MainbarTabs(mainConfig);
    this.toolbar = new Toolbar(toolConfig);

    var _mainLayoutConfig = {
      name: "layout-home",

      panels: [
        {
          type: "top",
          resizable: false,
          size: 45,
          content: this.toolbar
        },
        {
          type: "left",
          resizable: false,
          size: 150,
          content: this.sidebarMenu
        },
        {
          type: "main",
          resizable: true,
          content: this.mainbarTabs
        }
      ]
    };

    // initialize empty default layouts
    new W2Layout(_mainLayoutConfig, _container);
  }
}
