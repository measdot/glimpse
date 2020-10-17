<template>
  <splitpanes horizontal>
    <pane size="60">
        <service-details></service-details>
    </pane>
    <pane class="list-container" size="40">
        <service-list></service-list>
    </pane>
  </splitpanes>
</template>


<script>

import serviceList from '@/components/awsServices/serviceList/serviceList'
import serviceDetails from '@/components/awsServices/serviceDetails/serviceDetails'

export default {
  name: 'mainArea',
  components: {
    'service-list': serviceList,
    'service-details': serviceDetails
  },
  data: () => ({})
}
</script>