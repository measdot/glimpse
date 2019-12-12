import { Sidebar } from "./Sidebar";
import { PanelCloudItems } from "./PanelCloudItems";
import { PanelMonitor } from "./PanelMonitor";

export class AppLanding {
  constructor(container) {
    this._container = $(container);

    this._mainLayoutConfig = {
      name: "layout-home",
      panels: [
        {
          type: "left",
          resizable: true,
          size: 200,
          minSize: 150,
          hidden: true
        },
        {
          type: "main",
          resizable: true,
          toolbar: {
            items: [
              {
                type: "radio",
                id: "item3",
                group: "1",
                caption: "Dev",
                hint: "Show resources from only Dev account"
              },
              {
                type: "radio",
                id: "item4",
                group: "1",
                caption: "Stage",
                hint: "Show resources from only Stage account",
                checked: true
              },
              {
                type: "radio",
                id: "item5",
                group: "1",
                caption: "Prod",
                hint: "Show resources from only Prod account"
              },
              { type: "break", id: "break1" },
              {
                type: "button",
                id: "item6",
                caption: "Sync All",
                icon: "w2ui-icon-reload",
                hint: "Sync below resouces list with cloud"
              },
              { type: "spacer" },
              {
                type: "button",
                id: "item1",
                caption: "Logs",
                img: "icon-page"
              },
              { type: "break", id: "break0" },
              {
                type: "menu",
                id: "item2",
                caption: "Charts",
                img: "icon-folder",
                items: [
                  { text: "CPU Utilisation" },
                  { text: "Network In"},
                  { text: "Network Out"}
                ]
              }
            ]
          }
        },
        {
          type: "right",
          resizable: true,
          size: "50%",
          minSize: 200,
        },
        {
          type: "top",
          size: 35,
          toolbar: {
            name: "toolbar",
            style:
              "padding-left: 70px; padding-top: 7px; -webkit-app-region: drag;border-bottom: none",
            items: [
              { type: "button", id: "item7", caption: "Glimpse" },
              { type: "break", id: "break2" },
              {
                type: "html",
                id: "item2",
                html: item =>
                  `<span>Built with &hearts; for AWS&trade; cloud heros</span>`
              },
              { type: "spacer" },
              { type: "button", id: "item3", caption: "Report Bug" },
              { type: "break", id: "break1" },
              { type: "button", id: "item6", caption: "Preferences" }
            ],
            onClick: function(event) {
              switch (event.target) {
                case "item6":
                  w2ui["layout-home"].toggle("left");
                  break;
              }
            }
          }
        }
      ]
    };

    this._w2uiInstance = this._container.w2layout(this._mainLayoutConfig);

    this._leftContainer = this._w2uiInstance.el("left");
    this._mainContainer = this._w2uiInstance.el("main");
    this._rightContainer = this._w2uiInstance.el("right");
    this._topContainer = this._w2uiInstance.el("top");
    this._bottomContainer = this._w2uiInstance.el("bottom");

    this._w2uiInstance.on(
      "resize",
      function(e) {
        e.done(
          function() {
            $(this._leftContainer).trigger("containerResize");
            $(this._mainContainer).trigger("containerResize");
            $(this._rightContainer).trigger("containerResize");
            $(this._topContainer).trigger("containerResize");
            $(this._bottomContainer).trigger("containerResize");
          }.bind(this)
        );
      }.bind(this)
    );

    new Sidebar(this._leftContainer);
    new PanelCloudItems(this._mainContainer);
    new PanelMonitor(this._rightContainer);
  }
}
