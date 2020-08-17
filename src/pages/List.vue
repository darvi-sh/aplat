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
export default {
  name: 'List',
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
