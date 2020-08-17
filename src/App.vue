<template>
  <div>
    <header>
      <router-link to="/">
        <img
          alt="Alpat solutions logo"
          src="./assets/logo.png"
          width="64"
          height="64"
        />
      </router-link>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>&copy; copyright 2020</footer>
  </div>
</template>

<script>
import './index.css'

export default {
  name: 'Layout',
}
</script>
