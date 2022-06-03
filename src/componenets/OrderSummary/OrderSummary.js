import React from "react";
import { useContext } from "react";
import {
  Order,
  StepTitle,
  Flex,
  ProductInfo,
  Product,
  ProductQuantity,
  Price,
  Total,
  Subtotal,
} from "./OrderSummaryStyle";
import { CartContext } from "../../context/CartContext";
import { ThreeDots } from "react-loader-spinner";
import { SpinnerWrapper } from "../../lib/style/generalStyle";

const OrderSummary = ({ name, qty, price, total }) => {
  const { cart, setCart } = useContext(CartContext);

  console.log(cart);

  let order;

  if (cart.line_items && cart.total_items > 0) {
    order = cart.line_items?.map((item) => (
      <Flex key={item.id}>
        <ProductInfo>
          <Product>{item.name}</Product>
          <ProductQuantity>Quantity: {item.quantity}</ProductQuantity>
        </ProductInfo>
        <Price>{item.line_total.formatted_with_symbol}</Price>
      </Flex>
    ));
  } else {
    order = (
      <SpinnerWrapper>
        <ThreeDots color="#087f5b" height={70} width={70} />
      </SpinnerWrapper>
    );
  }
  cart.line_items && cart.total_items > 0 && (
    <Subtotal>Subtotal: {cart.subtotal?.formatted_with_symbol}</Subtotal>
  );

  return (
    <Order>
      <StepTitle>Order summary</StepTitle>
      {order}
      <Flex>
        <Total>Total:</Total>
        {cart.line_items && cart.total_items > 0 && (
          <Subtotal>{cart.subtotal?.formatted_with_symbol}</Subtotal>
        )}
      </Flex>
    </Order>
  );
};

export default OrderSummary;
