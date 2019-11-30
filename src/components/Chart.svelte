<script>
  import { onMount, onDestroy } from "svelte";
  import * as am4core from "@amcharts/amcharts4/core";
  import * as am4charts from "@amcharts/amcharts4/charts";
  import am4themes_dark from "@amcharts/amcharts4/themes/dark";
  import am4themes_animated from "@amcharts/amcharts4/themes/animated";
  import { theme } from "../stores.js";

  let themeValue;
  let chart;

  const createChart = () => {
    if (chart) {
      chart = am4core.create("chartdiv", am4charts.XYChart);
      chart.paddingRight = 20;
      let data = [];
      let visits = 10;
      for (let i = 1; i < 366; i++) {
        visits += Math.round(
          (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10
        );
        data.push({
          date: new Date(2018, 0, i),
          name: "name" + i,
          value: visits
        });
      }

      chart.data = data;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;

      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";

      series.tooltipText = "{valueY.value}";
      chart.cursor = new am4charts.XYCursor();

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;
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

  onMount(() => {
    chart = am4core.create("chartdiv", am4charts.XYChart);
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
</script>

<style>
  div {
    width: 100%;
    height: 500px;
  }

  .dark {
    background-color: black;
  }

  .light {
    background-color: white;
  }
</style>

<div id="chartdiv" class={themeValue.mode} />
