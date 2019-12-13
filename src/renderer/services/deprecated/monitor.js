export default {
  wait: (forItem = "", totalSteps = 1, doneSteps = 1) => {
    drawLoadingScreen("monitor-screen", forItem, doneSteps / totalSteps);
  },
  show: (type, data) => {
    switch (type) {
      case "graph":
        drawGraph("monitor-screen", data);
        break;
      case "table":
        drawTable("monitor-screen", data);
        break;
    }
  },
  home: () => {
    drawHomeScreen("monitor-screen");
  },
};

const drawGraph = (container, graphs) => {
  var slides = "";
  graphs.forEach((graph, i) => {
    slides += `<div data-slidr="${i}"">
        <div class="ct-chart" id="${graph.name}"></div>
      </div>`;
    new Chartist.Line("#" + graph.name, graph);
  });
  $("#" + container)
    .html("")
    .removeClass()
    .append(slides)
    .slick({ dots: false });
};

const drawTable = (container, table) => {
  const Table = require("table-builder");

  var eventsTable =
    new Table({ class: "table" })
      .setHeaders({ createdAt: "Time", message: "Message" })
      .setPrism("createdAt", (cell, item) => {
        return new Date(cell).toLocaleString();
      })
      .setData(table)
      .render() || "Data collection is empty!";

  $("#" + container)
    .html("")
    .removeClass()
    .html(eventsTable);
};

const drawLoadingScreen = (container, item, percentCompleted) => {
  $("#" + container).html(
    `<div class="text-center">
      <h1>${Math.floor(percentCompleted * 100)}</h1>
      <h5>-- complete, now loading --</h5>
      <h3>${item}</h3>
    </div>`
  );
};

const drawHomeScreen = container => {
  $("#" + container).html(
    `<div class="app-logo">
      <h1>Glimpse<h1>
    </div>`
  );
};
