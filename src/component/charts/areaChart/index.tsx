import React from "react";
import Styles from "./areaCharts.module.scss";

import Chart from "react-apexcharts";
import { Options2 } from "../../../data/charts";

export type AreaCartProps = {
  className?: string;
};

const AreaCart = React.forwardRef(({ className }: AreaCartProps, ref: any) => {
  return <Chart options={Options2} type="area" series={Options2?.series} />;
});

AreaCart.displayName = "AreaCart";
export default AreaCart;
