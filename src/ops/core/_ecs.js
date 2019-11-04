import AWS from "aws-sdk";

const getServiceName = async clusterName => {};

export default {
  list: async profile => {
    var ecs = new AWS.ECS({
      region: "us-east-1",
      credentials: new AWS.SharedIniFileCredentials({ profile: profile }),
    });

    return new Promise((res, rej) =>
      ecs.listClusters({}, (err, data) =>
        err ? rej(err) : res(data.clusterArns)
      )
    );
  },

  events: async ({ clusterName }, profile) => {
    console.log(clusterName);
    var ecs = new AWS.ECS({
      region: "us-east-1",
      credentials: new AWS.SharedIniFileCredentials({ profile: profile }),
    });

    return new Promise((res, rej) =>
      ecs.listServices({ cluster: clusterName }, (err, data) => {
        if (err) {
          rej(err);
        } else {
          var params = {
            services: [data.serviceArns[0]],
            cluster: clusterName,
          };
          ecs.describeServices(params, function(err, data) {
            if (err) {
              reject(err);
            } else {
              var events = [];
              data.services.forEach(service => {
                events = events.concat(service.events)
              });
              res(events);
            }
          });
        }
      })
    );
  },
};
