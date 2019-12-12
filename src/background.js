// // This is main process of Electron, started as first thing when your
// // app starts. It runs through entire life of your application.
// // It doesn't have any windows which you can see on screen, but we can open
// // window from here.
import path from "path";
import url from "url";
const { menubar } = require("menubar");
const contextMenu = require('electron-context-menu');
 
contextMenu({
    prepend: (defaultActions, params, browserWindow) => [
        {
            label: 'Rainbow',
            // Only show it when right-clicking images
            visible: params.mediaType === 'image'
        },
        {
            label: 'Search Google for “{selection}”',
            // Only show it when right-clicking text
            visible: params.selectionText.trim().length > 0,
            click: () => {
                shell.openExternal(`https://google.com/search?q=${encodeURIComponent(params.selectionText)}`);
            }
        }
    ]
});

const mb = menubar({
  browserWindow: { 
    transparent: false,
    titleBarStyle: 'hiddenInset',
   },
  index: url.format({
    pathname: path.join(__dirname, "app.html"),
    protocol: "file:",
    slashes: true
  }),
  preloadWindow: true,
  windowPosition: 'center',
  height: 500,
  width:800,
  fullscreen:false,
});

const transparentTitlebar = require('transparent-titlebar')

mb.on("after-create-window", () => {
  // Setup window to use transparent titlebar
  // transparentTitlebar.setup(mb.window.getNativeWindowHandle())
  // mb.window.openDevTools()
});

mb.on("ready", () => {
  // mb._options.browserWindow.width = 1200;
  // mb._options.browserWindow.height = 800;
  // mb._options.browserWindow.resizable = true;

  console.log("app is ready");

  // var Datastore = require('nedb'), db = new Datastore({ filename: 'app.db', autoload: true });
  const Store = require('electron-store');
  const store = new Store();
  
  global.sharedObj = {store: store};

});
