<template>
  <div class="column">
    <div class="box">
      <TheChart
        class="chart"
        height="400"
        type="bar"
        :options="chartOptions"
        :series="series"
      ></TheChart>
      <div class="column">
        <input
          type="range"
          name="Timeline"
          id="Timeline"
          min="0"
          max="30"
          step="any"
          list="timelineticks"
        />
        <datalist id="timelineticks">
          <option value="0"></option>
          <option value="5"></option>
          <option value="10"></option>
          <option value="15"></option>
          <option value="20"></option>
          <option value="25"></option>
          <option value="30"></option>
        </datalist>

        <input
          type="range"
          name="Interest Rate"
          id="InterestRate"
          min="0"
          max="15"
          step="any"
          list="interestticks"
        />
        <datalist id="interestticks">
          <option value="2"></option>
          <option value="4"></option>
          <option value="6"></option>
          <option value="8"></option>
          <option value="10"></option>
          <option value="12"></option>
          <option value="14"></option>
        </datalist>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "ChartSection",
  components: {
    TheChart: VueApexCharts,
  },
  props: {
    itemListData: Object,
  },
  data: function() {
    return {
      chartOptions: {
        noData: {
          text: "Enter an Item",
          align: "center",
          verticalAlign: "middle",
          offsetX: 0,
          offsetY: 0,
          style: {
            color: undefined,
            fontSize: "14px",
            fontFamily: undefined,
          },
        },
        chart: {
          type: "bar",
          stacked: true,
          id: "FutureYou",
          background: "#00000000",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
        dataLabels: {
          style: {
            colors: ["#ffffff"],
          },
        },
        theme: {
          mode: "dark",
          palette: "palette3",
        },
      },
      series: [
        {
          name: "PRODUCT A",
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: "PRODUCT B",
          data: [13, 23, 20, 8, 13, 27],
        },
        {
          name: "PRODUCT C",
          data: [11, 17, 15],
        },
        {
          name: "PRODUCT D",
          data: [21, 7, 25, 13, 22, 8],
        },
      ],
    };
  },
};
</script>

<style scoped lang="css">
input {
  margin: 20px;
  width: 300px;
  color: white;
}
</style>
