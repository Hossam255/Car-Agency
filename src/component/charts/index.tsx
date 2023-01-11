import React from "react";
import Styles from "./charts.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chart from "react-apexcharts";
import { Options } from "../../data/charts";

export type BarCartProps = {
  className?: string;
};

const BarCart = React.forwardRef(({ className }: BarCartProps, ref: any) => {
  return <Chart options={Options} type="bar" series={Options?.series} />;
});

BarCart.displayName = "BarCart";
export default BarCart;
