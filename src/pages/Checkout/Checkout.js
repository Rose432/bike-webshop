import React from "react";
import { useState, useContext, useEffect } from "react";
import Section from "../../componenets/Section/Section";
import CheckoutWidget from "../../componenets/CheckoutWidget/CheckoutWidget";
import ShippingAdress from "../../componenets/ShippingAdress/ShippingAdress";
import OrderSummary from "../../componenets/OrderSummary/OrderSummary";
import { commerce } from "../../lib/commerce";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);
  const [checkoutToken, setCheckoutToken] = useState(null);

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: "cart",
          });
          console.log(token);
          setCheckoutToken(token);
        } catch (err) {
          console.log(err.message);
        }
      };
      generateToken();
    }
  }, [cart]);

  return (
    <Section>
      <CheckoutWidget>
        {/* <ShippingAdress /> */}
        <OrderSummary />
      </CheckoutWidget>
    </Section>
  );
};

export default Checkout;
