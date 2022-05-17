import React from "react";
import { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import Header from "../../componenets/Header/Header";
import Landing from "../../componenets/Landing/Landing";
import Section from "../../componenets/Section/Section";
import BikeCard from "../../componenets/BikeCard/BikeCard";
import Feature from "../../componenets/Feature/Feature";
import Footer from "../../componenets/Footer/Footer";
import {
  Grid,
  AirplaneIcon,
  TruckIcon,
  ClockIcon,
  QuestionMarkIcon,
} from "../../lib/style/generalStyle";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retriece());
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <Landing />
      <Section
        title={"bestsellers"}
        children={
          <Grid>
            {products.map(
              (bicycle, index) =>
                index < 4 && (
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
      <Section
        isAfterSection
        children={
          <Grid isFeature>
            <Feature
              icon={<AirplaneIcon />}
              title={"Fast Delivery"}
              subtitle={
                "Our customers are offered possibility of same day delivery."
              }
            />
            <Feature
              icon={<TruckIcon />}
              title={"Free Shipping"}
              subtitle={"Free shipping for all biciycles we are offering."}
            />

            <Feature
              icon={<ClockIcon />}
              title={"Personal Pickup"}
              subtitle={"Pickup your bike in our store in Zagreb."}
            />

            <Feature
              icon={<QuestionMarkIcon />}
              title={"Customer Support"}
              subtitle={"For all questions contact us at info@bikeshop.com."}
            />
          </Grid>
        }
      />
      <Section isFooter children={<Footer />} />
    </>
  );
};

export default Home;
