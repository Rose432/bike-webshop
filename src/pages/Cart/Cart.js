import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../componenets/Header/Header";
import Footer from "../../componenets/Footer/Footer";
import Section from "../../componenets/Section/Section";
import CartCard from "../../componenets/CartCard/CartCard";
import { Button, Grid, Subtotal } from "../../lib/style/generalStyle";
import { CartContext } from "../../context/CartContext";
import { FasterCartContext } from "../../context/FasterCartContext";
import { ThreeDots } from "react-loader-spinner";
import EmptyCart from "../../componenets/EmptyCart/EmptyCart";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { fasterCart, setFasterCart } = useContext(FasterCartContext);
  let navigate = useNavigate();

  let showCart;

  if (fasterCart.length > 0) {
    showCart = (
      <Grid isBikeGrid>
        {fasterCart.map((cartItem) => (
          <CartCard
            key={cartItem.bicycleId}
            imgSrc={cartItem.imgSrc}
            name={cartItem.bikeTitle}
            price={cartItem.bikePrice}
            quantity={cartItem.quantity}
            bicycleId={cartItem.bicycleId}
          />
        ))}
      </Grid>
    );
  } else if (fasterCart.length === 0) {
    showCart = <EmptyCart />;
  }

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
          fasterCart.length > 0 && (
            <Subtotal>
              Subtotal: €
              {fasterCart.reduce((acc, cur) => {
                return acc + cur.bikePrice * cur.quantity;
              }, 0)}
            </Subtotal>
          )
        }
        emptyButton={<Button isFixed>Empty Cart</Button>}
        checkoutButton={
          <Button isFixed isCheckout>
            Checkout
          </Button>
        }
      >
        {showCart}
      </Section>
      <Section isFooter>
        <Footer />
      </Section>
    </>
  );
};

export default Cart;
