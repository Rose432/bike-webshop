import React from "react";
import {
  ConfirmationContainer,
  Title,
  OrderRef,
  ButtonLink,
} from "./ConfirmationMessageStyle";
import { Button, SpinnerWrapper, Link } from "../../lib/style/generalStyle";
import { ThreeDots } from "react-loader-spinner";

const ConfirmationMessage = ({ order }) => {
  let message = order.customer ? (
    <ConfirmationContainer>
      <Title>
        Thank you for your purchase, {order.customer.firstname}{" "}
        {order.customer.lastname}
      </Title>
      <OrderRef>Order ref: {order.customer_reference}</OrderRef>
      <ButtonLink to="/">
        <Button>Back to home</Button>
      </ButtonLink>
    </ConfirmationContainer>
  ) : (
    <SpinnerWrapper>
      <ThreeDots color="#087f5b" height={70} width={70} />
    </SpinnerWrapper>
  );

  return <>{message}</>;
};

export default ConfirmationMessage;
