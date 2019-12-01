// // This is main process of Electron, started as first thing when your
// // app starts. It runs through entire life of your application.
// // It doesn't have any windows which you can see on screen, but we can open
// // window from here.
import path from "path";
import url from "url";
const { menubar } = require("menubar");

const mb = menubar({
  browserWindow: { 
    transparent: false,
    titleBarStyle: 'hidden'
   },
  index: url.format({
    pathname: path.join(__dirname, "app.html"),
    protocol: "file:",
    slashes: true
  }),
  preloadWindow: true,
  windowPosition: 'center'
});

mb.on("after-create-window", () => {
  mb.window.openDevTools()
});

mb.on("ready", () => {
  mb._options.browserWindow.width = 800;
  mb._options.browserWindow.height = 600;
  mb._options.browserWindow.resizable = true;

  console.log("app is ready");

  // var Datastore = require('nedb'), db = new Datastore({ filename: 'app.db', autoload: true });
  const Store = require('electron-store');
  const store = new Store();
  
  global.sharedObj = {store: store};

});
