import React from "react";
import { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import Header from "../../componenets/Header/Header";
import Section from "../../componenets/Section/Section";
import BikeCard from "../../componenets/BikeCard/BikeCard";
import Footer from "../../componenets/Footer/Footer";
import { Grid, SpinnerWrapper } from "../../lib/style/generalStyle";
import { ThreeDots } from "react-loader-spinner";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const n = 8;

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const bicycles =
    products.length > 1
      ? products.map(
          (bicycle, index) =>
            index < products.length && (
              <BikeCard
                imgSrc={bicycle.image.url}
                imgAlt={bicycle.description}
                bikeTitle={bicycle.name}
                bikePrice={bicycle.price.formatted_with_symbol}
              />
            )
        )
      : [...Array(n)].map((e, i) => (
          <SpinnerWrapper key={i}>
            <ThreeDots
              color="#087f5b"
              height={80}
              width={80}
              strokeWidth={0.8}
            />
          </SpinnerWrapper>
        ));

  return (
    <>
      <Header />
      <Section title={"All Bicycles"} children={<Grid>{bicycles}</Grid>} />
      <Section isFooter children={<Footer />} />
    </>
  );
};

export default Shop;
