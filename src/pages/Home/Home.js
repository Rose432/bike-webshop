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
  SpinnerWrapper,
} from "../../lib/style/generalStyle";
import { ThreeDots } from "react-loader-spinner";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const n = 4;

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

  const bicycles =
    products.length > 1
      ? products.map(
          (bicycle, index) =>
            index < 4 && (
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
      <Landing />
      <Section
        title={"bestsellers"}
        linkText={"See more bicycles →"}
        children={<Grid>{bicycles}</Grid>}
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
