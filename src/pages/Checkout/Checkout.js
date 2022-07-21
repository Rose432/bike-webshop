import React from "react";
import { useState, useLayoutEffect, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Section from "../../componenets/Section/Section";
import CheckoutWidget from "../../componenets/CheckoutWidget/CheckoutWidget";
import ShippingAdress from "../../componenets/ShippingAdress/ShippingAdress";
import OrderSummary from "../../componenets/OrderSummary/OrderSummary";
import ConfirmationMessage from "../../componenets/ConfirmationMessage/ConfirmationMessage";
import { commerce } from "../../lib/commerce";
import { SpinnerWrapper } from "../../lib/style/generalStyle";
import { ThreeDots } from "react-loader-spinner";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [order, setOrder] = useState({});
  const [isEmpty, setIsEmpty] = useState(false);

  let navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const response = await commerce.cart.retrieve();
      setCart(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  useLayoutEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: "cart",
          });
          setCheckoutToken(token);
        } catch (err) {
          navigate("/cart");
          console.error(err);
        }
      };
      generateToken();
    }
  }, [cart]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (values) => {
    setShippingData(values);
    nextStep();
  };

  const emptyCart = async () => {
    try {
      setIsEmpty(true);
      const newCart = await commerce.cart.empty();
      setIsEmpty(false);
      setCart(newCart);
      navigate("/cart");
    } catch (err) {
      console.error(err.message);
      setIsEmpty(false);
      navigate("/cart");
    }
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Section>
      {checkoutToken ? (
        <CheckoutWidget
          order={order}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        >
          {activeStep === 0 && (
            <ShippingAdress
              isEmpty={isEmpty}
              cart={cart}
              activeSteup={activeStep}
              checkoutToken={checkoutToken}
              next={next}
              handleEmptyCart={emptyCart}
            />
          )}
          {activeStep === 1 && (
            <OrderSummary
              cart={cart}
              nextStep={nextStep}
              backStep={backStep}
              handleCaptureCheckout={handleCaptureCheckout}
              shippingData={shippingData}
              checkoutToken={checkoutToken}
            />
          )}
          {activeStep === 2 && <ConfirmationMessage order={order} />}
        </CheckoutWidget>
      ) : (
        <SpinnerWrapper>
          <ThreeDots color="#087f5b" height={70} width={70} />
        </SpinnerWrapper>
      )}
    </Section>
  );
};

export default Checkout;
