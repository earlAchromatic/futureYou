<template>
  <TheHeader></TheHeader>
  <div class="columns">
    <ItemSection></ItemSection>
    <ChartSection></ChartSection>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
