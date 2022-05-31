import React from "react";
import { useContext } from "react";
import Header from "../../componenets/Header/Header";
import Footer from "../../componenets/Footer/Footer";
import Section from "../../componenets/Section/Section";
import CartCard from "../../componenets/CartCard/CartCard";
import { Button, Grid, SpinnerWrapper } from "../../lib/style/generalStyle";
import { CartContext } from "../../context/CartContext";
import { ThreeDots } from "react-loader-spinner";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const arr = cart.line_items;
  console.log(arr);

  console.log(cart);

  const renderCart = () => (
    <>
      <Grid>
        {arr.map((item) => (
          <CartCard
            key={item.id}
            imgSrc={item.image.url}
            name={item.product_name}
            price={item.price.formatted_with_symbol}
            quantity={item.quantity}
          />
        ))}
      </Grid>
    </>
  );
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
      <Section
        isCart={true}
        title={"Your shopping Cart"}
        button={<Button>Back</Button>}
      >
        {cart?.line_items ? (
          renderCart()
        ) : (
          <SpinnerWrapper>
            <ThreeDots color="#087f5b" height={70} width={70} />
          </SpinnerWrapper>
        )}
      </Section>
      <Section isFooter>
        <Footer />
      </Section>
    </>
  );
};

export default Cart;
