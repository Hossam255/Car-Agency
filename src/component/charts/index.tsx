import React from "react";
import Styles from "./charts.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chart from "react-apexcharts";
import { Option } from "../../data/charts";
export type CircleProgressProps = {
  className?: string;
  percentageNum: number;
  trailColor: string;
  pathColor: string;
  textcolor: string;
};

const CircleProgress = React.forwardRef(
  (
    {
      className,
      percentageNum,
      trailColor,
      pathColor,
      textcolor,
      Option,
    }: CircleProgressProps,
    ref: any
  ) => {
    return (
      <Container className={`p-0 m-0 ${Styles["header"]}`} fluid>
        <Row className=" mx-0 ">
          <Col>
            <Chart options={Option} type="bar" width={500} height={320} />
          </Col>
        </Row>
      </Container>
    );
  }
);

CircleProgress.displayName = "CircleProgress";
export default CircleProgress;
