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
  Logout,
} from "./HeaderStyle";
import Hamburger from "../Hamburger/Hamburger";
import { AuthContext } from "../../context/AuthContext";
import { useSelector } from "react-redux";

const Header = ({ isSecondary, isSecond, isDiffHead }) => {
  const cart = useSelector((state) => state.cart.cart);
  const { isLoggedin, setIsLoggedin } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderWrapper isSecondary={isSecondary}>
        <HeaderInner open={open}>
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
              {isLoggedin && <Nav to="/profile">Profile</Nav>}
              {!isLoggedin && (
                <>
                  <AuthLink to="/login">
                    <UserAuth>Log in</UserAuth>
                  </AuthLink>
                  <AuthLink to="/register">
                    <UserAuth
                      isSecond={isSecond}
                      isDiffHead={isDiffHead}
                      to="/"
                    >
                      Register
                    </UserAuth>
                  </AuthLink>
                </>
              )}
              {isLoggedin && (
                <Logout
                  isSecond={isSecond}
                  isDiffHead={isDiffHead}
                  onClick={() => {
                    localStorage.removeItem("accessToken");
                    setIsLoggedin(false);
                  }}
                >
                  Logout
                </Logout>
              )}
            </NavWrapper>
            <IconLink to="/cart">
              <CartItems
                aria-label="Number of items in cart"
                overlap="rectangular"
                color="error"
                badgeContent={cart.reduce((acc, cur) => {
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
