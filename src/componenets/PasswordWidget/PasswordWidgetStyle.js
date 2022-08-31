import styled from "styled-components";
import { colors } from "../../lib/style/theme";

export const PasswordContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: ${colors.primary};
  padding: 24px 32px;
  border-radius: 10px;
  display: grid;
  gap: 24px;
`;

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const PasswordTitle = styled.p`
  font-size: 1.8rem;
  color: ${colors.secondary};
`;

export const PasswordText = styled.p`
  font-size: 1.6rem;
  color: ${colors.secondary};
  display: ${({ isEditingPass }) => (isEditingPass ? "none" : "block")};
`;
