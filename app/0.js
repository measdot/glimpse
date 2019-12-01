(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/app/chart-component.js":
/*!************************************!*\
  !*** ./src/app/chart-component.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var golden_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! golden-layout */ "golden-layout");
/* harmony import */ var golden_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(golden_layout__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(_itemContainer) {
    var chartConfig = {
      settings: {
        showPopoutIcon: false,
        showMaximiseIcon: false,
        showCloseIcon: true
      },
      content: [{
        type: 'stack',
        width: 60,
        content: [{
          type: 'component',
          componentName: 'testComponent',
          title: 'CPU Utilization'
        }, {
          type: 'component',
          componentName: 'testComponent',
          title: 'Network In'
        }, {
          type: 'component',
          componentName: 'testComponent',
          title: 'Network Out'
        }, {
          type: 'component',
          componentName: 'testComponent',
          title: 'SwapUsage'
        }, {
          type: 'component',
          componentName: 'testComponent',
          title: 'WriteThroughput'
        }, {
          type: 'component',
          componentName: 'testComponent',
          title: 'ReadThroughput'
        }]
      }]
    };
    var chartLayout = new golden_layout__WEBPACK_IMPORTED_MODULE_0___default.a(chartConfig, _itemContainer);
    chartLayout.registerComponent('testComponent', function () {});
    chartLayout.init();
  }
});

/***/ }),

/***/ "./src/app/home.js":
/*!*************************!*\
  !*** ./src/app/home.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var golden_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! golden-layout */ "golden-layout");
/* harmony import */ var golden_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(golden_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart-component */ "./src/app/chart-component.js");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-component */ "./src/app/list-component.js");



var config = {
  settings: {
    hasHeaders: false
  },
  content: [{
    type: "column",
    width: 60,
    content: [{
      type: "component",
      componentName: "ChartComponent",
      title: "Cloud Monitor"
    }, {
      type: "component",
      componentName: "ListComponent",
      title: "Cloud Resources"
    }]
  }]
};
var HomeComponent = new golden_layout__WEBPACK_IMPORTED_MODULE_0___default.a(config);
HomeComponent.registerComponent("ChartComponent", function (container, state) {
  _chart_component__WEBPACK_IMPORTED_MODULE_1__["default"].init(container.getElement());
});
HomeComponent.registerComponent("ListComponent", function (container, state) {
  _list_component__WEBPACK_IMPORTED_MODULE_2__["default"].init(container.getElement());
});
HomeComponent.init();

/***/ }),

/***/ "./src/app/list-component.js":
/*!***********************************!*\
  !*** ./src/app/list-component.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var golden_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! golden-layout */ "golden-layout");
/* harmony import */ var golden_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(golden_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ag_grid_community_all_modules_dist_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-community/all-modules/dist/styles/ag-grid.css */ "@ag-grid-community/all-modules/dist/styles/ag-grid.css");
/* harmony import */ var _ag_grid_community_all_modules_dist_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ag_grid_community_all_modules_dist_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ag_grid_community_client_side_row_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ag-grid-community/client-side-row-model */ "@ag-grid-community/client-side-row-model");
/* harmony import */ var _ag_grid_community_client_side_row_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ag_grid_community_client_side_row_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ag-grid-community/all-modules */ "@ag-grid-community/all-modules");
/* harmony import */ var _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__);

 // import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';




