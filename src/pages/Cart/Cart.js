import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../componenets/Header/Header";
import Footer from "../../componenets/Footer/Footer";
import Section from "../../componenets/Section/Section";
import CartCard from "../../componenets/CartCard/CartCard";
import {
  Button,
  Grid,
  Subtotal,
  SpinnerWrapper,
} from "../../lib/style/generalStyle";

import EmptyCart from "../../componenets/EmptyCart/EmptyCart";
import { commerce } from "../../lib/commerce";
import { ThreeDots } from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart } from "../../features/cart/cartSlice";
import ConfirmationWindow from "../../componenets/ConfirmationWindow/ConfirmationWindow";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [isFetching, setIsFetching] = useState(false);
  let navigate = useNavigate();
  const confirmationRef = useRef(null);

  const updateCart = async function (cart) {
    cart.forEach(async (cur) => {
      try {
        setIsFetching(true);
        await commerce.cart.add(cur.bicycleId, cur.quantity);
        setIsFetching(false);
      } catch (err) {
        console.error(err);
        setIsFetching(false);
      }
    });
  };

  let showCart;

  if (cart.length > 0) {
    showCart = (
      <Grid isBikeGrid>
        {cart.map((cartItem) => (
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
  } else if (cart.length === 0) {
    showCart = <EmptyCart />;
  }

  return (
    <>
      <ConfirmationWindow
        ref={confirmationRef}
        confirmFn={() => dispatch(emptyCart())}
      />
      <Header isDiffHead isSecondary />
      <Section
        isCart={true}
        title={"Your shopping Cart"}
        button={
          <Button isFixed onClick={() => navigate(-1)}>
            Return
          </Button>
        }
        subtotal={
          cart.length > 0 && (
            <Subtotal>
              Subtotal: €
              {cart.reduce((acc, cur) => {
                const subtotal = acc + cur.bikePrice * cur.quantity;
                return Math.round((subtotal + Number.EPSILON) * 100) / 100;
              }, 0)}
            </Subtotal>
          )
        }
        emptyButton={
          <Button
            isFixed
            onClick={() =>
              confirmationRef.current.show(
                true,
                "Are you sure?",
                "Are you sure you want to delete whole cart?"
              )
            }
          >
            Empty Cart
          </Button>
        }
        checkoutButton={
          <Button
            isFixed
            isOutline
            onClick={async () => {
              await updateCart(cart);
              navigate("/checkout");
            }}
          >
            {isFetching ? (
              <SpinnerWrapper>
                <ThreeDots color="#087f5b" height={21} width={30} />
              </SpinnerWrapper>
            ) : (
              "Checkout"
            )}
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
