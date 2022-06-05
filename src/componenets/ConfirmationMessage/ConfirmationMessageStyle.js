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
  font-size: 20px;
  color: ${colors.textPrimary};

  @media (${breakpoints.tabletSmall}) {
    font-size: 24px;
  }
`;

export const OrderRef = styled.p`
  color: ${colors.textPrimary};

  @media (${breakpoints.tabletSmall}) {
    font-size: 18px;
  }
`;

export const ButtonLink = styled(Link)``;
