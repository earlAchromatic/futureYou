<template>
  <div class="column is-half">
    <ItemInput></ItemInput>
    <ItemList></ItemList>
  </div>
</template>

<script lang="ts">
import ItemInput from "./ItemInput.vue";
import ItemList from "./ItemList.vue";

export default {
  name: "ItemSection",
  components: {
    ItemInput,
    ItemList,
  },
};
</script>

<style scoped lang="css"></style>
