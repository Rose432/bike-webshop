import React from "react";
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

const CartCard = ({ imgSrc, name, price, quantity, bicycleId }) => {
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
          <Add />
          <Quantity>{quantity}</Quantity>
          <Remove />
        </QuantityContainer>
        <Button>Delete</Button>
      </FlexWrapper>
    </CartCardContainer>
  );
};

export default CartCard;
