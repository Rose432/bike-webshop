import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

export const CartCardContainer = styled.div`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 2px ${colors.primary};
  flex-basis: 242.5px;
  row-gap: 24px;

  @media (${breakpoints.desktopLarge}) {
    flex-basis: 307.5px;
  }
`;

export const Figure = styled.figure`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 12px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

  @media (${breakpoints.tablet}) {
    height: 300px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${colors.textPrimary};
`;

export const ProductName = styled.p`
  font-size: 2rem;
`;

export const Price = styled.span`
  font-size: 2rem;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Quantity = styled.span`
  font-size: 2.4rem;
`;

export const Remove = styled(RemoveIcon)`
  cursor: pointer;
  background-color: #ebebeb;
  border-radius: 10px;
  margin-right: 8px;
  font-size: 2.4rem !important;
`;

export const Add = styled(AddIcon)`
  cursor: pointer;
  background-color: #ebebeb;
  border-radius: 10px;
  margin-left: 8px;
  font-size: 2.4rem !important;
`;
