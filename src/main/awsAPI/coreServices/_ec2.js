import AWS from 'aws-sdk'

export default {
  list: async function (profile) {
    var ec2 = new AWS.EC2({
      region: 'us-east-1',
      credentials: new AWS.SharedIniFileCredentials({ profile: profile })
    })
    var params = { DryRun: false }

    return new Promise((resolve, reject) =>
      ec2.describeInstances(params, (err, data) =>
        err ? rej(err) : res(data.Reservations)
      )
    )
  }
}
