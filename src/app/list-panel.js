import { remote } from "electron";
import monitor from "./monitor";
import cloudItmes from "../ops/cloudItmes";
import itemInfo from "../ops/itemInfo";

export default {
  init: async () => {
    var cloudItemTypes = [
      "ec2", 
      "rds", 
      "ecs", 
      "alb"
    ];
    await cloudItmes.list(cloudItemTypes);

    const store = remote.getGlobal("sharedObj").store;
    const Table = require("table-builder");

    cloudItemTypes.forEach(cloudItemType => {
      var itemListTable =
        new Table({ class: "table table-hover" })
          .setHeaders({ name: "Item Name" })
          .setPrism(
            "name",
            (cell, item) =>
              `<span 
                class='infra_item' 
                id='${item.id}'
                data-type='${item.type}'
                data-profile='${item.profile}'
                data-meta='${JSON.stringify(item.meta)}'
              > ${item.name} </span>`
          )
          .setData(store.get(cloudItemType))
          .render() || "Data collection is empty!";

      $("#" + cloudItemType).html(itemListTable);
    });

    $(document).on("click", ".infra_item", async function() {
      $(".infra_item").removeClass("selected_item");
      $(this).addClass("selected_item");

      $(".card-title").html($(this).html());
      $(".card-category").html("From cloudwatch Metrics / Logs");
      var context = $(this).data();

      //TODO if graph call metric else events
      // await itemInfo.getMetricData(context)
      await itemInfo.getEcsServiceEvents(context);
      
      monitor.show("table", store.get("metricData")[`a`]);
    });
  },
};
