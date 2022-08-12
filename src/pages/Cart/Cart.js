import React from "react";
import { useContext, useState } from "react";
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
import { FasterCartContext } from "../../context/FasterCartContext";
import EmptyCart from "../../componenets/EmptyCart/EmptyCart";
import { commerce } from "../../lib/commerce";
import { ThreeDots } from "react-loader-spinner";

const Cart = () => {
  const { fasterCart, setFasterCart } = useContext(FasterCartContext);
  const [isFetching, setIsFetching] = useState(false);
  let navigate = useNavigate();

  const updateCart = async function (fasterCart) {
    fasterCart.map(async (cur) => {
      try {
        setIsFetching(true);
        await commerce.cart.add(cur.bicycleId, cur.quantity);
        setIsFetching(false);
        navigate("/checkout");
      } catch (err) {
        console.error(err);
        setIsFetching(false);
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
          fasterCart.length > 0 && (
            <Subtotal>
              Subtotal: €
              {fasterCart.reduce((acc, cur) => {
                const subtotal = acc + cur.bikePrice * cur.quantity;
                return Math.round((subtotal + Number.EPSILON) * 100) / 100;
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
