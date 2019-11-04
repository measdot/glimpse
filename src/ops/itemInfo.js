import monitor from "../app/monitor";
import { remote } from "electron";
import cw from "./core/_cw";
import ecs from "./core/_ecs";

const processDataForGraph = metricData => {
  var allGraphs = [];
  metricData.forEach((data, index) => {
    var graphData = {
      name: data.Label,
      lables: [],
      series: [],
    };

    var Average = [];
    var SampleCount = [];
    var Maximum = [];
    var Minimum = [];
    var Sum = [];

    data.Datapoints.forEach((dataPoint, i) => {
      graphData.lables.push(dataPoint.Timestamp);
      Average.push(dataPoint.Average);
      SampleCount.push(dataPoint.SampleCount);
      Maximum.push(dataPoint.Maximum);
      Minimum.push(dataPoint.Minimum);
      Sum.push(dataPoint.Sum);
    });

    graphData.series.push(Average, SampleCount, Maximum, Minimum, Sum);
    allGraphs.push(graphData);
  });

  return allGraphs;
};

export default {
  getMetricData: async ({ type, profile, meta }) => {
    var Metrics = {
      ec2: [
        {
          Namespace: "AWS/EC2",
          MetricNames: ["CPUUtilization", "NetworkIn"],
        },
      ],
      alb: [
        {
          Namespace: "AWS/ELB",
          MetricNames: [
            "HealthyHostCount",
            "UnHealthyHostCount",
            "RequestCount",
            "HTTPCode_Backend_2XX",
            "HTTPCode_Backend_3XX",
            "HTTPCode_Backend_4XX",
            "HTTPCode_Backend_5XX",
          ],
        },
      ],
      rds: [
        {
          Namespace: "AWS/RDS",
          MetricNames: [
            "DatabaseConnections",
            "CPUUtilization",
            "SwapUsage",
            "WriteIOPS",
            "ReadIOPS",
            "WriteLatency",
            "ReadLatency",
            "WriteThroughput",
            "ReadThroughput",
          ],
        },
      ],
    };
    var EndTime = new Date();
    var StartTime = new Date(EndTime - 15 * 60 * 1000);

    var allMetricStats = [];
    console.log(type)
    for (const metric of Metrics[type]) {
      var Namespace = metric.Namespace;
      var doneSteps = 0;
      var totalSteps = metric.MetricNames.length;

      for (const MetricName of metric.MetricNames) {
        monitor.wait(MetricName, totalSteps, doneSteps++);

        var dimensions = [];
        switch (type) {
          case "ec2":
            dimensions.push({
              Name: "InstanceId",
              Value: meta["InstanceId"],
            });
            break;

          case "alb":
            dimensions.push({
              Name: "LoadBalancer",
              Value: meta["LoadBalancerArn"].split(':')[1],
            });
            break;

          case "rds":
            dimensions.push({
              Name: "DBInstanceIdentifier",
              Value: meta["DBInstanceIdentifier"],
            });
            break;
        }
        var params = {
          Period: 60,
          StartTime: StartTime,
          EndTime: EndTime,
          MetricName: MetricName,
          Namespace: Namespace,
          Statistics: ["SampleCount", "Average", "Sum", "Minimum", "Maximum"],
          Dimensions: dimensions,
        };

        var metricStats = await cw.getMetricStatistics(params, profile);
        metricStats.Namespace = Namespace;

        allMetricStats.push(metricStats);
      }
    }

    const store = remote.getGlobal("sharedObj").store;
    var metricData = store.has("metricData") ? store.get("metricData") : {};
    metricData["a"] = processDataForGraph(allMetricStats);
    store.set("metricData", metricData);
  },

  getEcsServiceEvents: async({ type, profile, meta })=>{
    var events = await ecs.events({clusterName: meta.cluster.split('/')[1]}, profile)
    const store = remote.getGlobal("sharedObj").store;
    var metricData = store.has("metricData") ? store.get("metricData") : {};
    metricData["a"] = events;
    store.set("metricData", metricData);
  }
};
