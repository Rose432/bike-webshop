import React from "react";
import { StyledHamburger } from "./HamburgerStyle";

const Hamburger = ({ open, setOpen }) => {
  return (
    <StyledHamburger open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </StyledHamburger>
  );
};

export default Hamburger;
