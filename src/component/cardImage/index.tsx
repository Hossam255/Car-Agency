import Styles from "./cardImage.module.scss";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainCard from "../MainCard";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import TitleHeader from "../titleHeader";

export type CardImageProps = {
  className?: string;
  img: string;
  title?: string;
  intro?: string;
  date?: string;
  cost?: string;
};

const CardImage = React.forwardRef(
  (
    { className, img, title, intro, date, cost }: CardImageProps,
    ref: React.Ref<HTMLHeadingElement>
  ) => {
    return (
      <Container className={`${Styles["cardImg"]}`}>
        <MainCard bordered={true}>
          <Row>
            <Col md={6}>
              <h3>{title}</h3>
            </Col>
            <Col md={6}>
              <AiOutlineHeart />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h6>{intro}</h6>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <img src={img} alt="" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>{date}</Col>
            <Col md={6}>{cost}</Col>
          </Row>
        </MainCard>
      </Container>
    );
  }
);

CardImage.displayName = "CardImage";
export default CardImage;
