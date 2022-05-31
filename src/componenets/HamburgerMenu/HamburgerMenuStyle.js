import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, breakpoints } from "../../lib/style/theme";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  height: 100vh;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  z-index: 1;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
`;

export const MenuLink = styled(Link)`
  width: 100%;
  font-size: 20px;
  text-transform: uppercase;
  padding: 20px 0;
  font-weight: 500;
  letter-spacing: 2px;
  color: ${colors.secondary};
  transition: all 0.3s ease-in-out;

  @media (${breakpoints.tabletSmall}) {
    font-size: 24px;
  }

  @media (${breakpoints.tablet}) {
    font-size: 28px;
  }

  &:hover {
    background: ${colors.bgMenuHover};
    font-weight: 700;
  }
`;
