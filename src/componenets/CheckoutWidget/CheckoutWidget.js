import React from "react";
import {
  CheckoutContainer,
  CheckoutWrapper,
  Title,
  StepContainer,
  StepWrapper,
  Number,
  StepName,
  Line,
} from "./CheckoutWidgetStyle";

const CheckoutWidget = ({ children }) => {
  return (
    <CheckoutContainer>
      <CheckoutWrapper>
        <Title>Checkout</Title>
        <StepContainer>
          <StepWrapper>
            <Number>1</Number>
            <StepName>Shipping Adress</StepName>
          </StepWrapper>
          <Line />
          <StepWrapper>
            <Number>2</Number>
            <StepName>Payment Details</StepName>
          </StepWrapper>
        </StepContainer>
      </CheckoutWrapper>
      {children}
    </CheckoutContainer>
  );
};

export default CheckoutWidget;
