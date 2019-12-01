import Layout from "./_shared/layout";
import { Grid } from "@ag-grid-community/all-modules";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
// import jexcel from 'jexcel'

const drawGrid = function(container, state) {
  var columnDefs = [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" }
  ];
  var rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];
  var gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData
  };
  var eGridDiv = container.getElement()[0];
  new Grid(eGridDiv, gridOptions, {
    modules: [ClientSideRowModelModule]
  });

  // var data = [
  //   ['US', 'Wholemeal', 'Yes', '2019-02-12'],
  //   ['CA;US;UK', 'Breakfast Cereals', 'Yes', '2019-03-01'],
  //   ['CA;BR', 'Grains', 'No', '2018-11-10'],
  //   ['BR', 'Pasta', 'Yes', '2019-01-12'],
  // ];
  
  // $(eGridDiv).jexcel({
  //   data:data,
  //   columns: [
  //       { type:'dropdown', width:'300', title:'Product Origin', url:'/jexcel/countries', autocomplete:true, multiple:true },
  //       { type:'text', width:'200', title:'Description' },
  //       { type:'dropdown', width:'100', title:'Stock', source:['No','Yes'] },
  //       { type:'calendar', width:'100', title:'Best before' },
  //   ]
  // });

};

const ListGLConfig = {
  settings: {
    showPopoutIcon: false,
    showMaximiseIcon: false,
    showCloseIcon: false
  },
  content: [
    {
      type: "stack",
      activeItemIndex: 0,
      content: []
    }
  ]
};

export default {
  init: container => {
    var ListLayout = Layout.init(ListGLConfig, container);
    ListLayout = Layout.add(
      {
        type: "component",
        isClosable: false,
        componentName: "ec2",
        title: "EC2",
        component: drawGrid
      },
      ListLayout
    );
    ListLayout = Layout.add(
      {
        type: "component",
        isClosable: false,
        componentName: "rds",
        title: "RDS",
        component: function(container, state) {



        }
      },
      ListLayout
    );
  }
};
