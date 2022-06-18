import { createContext, useState, useEffect } from "react";

const FasterCartContext = createContext();

const FasterCartProvider = ({ children }) => {
  const [fasterCart, setFasterCart] = useState([]);

  useEffect(() => {
    console.log(typeof fasterCart);
    console.log(fasterCart);
  }, [fasterCart]);

  return (
    <FasterCartContext.Provider value={{ fasterCart, setFasterCart }}>
      {children}
    </FasterCartContext.Provider>
  );
};

const FasterCartConsumer = FasterCartContext.Consumer;

export { FasterCartContext, FasterCartProvider, FasterCartConsumer };
