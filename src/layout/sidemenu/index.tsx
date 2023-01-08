import Styles from "./sidemenu.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleHeader from "../../component/titleHeader";
import { RxDashboard } from "react-icons/rx";

const Sidemenu = () => {
  return (
    <Container className={`m-0 p-0 ${Styles["sidebar"]}`} fluid>
      <Row>
        <Col>
          <div className={`d-flex mt-2 ${Styles["logo"]}`}>
            <img src="/assets/logo/logo.svg" alt="" />
            <TitleHeader
              text="Motiv."
              type="subtitle"
              className={`mt-2 ms-2 ${Styles["title"]}`}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className={` ${Styles["icons"]}`}>
          <RxDashboard size={19} />
          <TitleHeader type="smaller" text="Dashboard" />
        </Col>
      </Row>
    </Container>
  );
};
Sidemenu.displayName = "Sidemenu";
export default Sidemenu;
