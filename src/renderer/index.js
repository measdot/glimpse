// Global css styles
import "golden-layout/src/css/goldenlayout-base.css";
import "golden-layout/src/css/goldenlayout-light-theme.css";

// Some more css styles
import "./lib/w2ui-1.5.rc1.min.css";
import "./lib/app.style.css";

// Dirty hack untill we crack webpack configuration
import "./lib/global-scripts";
import { AppLanding } from "./components/AppLanding";

new AppLanding("#app");
