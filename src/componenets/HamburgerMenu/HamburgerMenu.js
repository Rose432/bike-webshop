import { StyledMenu, MenuLink } from "./HamburgerMenuStyle";
import React from "react";

const HamburgerMenu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <MenuLink to="/shop">Shop</MenuLink>
      <MenuLink to="/">Profile</MenuLink>
      <MenuLink to="/">Contact</MenuLink>
      <MenuLink to="/">Log In</MenuLink>
      <MenuLink to="/">Sign Up</MenuLink>
    </StyledMenu>
  );
};

export default HamburgerMenu;
