import React from "react";
import { useState, useContext, useEffect } from "react";
import ShippingAdress from "../../componenets/ShippingAdress/ShippingAdress";
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
          setCheckoutToken(token);
        } catch (err) {
          console.log(err.message);
        }
      };
      generateToken();
    }
  }, [cart]);

  return (
    <>
      <ShippingAdress />
    </>
  );
};

export default Checkout;
