import Styles from "./circleProgress.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleProgress = () => {
  const percentage = 45;
  return (
    <Container className={`p-0 m-0 ${Styles["header"]}`} fluid>
      <Row className=" mx-0 ">
        <Col>
          <CircularProgressbar
            className={`${Styles["circle"]}`}
            value={percentage}
            text={`${percentage} %`}
            circleRatio={0.7}
            styles={{
              trail: {
                stroke: "#f4f5f9",
                strokeLinecap: "butt",
                transform: "rotate(-126deg)",
                transformOrigin: "center center",
              },
              path: {
                stroke: `rgba(255,255,255, ${percentage / 100})`,
                strokeLinecap: "butt",
                transform: "rotate(-126deg)",
                transformOrigin: "center center",
              },
              text: {
                fill: "#fff",
              },
            }}
            strokeWidth={10}
          />
        </Col>
      </Row>
    </Container>
  );
};

CircleProgress.displayName = "CircleProgress";
export default CircleProgress;
