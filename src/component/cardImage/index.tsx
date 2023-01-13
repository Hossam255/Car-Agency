import Styles from "./cardImage.module.scss";
import React, { useState } from "react";
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
    const [isLike, setIsLike] = useState(false);
    const toggle = () => {
      setIsLike(!isLike);
    };
    return (
      <MainCard>
        <Container className={`${Styles["cardImg"]}`}>
          <Row>
            <Col md={10}>
              <h3>{title}</h3>
            </Col>
            <Col md={2} className="">
              <div onClick={toggle}>
                {isLike ? (
                  <AiOutlineHeart size={25} />
                ) : (
                  <AiTwotoneHeart size={25} className={`${Styles["icon"]}`} />
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h6>{subtitle}</h6>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <img src={img} className={`${Styles["car"]}`} alt="" />
            </Col>
          </Row>
          <Row className="mx-0 mt-2">
            <Col md={8} className="d-flex">
              <div>
                <img src={iconImg} alt="" />
              </div>
              <div className="ms-1 mt-1">{number}</div>
              <div className="ms-2 mt-1">
                <img src={sImg} alt="" />
              </div>
              <h6 className="ms-1 mt-2">{gear}</h6>
            </Col>
            <Col md={4} className="d-flex">
              <div>{cost}</div> <div>{fuel}</div>
            </Col>
          </Row>
        </Container>
      </MainCard>
    );
  }
);

CardImage.displayName = "CardImage";
export default CardImage;
