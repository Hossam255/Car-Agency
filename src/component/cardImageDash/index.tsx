import Styles from "./cardImageDash.module.scss";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainCard from "../MainCard";

export type CardImageProps = {
  className?: string;
  icon: string;
  img: string;
  title?: string;
  subtitle?: string;
  iconImge?: string;
  number?: string;
  sImg?: string;
  gear?: string;
  cost?: string;
  lastImg?: string;
};

const CardImageDash = React.forwardRef(
  (
    {
      className,
      icon,
      img,
      title,
      subtitle,
      iconImge,
      number,
      sImg,
      gear,
      cost,
      lastImg,
    }: CardImageProps,
    ref: React.Ref<HTMLHeadingElement>
  ) => {
    return (
      <MainCard className={`${className}`}>
        <Container className={`${Styles["cardImg"]}`}>
          <Row>
            <Col md={2} className="">
              <img src={icon} alt="" />
            </Col>
            <Col md={10}>
              <h3>{subtitle}</h3>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <img src={img} alt="" />
            </Col>
          </Row>
          <Row className="mx-0 mt-2">
            <Col md={9}>
              <Row className="mx-0">
                <Col className="p-0">
                  <h2>{title}</h2>
                </Col>
              </Row>
              <Row className="mx-0">
                <Col className="p-0 d-flex" xs={12}>
                  <img className="me-2" src={iconImge} alt="" />
                  <div className="me-2">{number}</div>
                  <img className="me-2" src={sImg} alt="" />
                  <img className="me-2" src={gear} alt="" />
                  <img className="me-2" src={lastImg} alt="" />
                </Col>
              </Row>
            </Col>
            <Col md={3} className="d-flex align-items-end">
              <div>{cost}</div>
            </Col>
          </Row>
        </Container>
      </MainCard>
    );
  }
);

CardImageDash.displayName = "CardImageDash";
export default CardImageDash;
