<template>
  <splitpanes style="height: 100vH">
    <pane class="side-area" size="27">
      <splitpanes horizontal>
        <pane class="side-menu">
          <vs-sidebar
            relative
            notLineActive
            square
            v-model="active"
            open
          >
          <template #logo>
            <img src="/static/images/logo.png" alt="">
          </template>
          <vs-sidebar-item id="shopping">
            <template #icon>
              <span class="material-icons">
                dashboard
              </span>
            </template>
            Dashboard
          </vs-sidebar-item>
          <vs-sidebar-item id="drink">
            <template #icon>
              <span class="material-icons">
                star
              </span>
            </template>
            Popular
          </vs-sidebar-item>
          <vs-sidebar-item id="flagged">
            <template #icon>
              <span class="material-icons">
                flag
              </span>
            </template>
            Flagged
          </vs-sidebar-item>
          <hr>

          <vs-sidebar-item id="home">
            <template #icon background="primary">
              <span class="material-icons">
                track_changes
              </span>              
            </template>
            Metrics
          </vs-sidebar-item>
          <vs-sidebar-item id="market">
            <template #icon>
              <span class="material-icons">
                offline_bolt
              </span>
            </template>
            Events
          </vs-sidebar-item>
          <vs-sidebar-item id="Music">
            <template #icon>
              <span class="material-icons">
                offline_pin
              </span>
            </template>
            Cost
          </vs-sidebar-item>
          <vs-sidebar-item id="donate">
            <template #icon>
              <span class="material-icons">
                build_circle
              </span>
            </template>
            Architecture
          </vs-sidebar-item>
        </vs-sidebar>
        
        </pane>
        <pane class="side-footer" size="10">
          <vs-row justify="center" align="center">
            <vs-col align="center" justift="center" w=10>
              <vs-button flat>
                options
              </vs-button>
            </vs-col>
          </vs-row>
        </pane>
      </splitpanes>
    </pane>
    <pane class="content-area">
      <splitpanes horizontal>
        <pane class="toolbar" size="7">
          <div class="center grid">
            <vs-row justify="flex-end" align="center">
              <vs-col w=3 order=1>
                <vs-button-group>
                  <vs-button icon>
                    <span class="material-icons">
                      arrow_back_ios
                    </span>
                  </vs-button>
                  <vs-button >
                    Today
                  </vs-button>
                  <vs-button icon>
                    <span class="material-icons">
                      arrow_forward_ios
                    </span>
                  </vs-button>
                </vs-button-group>
              </vs-col>
              <vs-col w=1>
                <vs-button icon>
                  <span class="material-icons">
                    date_range
                  </span>
                </vs-button>
              </vs-col>
            </vs-row>
          </div>

        </pane>
        <pane>
          <splitpanes horizontal>
            <pane class="detail-container" size="60">
              <span>3</span>
            </pane>
            <pane class="list-container" size="40">
              <vs-table v-model="selected" striped>
                <template #tbody>
                  <vs-tr
                    square
                    :key="i"
                    v-for="(tr, i) in users"
                    :data="tr"
                    :is-selected="selected == tr"
                  >
                    <vs-td>
                      {{ tr.name }}
                    </vs-td>
                    <vs-td>
                    {{ tr.email }}
                    </vs-td>
                    <vs-td>
                    {{ tr.id }}
                    </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
            </pane>
          </splitpanes>
        </pane>
        <pane class="footer" size="10">5</pane>
      </splitpanes>
    </pane>
    </splitpanes>
</template>
<script>
// import SystemInformation from './LandingPage/SystemInformation'

export default {
  name: 'landing-page',
  data: () => ({
    active: 'home',
    value1: '2',
    selected: null,
    users: [
      {
        'id': 1,
        'name': 'Leanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'website': 'hildegard.org'
      },
      {
        'id': 2,
        'name': 'Leanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'website': 'hildegard.org'
      },
      {
        'id': 3,
        'name': 'Leanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'website': 'hildegard.org'
      },
      {
        'id': 4,
        'name': 'Leanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'website': 'hildegard.org'
      },
      {
        'id': 5,
        'name': 'Meanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'website': 'hildegard.org'
      },
      {
        'id': 6,
        'name': 'Neanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'website': 'hildegard.org'
      }
    ]
  }),
  methods: {}
}
</script>

<style>
body, #app {
  height: 100vH;
  margin: 0px;
  padding: 0px;
}
.vs-sidebar-content {
  width: 100%;
}
/* .toolbar  */
.material-icons{
  font-size: 15px;
  color: white;
}
.toolbar{
  justify-content: center;
  align-content: center;
}
.toolbar .grid, .toolbar .grid .vs-row{
  height:100%
}
.vs-button-group .vs-button {
  margin:1px;
}
.vs-button-group .vs-button:first-of-type,
.vs-button-group .vs-button:last-of-type,
.vs-button-group .vs-button:not(:last-of-type):not(:first-of-type) 
{
 border-radius: 4px;
}
.vs-button {
  margin:0;
  font-size: 0.8rem;
  border-radius: 4px;
}
.content-area {
  padding: 0px 20px;
  background: #f9e7e7;
}
.vs-sidebar__logo {
  min-height: 165px!important;
}
.vs-sidebar-content .vs-sidebar__logo img {
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
}

.list-container{
  overflow-y: scroll;
}

/* .toolbar, */
.detail-container, 
.list-container,
.footer{
  border: 1px dotted gray;

}
.vs-sidebar__item__icon{
    border-radius: 4px;
    padding: 0px 4px;
    background-color: rgba(95, 97, 225, 1);
}
.vs-sidebar__item.hasIcon {
    padding: 0.21rem 0px;
}
.vs-sidebar__item__icon {
    min-width: 26px;
    height: 26px;
}
.vs-sidebar__item.hasIcon.active,
.vs-sidebar__item.hasIcon.active:hover,
.vs-sidebar__item.hasIcon:hover,
.vs-sidebar__item.hasIcon
{
  padding-left: 14px;
}
.vs-sidebar__item__text {
  padding: 0px 10px;
  font-weight: 400;
}
.vs-sidebar__item {
  opacity: 0.9;
}
.vs-sidebar__item.active{
  background: lightgray;
}
button {
    cursor: unset;
}
.vs-button__content{
  padding: 3px 15px;
}
.vs-button--icon .vs-button__content {
    padding: 3px 3px;
}
.vs-table tr {
    cursor: unset !important;
    border-radius: 0px;
    height: 40px;
}
.vs-table__tr:first-of-type .vs-table__td:first-child,
.vs-table__td:first-child,
.vs-table__tr:first-of-type .vs-table__td:last-child,
.vs-table__td:last-child {
    border-radius: 0px;
}
.vs-table.striped .vs-table__tr:nth-child(2n) {
    background: lightgray !important;
}
.splitpanes__pane {
  width: unset;
  /* border: 1px dotted gray; */

  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* font-family: Helvetica, Arial, sans-serif; */
  /* color: rgba(255, 255, 255, 0.6); */
  /* font-size: 2em; */
}
</style>
