import Styles from "./header.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../../component/input";

const Header = () => {
  return (
    <Container className={`p-0 m-0 ${Styles["header"]}`} fluid>
      <Row className=" mx-0 ">
        <Col md={6} className="my-2">
          <Input type="text" placeholder="Search or Type" />
        </Col>
        <Col md={6} className="d-flex justify-content-end align-items-center">
          <img src="/assets/icons/notification.svg" alt="notification" />
          <img
            src="/assets/icons/profile-icon.svg"
            alt="profile"
            className={`ms-5 me-3 ${Styles["profile-icon"]}`}
          />
        </Col>
      </Row>
    </Container>
  );
};

Header.displayName = "Header";
export default Header;
