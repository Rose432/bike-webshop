import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const Order = styled.div``;

export const ProductInfo = styled.div``;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  color: ${colors.textPrimary};
`;

export const Product = styled.p`
  color: ${colors.textPrimary};
  padding-bottom: 4px;
`;

export const ProductQuantity = styled.p`
  color: ${colors.textSecondary};
  font-size: 14px;
`;

export const Price = styled.p``;

export const Total = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const Subtotal = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
