export class MainbarTabs {
  constructor(tabgroup) {
    this.tabGroup = tabgroup;
  }
  _templateString(tabGroup) {
    return `
    <div class="ui segment">
      ${tabGroup
        .map(
          (tab, i) =>
            `<div class="ui tab segment" data-tab="tab-${i}">
              ${tab.name}
            </div>`
        )
        .join("")}
    </div>
    `;
  }

  render() {
    this._container = this.box;
    $(this._container).html(this._templateString(this.tabGroup));
    this.init();
  }
  clear() {
    $(this._container).empty();
  }
  init() {
    // init tabs js comp by semantic ui
    $(`.menu .item`).tab();
  }
}
