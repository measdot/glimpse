<template>
  <splitpanes horizontal>
    <pane class="toolbar" size="15">
      <!-- <metrics-toolbar></metrics-toolbar> -->
    </pane>
    <pane class="detail-container"  style="border: 1px solid #646464">
      <h5 style="height: 0px;margin: 0;">Usage</h5>
      <h2>5h 33m</h2>
      <column-chart :stacked="true" label="Value" :colors="['#69d3fd', '#69d3fd']" style="height: 100px" :data="{'Mo': 2, 'Tu': 5, 'We': 7, 'Th': 8, 'Fr': 13, 'Sa': 11, 'Su': 17}"></column-chart>
      <line-chart :stacked="true" label="Value" :colors="['#fa9632', '#fa9632']" style="height: 100px" :data="{'Mo': 2, 'Tu': 5, 'We': 7, 'Th': 8, 'Fr': 13, 'Sa': 11, 'Su': 17}"></line-chart>
    </pane>
  </splitpanes>
</template>

<script>
import metricsToolbar from '@/components/metrics/metricsToolbar'

export default {
  name: 'servicDetails',
  components: {
    'metrics-toolbar': metricsToolbar
  },
  data: () => ({})
}

// this vue file should import
</script>

<style lang="css">
.detail-container{
  background-color: rgb(30, 30, 30);
  color: white;
  padding: 15px;
}
</style>