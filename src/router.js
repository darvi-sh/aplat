import VueRouter from 'vue-router'

import List from './pages/List.vue'
import Machine from './pages/Machine.vue'
import NotFound from './pages/404.vue'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: List,
      name: 'home',
    },
    {
      path: '/list',
      component: List,
      name: 'list',
    },
    {
      path: '/machine/:id',
      component: Machine,
      name: 'machine',
    },
    {
      path: '/*',
      component: NotFound,
      name: 'notfound',
    },
  ],
})
