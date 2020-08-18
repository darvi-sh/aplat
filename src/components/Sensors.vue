<template>
  <div>
    <h2>Sensors</h2>

    <div class="chart-area">
      <h3>The Temperature</h3>
      <line-chart
        v-if="temperature_dataset && temperature_dataset.labels.length"
        :chart-data="temperature_dataset"
        :options="{
          fill: false
        }"
      />
      <div v-else>No data</div>
    </div>

    <hr />

    <div class="chart-area">
      <h3>The Noise</h3>
      <line-chart
        v-if="noise_dataset && noise_dataset.labels.length"
        :chart-data="noise_dataset"
        :options="{
          fill: false
        }"
      />
      <div v-else>No data</div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import LineChart from './LineChart.js'

export default {
  name: 'Sensors',

  components: {
    LineChart
  },

  props: {
    sensors: Array
  },

  data() {
    return {
      temperature_dataset: null,
      noise_dataset: null
    }
  },

  methods: {
    morphDataForChart(sensor_data) {
      if (!sensor_data) {
        return null
      }

      const data = {
        labels: [],
        datasets: [
          {
            label: 'Temperature',
            borderColor: '#C63',
            data: []
          }
        ]
      }

      sensor_data.map(sensor_datum => {
        data.labels.push(
          new Date(sensor_datum.timestamp * 1000).toLocaleDateString()
        )
        data.datasets[0]['data'].push(sensor_datum.value)
      })

      return data
    },
    
  },
  created() {
    // technically we can make everything dynamic and
    // automatically generate sensor data
    // here everything is done manually
    this.temperature = this.sensors.find(
      sensor => sensor.name === 'Truck Engine Temperature'
    )

    this.noise = this.sensors.find(
      sensor => sensor.name === 'Truck Engine Noise'
    )
  },

  apollo: {
    // changing this key would result in gql complaining, not sure why
    temperature_sensor_data: {
      query: gql`
        query GetSensorData(
          $temperature_sensor_name: String!
          $noise_sensor_name: String!
          $from: DateTime!
          $to: DateTime!
        ) {
          temperature_sensor_data: sensor_data(
            name: $temperature_sensor_name
            from: $from
            to: $to
          ) {
            timestamp
            value
          }
          noise_sensor_data: sensor_data(
            name: $noise_sensor_name,
            from: $from,
            to: $to
          ) {
            timestamp
            value
          }
        }
      `,
      result({ data }) {
        this.temperature_dataset = this.morphDataForChart(data.temperature_sensor_data)
        this.noise_dataset = this.morphDataForChart(data.noise_sensor_data)
      },
      variables() {
        return {
          temperature_sensor_name: this.sensors[0].name,
          noise_sensor_name: this.sensors[1].name,
          from: 1355314100,
          to: 1355314300
        }
      }
    }
  }
}
</script>

<style scoped>
.chart-area {
  max-width: 500px;
}
</style>
