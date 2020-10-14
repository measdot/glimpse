<template>
  <splitpanes style="height: 100vH">
    <pane size="30">
      <vs-sidebar
          relative
          square
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
      </vs-sidebar>
    </pane>
    <pane>
      <splitpanes horizontal>
        <pane size="8">
          <div class="grid">
            <vs-row justify="flex-end">
              <vs-col w=3 order=1>
                <div class="">
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
                </div>
              </vs-col>
              <vs-col w=1>

              </vs-col>
            </vs-row>
          </div>

        </pane>
        <pane>
          <splitpanes horizontal>
            <pane size="60">
              <span>3</span>
            </pane>
            <pane size="40">
              <span>4</span>
            </pane>
          </splitpanes>
        </pane>
        <pane size="8">5</pane>
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
    value1: '2'
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
.vs-button-group .material-icons{
  font-size: 15px;
}
.splitpanes__pane {
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* font-family: Helvetica, Arial, sans-serif; */
  /* color: rgba(255, 255, 255, 0.6); */
  /* font-size: 2em; */
}
</style>
