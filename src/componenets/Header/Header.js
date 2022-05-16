import React from "react";
import {
  HeaderWrapper,
  HeaderSecondary,
  Guest,
  SignIn,
  HeaderInner,
  LogoContainer,
  LogoLink,
  IconContainer,
  Cart,
  Profile,
  Favorite,
  NavWrapper,
  Nav,
} from "./HeaderStyle";

const Header = () => {
  return (
    <>
      <HeaderSecondary>
        <Guest>Guest</Guest>
        <Profile />
        <SignIn href="/">Sign In</SignIn>
      </HeaderSecondary>
      <HeaderWrapper>
        <HeaderInner>
          <LogoContainer>
            <LogoLink href="/">Bikeshop</LogoLink>
          </LogoContainer>
          <IconContainer>
            <Favorite />
            <Cart />
          </IconContainer>
          <NavWrapper>
            <Nav href="/">Shop</Nav>
            <Nav href="/">Register</Nav>
            <Nav href="/">Contact</Nav>
          </NavWrapper>
        </HeaderInner>
      </HeaderWrapper>
    </>
  );
};

export default Header;
