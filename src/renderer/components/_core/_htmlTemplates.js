export class Sidebar {
  constructor() {
    this.render();
  }

  render() {
    this._container = $(this.box);
    this._container.html(sidebar);
    this.init();
  }
  init() {
    $(".menu.aws .item").tab();
  }
}
export class Toolbar {
  render() {
    $(this.box).html(toolbar);
    this.init();
  }
  init() {}
}

export class Mainbar {
  render() {
    $(this.box).html(mainbar);
    this.init();
  }

  init() {
    $(".menu.aws .item").tab();
  }
}

const sidebar = /*html*/ `
<div class="ui vertical menu" style="width: 150px; min-height:100%; border:none">
  <div class="item aws-services">
    <div class="header">AWS Services</div>
    <!-- <div class="menu aws">
      <a class="item" data-tab="first">Application Load Balancers</a>
      <a class="item" data-tab="second">Autoscaling Groups</a>
      <a class="item" data-tab="third">EC2 Instances</a>
      <a class="item" data-tab="fourth">ECS</a>
      <a class="item" data-tab="fifth">RDS Instances</a>
    </div> -->
  </div>
  <div class="item help">
    <div class="header">Help</div>
    <div class="menu">
      <a class="item">How to?</a>
      <a class="item">FAQs</a>
      <a class="item">Feedback</a>
      <a class="item">Report a Bug</a>
    </div>
  </div>
</div>`;

const toolbar = /*html*/ `
<div class="top-menu">
  <div class="ui menu">
    <div class="ui dropdown icon item">
      <i class="chart pie icon"></i>
      <div class="menu">
        <div class="item">
          <i class="dropdown icon"></i>
          <span class="text">New</span>
          <div class="menu">
            <div class="item">Document</div>
            <div class="item">Image</div>
          </div>
        </div>
        <div class="item">
          Open...
        </div>
        <div class="item">
          Save...
        </div>
        <div class="item">Edit Permissions</div>
        <div class="divider"></div>
        <div class="header">
          Export
        </div>
        <div class="item">
          Share...
        </div>
      </div>
    </div>
    <div class="right menu">
      <div class="ui right aligned category search item">
        <div class="ui transparent icon input">
          <input
            class="prompt"
            type="text"
            placeholder="/All EC2 Instances"
          />
          <i class="search link icon"></i>
        </div>
        <div class="results"></div>
      </div>
    </div>
  </div>
</div>
`;
const mainbar = /*html*/ `
  <div class="ui segment">
  
    <!-- <div class="ui tab segment" data-tab="first">
      <p> Explore W2UI (layout + panels )onContent / onShow to hook a callback funtion</p>
      <p> Explore if content set dynamically would help?</p>
    </div>
    <div class="ui tab segment" data-tab="second">
      Second
    </div>
    <div class="ui tab segment" data-tab="third">
      Third
    </div>
    <div class="ui tab segment" data-tab="fourth">
      Fourth
    </div>
    <div class="ui tab segment" data-tab="fifth">
      Fifth
    </div> -->
  </div>
`;
