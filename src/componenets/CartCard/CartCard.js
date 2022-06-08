import React from "react";
import { useContext, useState } from "react";
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
import { FasterCartContext } from "../../context/FasterCartContext";

const CartCard = ({ imgSrc, name, price, quantity, bicycleId }) => {
  const { fasterCart, setFasterCart } = useContext(FasterCartContext);

  const handleIncrementCartQty = (bicycleId, quantity, fasterCart) => {
    console.log(fasterCart);
    if (fasterCart.some((cur) => cur.bicycleId === bicycleId)) {
      fasterCart.find((cur) => cur.bicycleId === bicycleId && cur.quantity++);
      const newArray = fasterCart.slice(0);
      setFasterCart(newArray);
    }
  };

  const handleDecrementCartQty = (bicycleId, quantity, fasterCart, name) => {
    console.log(fasterCart);
    if (
      fasterCart.some((cur) => cur.bicycleId === bicycleId && cur.quantity > 1)
    ) {
      fasterCart.find((cur) => cur.bicycleId === bicycleId && cur.quantity--);
      const newArray = fasterCart.slice(0);
      setFasterCart(newArray);
    } else if (
      fasterCart.some(
        (cur) => cur.bicycleId === bicycleId && cur.quantity === 1
      )
    ) {
      const newArray = fasterCart
        .filter((cur) => cur.bicycleId !== bicycleId)
        .slice(0);
      setFasterCart(newArray);
    }
  };

  const handleItemRemove = (bicycleId, fasterCart) => {
    if (fasterCart.find((cur) => cur.bicycleId === bicycleId)) {
      const newArray = fasterCart
        .filter((cur) => cur.bicycleId !== bicycleId)
        .slice(0);
      setFasterCart(newArray);
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
            onClick={() =>
              handleDecrementCartQty(bicycleId, quantity, fasterCart)
            }
          />
          <Quantity>{quantity}</Quantity>
          <Add
            onClick={() =>
              handleIncrementCartQty(bicycleId, quantity, fasterCart)
            }
          />
        </QuantityContainer>
        <Button onClick={() => handleItemRemove(bicycleId, fasterCart)}>
          Delete
        </Button>
      </FlexWrapper>
    </CartCardContainer>
  );
};

export default CartCard;
