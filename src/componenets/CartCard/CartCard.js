import React, { useContext } from "react";
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
import { FasterCartContext } from "../../context/FasterCartContext";

const CartCard = ({ imgSrc, name, price, quantity, bicycleId }) => {
  const {
    fasterCart,
    handleIncrementCartQty,
    handleDecrementCartQty,
    handleItemRemove,
  } = useContext(FasterCartContext);

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
