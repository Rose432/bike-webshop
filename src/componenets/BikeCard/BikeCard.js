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
import { commerce } from "../../lib/commerce";
import { CartContext } from "../../context/CartContext";

const BikeCard = ({
  bicycleName,
  imgSrc,
  imgAlt,
  bikeTitle,
  bikePrice,
  bicycleId,
}) => {
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
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
        <Price>{bikePrice}</Price>
        <Button onClick={() => handleAddToCart(bicycleId, 1)} isShop>
          Add to cart
        </Button>
      </Content>
    </BikeContainer>
  );
};

export default BikeCard;
