<template>
  <div class="box">
    <h1 class="title">Add Items You May Purchase</h1>
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
            addItem({ itemName: itemName, cost: itemCost, futureCost: 45 })
          "
        >
          Add Item
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions } from "vuex";
export default {
  name: "ItemInput",
  components: {},
  data: function() {
    return {
      itemName: "",
      itemCost: 0,
    };
  },
  methods: {
    ...mapActions(["addItem"]),
    // enterItem(itemName: string, itemCost: number) {
    //   let obj: object = {
    //     itemName: itemName,
    //     cost: itemCost,
    //   };
    //   console.log(this.$store.state.itemListData);
    // },
    // enterItem: function(): any {
    //   console.log(this.$store.state.itemListData);
    // },
  },
};
</script>

<style scoped lang="css"></style>
