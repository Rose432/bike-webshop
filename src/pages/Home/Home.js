import React from "react";
import Header from "../../componenets/Header/Header";
import Landing from "../../componenets/Landing/Landing";
import Section from "../../componenets/Section/Section";
import BikeCard from "../../componenets/BikeCard/BikeCard";
import { Grid } from "../../lib/style/generalStyle";
import Bike1 from "../../assets/images/bike1.jpg";
import Bike2 from "../../assets/images/bike2.jpg";
import Bike3 from "../../assets/images/bike3.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <Landing />
      <Section
        children={
          <Grid>
            <BikeCard
              imgSrc={Bike1}
              bikeTitle={"Bike 100"}
              bikePrice={"999 $"}
            />
            <BikeCard
              imgSrc={Bike2}
              bikeTitle={"Bike 100"}
              bikePrice={"999 $"}
            />
            <BikeCard
              imgSrc={Bike3}
              bikeTitle={"Bike 100"}
              bikePrice={"999 $"}
            />
          </Grid>
        }
      />
    </>
  );
};

export default Home;
