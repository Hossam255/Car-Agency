import { ApexOptions } from "apexcharts";

export const Options1: ApexOptions | undefined = {
  chart: {
    type: "line",
  },
  series: [
    {
      name: "sales",
      data: [110, 90, 120, 80, 110, 60, 90, 100],
    },
  ],
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T13:00:00.000Z",
      "2018-09-19T14:00:00.000Z",
      "2018-09-19T15:00:00.000Z",
      "2018-09-19T16:00:00.000Z",
      "2018-09-19T17:00:00.000Z",
      "2018-09-19T18:00:00.000Z",
      "2018-09-19T19:00:00.000Z",
    ],
  },
  yaxis: {
    show: false,
  },
};

export const Options2: ApexOptions | undefined = {
  chart: {
    type: "line",
  },
  series: [
    {
      name: "sales",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ],
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
  },
  yaxis: {
    show: false,
  },
};
