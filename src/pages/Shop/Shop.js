import React from "react";
import { useState, useEffect, useContext } from "react";
import { commerce } from "../../lib/commerce";
import Header from "../../componenets/Header/Header";
import Section from "../../componenets/Section/Section";
import BikeCard from "../../componenets/BikeCard/BikeCard";
import Footer from "../../componenets/Footer/Footer";
import SearchBar from "../../componenets/SearchBar/SearchBar";
import {
  Grid,
  SpinnerWrapper,
  NotFoundWrapper,
  NotFound,
  Button,
} from "../../lib/style/generalStyle";
import { ThreeDots } from "react-loader-spinner";
import { CartContext } from "../../context/CartContext";

const Shop = () => {
  const { cart, setCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = products.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    searchWord === "" ? setFilteredData([]) : setFilteredData(newFilter);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  let bicycles =
    products.length > 1 ? (
      <Grid>
        {products.map(
          (bicycle, index) =>
            index < products.length && (
              <BikeCard
                key={bicycle.id}
                bicycleName={bicycle.name}
                imgSrc={bicycle.image.url}
                imgAlt={bicycle.description}
                bikeTitle={bicycle.name}
                bikePrice={bicycle.price.formatted_with_symbol}
                bicycleId={bicycle.id}
              />
            )
        )}
      </Grid>
    ) : (
      <SpinnerWrapper>
        <ThreeDots color="#087f5b" height={70} width={70} />
      </SpinnerWrapper>
    );

  if (filteredData.length !== 0) {
    bicycles = (
      <Grid>
        {filteredData.map((bicycle, index) => (
          <BikeCard
            key={bicycle.id}
            bicycleName={bicycle.name}
            imgSrc={bicycle.image.url}
            imgAlt={bicycle.description}
            bikeTitle={bicycle.name}
            bikePrice={bicycle.price.formatted_with_symbol}
          />
        ))}
      </Grid>
    );
  } else if (wordEntered.length > 0 && !filteredData.includes({})) {
    bicycles = (
      <Grid>
        <NotFoundWrapper>
          <NotFound>No results for "{wordEntered}"</NotFound>
        </NotFoundWrapper>
      </Grid>
    );
  }

  console.log(filteredData);

  console.log(wordEntered);
  return (
    <>
      <Header
        buttons={
          <>
            <Button isOutlineSecondary>Log In</Button>
            <Button isSecondary>Sign Up</Button>
          </>
        }
        isSecondary
      />

      <Section title={"All Bicycles"}>
        <SearchBar
          placeholder={"Search bicycles..."}
          disabled={products.length > 1 ? false : true}
          onChange={handleSearch}
          searchWord={wordEntered}
          clearInput={clearInput}
          searchStringLength={wordEntered.length}
        />
        {bicycles}
      </Section>
      <Section isFooter children={<Footer />} />
    </>
  );
};

export default Shop;
