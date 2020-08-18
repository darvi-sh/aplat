import Vue from 'vue'
import VueRouter from 'vue-router'

import router from './router'

import App from './App.vue'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  router,
  apolloProvider: createProvider(),
  render: (h) => h(App)
}).$mount('#app')
