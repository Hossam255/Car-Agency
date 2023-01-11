import React from "react";
import Styles from "./circleProgress.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export type CircleProgressProps = {
  className?: string;
  percentageNum: number;
  text: string;
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
      text,
    }: CircleProgressProps,
    ref: any
  ) => {
    return (
      <Container className={`p-0 m-0 ${Styles["header"]}`} fluid>
        <Row className=" mx-0 ">
          <Col>
            <CircularProgressbar
              className={`${Styles["circle"]}`}
              value={percentageNum}
              text={`${text} %`}
              circleRatio={0.7}
              styles={{
                trail: {
                  stroke: trailColor,
                  strokeLinecap: "butt",
                  transform: "rotate(-126deg)",
                  transformOrigin: "center center",
                },
                path: {
                  stroke: pathColor,
                  strokeLinecap: "butt",
                  transform: "rotate(-126deg)",
                  transformOrigin: "center center",
                },
                text: {
                  fill: textcolor,
                },
              }}
              strokeWidth={10}
            />
          </Col>
        </Row>
      </Container>
    );
  }
);

CircleProgress.displayName = "CircleProgress";
export default CircleProgress;
