import AWS from "aws-sdk";

export default {
  getMetricStatistics: async (params, profile) => {
    var cloudwatch = new AWS.CloudWatch({
      region: "us-east-1",
      credentials: new AWS.SharedIniFileCredentials({ profile: profile }),
    });
  
    return new Promise((res, rej) =>
      cloudwatch.getMetricStatistics(params, (err, data) =>
        err ? rej(err) : res(data)
      )
    );
  }
};
