import React from "react";
import {
  BikeCard as BikeContainer,
  Figure,
  Img,
  Content,
  Title,
  Price,
} from "./BikeCardStyle";

const BikeCard = ({ imgSrc, imgAlt, bikeTitle, bikePrice }) => {
  return (
    <BikeContainer>
      <Figure>
        <Img alt={imgAlt} src={imgSrc} />
      </Figure>
      <Content>
        <Title>{bikeTitle}</Title>
        <Price>{bikePrice}</Price>
      </Content>
    </BikeContainer>
  );
};

export default BikeCard;
