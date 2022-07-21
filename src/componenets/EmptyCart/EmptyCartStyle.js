import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, breakpoints } from "../../lib/style/theme";

export const EmptyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 48px;
  justify-items: start;

  @media (${breakpoints.mobileLarge}) {
    place-items: center;
  }
`;

export const Figure = styled.figure`
  width: 300px;
  height: 250px;

  @media (${breakpoints.tablet}) {
    width: 350px;
    height: 300px;
  }
`;

export const ShopLink = styled(Link)``;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const EmptyText = styled.p`
  text-transform: capitalize;
  font-size: 2.4rem;
  font-weight: 500;
  color: ${colors.textPrimary};

  @media (${breakpoints.tablet}) {
    font-size: 3rem;
  }
`;
