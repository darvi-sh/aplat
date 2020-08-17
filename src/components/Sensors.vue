<template>
  <div>
    <h2>Sensors</h2>

    <div>
      The Temperature<br />
      {{ temperature_dataset }}
    </div>

    <hr />

    <div>
      The Noise<br />
      {{ noise_dataset }}
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'Sensors',

  props: {
    sensors: Array,
  },

  data() {
    return {
      temperature_dataset: [],
      noise_dataset: [],
    }
  },

  created() {
    // this is not the best solution, but there should be
    // manual data grabbing even with the perfect data structure
    this.temperature = this.sensors.find(
      (sensor) => sensor.name === 'Truck Engine Temperature'
    )

    this.noise = this.sensors.find(
      (sensor) => sensor.name === 'Truck Engine Noise'
    )
  },

  apollo: {
    sensor_data: {
      query: gql`
        query GetMachineSensors($name: String!, $from: DateTime!, $to: DateTime!) {
          sensor_data(name: $name, from: $from, to: $to) {
            timestamp
            value
          }
        }
      `,
      variables() {
        return {
          name: this.sensors[0].machine_name,
          from: 1355314100,
          to: 1355314300,
        }
      },
    },
  },
}
</script>
