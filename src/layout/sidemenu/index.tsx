import Styles from "./sidemenu.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleHeader from "../../component/titleHeader";
import { RxDashboard } from "react-icons/rx";
import {
  BiCar,
  BiShoppingBag,
  BiMessageDetail,
  BiLogOut,
} from "react-icons/bi";
import { BsCart2, BsCalendar4Range } from "react-icons/bs";
import { RiScissors2Line } from "react-icons/ri";
import { TbSettings } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Sidemenu = () => {
  const [sideOpen, setSideOpen] = useState(false);

  const toggle = () => {
    setSideOpen(!sideOpen);
  };
  return (
    <Container className={`${Styles["sidebar"]}`} fluid>
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
          <FaBars
            onClick={toggle}
            className={`d-flex mt-2 ms-2 ${Styles["bar"]}`}
            size={22}
          />
        </Col>
      </Row>
      <div
        className={` ${Styles["sections"]} ${
          sideOpen ? Styles["section-toggle"] : ""
        }`}
      >
        <section className={` d-md-block ${Styles["section-one"]}`}>
          <Row>
            <Col md={7} className={`d-flex mt-5 ms-4 ${Styles["icons"]}`}>
              <RxDashboard size={19} />
              <TitleHeader type="smaller" text="Dashboard" className=" ms-2" />
            </Col>
          </Row>
          <Row>
            <Col md={7} className={`d-flex mt-1 ms-4 ${Styles["icons"]}`}>
              <img src="/assets/icons/Shape.svg" alt="" />
              <TitleHeader type="smaller" text="Assets" className="mt-2 ms-2" />
            </Col>
          </Row>
          <Row>
            <Col md={6} className={`d-flex mt-2 ms-4 ${Styles["icons"]}`}>
              <BiCar size={20} />
              <TitleHeader type="smaller" text="Booking" className=" ms-2" />
            </Col>
          </Row>
          <Row>
            <Col md={6} className={`d-flex mt-2 ms-4 ${Styles["icons"]}`}>
              <BiShoppingBag size={20} />
              <TitleHeader type="smaller" text="Sell Cars" className=" ms-2" />
            </Col>
          </Row>
          <Row>
            <Col md={6} className={`d-flex mt-2 ms-4 ${Styles["icons"]}`}>
              <BsCart2 size={20} />
              <TitleHeader type="smaller" text="Buy Cars" className=" ms-2" />
            </Col>
          </Row>
          <Row>
            <Col md={6} className={`d-flex mt-2 ms-4 ${Styles["icons"]}`}>
              <RiScissors2Line size={20} />
              <TitleHeader type="smaller" text="Services" className=" ms-2" />
            </Col>
          </Row>
          <Row>
            <Col md={6} className={`d-flex mt-2 ms-4 ${Styles["icons"]}`}>
              <BsCalendar4Range size={20} />
              <TitleHeader type="smaller" text="Calender" className=" ms-2" />
            </Col>
          </Row>
          <Row>
            <Col md={6} className={`d-flex mt-2 ms-4 ${Styles["icons"]}`}>
              <BiMessageDetail size={20} />
              <TitleHeader type="smaller" text="Message" className=" ms-2" />
            </Col>
          </Row>
        </section>
        <section className={` d-md-block ${Styles["section-two"]}`}>
          <Row>
            <Col md={6} className={`d-flex mt-2 ms-4 ${Styles["icons"]}`}>
              <TbSettings size={20} />
              <TitleHeader type="smaller" text="Setting" className=" ms-2" />
            </Col>
          </Row>
          <Row>
            <Col md={6} className={`d-flex mt-3 ms-4 ${Styles["icons"]}`}>
              <BiLogOut size={20} />
              <TitleHeader type="smaller" text="Log out" className=" ms-2" />
            </Col>
          </Row>
        </section>
      </div>
    </Container>
  );
};
Sidemenu.displayName = "Sidemenu";
export default Sidemenu;
