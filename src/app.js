// import '@ag-grid-community/all-modules/dist/styles/ag-grid.css'
// import styles from 'jexcel/dist/jexcel.css';
import "./styles/main.css";
// require("!style!css!jexcel/dist/jexcel.css")

import { Titlebar, Color } from "custom-electron-titlebar";

new Titlebar({
  backgroundColor: Color.fromHex("#444444"),
  shadow: true,
  minimizable: false,
  maximizable: false
}).setHorizontalAlignment("right");

require("./app/home");
