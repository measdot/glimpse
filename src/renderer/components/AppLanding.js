export class AppLanding {
  constructor(container) {
    document.title = "Glimpse : Setup";
    $(container).html(/*html*/ `
        <div class="ui bottom fixed menu">
          <div class="ui container labeled icon button attached green flat">
              <i class="right arrow icon"></i>
              I'm done Configuring, load the app now
          </div>
        </div>
        <div class="ui container" style="padding-bottom:40px;">
          <div class="ui basic segment">
            <h3 class="ui dividing header">Terms & Conditions</h3>
            <p>
              Glimpse uses aws node sdk to cmmunicate with your aws cloudaccount(s) to
            </p>
            <ol>
              <li>[read only] see through all configured aws accounts</li>
              <li>[read only] list various resources like ec2, asg, ecs and more.</li>
              <li>[read only] fetch available Cloudwatch metrics for the resouces </li>
            </ol>
            <div class="ui checkbox ">
              <input type="checkbox" name="example">
              <label>Seems fine :-)</label>
            </div>
          </div>
          <div class="ui basic segment">
            <h3 class="ui dividing header">Accounts</h3>
            <div class="ui cards">
              <div class="card">
                <div class="content">
                  <div class="header">
                    <div class="ui checkbox ">
                      <input type="checkbox" name="example">
                      <label>Stage</label>
                    </div>
                  </div>
                  <div class="description">
                    <p>Default Zone = us-east-1</p>
                    <p>Content Type = json</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="content">
                  <div class="header">
                    <div class="ui checkbox ">
                      <input type="checkbox" name="example">
                      <label>Prod</label>
                    </div>
                  </div>
                  <div class="description">
                    <p>Default Zone = us-east-1</p>
                    <p>Content Type = json</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>


      `);
  }
}
