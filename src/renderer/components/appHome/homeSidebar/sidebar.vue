<template>
  <splitpanes horizontal>

    <pane class="side-menu">
      <el-menu
      background-color="#323232"
      text-color="#fff"
      active-text-color="#fff"
      default-active="2">
        <el-row>
          <el-col style="padding: 23px;">
            <el-image
              style="width: 100px; height: 100px; border-radius: 50%; display: block; margin: auto;"
              src="/static/images/avatar.png"
              fit="fill">
            </el-image>
            <div style="text-align: center; padding: 7px 0px; color: white; font-size: 0.8rem"><span>ButterOps Inc.</span></div>
          </el-col>
        </el-row>
        
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span>Dashboard</span>
        </el-menu-item>

        <el-menu-item index="2">
          <i class="el-icon-star-on"></i>
          <span>Popular</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-s-flag"></i>
          <span>Flagged</span>
        </el-menu-item>
        <el-divider></el-divider>

        <el-menu-item index="4">
          <i class="el-icon-pie-chart"></i>
          <span>Metrics</span>
        </el-menu-item>

        <el-menu-item index="5">
          <i class="el-icon-bank-card"></i>
          <span>Cost</span>
        </el-menu-item>

        <el-menu-item index="6">
          <i class="el-icon-s-operation"></i>
          <span>Events</span>
        </el-menu-item>

        <el-menu-item index="7">
          <i class="el-icon-office-building"></i>
          <span>Architecture</span>
        </el-menu-item>
        <div style="height: 100%"></div>
        <el-menu-item style="position:absolute; bottom: 10px; width: 100%" index="8">
          <i class="el-icon-odometer"></i>
          <span>Options</span>
        </el-menu-item>

      </el-menu>
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

<style lang="css">
*{
  font-family: sans-serif;
  /* user-select: none; */
}
.el-menu{
  height: 100%;
  font-weight: 400;
}
.el-menu-item, .el-submenu__title {
  height: 35px;
  line-height: 33px;
}
.el-menu-item { 
  padding-left: 15px!important;
  cursor: default;
  font-size: 0.8rem;
  opacity: 0.9;
}
[class^=el-icon-]:before {
  vertical-align: sub;
}
.el-menu-item:hover {
  background-color: transparent !important;
}

.el-menu-item.is-active,
.el-menu-item.is-active:hover{
  background-color: #444444 !important;
}

.el-menu-item i 
{
  background-color: black;
  color: white;
  border-radius: 4px;
  padding: 0px 0px;
  background-color: rgba(95, 97, 225, 1);
  width: 26px !important;
  height: 26px;
}
.el-menu {
    border-right: none;
    /* border-right: solid 1px #e6e6e6; */
}
.el-divider--horizontal {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 9px;
  margin-bottom: 9px;
  opacity: 0.1;
}
</style>