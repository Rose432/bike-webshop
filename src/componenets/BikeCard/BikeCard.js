import React, { useContext } from "react";
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
import { FasterCartContext } from "../../context/FasterCartContext";

const BikeCard = ({
  bicycleName,
  imgSrc,
  imgAlt,
  bikeTitle,
  bikePrice,
  bicycleId,
}) => {
  const { fasterCart, handleAddItemsToCart } = useContext(FasterCartContext);

  return (
    <BikeContainer>
      <FigureLink to={`/bicycle/${bicycleName}`}>
        <Figure>
          <Img alt={imgAlt} src={imgSrc} />
        </Figure>
      </FigureLink>

      <Content>
        <TitleLink to={`/bicycle/${bicycleName}`}>
          <Title>{bikeTitle}</Title>
        </TitleLink>
        <Price>€ {bikePrice}</Price>
        <Button
          onClick={() =>
            handleAddItemsToCart(
              bicycleId,
              1,
              imgSrc,
              bicycleName,
              bikePrice,
              fasterCart
            )
          }
          isShop
        >
          Add to cart
        </Button>
      </Content>
    </BikeContainer>
  );
};

export default BikeCard;
