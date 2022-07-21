import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";
import { Link } from "react-router-dom";

export const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
`;

export const Title = styled.h2`
  text-transform: capitalize;
  font-size: 2rem;
  color: ${colors.textPrimary};

  @media (${breakpoints.tabletSmall}) {
    font-size: 2.4rem;
  }
`;

export const OrderRef = styled.p`
  font-size: 1.6rem;
  color: ${colors.textPrimary};

  @media (${breakpoints.tabletSmall}) {
    font-size: 1.8rem;
  }
`;

export const ButtonLink = styled(Link)``;