/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(_itemContainer) {
    var listConfig = {
      settings: {
        showPopoutIcon: false,
        showMaximiseIcon: false,
        showCloseIcon: false
      },
      content: [{
        type: "stack",
        width: 60,
        content: [{
          type: "component",
          isClosable: false,
          componentName: "EC2",
          title: "EC2"
        }, {
          type: "component",
          isClosable: false,
          componentName: "RDS",
          title: "RDS"
        }, {
          type: "component",
          isClosable: false,
          componentName: "ASG",
          title: "ASG"
        }, {
          type: "component",
          isClosable: false,
          componentName: "ASG",
          title: "S3"
        }, {
          type: "component",
          isClosable: false,
          componentName: "RDS",
          title: "CLOUDWATCH"
        }, {
          type: "component",
          isClosable: false,
          componentName: "RDS",
          title: "CLOUDTRAIL"
        }, {
          type: "component",
          isClosable: false,
          componentName: "ASG",
          title: "PIPELINE"
        }]
      }]
    };
    var listLayout = new golden_layout__WEBPACK_IMPORTED_MODULE_0___default.a(listConfig, _itemContainer);
    listLayout.registerComponent("EC2", function (container, state) {
      // return new GridComponent( container, state);
      var columnDefs = [{
        headerName: "Make",
        field: "make"
      }, {
        headerName: "Model",
        field: "model"
      }, {
        headerName: "Price",
        field: "price"
      }]; // specify the data

      var rowData = [{
        make: "Toyota",
        model: "Celica",
        price: 35000
      }, {
        make: "Ford",
        model: "Mondeo",
        price: 32000
      }, {
        make: "Porsche",
        model: "Boxter",
        price: 72000
      }]; // let the grid know which columns and what data to use

      var gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData
      };
      var eGridDiv = container.getElement();
      new _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__["Grid"](eGridDiv, gridOptions, {
        modules: [_ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__["Grid"]]
      });
    });
    listLayout.registerComponent("RDS", function () {});
    listLayout.registerComponent("ASG", function () {});
    listLayout.init();
  }
}); // var GridComponent = function(container, state) {
//   this._container = container;
//   this._state = state;
//   this._grid = null;
//   this._columns = [
//     { id: "symbol", name: "Symbol", field: "symbol" },
//     { id: "company", name: "Company", field: "company" },
//     { id: "price", name: "Price", field: "price" },
//     { id: "change", name: "Change", field: "change" },
//     { id: "changeRel", name: "Change %", field: "changeRel" },
//     { id: "volume", name: "Volume", field: "volume" }
//   ];
//   this._options = {
//     editable: false,
//     enableAddRow: false,
//     enableCellNavigation: true,
//     enableColumnReorder: false
//   };
//   container.on("open", this._createGrid(), this);
// };
// GridComponent.prototype._createGrid = function() {
//   this._grid = new Slick.Grid(
//     this._container.getElement(),
//     (function() {
//       var data = [
//         "Acme, inc.",
//         "ACI",
//         "Ajax",
//         "AJX",
//         "Allied Biscuit",
//         "ABS",
//         "Ankh-Sto Associates",
//         "ASA",
//         "Atlantic Northern",
//         "ANO",
//         "Axis Chemical Co.",
//         "ACC",
//         "Barrytron",
//         "BRT",
//         "Big Kahuna Burger",
//         "BKB",
//         "Big T Burgers and Frie",
//         "BBF",
//         "Blammo",
//         "BLM",
//         "BLAND Corporation",
//         "BLC",
//         "Bluth Company",
//         "BLU",
//         "Burleigh and Strongint",
//         "BAS",
//         "C.H. Lavatory and Sons",
//         "CLS",
//         "Carrys Candles",
//         "CCD",
//         "Central Perk",
//         "CEP",
//         "Charles Townsend Agenc",
//         "CTA",
//         "Chasers",
//         "CSS",
//         "Chez Quis",
//         "CQU",
//         "Chotchkies",
//         "CKI",
//         "Cogswell Cogs",
//         "CCO",
//         "Colonial Movers",
//         "CMO",
//         "Compuglobalhypermegane",
//         "CCH",
//         "Corellian Engineering",
//         "CEN",
//         "Data Systems",
//         "DAS",
//         "Duff Brewing Company",
//         "DBC",
//         "Dunder Mifflin",
//         "DMF",
//         "Extensive Enterprise",
//         "EEP",
//         "Fake Brothers",
//         "FBR",
//         "Flowers By Irene",
//         "FBI",
//         "Foo Bars",
//         "FOB",
//         "Gadgetron",
//         "GAG",
//         "Galaxy Corp",
//         "GAC",
//         "General Forge and Foun",
//         "GFF",
//         "General Products",
//         "GPO",
//         "General Services Corpo",
//         "GSC",
//         "Gizmonic Institute",
//         "GIT",
//         "Globex Corporation",
//         "GLC",
//         "Globo Gym American Cor",
//         "GGA",
//         "Globo-Chemimacals",
//         "GCE",
//         "Gringotts",
//         "GGO",
//         "Incom Corporation",
//         "ICO",
//         "Industrial Automation",
//         "IAU",
//         "Initech",
//         "IIT",
//         "Initrode",
//         "INT",
//         "Input, Inc.",
//         "INP",
//         "Keedsler Motors",
//         "KMS",
//         "Klimpys",
//         "KLM",
//         "Krustyco",
//         "KUC",
//         "Kumatsu Motors",
//         "KMO",
//         "Leeding Engines Ltd.",
//         "LEL",
//         "LexCorp",
//         "LCO",
//         "LuthorCorp",
//         "LCP",
//         "Mainway Toys",
//         "MTO",
//         "Mammoth Pictures",
//         "MPI",
//         "McMahon and Tate",
//         "MAT",
//         "Megadodo Publications",
//         "MPU",
//         "Milliways",
//         "MIW",
//         "Minuteman Cafe",
//         "MIC",
//         "Moes Tavern",
//         "MOT",
//         "Monarch Playing Card Corp",
//         "MPC",
//         "Monks Diner",
//         "MOD",
//         "Mooby Corp",
//         "MOB",
//         "Mr. Sparkle",
//         "MRS",
//         "Niagular",
//         "NIA",
//         "Nordyne Defense Dynamimics",
//         "NDD",
//         "North Central Positron",
//         "NCP",
//         "Omni Consimer Products",
//         "OCP",
//         "Osato Chemicals",
//         "OCE",
//         "Petrox Oil Company",
//         "POC",
//         "Plow King",
//         "PLK",
//         "Powell Motors",
//         "PWM",
//         "Praxis Corporation",
//         "PRX",
//         "Primatech",
//         "PMT",
//         "QWERTY Logistics",
//         "QWR",
//         "Roboto Industries",
//         "ROI",
//         "Rouster and Sideways",
//         "RAS",
//         "Roxxon",
//         "ROX",
//         "Sirius Cybernetics Cor",
//         "SCC",
//         "Sixty Second Avenue",
//         "SSA",
//         "Smith and Co.",
//         "SAC",
//         "Sombra Corporation",
//         "SOC",
//         "Sonky Rubber Goods",
//         "SRG",
//         "Spacely Sprockets",
//         "SPR",
//         "Spade and Archer",
//         "SAA",
//         "SpringShield",
//         "SSH",
//         "St. Anky Beer",
//         "SAB",
//         "Stay Puft Corporation",
//         "SPC",
//         "Sto Plains Holdings",
//         "SPH",
//         "Strickland Propane",
//         "SPO",
//         "Taco Grande",
//         "TAG",
//         "Taggart Transcontinent",
//         "TTA",
//         "Tessier-Ashpool",
//         "TEA",
//         "Thatherton Fuels",
//         "TAF",
//         "The Frying Dutchman",
//         "TFD",
//         "The Krusty Krab",
//         "TKK",
//         "The Legitimate Busines",
//         "TLB",
//         "The New Firm",
//         "TNF",
//         "Three Waters",
//         "TWA",
//         "Thrift Bank",
//         "TBA",
//         "Tip Top Cafe",
//         "TTC",
//         "Transworld Consortium",
//         "TWC",
//         "U.S. Robotics and Mech",
//         "URM",
//         "United Fried Chicken",
//         "UFC",
//         "Universal Export",
//         "UEX",
//         "Vandelay Industries",
//         "VAI",
//         "Videlectrix",
//         "VEX",
//         "Virtucon",
//         "VUC",
//         "Water and Power",
//         "WAP",
//         "Wentworth Industries",
//         "WEI",
//         "Wernham Hogg",
//         "WEH",
//         "Western Gas & Electric",
//         "WGE",
//         "Widget Corp",
//         "WCO",
//         "Zevo Toys",
//         "ZET",
//         "ZiffCorp",
//         "ZFC"
//       ];
//       var output = [];
//       var change, price;
//       for (var i = 0; i < data.length; i += 2) {
//         price = (1000 * Math.random()).toFixed(2);
//         changeRel = (-5 + 10 * Math.random()).toFixed(2);
//         output.push({
//           symbol: data[i],
//           company: data[i + 1],
//           price: price,
//           change: (price * (changeRel / 100)).toFixed(2),
//           changeRel: changeRel,
//           volume: Math.floor(Math.random() * 100000)
//         });
//       }
//       return output;
//     })(),
//     this._columns,
//     this._options
//   );
//   this._container.on("resize", this._resize, this);
//   this._container.on("destroy", this._destroy, this);
//   this._resize();
// };
// GridComponent.prototype._resize = function() {
//   this._grid.resizeCanvas();
//   this._grid.autosizeColumns();
// };
// GridComponent.prototype._destroy = function() {
//   this._grid.destroy();
// };

/***/ })

}]);
//# sourceMappingURL=0.js.map