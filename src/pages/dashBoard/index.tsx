import "../../styles/globals.scss";
import Styles from "./dashBoard.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidemenu from "../../layout/sidemenu";
import Header from "../../layout/header";
import CircleProgress from "../../component/circleProgress";
import MainCard from "../../component/MainCard";

const DashBoard = () => {
  return (
    <Container className={`p-0 m-0 ${Styles["dashBoard"]}`} fluid>
      <Row className="mx-0">
        <Col md={2} xs={12} className="p-0 ">
          <Sidemenu />
        </Col>
        <Col md={10} xs={12} className="p-0 ps-1">
          <Header />
          <Row>
            <Col md={3}>
              <MainCard head={"Energy"} className={`${Styles["card"]}`}>
                <CircleProgress />
              </MainCard>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default DashBoard;
