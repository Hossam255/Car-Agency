import React from "react";
import Chart from "react-apexcharts";
import { Options1 } from "../../../data/charts";

export type BarCartProps = {
  className?: string;
};

const BarCart = React.forwardRef(({ className }: BarCartProps, ref: any) => {
  return <Chart options={Options1} type="bar" series={Options1?.series} />;
});

BarCart.displayName = "BarCart";
export default BarCart;
