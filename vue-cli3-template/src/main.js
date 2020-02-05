import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './icons' // icon
import * as filters from './filters/index'

import 'normalize.css/normalize.css'
import './styles/index.scss'

Object.keys(filters).forEach(element => {
  Vue.filters(element, filters[element])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
