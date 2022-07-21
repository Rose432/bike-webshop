import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const Order = styled.div``;

export const StepTitle = styled.h2`
  text-transform: capitalize;
  font-size: 2rem;
  color: ${colors.textPrimary};
  margin-bottom: 32px;

  @media (${breakpoints.tabletSmall}) {
    font-size: 2.4rem;
  }
`;

export const ProductInfo = styled.div``;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  color: ${colors.textPrimary};
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  color: ${colors.textPrimary};
`;

export const Product = styled.p`
  font-size: 1.6rem;
  color: ${colors.textPrimary};
  padding-bottom: 4px;

  @media (${breakpoints.tabletSmall}) {
    font-size: 1.8rem;
  }
`;

export const ProductQuantity = styled.p`
  font-size: 1.6rem;
  color: ${colors.textSecondary};
  font-size: 1.4rem;

  @media (${breakpoints.tabletSmall}) {
    font-size: 1.6rem;
  }
`;

export const Price = styled.p`
  font-size: 1.6rem;
  @media (${breakpoints.tabletSmall}) {
    font-size: 1.8rem;
  }
`;

export const Total = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: ${colors.textPrimary};

  @media (${breakpoints.tabletSmall}) {
    font-size: 2.4rem;
  }
`;

export const Subtotal = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: ${colors.textPrimary};

  @media (${breakpoints.tabletSmall}) {
    font-size: 2.4rem;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  @media (${breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0;
  }
`;

export const PaymentForm = styled.form``;

export const PaymentTitle = styled.h3`
  text-transform: capitalize;
  font-size: 2rem;
  color: ${colors.textPrimary};
  margin-bottom: 32px;

  @media (${breakpoints.tabletSmall}) {
    font-size: 2.4rem;
  }
`;
