import Styles from "./header.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../../component/input";

const Header = () => {
  return (
    <Container className={`p-0 ${Styles["header"]}`} fluid>
      <Row className=" m-0 p-0">
        <Col md={6} className="">
          <Input type="text" />
        </Col>
        <Col md={6}>
          <img src="/assets/icons/notification.svg" alt="notification" />
          <img src="/assets/icons/profile-icon.svg" alt="profile" />
        </Col>
      </Row>
    </Container>
  );
};

Header.displayName = "Header";
export default Header;
