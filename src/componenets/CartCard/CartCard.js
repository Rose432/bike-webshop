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
import { useDispatch } from "react-redux";
import {
  incrementCartQuantity,
  decrementCartQuantity,
  removeCartItem,
} from "../../features/cart/cartSlice";

const CartCard = ({ imgSrc, name, price, quantity, bicycleId }) => {
  const dispatch = useDispatch();

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
              dispatch(decrementCartQuantity({ bicycleId, quantity }))
            }
          />
          <Quantity>{quantity}</Quantity>
          <Add
            onClick={() =>
              dispatch(incrementCartQuantity({ bicycleId, quantity }))
            }
          />
        </QuantityContainer>
        <Button
          onClick={() => dispatch(removeCartItem({ bicycleId, quantity }))}
        >
          Delete
        </Button>
      </FlexWrapper>
    </CartCardContainer>
  );
};

export default CartCard;
