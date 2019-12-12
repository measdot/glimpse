import { GraphComponent } from "./_core/_graph";

export class Stock {
  constructor(container, state) {
    this._config = {
      title: null,
      legend: { enabled: false },
      credits: { enabled: false },
      plotOptions: { line: { marker: { enabled: false } } },
      xAxis: {
        type: "datetime",
        gridLineColor: "#3A3A3A",
        lineColor: "#3A3A3A",
        tickColor: "#3A3A3A"
      },
      yAxis: { title: "Price in USD", gridLineColor: "#3A3A3A" },
      series: [
        {
          color: "#555",
          name: "Close price",
          data: [
            49.9,
            71.5,
            26,
            33,
            49.9,
            71.5,
            26,
            33,
            49.9,
            71.5,
            26,
            33,
            49.9,
            71.5,
            26,
            33
          ]
        }
      ],
      chart: {
        marginBottom: 28,
        marginTop: 15,
        backgroundColor: "#e1e1e1"
      }
    };
    return new GraphComponent(container, "graph", this._config);
  }
}
