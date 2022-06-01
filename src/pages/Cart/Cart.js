import React from "react";
import { commerce } from "../../lib/commerce";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../componenets/Header/Header";
import Footer from "../../componenets/Footer/Footer";
import Section from "../../componenets/Section/Section";
import CartCard from "../../componenets/CartCard/CartCard";
import {
  Button,
  Grid,
  SpinnerWrapper,
  Subtotal,
} from "../../lib/style/generalStyle";
import { CartContext } from "../../context/CartContext";
import { ThreeDots } from "react-loader-spinner";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  let navigate = useNavigate();

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };

  const renderCart = () => (
    <>
      <Grid>
        {cart.line_items?.map((item) => (
          <CartCard
            key={item.id}
            imgSrc={item.image.url}
            name={item.product_name}
            price={item.price.formatted_with_symbol}
            quantity={item.quantity}
            bicycleId={item.id}
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
        button={<Button onClick={() => navigate(-1)}>Return</Button>}
        subtotal={
          <Subtotal>Subtotal: {cart.subtotal?.formatted_with_symbol}</Subtotal>
        }
        emptyButton={
          <Button onClick={() => handleEmptyCart()}>Empty Cart</Button>
        }
        checkoutButton={<Button isCheckout>Checkout</Button>}
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
