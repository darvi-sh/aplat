<template>
  <layout>
    <article>
      <h1>Machine #</h1>

      <Sensors sensors="sensors" />
    </article>
  </layout>
</template>

<script>
import Layout from './../Layout.vue'
import Sensors from './../components/Sensors.vue'

export default {
  name: 'Machine',
  components: {
    Layout,
    Sensors,
  },
  data() {
    return {
      sensors: [
        {
          name: 'Smol Truck',
        },
        {
          name: 'Big Truck',
        },
      ],
    }
  },
}
</script>
