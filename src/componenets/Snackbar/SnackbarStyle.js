import styled from "styled-components";
import DoneIcon from "@material-ui/icons/Done";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { colors } from "../../lib/style/theme";

export const SnackbarWrapper = styled.div`
  padding: 0 16px;
  position: fixed;
  top: 5%;
  right: 5%;
  width: 300px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  z-index: 5;
  background-color: ${colors.white};
  border: ${({ success }) =>
    success ? `1px solid ${colors.success}` : `1px solid ${colors.error}`};
  gap: 24px;
  box-shadow: 1px 1px 5px ${colors.black};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  animation: fadeIn 0.5s, fadeOut 0.5s 2.5s;

  @keyframes fadeIn {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
`;

export const Symbol = styled.div`
  display: flex;
  align-items: center;
`;

export const Message = styled.p`
  font-size: 1.8rem;
  color: ${({ success }) =>
    success ? `${colors.success}` : `${colors.error}`};
  font-weight: 500;
`;

export const SuccessIcon = styled(DoneIcon)`
  font-size: 2.4rem !important;
  color: ${colors.success};
`;

export const ErrorIcon = styled(ErrorOutlineIcon)`
  font-size: 2.4rem !important;
  color: ${colors.error};
`;
