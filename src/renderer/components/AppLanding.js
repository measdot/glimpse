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
        },
        // {
        //   type: "right",
        //   resizable: true,
        //   size: "50%",
        //   // minSize: 200
        // },
        {
          type: "bottom",
          size: 25,
          toolbar: {
            name: "toolbar",
            style: "padding:0px 5px",
            items: [
              // { type: "button", id: "item7", caption: "Glimpse" },
              // { type: "break", id: "break2" },
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
                  // w2ui["layout-home"].toggle("right");
                  break;
              }
            }
          }
        },
        {
          type: "top",
          resizable: false,
          size: 35,
          toolbar: {
            style: "padding: 2px; background: #e1e1e1; -webkit-app-region: drag",
            items: [
              {
                type: "button",
                id: "logs",
                caption: "Logs",
                img: "icon-page"
              },
              { type: "break", id: "break1" },
              {
                type: "menu",
                id: "charts",
                caption: "Charts",
                img: "icon-folder",
                items: [
                  { text: "CPU Utilisation" },
                  { text: "Network In" },
                  { text: "Network Out" }
                ]
              },
              { type: "spacer" },
              {
                type: 'html', id: 'item1',
                html: function (item) {
                  var html =`<input style="margin-right:10px;" size="75" placeholder="<CPU Utilization> chart for <Website> application from <Stage> account"/>`;
                  return html;
                }
              }
            ]
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

    // new Sidebar(this._leftContainer);
    new PanelCloudItems(this._mainContainer);
    // new PanelMonitor(this._rightContainer);
  }
}
