import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../../componenets/Header/Header";
import Footer from "../../componenets/Footer/Footer";
import Section from "../../componenets/Section/Section";
import BicyclePage from "../../componenets/BicyclePage/BicyclePage";
import { ThreeDots } from "react-loader-spinner";
import { SpinnerWrapper, Button } from "../../lib/style/generalStyle";
import { ProductsContext } from "../../context/ProductsContext";

const Bicycle = () => {
  const { name } = useParams();
  const { products } = useContext(ProductsContext);
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
            <Button isHeaderNav isOutlineSecondary>
              Log In
            </Button>
            <Button isHederNav isSecondary>
              Sign Up
            </Button>
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
