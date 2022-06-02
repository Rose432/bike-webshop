import React from "react";
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

const OrderSummary = () => {
  return (
    <Order>
      <StepTitle>Order summary</StepTitle>
      <Flex>
        <ProductInfo>
          <Product>Advanturer 120</Product>
          <ProductQuantity>Quantity: 1</ProductQuantity>
        </ProductInfo>
        <Price>2400</Price>
      </Flex>
      <Flex>
        <Total>Total:</Total>
        <Subtotal>2400</Subtotal>
      </Flex>
    </Order>
  );
};

export default OrderSummary;
