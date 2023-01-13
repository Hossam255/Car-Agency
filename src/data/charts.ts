import { ApexOptions } from "apexcharts";

export const Options1: ApexOptions | undefined = {
  chart: {
    type: "line",
  },
  series: [
    {
      name: "sales",
      data: [110, 90, 120, 80, 110, 60, 90],
    },
  ],
  xaxis: {
    type: "category",
    categories: ["1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
  },
  yaxis: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: true,
    borderColor: "#90A4AE",
    strokeDashArray: 0,
    position: "back",
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    row: {
      colors: undefined,
      opacity: 0.5,
    },
    column: {
      colors: undefined,
      opacity: 0.5,
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};

export const Options2: ApexOptions | undefined = {
  series: [
    {
      name: "sales",
      data: [40, 90, 120, 70, 90, 10, 30, 5],
    },
  ],
  chart: {
    type: "area",
    height: 350,
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    colors: ["#FF764C", "#E91E63", "#9C27B0"],
  },

  labels: ["7am", "9am", "11am", "1pm", "3pm", "5pm", "7pm", "9pm"],
  xaxis: {
    type: "category",
  },
  yaxis: {
    show: false,
    opposite: true,
  },
  legend: {
    horizontalAlign: "left",
  },
  fill: {
    colors: ["#F44336", "#E91E63", "#9C27B0"],
  },
};
