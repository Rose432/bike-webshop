import React from "react";
import { useState, useContext, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import Section from "../../componenets/Section/Section";
import CheckoutWidget from "../../componenets/CheckoutWidget/CheckoutWidget";
import ShippingAdress from "../../componenets/ShippingAdress/ShippingAdress";
import OrderSummary from "../../componenets/OrderSummary/OrderSummary";
import ConfirmationMessage from "../../componenets/ConfirmationMessage/ConfirmationMessage";
import { commerce } from "../../lib/commerce";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  let navigate = useNavigate();

  useLayoutEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: "cart",
          });
          setCheckoutToken(token);
        } catch (err) {
          console.error(err);
        }
      };
      generateToken();
      console.log(checkoutToken);
    }
  }, [cart, navigate, checkoutToken]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (values) => {
    setShippingData(values);
    nextStep();
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.delete();
    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.empty();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  return (
    checkoutToken && (
      <Section>
        <CheckoutWidget activeStep={activeStep} setActiveStep={setActiveStep}>
          {activeStep === 0 && (
            <ShippingAdress
              activeSteup={activeStep}
              checkoutToken={checkoutToken}
              next={next}
              handleEmptyCart={handleEmptyCart}
            />
          )}
          {activeStep === 1 && (
            <OrderSummary
              nextStep={nextStep}
              backStep={backStep}
              handleCaptureCheckout={handleCaptureCheckout}
              shippingData={shippingData}
              checkoutToken={checkoutToken}
            />
          )}
          {activeStep === 2 && <ConfirmationMessage order={order} />}
        </CheckoutWidget>
      </Section>
    )
  );
};

export default Checkout;
