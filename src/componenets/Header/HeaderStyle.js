import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { colors, breakpoints } from "../../lib/style/theme";

export const HeaderWrapper = styled.header`
  background-color: ${colors.white};
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;

  @media (${breakpoints.tabletMedium}) {
    padding: 0 24px;
  }

  @media (${breakpoints.destkop}) {
    padding: 0;
  }

  ${(props) =>
    props.isSecondary &&
    `
  background-color: ${colors.primary};
  height: 10vh;
  `}
`;

export const HeaderInner = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (${breakpoints.destkop}) {
    width: 960px;
  }

  @media (${breakpoints.destkopLarge}) {
    width: 1260px;
  }
`;

export const LogoContainer = styled.div`
  z-index: 2;
`;

export const LogoLink = styled(Link)`
  font-size: 24px;
  color: ${colors.black};
  font-weight: 700;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  /* position: absolute; */
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

export const Cart = styled(ShoppingCartOutlinedIcon)`
  color: ${colors.textPrimary};

  ${(props) =>
    props.isSecondary &&
    `
  color: ${colors.secondary};
  
  `}
`;

export const Favorite = styled(FavoriteBorderOutlinedIcon)`
  color: ${colors.textPrimary};

  ${(props) =>
    props.isSecondary &&
    `
  color: ${colors.secondary};
  
  `}
`;

export const NavWrapper = styled.nav`
  display: none;

  @media (${breakpoints.destkop}) {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Nav = styled(NavLink)`
  position: relative;
  color: ${colors.textPrimary};
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: -0.2px;

  ${(props) =>
    props.isSecondary &&
    `
  color: ${colors.secondary};
  
  `}

  &::after {
    position: absolute;
    content: "";
    display: block;
    opacity: 0;
    width: 100%;
    height: 2px;
    background-color: ${colors.primary};
    margin: auto;
    transition: all 0.3s ease-in-out;

    ${(props) =>
      props.isSecondary &&
      `
  background-color: ${colors.secondary};
  
  `}
  }

  &:hover::after {
    opacity: 100;
  }
`;
