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
  IconContainer,
  Cart,
  IconLink,
  NavWrapper,
  Nav,
} from "./HeaderStyle";
import Hamburger from "../Hamburger/Hamburger";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Badge } from "@material-ui/core";
import { CartContext } from "../../context/CartContext";

const Header = ({ isSecondary, isHome, buttons }) => {
  const { cart, setCart } = useContext(CartContext);
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
            <IconLink to="/cart">
              {/* <Favorite isSecondary={isSecondary} /> */}
              <Badge
                overlap="rectangular"
                color="error"
                badgeContent={cart.total_items}
              >
                <Cart aria-label="cart" />
              </Badge>
            </IconLink>
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
            <IconLink to="/cart">
              <Badge
                overlap="rectangular"
                color="error"
                badgeContent={cart.total_items}
              >
                <Cart aria-label="cart" />
              </Badge>
            </IconLink>
          </NavWrapper>
          <Hamburger open={open} setOpen={setOpen} />
        </HeaderInner>
      </HeaderWrapper>
      <HamburgerMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
