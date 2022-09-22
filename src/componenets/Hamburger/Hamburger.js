import React from "react";
import { StyledHamburger } from "./HamburgerStyle";

const Hamburger = ({ open, setOpen }) => {
  return (
    <StyledHamburger
      aria-label={open ? "close navigation menu" : "open navigation menu"}
      aria-expanded={open ? "true" : "false"}
      aria-controls="navigation"
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div aria-hidden="true"></div>
      <div aria-hidden="true"></div>
      <div aria-hidden="true"></div>
    </StyledHamburger>
  );
};

export default Hamburger;
