import React from "react";
import { useState } from "react";
import {
  HeaderWrapper,
  HeaderInner,
  LogoContainer,
  LogoImgContainer,
  LogoDownLine,
  LogoLeftLine,
  LogoRightLine,
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
          </NavWrapper>
          <Hamburger open={open} setOpen={setOpen} />
        </HeaderInner>
      </HeaderWrapper>
      <HamburgerMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
