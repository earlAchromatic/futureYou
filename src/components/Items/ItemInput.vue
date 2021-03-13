<template>
  <div class="box">
    <h1 class="title">{{ this.$store.state.ListItems[0].itemName }}</h1>
    <div class="columns">
      <div class="column is-half">
        <input
          class="input"
          type="text"
          placeholder="Item Name"
          v-model="itemName"
        />
      </div>
      <div class="column">
        <input
          class="column input"
          type="text"
          placeholder="Item Cost"
          v-model="itemCost"
        />
      </div>
      <div class="column">
        <button
          class="button is-dark"
          @click="
            this.$store.commit('addItem', {
              itemName: itemName,
              cost: itemCost,
              futureCost: 45,
            })
          "
        >
          Add Item
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ItemInput",
  components: {},
  data: function() {
    return {
      itemName: "",
      itemCost: 0,
      //data: this.$store.state,
    };
  },
  methods: {},
  created() {
    console.log("created");
  },
};
</script>

<style scoped lang="css"></style>
