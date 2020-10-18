<template>
  <splitpanes horizontal>
    <pane class="side-menu">
      <vs-sidebar relative notLineActive square v-model="active" open>
        <template #logo>
          <img src="/static/images/logo.png" alt="" />
        </template>
        <vs-sidebar-item id="dashboard">
          <template #icon>
            <span class="material-icons"> dashboard </span>
          </template>
          Dashboard
        </vs-sidebar-item>
        <vs-sidebar-item id="popular">
          <template #icon>
            <span class="material-icons"> star </span>
          </template>
          Popular
        </vs-sidebar-item>
        <vs-sidebar-item id="flagged">
          <template #icon>
            <span class="material-icons"> flag </span>
          </template>
          Flagged
        </vs-sidebar-item>
        <hr />

        <vs-sidebar-item id="metrics">
          <template #icon background="primary">
            <span class="material-icons"> track_changes </span>
          </template>
          Metrics
        </vs-sidebar-item>
        <vs-sidebar-item id="events">
          <template #icon>
            <span class="material-icons"> offline_bolt </span>
          </template>
          Events
        </vs-sidebar-item>
        <vs-sidebar-item id="cost">
          <template #icon>
            <span class="material-icons"> offline_pin </span>
          </template>
          Cost
        </vs-sidebar-item>
        <vs-sidebar-item id="architecture">
          <template #icon>
            <span class="material-icons"> build_circle </span>
          </template>
          Architecture
        </vs-sidebar-item>
      </vs-sidebar>
    </pane>
    <pane class="side-footer" size="10">
      <vs-row justify="center" align="center">
        <vs-col align="center" justift="center" w="10">
          <vs-button flat> options </vs-button>
        </vs-col>
      </vs-row>
    </pane>
  </splitpanes>
</template>


<script>
// import SystemInformation from './LandingPage/SystemInformation'

export default {
  name: 'appSidebar',
  data: () => ({
    active: 'metrics'
  }),
  methods: {
    changeTab (e) {
      this.$store.commit('CHANGE_HOME_TAB', {id: this.active})
    }
  }
}
</script>
