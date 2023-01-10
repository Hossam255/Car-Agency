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
      <Container className={`${Styles["cardImg"]}`}>
        <MainCard>
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
          <Row>
            <Col md={12}>
              <h6>{title}</h6>
            </Col>
          </Row>

          <Row className="mx-0 mt-2">
            <Col md={10}>
              <span>
                <img src={iconImge} alt="" />
              </span>
              <span className="ms-1">{number}</span>
              <span className="ms-2">
                <img src={sImg} alt="" />
              </span>
              <h6 className="ms-1">{gear}</h6>
              <img src={lastImg} alt="" />
            </Col>
            <Col md={2}>
              <span>{cost}</span>
            </Col>
          </Row>
        </MainCard>
      </Container>
    );
  }
);

CardImageDash.displayName = "CardImageDash";
export default CardImageDash;
