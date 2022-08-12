import { createContext, useState, useEffect } from "react";

const FasterCartContext = createContext();

const FasterCartProvider = ({ children }) => {
  const [fasterCart, setFasterCart] = useState([]);

  const handleAddItemsToCart = (
    bicycleId,
    quantity,
    imgSrc,
    bikeTitle,
    bikePrice,
    fasterCart
  ) => {
    const cartData = {
      bicycleId: bicycleId,
      quantity: quantity,
      imgSrc: imgSrc,
      bikeTitle: bikeTitle,
      bikePrice: bikePrice,
    };

    if (fasterCart.length === 0) {
      setFasterCart((prevArray) => [...prevArray, cartData]);
    } else if (
      fasterCart.length > 0 &&
      fasterCart.every((cur) => cur.bicycleId !== bicycleId)
    ) {
      setFasterCart((prevArray) => [...prevArray, cartData]);
    } else if (fasterCart.some((cur) => cur.bicycleId === bicycleId)) {
      fasterCart.find((cur) => cur.bicycleId === bicycleId && cur.quantity++);
      const newArray = fasterCart.slice(0);
      setFasterCart(newArray);
    }
  };

  const handleIncrementCartQty = (bicycleId, quantity, fasterCart) => {
    if (fasterCart.some((cur) => cur.bicycleId === bicycleId)) {
      fasterCart.find((cur) => cur.bicycleId === bicycleId && cur.quantity++);
      const newArray = fasterCart.slice(0);
      setFasterCart(newArray);
    }
  };

  const handleDecrementCartQty = (bicycleId, quantity, fasterCart) => {
    if (
      fasterCart.some((cur) => cur.bicycleId === bicycleId && cur.quantity > 1)
    ) {
      fasterCart.find((cur) => cur.bicycleId === bicycleId && cur.quantity--);
      const newArray = fasterCart.slice(0);
      setFasterCart(newArray);
    } else if (
      fasterCart.some(
        (cur) => cur.bicycleId === bicycleId && cur.quantity === 1
      )
    ) {
      const newArray = fasterCart
        .filter((cur) => cur.bicycleId !== bicycleId)
        .slice(0);
      setFasterCart(newArray);
    }
  };

  const handleItemRemove = (bicycleId, fasterCart) => {
    if (fasterCart.find((cur) => cur.bicycleId === bicycleId)) {
      const newArray = fasterCart
        .filter((cur) => cur.bicycleId !== bicycleId)
        .slice(0);
      setFasterCart(newArray);
    }
  };

  useEffect(() => {
    console.log(fasterCart);
  }, [fasterCart]);

  return (
    <FasterCartContext.Provider
      value={{
        fasterCart,
        setFasterCart,
        handleAddItemsToCart,
        handleIncrementCartQty,
        handleDecrementCartQty,
        handleItemRemove,
      }}
    >
      {children}
    </FasterCartContext.Provider>
  );
};

const FasterCartConsumer = FasterCartContext.Consumer;

export { FasterCartContext, FasterCartProvider, FasterCartConsumer };
