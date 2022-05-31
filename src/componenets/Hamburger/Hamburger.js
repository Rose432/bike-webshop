import React from "react";
import { StyledHamburger } from "./HamburgerStyle";

const Hamburger = ({ open, setOpen, isHome }) => {
  return (
    <StyledHamburger isHome={isHome} open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </StyledHamburger>
  );
};

export default Hamburger;
