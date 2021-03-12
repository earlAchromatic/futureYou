<template>
  <TheHeader></TheHeader>
  <div class="container">
    <div class="columns">
      <ItemSection :list="this.$store.state.itemListData"></ItemSection>
      <ChartSection :list="this.$store.state.itemListData"></ChartSection>
    </div>
  </div>
  <TheFooter></TheFooter>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TheHeader from "./components/TheHeader.vue";
import ItemSection from "./components/Items/ItemSection.vue";
import ChartSection from "./components/Chart/ChartSection.vue";
import TheFooter from "./components/TheFooter.vue";

export default defineComponent({
  name: "App",
  components: {
    TheHeader,
    ItemSection,
    ChartSection,
    TheFooter,
  },
});
</script>

<style>
#app {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(
    141deg,
    rgba(255, 207, 80, 1) 12%,
    rgba(180, 55, 84, 1) 49%
  );
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
