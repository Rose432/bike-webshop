import React from "react";
import { useContext } from "react";
import Header from "../../componenets/Header/Header";
import Landing from "../../componenets/Landing/Landing";
import Section from "../../componenets/Section/Section";
import BikeCard from "../../componenets/BikeCard/BikeCard";
import Feature from "../../componenets/Feature/Feature";
import Footer from "../../componenets/Footer/Footer";
import { Grid, SpinnerWrapper, Button } from "../../lib/style/generalStyle";
import { ThreeDots } from "react-loader-spinner";
import { ProductsContext } from "../../context/ProductsContext";
import { featureData } from "./FeatureData";

const Home = () => {
  const { products } = useContext(ProductsContext);

  const bicycles =
    products.length > 0 ? (
      <Grid>
        {products.map(
          (bicycle, index) =>
            index <= 3 && (
              <BikeCard
                key={bicycle.id}
                bicycleName={bicycle.name}
                imgSrc={bicycle.image.url}
                imgAlt={bicycle.description}
                bikeTitle={bicycle.name}
                bikePrice={bicycle.price.raw}
                bicycleId={bicycle.id}
              />
            )
        )}
      </Grid>
    ) : (
      <SpinnerWrapper>
        <ThreeDots color="#087f5b" height={70} width={70} strokeWidth={0.8} />
      </SpinnerWrapper>
    );

  return (
    <>
      <Header
        buttons={
          <>
            <Button isHeaderNav isInline>
              Log In
            </Button>
            <Button isHeaderNav>Sign Up</Button>
          </>
        }
        isHome={true}
      />
      <Landing />
      <Section
        title={"bestsellers"}
        linkText={"See more bicycles →"}
        children={bicycles}
      />
      <Section
        isAfterSection
        children={
          <Grid isFeature>
            {featureData.map((curr, i) => (
              <Feature
                key={i}
                icon={<curr.icon />}
                title={curr.title}
                subtitle={curr.subtitle}
              />
            ))}
          </Grid>
        }
      />

      <Section isFooter children={<Footer />} />
    </>
  );
};

export default Home;
