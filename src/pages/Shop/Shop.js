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

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const bicycles =
    products.length > 1 ? (
      <Grid>
        {products.map(
          (bicycle, index) =>
            index < products.length && (
              <BikeCard
                key={bicycle.id}
                bicycleId={bicycle.name}
                imgSrc={bicycle.image.url}
                imgAlt={bicycle.description}
                bikeTitle={bicycle.name}
                bikePrice={bicycle.price.formatted_with_symbol}
              />
            )
        )}
      </Grid>
    ) : (
      <SpinnerWrapper>
        <ThreeDots color="#087f5b" height={70} width={70} />
      </SpinnerWrapper>
    );

  return (
    <>
      <Header isSecondary />
      <Section title={"All Bicycles"} children={bicycles} />
      <Section isFooter children={<Footer />} />
    </>
  );
};

export default Shop;
