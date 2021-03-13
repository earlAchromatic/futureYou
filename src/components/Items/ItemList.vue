<template>
  <div class="box">
    <h1 class="title">Item List</h1>
    <table class="table is-fullwidth">
      <thead>
        <th>Item</th>
        <th>Cost Today</th>
        <th>Cost to Future You</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="(value, index) in this.$store.state.ListItems" :key="index">
          <td>{{ value.itemName }}</td>
          <td>{{ value.cost }}</td>
          <td>{{ value.futureCost }}</td>
          <td><button>remove item</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: "ItemList",
  components: {},
};
</script>

<style scoped lang="css"></style>
