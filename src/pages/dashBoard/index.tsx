import "../../styles/globals.scss";
import Styles from "./dashBoard.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidemenu from "../../layout/sidemenu";
import Header from "../../layout/header";
import CircleProgress from "../../component/circleProgress";
import MainCard from "../../component/MainCard";
import CardImageDash from "../../component/cardImageDash";
import BarCart from "../../component/charts/barChart";
import AreaChart from "../../component/charts/areaChart";

const DashBoard = () => {
  return (
    <Container className={`p-0 m-0 ${Styles["dashBoard"]}`} fluid>
      <Row className="mx-0">
        <Col md={2} xs={12} className="p-0 ">
          <Sidemenu />
        </Col>
        <Col md={10} xs={12} className="p-0 ps-1">
          <Header />
          <Row className="mx-0 justify-content-center">
            <Col md={3} className={`my-4 ${Styles["circle"]}`}>
              <MainCard className={`${Styles["card"]}`}>
                <div className={`${Styles["img"]}`}>
                  <img src="/assets/icons/lightning.svg" alt="" />
                </div>
                <h3>Energy</h3>
                <CircleProgress
                  trailColor="#B37EFC"
                  percentageNum={45}
                  text={"45"}
                  textcolor="#fff"
                  pathColor={`#fff`}
                />
              </MainCard>
            </Col>
            <Col md={3} className={`my-4 ms-4 ${Styles["circle"]}`}>
              <MainCard className={`${Styles["card-2"]}`}>
                <div className={` ${Styles["img-2"]}`}>
                  <img src="/assets/icons/range.svg" alt="" />
                </div>
                <h3>Range</h3>
                <CircleProgress
                  trailColor="#f4f5f9"
                  percentageNum={50}
                  text={"157k"}
                  textcolor="#242731"
                  pathColor={`#FF7E86`}
                />
              </MainCard>
            </Col>
            <Col md={3} className={`my-4 ms-4 ${Styles["circle"]}`}>
              <MainCard className={`${Styles["card-3"]}`}>
                <div className={` ${Styles["img-3"]}`}>
                  <img src="/assets/icons/oil.svg" alt="" />
                </div>
                <h3>Break fluid</h3>
                <CircleProgress
                  trailColor="#f4f5f9"
                  percentageNum={9}
                  text={"9"}
                  textcolor="#242731"
                  pathColor={`#A162F7`}
                />
              </MainCard>
            </Col>
            <Col md={3} className={`my-4 ms-4 ${Styles["circle"]}`}>
              <MainCard className={`${Styles["card-4"]}`}>
                <div className={` ${Styles["img-4"]}`}>
                  <img src="/assets/icons/tire.svg" alt="" />
                </div>
                <h3>Tire wear</h3>
                <CircleProgress
                  trailColor="#f4f5f9"
                  percentageNum={25}
                  text={"25"}
                  textcolor="#242731"
                  pathColor={"#F6CC0D"}
                />
              </MainCard>
            </Col>
          </Row>
          <Row className="mx-0">
            <Col md={6} className={`mb-5 ${Styles["firstChart"]}`}>
              <MainCard>
                <Row>
                  <Col className="d-flex mb-4">
                    <h2>Miles</h2>
                    <span>Statistics</span>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <button>Day</button>
                    <button>Week</button>
                    <button>Month</button>
                  </Col>
                  <Col md={6} className="d-flex justify-content-end">
                    <p>256 Miles</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <BarCart />
                  </Col>
                </Row>
              </MainCard>
            </Col>
            <Col md={6} className={`mb-5 ${Styles["secondChart"]}`}>
              <MainCard>
                <Row>
                  <Col className="d-flex mb-4">
                    <h2>Car</h2>
                    <span>Statistics</span>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <p>20 February 2022</p>
                  </Col>
                  <Col md={6} className="d-flex justify-content-end">
                    <div className={`${Styles["dates"]}`}>
                      <button>Day</button>
                      <button>Week</button>
                      <button>Month</button>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <AreaChart />
                  </Col>
                </Row>
              </MainCard>
            </Col>
          </Row>
          <Row className="mx-0">
            <Col md={4}>
              <CardImageDash
                className={`${Styles["background-tertiary"]}`}
                icon="/assets/icons/return.svg"
                subtitle="64% Recommend"
                img="/assets/cars/cruze.svg"
                title="Mini Cooper"
                iconImge="/assets/icons/Vector.svg"
                number="132k"
                gear="/assets/icons/gear.svg"
                lastImg="/assets/icons/light.svg"
                cost="$32/h"
              />
            </Col>
            <Col md={4}>
              <CardImageDash
                className={`${Styles["background-tertiary"]}`}
                icon="/assets/icons/return.svg"
                subtitle="74% Recommend"
                img="/assets/cars/maruti-suzuki-suzuki-swift-car-suzuki-9c5818c39cb279f9dc7f844d7769288f.svg"
                title="Mini Cooper"
                iconImge="/assets/icons/Vector.svg"
                number="130k"
                gear="/assets/icons/gear.svg"
                lastImg="/assets/icons/light.svg"
                cost="$28/h"
              />
            </Col>
            <Col md={4}>
              <CardImageDash
                className={`${Styles["background-tertiary"]}`}
                icon="/assets/icons/return.svg"
                subtitle="74% Recommend"
                img="/assets/cars/mini-countryman-car-bmw-mini-cooper-mini-406b2a24c59d99a8096f336f22982573.svg"
                title="Mini Cooper"
                iconImge="/assets/icons/Vector.svg"
                number="130k"
                gear="/assets/icons/gear.svg"
                lastImg="/assets/icons/light.svg"
                cost="$28/h"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default DashBoard;
