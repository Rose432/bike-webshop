import styled from "styled-components";
import { colors } from "../../lib/style/theme";

export const FeatureContainer = styled.div`
  /* width: 250px; */
  transition: all 0.3s ease-in-out;
  &:hover {
    svg {
      color: ${colors.secondary};
    }

    span {
      background-color: ${colors.primary};
    }
  }
`;

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  border-radius: 50%;
  background-color: ${colors.secondary};
  margin-bottom: 24px;
  width: 32px;
  height: 32px;
  transition: all 0.3s ease-in-out;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 18px;
  color: ${colors.textPrimary};
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: ${colors.textSecondary};
  line-height: 1.6;
`;
