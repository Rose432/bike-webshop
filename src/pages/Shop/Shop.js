import React from "react";
import { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import Header from "../../componenets/Header/Header";
import Section from "../../componenets/Section/Section";
import BikeCard from "../../componenets/BikeCard/BikeCard";
import { Grid } from "../../lib/style/generalStyle";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <Section
        title={"All Bicycles"}
        children={
          <Grid>
            {products &&
              products.map(
                (bicycle, index) =>
                  index < products.length && (
                    <BikeCard
                      imgSrc={bicycle.image.url}
                      imgAlt={bicycle.description}
                      bikeTitle={bicycle.name}
                      bikePrice={bicycle.price.formatted_with_symbol}
                    />
                  )
              )}
          </Grid>
        }
      />
    </>
  );
};

export default Shop;
