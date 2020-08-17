<template>
  <layout>
    <article>
      <h1>Machines</h1>

      <ul>
        <li v-for="machine in machines" :key="machine.name">
          <v-link :href="`/machine?id=${machine.id}`">
            {{ machine.name }}
          </v-link>
        </li>
      </ul>
    </article>
  </layout>
</template>

<script>
import Layout from './../Layout.vue'
import VLink from './../components/VLink.vue'

export default {
  name: 'List',
  components: {
    Layout,
    VLink,
  },
  data() {
    return {
      machines: [
        {
          id: 1,
          name: 'Smol Truck',
        },
        {
          id: 2,
          name: 'Big Truck',
        },
      ],
    }
  },
}
</script>
