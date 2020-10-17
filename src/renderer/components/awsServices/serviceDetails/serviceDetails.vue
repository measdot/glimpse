<template>
  <splitpanes horizontal>
    <pane class="toolbar" size="15">
      <metrics-toolbar></metrics-toolbar>
    </pane>
    <pane class="detail-container">infographic</pane>
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