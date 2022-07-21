import React from "react";
import { StyledHamburger } from "./HamburgerStyle";

const Hamburger = ({ open, setOpen }) => {
  return (
    <StyledHamburger
      aria-label="open navigation menu"
      aria-expanded={open ? "true" : "false"}
      aria-controls="navigation"
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div></div>
      <div></div>
      <div></div>
    </StyledHamburger>
  );
};

export default Hamburger;
