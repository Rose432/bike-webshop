import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

export const HeaderWrapper = styled.header`
  background-color: #f0fdf9;
  height: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderSecondary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #343a40;
  width: 100%;
  justify-self: start;
  height: 4vh;
  gap: 5px;
`;

export const Guest = styled.span`
  color: #f0fdf9;
`;

export const SignIn = styled.a`
  color: #f0fdf9;
`;

export const HeaderInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1260px;
  z-index: 1;
`;

export const LogoContainer = styled.div`
  width: 100px;
`;

export const LogoLink = styled(Link)`
  font-size: 24px;
  color: black;
  font-weight: 700;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Cart = styled(ShoppingCartOutlinedIcon)``;

export const Profile = styled(PersonOutlineOutlinedIcon)`
  color: #f0fdf9;
`;

export const Favorite = styled(FavoriteBorderOutlinedIcon)``;

export const NavWrapper = styled.nav`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled(NavLink)`
  position: relative;
  display: inline-block;
  color: #343a40;
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
    background-color: #087f5b;
    margin: auto;
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 100;
  }
`;
