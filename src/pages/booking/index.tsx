import "../../styles/globals.scss";
import Styles from "./booking.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidemenu from "../../layout/sidemenu";
import Header from "../../layout/header";
import { CarsData } from "../../data/cars";
import CardImage from "../../component/cardImage";
import TitleHeader from "../../component/titleHeader";
import { RxDashboard } from "react-icons/rx";

const Booking = () => {
  return (
    <Container className={`p-0 m-0 ${Styles["booking"]}`} fluid>
      <Row className="mx-0">
        <Col md={3} xs={12} className="p-0 ">
          <Sidemenu />
        </Col>
        <Col md={9} xs={12} className="p-0 ps-1">
          <Header />
          <Row>
            <Col className="ms-4 mt-3">
              <TitleHeader type="title" text="Booking" />
            </Col>
          </Row>
          <Row>
            <Col md={6}></Col>
            <Col md={6}>
              <div className={`${Styles["icon"]}`}>
                <RxDashboard size={22} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              {CarsData.map((car, i) => {
                return (
                  <CardImage
                    key={i}
                    title={car.title}
                    subtitle={car.subTitle}
                    img={car.img}
                    iconImg={car.iconImg}
                    number={car.number}
                    sImg={car.sImg}
                    gear={car.gear}
                    cost={car.cost}
                    fuel={car.fuel}
                  />
                );
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Booking;