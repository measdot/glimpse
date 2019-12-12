import { remote } from "electron";
import ec2 from "./core/_ec2";
import rds from "./core/_rds";
import ecs from "./core/_ecs";
import alb from "./core/_alb";

export default {
  list: async function(types) {
    const store = remote.getGlobal("sharedObj").store;
    const profiles = ["dev", "stage", "prod"];

    for (var i = 0; i < types.length; i++) {
      var cloudItemType = types[i];
      var allItems = [];
      for (var j = 0; j < profiles.length; j++) {
        var AWSAccount = profiles[j];
        var items = await getCloudItems(cloudItemType, AWSAccount);
        allItems = allItems.concat(items);
      }
      store.set(cloudItemType, allItems);
    }
  },
};

const getCloudItems = async (cloudItemType, profile) => {
  var list = [];
  switch (cloudItemType) {
    case "ec2":
      var ec2List = await ec2.list(profile);
      ec2List.forEach(reservation=>{
        var ins = reservation.Instances[0];
        list.push({
          id: ins.InstanceId,
          name: ins.Tags.find(Tag => Tag.Key == "Name").Value,
          profile: profile,
          type: "ec2",
          meta: ins,
        });
      })
      break;

    case "rds":
      var rdsList = await rds.list(profile);
      rdsList.forEach(db =>
        list.push({
          id: db.DBInstanceArn,
          name: db.DBInstanceIdentifier,
          profile: profile,
          type: 'rds',
          meta: db
        })
      );
      break;

    case "ecs":
      var ecsList = await ecs.list(profile);      
      ecsList.forEach(clusterArn =>
        list.push({
          id: clusterArn,
          name: clusterArn.split("/")[1],
          profile: profile,
          type: 'ecs',
          meta: {cluster: clusterArn}
        })
      );
      break;


    case "alb":
      var albList = await alb.list(profile);
      albList.forEach(alb =>
        list.push({
          id: alb.LoadBalancerArn,
          name: alb.LoadBalancerName,
          profile: profile,
          type: 'alb',
          meta: alb
        })
      );
      break;
  }
  return new Promise(res => res(list));
};
