<template>
  <article>
    <h1>Machine #{{ $route.params.id }}</h1>

    <Sensors :sensors="[]" />
  </article>
</template>

<script>
import Sensors from './../components/Sensors.vue'

export default {
  name: 'Machine',
  components: {
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
