export class SidebarMenu {
  constructor(menuGroups = []) {
    this.menuGroups = menuGroups;
  }

  _templateString(menuGroups) {
    var n = menuGroups.length;
    console.log("length of menugroups array", n);
    return `
      <div class="ui vertical menu" style="width: 150px; min-height:100%; border:none">
        ${menuGroups
          .map(
            (menuGroup, i) => `
              <div class="item menu menu-group-${i}">
                ${
                  menuGroup.name
                    ? `<div class="header">${menuGroup.name}</div>`
                    : ""
                }
                <div class="menu">
                  ${menuGroup.items
                    .map(
                      (item, j) =>
                        `<a class="item" data-tab="tab-${i + j}"> ${
                          item.name
                        } </a>`
                    )
                    .join("")}
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    `;
  }

  render() {
    var _html = this._templateString(this.menuGroups);
    $(this.box).html(_html);
  }

  clear() {
    this.menuGroups = [];
    console.log("cleared");
  }
  set(menu) {
    this.menuGroups = menu;
  }
}
