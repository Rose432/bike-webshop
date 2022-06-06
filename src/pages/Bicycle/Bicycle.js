import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../../componenets/Header/Header";
import Footer from "../../componenets/Footer/Footer";
import Section from "../../componenets/Section/Section";
import BicyclePage from "../../componenets/BicyclePage/BicyclePage";
import { commerce } from "../../lib/commerce";
import { ThreeDots } from "react-loader-spinner";
import { SpinnerWrapper, Button } from "../../lib/style/generalStyle";
import { CartContext } from "../../context/CartContext";

const Bicycle = () => {
  const { name } = useParams();
  const { products, setProducts } = useContext(CartContext);
  const [bicycle, setBicycle] = useState(null);

  useEffect(() => {
    setBicycle(...products.filter((bicycle) => bicycle.name === name));
  }, [products, name]);

  const showBicycle = !bicycle ? (
    <SpinnerWrapper>
      <ThreeDots color="#087f5b" height={70} width={70} strokeWidth={0.8} />
    </SpinnerWrapper>
  ) : (
    <BicyclePage
      imgSrc={bicycle.image.url}
      bikeDescription={bicycle.description}
      bikeTitle={bicycle.name}
      bikePrice={bicycle.price.raw}
      bicycleId={bicycle.id}
    />
  );

  return (
    <>
      <Header
        buttons={
          <>
            <Button isOutlineSecondary>Log In</Button>
            <Button isSecondary>Sign Up</Button>
          </>
        }
        isSecondary
      />
      <Section children={showBicycle} />
      <Section isFooter children={<Footer />} />
    </>
  );
};

export default Bicycle;
