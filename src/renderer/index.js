// Global css styles
import "golden-layout/src/css/goldenlayout-base.css";
import "golden-layout/src/css/goldenlayout-light-theme.css";
import "bootstrap/dist/css/bootstrap";

// Some more css styles
import "./lib/w2ui-1.5.rc1.min.css";
import "./lib/app.style.css";

// Dirty hack untill we crack webpack configuration
import "./lib/global-scripts";

require('bootstrap');
import AWS from "aws-sdk";

import { AppLanding } from "./components/AppLanding";
// import { AppAuth } from "./components/AppAuth";

// import { AppAuth } from "./components/AppAuth";

// var ec2 = new AWS.S3({
//   region: "us-east-1",
//   credentials: new AWS.SharedIniFileCredentials({ profile: "root" })
// });
// var params = { DryRun: false };

// console.log(ec2);
// ec2.listBuckets({}, (err, data) =>
//   err ? rej(err) : res(data.Reservations)
//   console.log(err)
  // console.log(data)
// );

new AppLanding("#app");
// new AppAuth('#app');
