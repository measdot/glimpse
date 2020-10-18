<template>
  <div>
    <splitpanes style="height: 100vH">
      <pane class="side-area" min-size="25" max-size="25" size="25"> 
        <app-sidebar></app-sidebar>
      </pane>
      <pane class="main-area" style="border-left: 1px solid #646464">
        <splitpanes horizontal>
          <pane class="content-area">
            <main-area></main-area>
          </pane>
          <pane class="footer" size="10">
            <el-row type="flex" class="row-bg"  align="middle"  justify="end" style="height: 100%;" >
              <el-col :span="22"><span style="float: right; color: white; opacity: 0.8; font-size: 0.7rem;">Updated today at 10:19 PM</span></el-col>
              <el-col :span="2">
                <el-badge is-dot class="item" style="float: right;">
                  <el-button style="width: 26px; border-radius: 50%; height: 26px; padding: 3px; background-color: gray;" class="share-button" icon="el-icon-question" type="warning"></el-button>
                </el-badge>
              </el-col>
            </el-row>
          </pane>
        </splitpanes>
      </pane>
    </splitpanes>
    <div style="position: absolute; top: 0; width: 100%; height: 35px;-webkit-app-region: drag;"></div>
  </div>

</template>

<script>
import appSidebar from '@/components/appHome/homeSidebar/sidebar'
import mainArea from '@/components/appHome/homeMainArea/mainArea'

export default {
  name: 'app-home',
  components: {
    'app-sidebar': appSidebar,
    'main-area': mainArea
  },
  data: () => ({
    value1: '2'
  })
}
</script>

<style>
body, #app {
  height: 100vH;
  margin: 0px;
  padding: 0px;
}
.toolbar{
  justify-content: center;
  align-content: center;
}

.footer,
.content-area {
  padding: 0px 20px;
  background: #383838;
}

.list-container{
  overflow-y: scroll;
}

.splitpanes__pane {
  width: unset;
}
</style>
