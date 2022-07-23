import React from "react";
import { useState, useContext } from "react";
import {
  HeaderWrapper,
  HeaderInner,
  LogoContainer,
  LogoImgContainer,
  LogoDownLine,
  LogoLeftLine,
  LogoRightLine,
  LogoLink,
  Cart,
  IconLink,
  NavPositioner,
  NavWrapper,
  Nav,
  CartItems,
  UserAuth,
  AuthLink,
} from "./HeaderStyle";
import Hamburger from "../Hamburger/Hamburger";
import { FasterCartContext } from "../../context/FasterCartContext";

const Header = ({ isSecondary, isHome, isSecond, isDiffHead }) => {
  const { fasterCart } = useContext(FasterCartContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderWrapper isSecondary={isSecondary}>
        <HeaderInner>
          <LogoContainer to="/">
            <LogoImgContainer>
              <LogoDownLine />
              <LogoLeftLine />
              <LogoRightLine />
            </LogoImgContainer>
            <LogoLink to="/">Advanturer</LogoLink>
          </LogoContainer>
          <NavPositioner>
            <NavWrapper id="navigation" open={open}>
              <Nav to="/shop">Shop</Nav>
              <Nav to="/">Profile</Nav>
              {/* <Nav to="/">Contact</Nav> */}
              <AuthLink to="/login">
                <UserAuth>Log in</UserAuth>
              </AuthLink>
              <AuthLink to="/register">
                <UserAuth isSecond={isSecond} isDiffHead={isDiffHead} to="/">
                  Register
                </UserAuth>
              </AuthLink>
            </NavWrapper>
            <IconLink to="/cart">
              <CartItems
                aria-label="Number of items in cart"
                overlap="rectangular"
                color="error"
                badgeContent={fasterCart.reduce((acc, cur) => {
                  return acc + cur.quantity;
                }, 0)}
                max={99}
              >
                <Cart aria-label="open cart page" />
              </CartItems>
            </IconLink>
            <Hamburger open={open} setOpen={setOpen} />
          </NavPositioner>
        </HeaderInner>
      </HeaderWrapper>
    </>
  );
};

export default Header;
