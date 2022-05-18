import styled from "styled-components";
import { colors } from "../../lib/style/theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-shrink: 1;
  flex-grow: 2;
`;

export const Figure = styled.figure`
  width: 500px;
  height: 500px;
`;

export const Img = styled.img`
  border-radius: 10px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.p`
  font-size: 30px;
  color: ${colors.textPrimary};
`;

export const Description = styled.p`
  font-size: 24px;
  color: ${colors.textSecondary};
`;

export const Price = styled.p`
  font-size: 24px;
  color: ${colors.textSecondary};
`;
