import React from "react";
import { useState } from "react";
import {
  HeaderWrapper,
  HeaderInner,
  LogoContainer,
  LogoLink,
  IconContainer,
  Cart,
  Favorite,
  NavWrapper,
  Nav,
} from "./HeaderStyle";
import Hamburger from "../Hamburger/Hamburger";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Button } from "../../lib/style/generalStyle";

const Header = ({ isSecondary, isHome, buttons }) => {
  const [open, setOpen] = useState(false);

  return (
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
            Profile
          </Nav>
          <Nav isSecondary={isSecondary} to="/">
            Contact
          </Nav>
          {buttons}
          {/* <Nav isSecondary={isSecondary} to="/">
            Log In
          </Nav>
          <Nav isSecondary={isSecondary} to="/">
            Sign Up
          </Nav> */}
        </NavWrapper>
        <Hamburger isHome={isHome} open={open} setOpen={setOpen} />
      </HeaderInner>
      <HamburgerMenu open={open} setOpen={setOpen} />
    </HeaderWrapper>
  );
};

export default Header;
