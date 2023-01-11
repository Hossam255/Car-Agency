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
            <Col md={3} className={`mt-4 ms-3 ${Styles["circle"]}`}>
              <MainCard className={`${Styles["card"]}`}>
                <div className={`${Styles["img"]}`}>
                  <img src="/assets/icons/lightning.svg" alt="" />
                </div>
                <h3>Energy</h3>
                <CircleProgress
                  trailColor="#f4f5f9"
                  percentageNum={45}
                  textcolor="#fff"
                  pathColor={`rgba(255,255,255, ${45 / 100})`}
                />
              </MainCard>
            </Col>
            <Col md={3} className={`mt-4 ${Styles["circle"]}`}>
              <MainCard className={`${Styles["card-2"]}`}>
                <div className={` ${Styles["img-2"]}`}>
                  <img src="/assets/icons/range.svg" alt="" />
                </div>
                <h3>Range</h3>
                <CircleProgress
                  trailColor="#f4f5f9"
                  percentageNum={157}
                  textcolor="#242731"
                  pathColor={`rgba(255,126,134, ${157 / 300})`}
                />
              </MainCard>
            </Col>
            <Col md={3} className={`mt-4 ${Styles["circle"]}`}>
              <MainCard className={`${Styles["card-3"]}`}>
                <div className={` ${Styles["img-3"]}`}>
                  <img src="/assets/icons/oil.svg" alt="" />
                </div>
                <h3>Break fluid</h3>
                <CircleProgress
                  trailColor="#f4f5f9"
                  percentageNum={9}
                  textcolor="#242731"
                  pathColor={`rgba(102,51,153, ${9 / 100})`}
                />
              </MainCard>
            </Col>
            <Col md={3} className={`mt-4 ${Styles["circle"]}`}>
              <MainCard className={`${Styles["card-4"]}`}>
                <div className={` ${Styles["img-4"]}`}>
                  <img src="/assets/icons/tire.svg" alt="" />
                </div>
                <h3>Tire wear</h3>
                <CircleProgress
                  trailColor="#f4f5f9"
                  percentageNum={25}
                  textcolor="#242731"
                  pathColor={`rgb(246,204,13 ${25 / 100})`}
                />
              </MainCard>
            </Col>
          </Row>
          <Row></Row>
          <Row>
            <Col md={4}>
              <div className={`${Styles["cardDash"]}`}>
                <CardImageDash
                  className={`${Styles["cardDashImg"]}`}
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
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default DashBoard;
