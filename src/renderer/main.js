import Vue from 'vue'
import axios from 'axios'
import Vuesax from 'vuesax'
import splitPane from 'vue-splitpane'

import 'vuesax/dist/vuesax.css' // Vuesax styles

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.component('split-pane', splitPane)
Vue.use(Vuesax, {
  // options here
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
