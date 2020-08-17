import { createApp, h } from 'vue'
import routes from './routes'

import NotFound from './pages/404.vue'

const SimpleRouterApp = {
  data: () => ({
    currentRoute: window.location.pathname,
  }),

  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound
    },
  },

  render() {
    return h(this.ViewComponent)
  },

  created() {
    window.addEventListener('popstate', () => {
      this.currentRoute = window.location.pathname
    })
  },
}

createApp(SimpleRouterApp).mount('#app')
