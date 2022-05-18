import React from "react";
import {
  BikeCard as BikeContainer,
  FigureLink,
  Figure,
  Img,
  Content,
  TitleLink,
  Title,
  Price,
} from "./BikeCardStyle";
import { Button } from "../../lib/style/generalStyle";

const BikeCard = ({ bicycleId, imgSrc, imgAlt, bikeTitle, bikePrice }) => {
  return (
    <BikeContainer>
      <FigureLink to={`/bicycle/${bicycleId}`}>
        <Figure>
          <Img alt={imgAlt} src={imgSrc} />
        </Figure>
      </FigureLink>

      <Content>
        <TitleLink to={`/bicycle/${bicycleId}`}>
          <Title>{bikeTitle}</Title>
        </TitleLink>
        <Price>{bikePrice}</Price>
        <Button isShop>Add to cart</Button>
      </Content>
    </BikeContainer>
  );
};

export default BikeCard;
