import Styles from "./cardImage.module.scss";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainCard from "../MainCard";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

export type CardImageProps = {
  className?: string;
  img: string;
  title?: string;
  subtitle?: string;
  iconImg?: string;
  number?: number;
  sImg?: string;
  gear?: string;
  cost?: string;
  fuel?: string;
};

const CardImage = React.forwardRef(
  (
    {
      className,
      img,
      title,
      subtitle,
      iconImg,
      number,
      sImg,
      gear,
      cost,
      fuel,
    }: CardImageProps,
    ref: React.Ref<HTMLHeadingElement>
  ) => {
    return (
      <Container className={`${Styles["cardImg"]}`}>
        <MainCard bordered={true}>
          <Row>
            <Col md={10}>
              <h3>{title}</h3>
            </Col>
            <Col md={2} className="">
              <AiOutlineHeart />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h6>{subtitle}</h6>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <img src={img} alt="" />
            </Col>
          </Row>
          <Row className="mx-0 mt-2">
            <Col md={8}>
              <span>
                <img src={iconImg} alt="" />
              </span>
              <span className="ms-1">{number}</span>
              <span className="ms-2">
                <img src={sImg} alt="" />
              </span>
              <h6 className="ms-1">{gear}</h6>
            </Col>
            <Col md={4}>
              <span>{cost}</span> <span>{fuel}</span>
            </Col>
          </Row>
        </MainCard>
      </Container>
    );
  }
);

CardImage.displayName = "CardImage";
export default CardImage;
