import React from "react";
import {
  CheckoutContainer,
  CheckoutWrapper,
  Title,
  StepContainer,
  StepWrapper,
  FirstNumber,
  SecondNumber,
  StepName,
  Line,
  Check,
} from "./CheckoutWidgetStyle";

const CheckoutWidget = ({ children, activeStep, order }) => {
  return (
    <CheckoutContainer>
      <CheckoutWrapper>
        <Title>Checkout</Title>
        <StepContainer>
          <StepWrapper>
            <FirstNumber activeStep={activeStep}>
              {order.customer ? <Check /> : "1"}
            </FirstNumber>
            <StepName>Shipping Adress</StepName>
          </StepWrapper>
          <Line />
          <StepWrapper>
            <SecondNumber activeStep={activeStep}>
              {order.customer ? <Check /> : "2"}
            </SecondNumber>
            <StepName>Payment Details</StepName>
          </StepWrapper>
        </StepContainer>
      </CheckoutWrapper>
      {children}
    </CheckoutContainer>
  );
};

export default CheckoutWidget;
