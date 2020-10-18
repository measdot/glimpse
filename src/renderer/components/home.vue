<template>
  <splitpanes style="height: 100vH">
    <pane class="side-area" size="25">
      <app-sidebar></app-sidebar>
    </pane>
    <pane class="main-area">
      <splitpanes horizontal>
        <pane class="content-area">
          <main-area></main-area>
        </pane>
        <pane class="footer" size="10"></pane>
      </splitpanes>
    </pane>
  </splitpanes>
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
.footer,
.content-area {
  padding: 0px 20px;
  background: #383838;
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
.list-container{
  border: 1px solid gray;

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
