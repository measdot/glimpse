(() => {
  // Global jquery object
  var $ = require("jquery");
  global.jQuery = global.$ = $;

  // // Global w2ui properties
  // var w2uiCompoenents = require("./w2ui-1.5.rc1.min.js");
  // global.w2ui = w2uiCompoenents.w2ui;
  // global.w2obj = w2uiCompoenents.w2obj;
  // global.w2utils = w2uiCompoenents.w2utils;
})();
