import React from "react";
import { useContext } from "react";
import {
  Container,
  Figure,
  Img,
  Content,
  Flex,
  Name,
  Description,
  Price,
} from "./BicyclePageStyle";
import { Button } from "../../lib/style/generalStyle";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { commerce } from "../../lib/commerce";

const BicyclePage = ({
  imgSrc,
  bikeTitle,
  bikeDescription,
  bikePrice,
  bicycleId,
}) => {
  const { cart, setCart } = useContext(CartContext);
  let navigate = useNavigate();

  const handleAddToCart = async (productId, quantity) => {
    try {
      const item = await commerce.cart.add(productId, quantity);
      setCart(item.cart);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Container>
      <Figure>
        <Img src={imgSrc} alt={bikeDescription} />
      </Figure>
      <Content>
        <Flex>
          <Name>{bikeTitle}</Name>
          <Button isShop onClick={() => navigate(-1)} isBack>
            Return
          </Button>
        </Flex>
        <Description dangerouslySetInnerHTML={{ __html: bikeDescription }} />
        <Price>Price: {bikePrice}</Price>
        <Button onClick={() => handleAddToCart(bicycleId, 1)} isShop>
          Add to Cart
        </Button>
      </Content>
    </Container>
  );
};

export default BicyclePage;
