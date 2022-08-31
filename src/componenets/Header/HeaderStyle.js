import styled, { css } from "styled-components";
import { NavLink, Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { colors, breakpoints } from "../../lib/style/theme";
import { Badge } from "@material-ui/core";

export const HeaderWrapper = styled.header`
  height: 12vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${(props) =>
    props.isSecondary &&
    `
    position: relative;
  background-color: ${colors.primary};
  `}
`;

export const HeaderInner = styled.div`
  padding: 0 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: ${({ open }) => (open ? "fixed" : "static")};
  z-index: 3;

  @media (${breakpoints.tabletMedium}) {
    padding: 0 24px;
  }

  @media (${breakpoints.desktop}) {
    width: 960px;
    padding: 0;
  }

  @media (${breakpoints.desktopLarge}) {
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

export const IconLink = styled(Link)`
  z-index: 3;
`;

export const Cart = styled(ShoppingCartOutlinedIcon)`
  color: ${colors.secondary};
  font-size: 30px !important;
`;

export const Favorite = styled(FavoriteBorderOutlinedIcon)`
  color: ${colors.secondary};
`;

export const NavPositioner = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavWrapper = styled.nav`
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.bgMenu};
  height: 100vh;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  z-index: 1;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  @media (${breakpoints.desktop}) {
    position: static;
    width: auto;
    height: auto;
    transform: none;
    transition: none;
    backdrop-filter: none;
    background: transparent;
    text-align: left;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;
  }
`;

const navItemsStyle = css`
  width: 100%;
  font-size: 2rem;
  text-transform: uppercase;
  padding: 20px 0;
  font-weight: 500;
  letter-spacing: 2px;
  color: ${colors.secondary};
  transition: all 0.3s ease-in-out;

  @media (${breakpoints.tabletSmall}) {
    font-size: 2.4rem;
  }

  @media (${breakpoints.tablet}) {
    font-size: 2.8rem;
  }

  &:hover {
    background-color: ${colors.bgMenuHover};
    font-weight: 700;
  }
`;

const buttonsStyle = css`
  @media (${breakpoints.desktop}) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    padding: 10px 20px;
    font-weight: 400;
    font-size: 1.8rem;
    text-transform: uppercase;
    letter-spacing: -0.2px;
    border-radius: 10px;
    color: ${colors.primary};
    background-color: ${colors.secondary};
    transition: box-shadow 0.3s ease-in-out;
    border: 1px solid ${colors.secondary};

    &:hover {
      box-shadow: 0 1px 4px ${colors.black};
      background-color: ${colors.secondary};
      font-weight: normal;
    }

    ${(props) =>
      props.isSecond &&
      `
      border: 1px solid ${colors.primary};
      color: ${colors.secondary};
      background-color: ${colors.primary};

    &:hover {      
      background-color: ${colors.primary};    
    }
    `}

    ${(props) =>
      props.isDiffHead &&
      `
      color: ${colors.secondary};
      background-color: ${colors.primary};
      border: 1px solid ${colors.secondary};

    &:hover {   
      background-color: ${colors.primary};  
    }
    `}
  }
`;

export const Nav = styled(NavLink)`
  ${navItemsStyle}

  @media (${breakpoints.desktop}) {
    padding: 0;
    width: auto;
    font-weight: 400;
    position: relative;
    transition: none;
    font-size: 1.8rem;
    text-transform: uppercase;
    letter-spacing: -0.2px;

    &:hover {
      background-color: transparent;
      font-weight: 400;
    }

    &::after {
      position: absolute;
      content: "";
      display: block;
      opacity: 0;
      width: 100%;
      height: 1px;
      visibility: hidden;
      background-color: ${colors.secondary};
      margin: auto;
      transition: all 0.3s ease-in-out;
    }

    &:hover::after {
      opacity: 100;
      visibility: visible;
    }

    &.active {
      &::after {
        opacity: 100;
        visibility: visible;
      }
    }
  }
`;

export const UserAuth = styled.div`
  ${navItemsStyle}
  ${buttonsStyle}
`;

export const CartItems = styled(Badge)`
  span {
    font-size: 12px;
  }
`;

export const AuthLink = styled(NavLink)`
  width: 100%;
`;

export const Logout = styled.button`
  ${navItemsStyle}
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  ${buttonsStyle}
`;
