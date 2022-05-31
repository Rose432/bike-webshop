import React from "react";
import { createContext, useState, useEffect } from "react";
import { commerce } from "../lib/commerce";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  console.log(cart);

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

const CartConsumer = CartContext.Consumer;

export { CartContext, CartProvider, CartConsumer };
