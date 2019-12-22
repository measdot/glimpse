const template = data => /*html*/`
  <div>
      <h1>Hi, ${data.name} !!</h1>
  </div>
`;

export class SettingUp {
  constructor(container) {
    var home = "Regular Homies";
    $(container).html(template({ name: "kumar" }));
  }
}
