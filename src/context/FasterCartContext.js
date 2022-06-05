import { createContext, useState } from "react";

const FasterCartContext = createContext();

const FasterCartProvider = ({ children }) => {
  const [fasterCart, setFasterCart] = useState([]);

  console.log(fasterCart);

  return (
    <FasterCartContext.Provider value={{ fasterCart, setFasterCart }}>
      {children}
    </FasterCartContext.Provider>
  );
};

const FasterCartConsumer = FasterCartContext.Consumer;

export { FasterCartContext, FasterCartProvider, FasterCartConsumer };
