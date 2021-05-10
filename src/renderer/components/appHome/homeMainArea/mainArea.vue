<template>
  <component v-bind:is="currentComponent"></component>
</template>


<script>
import awsServices from '@/components/awsServices/awsServices'
import appPrefs from '@/components/preferences/appPrefs'

export default {
  name: 'mainArea',
  components: {
    'app-prefs': appPrefs,
    'aws-services': awsServices
  },
  data: () => ({
    currentComponent: 'app-prefs'
  })
}
</script>

<style>
.splitpanes__splitter{
  display:none;
}
</style>