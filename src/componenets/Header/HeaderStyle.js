import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { colors, breakpoints } from "../../lib/style/theme";

export const HeaderWrapper = styled.header`
  height: 12vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  width: 100%;

  @media (${breakpoints.tabletMedium}) {
    padding: 0 24px;
  }

  @media (${breakpoints.destkop}) {
    padding: 0;
  }

  ${(props) =>
    props.isSecondary &&
    `
    height: 14vh;
    position: relative;
  background-color: ${colors.primary};
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

export const LogoContainer = styled(Link)`
  display: flex;
  gap: 5px;
  align-items: center;
  z-index: 3;
`;

export const LogoImgContainer = styled.div`
  position: relative;
  height: 30px;
  width: 38px;
  overflow: hidden;
`;

export const LogoDownLine = styled.div`
  content: "";
  position: absolute;
  bottom: 4px;
  left: 8px;
  height: 1px;
  width: 30px;
  background-color: #c3fae8;
`;

export const LogoLeftLine = styled.div`
  content: "";
  position: absolute;
  left: -9px;
  height: 1px;
  width: 60px;
  background-color: #c3fae8;
  transform: rotate(-55deg);
`;

export const LogoRightLine = styled.div`
  content: "";
  top: 12px;
  left: 19px;
  position: absolute;
  height: 1px;
  width: 22px;
  background-color: #c3fae8;
  transform: rotate(55deg);
`;

export const LogoLink = styled.div`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 700;
  text-transform: uppercase;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 5px; */
  z-index: 3;

  @media (${breakpoints.destkop}) {
    display: none;
  }
`;

export const IconLink = styled(Link)``;

export const Cart = styled(ShoppingCartOutlinedIcon)`
  color: ${colors.secondary};
  font-size: 30px !important;
`;

export const Favorite = styled(FavoriteBorderOutlinedIcon)`
  color: ${colors.secondary};
`;

export const NavWrapper = styled.nav`
  display: none;
  z-index: 1;

  @media (${breakpoints.destkop}) {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Nav = styled(NavLink)`
  position: relative;
  color: ${colors.secondary};
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: -0.2px;

  &::after {
    position: absolute;
    content: "";
    display: block;
    opacity: 0;
    width: 100%;
    height: 2px;
    background-color: ${colors.secondary};
    margin: auto;
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 100;
  }
`;
