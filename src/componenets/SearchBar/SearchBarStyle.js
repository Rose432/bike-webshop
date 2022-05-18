import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { colors, breakpoints } from "../../lib/style/theme";

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
`;

export const SearchInputs = styled.div`
  position: relative;
  width: 290px;

  @media (${breakpoints.tablet}) {
    width: 320px;
  }

  @media (${breakpoints.destkopLarge}) {
    width: 350px;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  padding-left: 5px;
  border: 1px solid ${colors.textSecondary};
  border-radius: 10px;
  line-height: 40px;
  outline: none;
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px;
  color: black;

  &:focus {
    border: ${colors.textPrimary};
  }

  @media (${breakpoints.destkop}) {
    font-size: 16px;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
  width: 30px;
`;

export const Icon = styled(SearchIcon)`
  font-size: 30px !important;
  color: ${colors.textPrimary};
`;

export const ClearIcon = styled(CloseIcon)`
  font-size: 30px !important;
  color: ${colors.textPrimary};
  cursor: pointer;
`;
