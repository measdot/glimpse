<template>
    <div class="grid">
      <vs-row>
        <vs-col class="side" w=4>
          <vs-sidebar
            relative
            square
            background="none"
            v-model="active"
            open
          >
          <template #logo>
            <img src="/static/images/logo.png" alt="">
          </template>
          <vs-sidebar-item id="home">
            <template #icon>
              <span class="material-icons">
                track_changes
              </span>
            </template>
            Home
          </vs-sidebar-item>
          <vs-sidebar-item id="market">
            <template #icon>
              <span class="material-icons">
                offline_bolt
              </span>
            </template>
            Overview
          </vs-sidebar-item>
          <vs-sidebar-item id="Music">
            <template #icon>
              <span class="material-icons">
                offline_pin
              </span>
            </template>
            Music
          </vs-sidebar-item>
          <hr>
          <vs-sidebar-item id="donate">
            <template #icon>
              <span class="material-icons">
                build_circle
              </span>
            </template>
            Donate
          </vs-sidebar-item>
          <vs-sidebar-item id="drink">
            <template #icon>
              <span class="material-icons">
                all_out
              </span>
            </template>
            Drink
          </vs-sidebar-item>
          <vs-sidebar-item id="shopping">
            <template #icon>
              <span class="material-icons">
                play_for_work
              </span>
            </template>
            Shopping
          </vs-sidebar-item>
          <vs-sidebar-item id="chat">
            <template #icon>
              <span class="material-icons">
                stars
              </span>
            </template>
            Chat
          </vs-sidebar-item>
          <template #footer>
            <vs-row justify="space-between">
              <vs-avatar badge-color="danger" badge-position="top-right">
                <img src="static/images/logo.png" alt="">
                <template #badge>
                  28
                </template>
              </vs-avatar>
            </vs-row>
          </template>
        </vs-sidebar>
        </vs-col>
        <vs-col class="main" w=8>
          <split-pane style="height: -webkit-fill-available;" v-on:resize="resize" split="horizontal">
            <template slot="paneL">
              A
            </template>
            <template slot="paneR">
              B
            </template>
          </split-pane>
        </vs-col>
      </vs-row>
    </div>
</template>
<script>
// import SystemInformation from './LandingPage/SystemInformation'

export default {
  name: 'landing-page',
  data: () => ({
    active: 'guide'
  }),
  methods: {}
}
</script>

<style>
.panel,
.list{
  height: 50%;
}

.noselect {
  -webkit-user-select: none;
  -webkit-app-region: drag;
  height: 22px;
  /* background: rgb(45, 45, 45); */
}
body{
  margin:0px
}
.side{
  width: 180px;
  /* padding: 10px; */
}
.main {
  padding: 5px 20px;
  height: -webkit-fill-available;
}

.vs-sidebar-content.relative {
  height: 100vH;
  width: -webkit-fill-available;
}
.vs-sidebar-content .vs-sidebar__logo {
  min-height: 165px;
}
/* :root {
    --vs-primary: 60, 60, 60;
}
.material-icons {
  font-size: 30px;
}
.vs-button--icon .vs-button__content {
    padding: 3px 3px;
} */
</style>
