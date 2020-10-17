import Vue from 'vue'
import axios from 'axios'
import Vuesax from 'vuesax'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

import 'vuesax/dist/vuesax.css' // Vuesax styles

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.component('splitpanes', Splitpanes)
Vue.component('pane', Pane)
Vue.use(ElementUI)
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
