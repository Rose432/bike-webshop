import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../componenets/Header/Header";
import Footer from "../../componenets/Footer/Footer";
import Section from "../../componenets/Section/Section";
import BicyclePage from "../../componenets/BicyclePage/BicyclePage";
import { commerce } from "../../lib/commerce";
import { ThreeDots } from "react-loader-spinner";
import { SpinnerWrapper } from "../../lib/style/generalStyle";

const Bicycle = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [bicycle, setBicycle] = useState(null);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
      bikePrice={bicycle.price.formatted_with_symbol}
    />
  );

  return (
    <>
      <Header isSecondary />
      <Section children={showBicycle} />
      <Section isFooter children={<Footer />} />
    </>
  );
};

export default Bicycle;
