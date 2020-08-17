<template>
  <article>
    <h1>Machines</h1>

    <ul>
      <li v-for="machine in machines" :key="machine.name">
        <router-link :to="`/machine/${machine.id}`">
          {{ machine.name }}
        </router-link>
      </li>
    </ul>
  </article>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'List',

  data() {
    return {
      machines: [],
    }
  },

  apollo: {
    machines: gql`
      query {
        machines {
          id
          name
          sensors {
            name
          }
          lastKnownPosition {
            lat
            lng
          }
        }
      }
    `,
  },
}
</script>
