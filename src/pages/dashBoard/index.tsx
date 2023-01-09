import "../../styles/globals.scss";
import Styles from "./dashBoard.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidemenu from "../../layout/sidemenu";
import Header from "../../layout/header";

const DashBoard = () => {
  return (
    <Container className={`p-0 m-0 ${Styles["dashBoard"]}`} fluid>
      <Row className="mx-0">
        <Col md={2} xs={12} className="p-0 ">
          <Sidemenu />
        </Col>
        <Col md={10} xs={12} className="p-0 ps-1">
          <Header />
        </Col>
      </Row>
    </Container>
  );
};
export default DashBoard;
