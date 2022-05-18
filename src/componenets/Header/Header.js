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

const Header = ({ isSecondary }) => {
  return (
    <>
      <HeaderSecondary isSecondary={isSecondary}>
        <Guest isSecondary={isSecondary}>Guest</Guest>
        <Profile isSecondary={isSecondary}>Profile</Profile>
        <SignIn isSecondary={isSecondary} href="/">
          Sign In
        </SignIn>
      </HeaderSecondary>
      <HeaderWrapper isSecondary={isSecondary}>
        <HeaderInner>
          <LogoContainer>
            <LogoLink to="/">Bikeshop</LogoLink>
          </LogoContainer>
          <IconContainer>
            <Favorite isSecondary={isSecondary} />
            <Cart isSecondary={isSecondary} />
          </IconContainer>
          <NavWrapper>
            <Nav isSecondary={isSecondary} to="/shop">
              Shop
            </Nav>
            <Nav isSecondary={isSecondary} to="/">
              Register
            </Nav>
            <Nav isSecondary={isSecondary} to="/">
              Contact
            </Nav>
          </NavWrapper>
        </HeaderInner>
      </HeaderWrapper>
    </>
  );
};

export default Header;
