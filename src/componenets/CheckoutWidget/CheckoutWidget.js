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
} from "./CheckoutWidgetStyle";

const CheckoutWidget = ({ children, activeStep }) => {
  return (
    <CheckoutContainer>
      <CheckoutWrapper>
        <Title>Checkout</Title>
        <StepContainer>
          <StepWrapper>
            <FirstNumber activeStep={activeStep}>1</FirstNumber>
            <StepName>Shipping Adress</StepName>
          </StepWrapper>
          <Line />
          <StepWrapper>
            <SecondNumber activeStep={activeStep}>2</SecondNumber>
            <StepName>Payment Details</StepName>
          </StepWrapper>
        </StepContainer>
      </CheckoutWrapper>
      {children}
    </CheckoutContainer>
  );
};

export default CheckoutWidget;
