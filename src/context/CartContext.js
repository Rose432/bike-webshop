import React from "react";
import { createContext, useState } from "react";
import { commerce } from "../lib/commerce";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);

  console.log(products);

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();
      setProducts(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchCart = async () => {
    try {
      setCart(await commerce.cart.retrieve());
    } catch (err) {
      console.log(console.error(err.message));
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, products, setProducts, fetchProducts, fetchCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

const CartConsumer = CartContext.Consumer;

export { CartContext, CartProvider, CartConsumer };
