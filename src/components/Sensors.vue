<template>
  <div>
    <h2>Sensors</h2>

    <ul>
      <li v-for="sensor in sensors" :key="sensor.name">
        {{ sensor.name }}
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
