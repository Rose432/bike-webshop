import React from "react";
import { useContext } from "react";
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
  const { fasterCart, setFasterCart } = useContext(FasterCartContext);

  const handleAddItemsToCart = (
    bicycleId,
    quantity,
    imgSrc,
    bicycleName,
    bikePrice,
    fasterCart
  ) => {
    const cartData = {
      bicycleId: bicycleId,
      quantity: quantity,
      imgSrc: imgSrc,
      bicycleName: bicycleName,
      bikePrice: bikePrice,
    };

    if (fasterCart.length === 0) {
      setFasterCart((prevArray) => [...prevArray, cartData]);
    } else if (
      fasterCart.length > 0 &&
      fasterCart.every((cur) => cur.bicycleId !== bicycleId)
    ) {
      setFasterCart((prevArray) => [...prevArray, cartData]);
    } else if (fasterCart.some((cur) => cur.bicycleId === bicycleId)) {
      fasterCart.find((cur) => cur.bicycleId === bicycleId && cur.quantity++);
      const newArray = fasterCart.slice(0);
      setFasterCart(newArray);
    }
  };

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
