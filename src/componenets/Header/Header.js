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
} from "./HeaderStyle";
import Hamburger from "../Hamburger/Hamburger";
import { Badge } from "@material-ui/core";
import { FasterCartContext } from "../../context/FasterCartContext";

const Header = ({ isSecondary, isHome, buttons }) => {
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
            <NavWrapper open={open}>
              <Nav to="/shop">Shop</Nav>
              <Nav to="/">Profile</Nav>
              <Nav to="/">Contact</Nav>
              {buttons}
            </NavWrapper>
            <IconLink to="/cart">
              <Badge
                overlap="rectangular"
                color="error"
                badgeContent={fasterCart.reduce((acc, cur) => {
                  return acc + cur.quantity;
                }, 0)}
              >
                <Cart aria-label="cart" />
              </Badge>
            </IconLink>
            <Hamburger open={open} setOpen={setOpen} />
          </NavPositioner>
        </HeaderInner>
      </HeaderWrapper>
      {/* <HamburgerMenu open={open} setOpen={setOpen} /> */}
    </>
  );
};

export default Header;
