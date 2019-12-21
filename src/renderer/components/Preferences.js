import os from "os";
import fs from "fs";

export class Preferences {
  constructor(container, state) {
    const homedir = os.homedir();
    var filePath = homedir + "/.aws/config";
    fs.readFile(filePath, { encoding: "utf-8" }, function(err, data) {
      if (!err) {
        // everything inside [], eg. [profile root]
        // var awsConfig = data.match(/\[(.*?)\]/);
        container.getElement().html(`
        <div class="card-deck" style="padding:10px">
          <div class="card" ">
              <div class="card-body">
                <p class="card-text">region = us-east-1 output = json</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label" for="customCheck1">EC2</label>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label" for="customCheck1">RDS</label>
                  </div>
                </li>
              </ul>
              <div class="card-body">
                <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitch1">
                    <label class="custom-control-label" for="customSwitch1">DEV</label>
                </div>
              </div>
          </div>
        </div>
        `);
      }
    });

    return "";
  }
}
