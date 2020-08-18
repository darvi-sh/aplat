<template>
  <div>
    <h2>Sensors</h2>

    <div class="chart-area">
      <h3>The Temperature</h3>
      <line-chart
        v-if="temperature_dataset"
        :chart-data="temperature_dataset"
        :options="{
          fill: false
        }"
      />
    </div>

    <hr />

    <div class="chart-area">
      <h3>The Noise</h3>
      <line-chart
        v-if="noise_dataset"
        :chart-data="noise_dataset"
        :options="{
          fill: false
        }"
      />
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
    updateTemperatureChartData(temperature_data) {
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

      temperature_data.map(sensor_datum => {
        data.labels.push(
          new Date(sensor_datum.timestamp * 1000).toLocaleDateString()
        )
        data.datasets[0]['data'].push(sensor_datum.value)
      })

      this.temperature_dataset = data
    },

    updateNoiseChartData(temperature_data) {
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

      temperature_data.map(sensor_datum => {
        data.labels.push(
          new Date(sensor_datum.timestamp * 1000).toLocaleDateString()
        )
        data.datasets[0]['data'].push(sensor_datum.value)
      })

      this.noise_dataset = data
    }
  },
  created() {
    // this is not the best solution, but there should be
    // manual data grabbing even with the perfect data structure
    this.temperature = this.sensors.find(
      sensor => sensor.name === 'Truck Engine Temperature'
    )

    this.noise = this.sensors.find(
      sensor => sensor.name === 'Truck Engine Noise'
    )
  },

  apollo: {
    temperature_sensor_data: {
      query: gql`
        query GetSensorData(
          $name1: String!
          $name2: String!
          $from: DateTime!
          $to: DateTime!
        ) {
          sensor_data_temperature: sensor_data(
            name: $name1
            from: $from
            to: $to
          ) {
            timestamp
            value
          }
          sensor_data_noise: sensor_data(name: $name2, from: $from, to: $to) {
            timestamp
            value
          }
        }
      `,
      result({ data }) {
        this.updateTemperatureChartData(data.sensor_data_temperature)
        this.updateNoiseChartData(data.sensor_data_noise)
      },
      variables() {
        return {
          name1: this.sensors[0].name,
          name2: this.sensors[1].name,
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
