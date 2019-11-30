<script>
  // https://www.amcharts.com/docs/v4/chart-types/force-directed/
  import { onMount, onDestroy, afterUpdate } from "svelte";
  import * as am4core from "@amcharts/amcharts4/core";
  import * as am4charts from "@amcharts/amcharts4/charts";
  import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
  import am4themes_dark from "@amcharts/amcharts4/themes/dark";
  import am4themes_animated from "@amcharts/amcharts4/themes/animated";
  import { theme } from "../stores.js";

  let themeValue;
  let chart;

  export let graphData;

  const createChart = () => {
    if (chart) {
      let chart = am4core.create(
        "circlechartdiv",
        am4plugins_forceDirected.ForceDirectedTree
      );

      let networkSeries = chart.series.push(
        new am4plugins_forceDirected.ForceDirectedSeries()
      );

      console.log(graphData)

      chart.data = graphData
        // chart.data = [
        //   {
        //     name: "Core",
        //     children: [
        //       {
        //         name: "First",
        //         children: [
        //           { name: "A1", value: 100 },
        //           { name: "A2", value: 60 }
        //         ]
        //       },
        //       {
        //         name: "Second",
        //         children: [
        //           { name: "B1", value: 135 },
        //           { name: "B2", value: 98 }
        //         ]
        //       },
        //       {
        //         name: "Third",
        //         children: [
        //           {
        //             name: "C1",
        //             children: [
        //               { name: "EE1", value: 130 },
        //               { name: "EE2", value: 87 },
        //               { name: "EE3", value: 55 }
        //             ]
        //           },
        //           { name: "C2", value: 148 },
        //           {
        //             name: "C3",
        //             children: [
        //               { name: "CC1", value: 53 },
        //               { name: "CC2", value: 30 }
        //             ]
        //           },
        //           { name: "C4", value: 26 }
        //         ]
        //       },
        //       {
        //         name: "Fourth",
        //         children: [
        //           { name: "D1", value: 415 },
        //           { name: "D2", value: 148 },
        //           { name: "D3", value: 89 }
        //         ]
        //       },
        //       {
        //         name: "Fifth",
        //         children: [
        //           {
        //             name: "E1",
        //             children: [
        //               { name: "EE1", value: 33 },
        //               { name: "EE2", value: 40 },
        //               { name: "EE3", value: 89 }
        //             ]
        //           },
        //           {
        //             name: "E2",
        //             value: 148
        //           }
        //         ]
        //       }
        //     ]
        //   }
        // ];

        networkSeries.dataFields.value = "value";
      networkSeries.dataFields.name = "name";
      networkSeries.dataFields.children = "children";
      networkSeries.nodes.template.tooltipText = "{name}:{value}";
      networkSeries.nodes.template.fillOpacity = 1;
      networkSeries.manyBodyStrength = -20;
      networkSeries.links.template.strength = 0.8;
      networkSeries.minRadius = am4core.percent(2);

      networkSeries.nodes.template.label.text = "{name}";
      networkSeries.fontSize = 10;
    }
  };

  const unsubscribeTheme = theme.subscribe(theme => {
    themeValue = theme;

    if (themeValue && themeValue.mode === "dark") {
      if (chart) chart.dispose();
      am4core.unuseAllThemes();
      am4core.useTheme(am4themes_dark);
      createChart();
    } else {
      if (chart) chart.dispose();
      am4core.unuseAllThemes();
      am4core.useTheme(am4themes_animated);
      createChart();
    }
  });

  afterUpdate(() => {
    createChart()
  })

  onMount(() => {
    chart = am4core.create("circlechartdiv", am4charts.XYChart);
    chart.paddingRight = 20;
    createChart();
  });

  onDestroy(() => {
    console.log("ondestroy");
    if (chart) {
      chart.dispose();
    }
    unsubscribeTheme();
  });

  am4core.ready(function() {}); // end am4core.ready()
</script>

<style>
  #circlechartdiv {
    width: 100%;
    height: 550px;
  }
</style>

<div id="circlechartdiv" />
