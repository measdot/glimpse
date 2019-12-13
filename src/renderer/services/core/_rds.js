import AWS from "aws-sdk";

export default {
  list: async profile => {
    var rds = new AWS.RDS({
      region: "us-east-1",
      credentials: new AWS.SharedIniFileCredentials({ profile: profile }),
    });

    return new Promise((res, rej) =>
      rds.describeDBInstances({}, (err, data) =>
        err ? rej(err) : res(data.DBInstances)
      )
    );
  },
};
