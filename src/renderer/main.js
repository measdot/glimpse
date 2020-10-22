import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import 'element-ui/lib/theme-chalk/index.css'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.component('splitpanes', Splitpanes)
Vue.component('pane', Pane)
Vue.use(ElementUI)
Vue.use(Chartkick.use(Chart))

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
