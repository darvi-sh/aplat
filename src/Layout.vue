<template>
  <header>
    <v-link href="/">
      <img
        alt="Alpat solutions logo"
        src="./assets/logo.png"
        width="64"
        height="64"
      />
    </v-link>
  </header>

  <main>
    <slot></slot>
  </main>

  <footer>&copy; copyright 2020</footer>
</template>

<script>
import VLink from './components/VLink.vue'

import './index.css'

export default {
  name: 'Layout',
  components: {
    VLink,
  },
}
</script>
