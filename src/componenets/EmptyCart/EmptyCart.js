import React from "react";
import Image from "../../assets/images/empty-cart.svg";
import {
  EmptyContainer,
  Figure,
  Img,
  EmptyText,
  ShopLink,
} from "./EmptyCartStyle";
import { Button } from "../../lib/style/generalStyle";

const EmptyCart = () => {
  return (
    <EmptyContainer>
      <Figure>
        <Img src={Image} alt={"Empty cart image"} />
      </Figure>
      <EmptyText>Your cart is currently empty!</EmptyText>
      <ShopLink to="/shop">
        <Button>Return to shop</Button>
      </ShopLink>
    </EmptyContainer>
  );
};

export default EmptyCart;
