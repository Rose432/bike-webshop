import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const MessageWindow = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: rgba(5, 5, 5, 0.4);
  z-index: 20;
  padding: 0 10px;
`;

export const MessageContainer = styled.div`
  border-radius: 10px;
  padding: 32px;
  height: 300px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.white};
`;
export const MessageTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  color: ${colors.primary};
`;

export const MessageText = styled.p`
  font-size: 1.8em;
  color: ${colors.textSecondary};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (${breakpoints.tabletSmall}) {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 32px;
  }
`;
