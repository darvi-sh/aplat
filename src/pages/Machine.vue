<template>
  <article>
    <h1>Machine #{{ $route.params.id }}</h1>

    <Sensors v-if="machine.sensors.length" :sensors="machine.sensors" />
  </article>
</template>

<script>
import gql from 'graphql-tag'

import Sensors from './../components/Sensors.vue'

export default {
  name: 'Machine',

  components: {
    Sensors,
  },

  data() {
    return {
      machine: {
        sensors: [],
      },
    }
  },

  apollo: {
    machine: {
      query: gql`
        query GetMachine($which: MachineWhereUniqInput!) {
          machine(which: $which) {
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
      variables() {
        return { which: this.$route.params.id }
      },
    },
  },
}
</script>
