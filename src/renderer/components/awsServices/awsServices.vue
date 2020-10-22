<template>
  <splitpanes horizontal>
    <pane size="63">
        <service-details></service-details>
    </pane>
    <pane class="list-container" style="border-left: 1px solid #646464;border-right: 1px solid #646464;border-bottom: 1px solid #646464;">
        <service-list></service-list>
    </pane>
  </splitpanes>
</template>


<script>

import serviceList from '@/components/awsServices/serviceList/serviceList'
import serviceDetails from '@/components/awsServices/serviceDetails/serviceDetails'

export default {
  name: 'awsServices',
  components: {
    'service-list': serviceList,
    'service-details': serviceDetails
  },
  data: () => ({
    currentComponent: 'app-prefs'
  })
}
</script>