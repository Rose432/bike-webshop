import React from "react";
import { useContext } from "react";
import {
  Order,
  StepTitle,
  Flex,
  ProductInfo,
  Product,
  ProductQuantity,
  TotalContainer,
  Price,
  Total,
  Subtotal,
  PaymentForm,
  PaymentTitle,
  ButtonContainer,
} from "./OrderSummaryStyle";
import { CartContext } from "../../context/CartContext";
import { ThreeDots } from "react-loader-spinner";
import { SpinnerWrapper, Button } from "../../lib/style/generalStyle";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const OrderSummary = ({
  name,
  qty,
  price,
  total,
  checkoutToken,
  shippingData,
  handleCaptureCheckout,
  backStep,
}) => {
  const { cart, setCart } = useContext(CartContext);
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        shipping: {
          name: "International",
          street: shippingData.adress,
          town_city: shippingData.city,
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zipPostalCode,
          country: shippingData.shippingCountry,
        },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      handleCaptureCheckout(checkoutToken.id, orderData);
    }
  };

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

  return (
    <Order>
      <StepTitle>Order summary</StepTitle>
      {order}
      <TotalContainer>
        <Total>Total:</Total>
        {cart.line_items && cart.total_items > 0 && (
          <Subtotal>{cart.subtotal?.formatted_with_symbol}</Subtotal>
        )}
      </TotalContainer>
      <PaymentTitle>Payment method</PaymentTitle>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <PaymentForm onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <ButtonContainer>
                <Button isFixed onClick={backStep}>
                  Cancel
                </Button>
                <Button disabled={!stripe} type="submit" isFixed isCheckout>
                  Finish order
                </Button>
              </ButtonContainer>
            </PaymentForm>
          )}
        </ElementsConsumer>
      </Elements>
    </Order>
  );
};

export default OrderSummary;
