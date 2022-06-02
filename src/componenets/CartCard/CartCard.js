import React from "react";
import { useContext } from "react";
import { commerce } from "../../lib/commerce";
import {
  CartCardContainer,
  Figure,
  Image,
  FlexWrapper,
  ProductName,
  Price,
  QuantityContainer,
  Quantity,
  Add,
  Remove,
} from "./CartCardStyle";
import { Button } from "../../lib/style/generalStyle";
import { CartContext } from "../../context/CartContext";

const CartCard = ({ imgSrc, name, price, quantity, bicycleId }) => {
  const { cart, setCart } = useContext(CartContext);

  const handleUpdateCartQty = async (bicycleId, quantity) => {
    try {
      const response = await commerce.cart.update(bicycleId, { quantity });
      setCart(response.cart);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleRemoveFromCart = async (bicycleId) => {
    try {
      const response = await commerce.cart.remove(bicycleId);
      setCart(response.cart);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <CartCardContainer>
      <Figure>
        <Image src={imgSrc} alt={name} />
      </Figure>
      <FlexWrapper>
        <ProductName>{name}</ProductName>
        <Price>{price}</Price>
      </FlexWrapper>
      <FlexWrapper>
        <QuantityContainer>
          <Remove
            onClick={() => handleUpdateCartQty(bicycleId, quantity - 1)}
          />
          <Quantity>{quantity}</Quantity>
          <Add onClick={() => handleUpdateCartQty(bicycleId, quantity + 1)} />
        </QuantityContainer>
        <Button onClick={() => handleRemoveFromCart(bicycleId)}>Delete</Button>
      </FlexWrapper>
    </CartCardContainer>
  );
};

export default CartCard;
