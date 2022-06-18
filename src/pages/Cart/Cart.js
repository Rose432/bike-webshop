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
import EmptyCart from "../../componenets/EmptyCart/EmptyCart";
import { commerce } from "../../lib/commerce";


const Cart = () => {
  const { fasterCart, setFasterCart } = useContext(FasterCartContext);
  const { cart, setCart } = useContext(CartContext);
  let navigate = useNavigate();

  const updateCart = function (fasterCart) {
    fasterCart.map(async (cur) => {
      try {
        const { cart } = await commerce.cart.add(cur.bicycleId, cur.quantity);
        setCart(cart);
        console.log(cart);
      } catch (err) {
        console.error(err);
      }
    });
  };

  let showCart;

  if (fasterCart.length > 0) {
    showCart = (
      <Grid isBikeGrid>
        {fasterCart.map((cartItem) => (
          <CartCard
            key={cartItem.bicycleId}
            imgSrc={cartItem.imgSrc}
            name={cartItem.bicycleName}
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
            <Button isHeaderNav isOutlineSecondary>
              Log In
            </Button>
            <Button isHeaderNav isSecondary>
              Sign Up
            </Button>
          </>
        }
        isSecondary
      />
      <Section
        isCart={true}
        title={"Your shopping Cart"}
        button={
          <Button isFixed onClick={() => navigate(-1)}>
            Return
          </Button>
        }
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
        emptyButton={
          <Button isFixed onClick={() => setFasterCart([])}>
            Empty Cart
          </Button>
        }
        checkoutButton={
          <Button isOutline isFixed onClick={() => updateCart(fasterCart)}>
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
