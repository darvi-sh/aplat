<template>
  <div>
    <h2>Sensors</h2>

    <ul>
      <li v-for="machine in machines" :key="machine.name">
        {{ machine.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sensors',

  props: {
    sensors: Array,
  },
}
</script>
