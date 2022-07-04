import React from "react";
import { createContext, useState } from "react";
import { commerce } from "../lib/commerce";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();
      setProducts(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <ProductsContext.Provider value={{ products, setProducts, fetchProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

const ProductsConsumer = ProductsContext.Consumer;

export { ProductsContext, ProductsProvider, ProductsConsumer };
