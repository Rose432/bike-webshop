import React from "react";
import { createContext, useState, useEffect } from "react";
import { commerce } from "../lib/commerce";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);

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

  useEffect(() => {
    fetchCart();
    fetchProducts();
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart, products, setProducts }}>
      {children}
    </CartContext.Provider>
  );
};

const CartConsumer = CartContext.Consumer;

export { CartContext, CartProvider, CartConsumer };
