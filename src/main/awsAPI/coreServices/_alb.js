import AWS from "aws-sdk";

export default {
  list: async profile => {
    var alb = new AWS.ELBv2({
      region: "us-east-1",
      credentials: new AWS.SharedIniFileCredentials({ profile: profile }),
    });

    return new Promise((res, rej) =>
      alb.describeLoadBalancers({}, (err, data) =>
        err ? rej(err) : res(data.LoadBalancers)
      )
    );
  },
};
