import React from "react";
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
import Bike1 from "../../assets/images/bike1.jpg";
import Bike2 from "../../assets/images/bike2.jpg";
import Bike3 from "../../assets/images/bike3.jpg";
import Bike4 from "../../assets/images/bike4.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <Landing />
      <Section
        title={"bestsellers"}
        children={
          <Grid>
            <BikeCard
              imgSrc={Bike1}
              bikeTitle={"Bike #100"}
              bikePrice={"999,99 €"}
            />
            <BikeCard
              imgSrc={Bike2}
              bikeTitle={"Bike #100"}
              bikePrice={"999,99 €"}
            />
            <BikeCard
              imgSrc={Bike3}
              bikeTitle={"Bike #100"}
              bikePrice={"999,99 €"}
            />
            <BikeCard
              imgSrc={Bike4}
              bikeTitle={"Bike #100"}
              bikePrice={"999,99 €"}
            />
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
