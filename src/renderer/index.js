// Dirty hack untill we crack webpack configuration
import "./lib/global-scripts";

/////////// ** CSS ** ///////////
// Global css styles
// import "golden-layout/src/css/goldenlayout-base.css";
// import "golden-layout/src/css/goldenlayout-light-theme.css";
import "semantic-ui/dist/semantic.min.css";

// Some more css styles
// import "./lib/w2ui-1.5.rc1.min.css";
import "./lib/app.style.css";

/////////// ** JS ** ///////////
import 'semantic-ui/dist/semantic'

import { AppLanding } from "./components/AppLanding";
import { SettingUp } from "./components/SettingUp";

new AppLanding("#app");
