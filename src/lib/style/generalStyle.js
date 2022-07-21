import styled from "styled-components";
import FlightOutlinedIcon from "@material-ui/icons/FlightOutlined";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import { fonts, colors, breakpoints } from "../../lib/style/theme";

// BUTTON

export const Button = styled.button`
  font-family: ${fonts.primary};
  border: none;
  border-radius: 10px;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  padding: 10px 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: 500;
  border: 1px solid transparent;

  &:hover {
    box-shadow: 0 1px 4px ${colors.black};

    ${(props) =>
      props.isShop &&
      `
      background-color:  ${colors.primary};
      color:  ${colors.secondary};
      `}
  }

  ${(props) =>
    props.isFixed &&
    `
        width: 176px;
      `}

  ${(props) =>
    props.isShop &&
    `
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
     background-color:  ${colors.white};
     `}
     
${(props) =>
    props.isInline &&
    `
    
    background-color:  ${colors.white};
    color:  ${colors.primary};
    `}

${(props) =>
    props.isOutline &&
    `
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
    background-color: ${colors.white};
    
    
  `}

 ${(props) =>
    props.isSecondary &&
    `
    
    background-color: ${colors.secondary};
     color: ${colors.primary};
     border: 1px solid transparent;
     
 `}

 ${(props) =>
    props.isCta &&
    `
    font-size: 2rem;
     
 `}
`;

// GRID

export const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  gap: 10px;
  row-gap: 64px;

  @media (${breakpoints.tabletSmall}) {
    grid-template-columns: repeat(2, 1fr);

    ${(props) =>
      props.isFeature &&
      `
    grid-template-columns: repeat(1,1fr);
    `}
  }

  @media (${breakpoints.tabletMedium}) {
    ${(props) =>
      props.isFeature &&
      `
    grid-template-columns: repeat(2,1fr);
    `}
  }

  @media (${breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);

    ${(props) =>
      props.isBikeGrid &&
      `
    grid-template-columns: repeat(3,1fr);

    `}
  }

  @media (${breakpoints.desktopLarge}) {
    grid-template-columns: repeat(4, 1fr);
  }

  ${(props) =>
    props.isFeature &&
    `
   gap: 32px;

    @media(${breakpoints.desktop}) {
      gap: 0;
    }

  `}
`;

// ICONS

export const AirplaneIcon = styled(FlightOutlinedIcon)`
  font-size: 32px !important;
  color: ${colors.primary};
  transition: all 0.3s ease-in-out;
`;

export const TruckIcon = styled(LocalShippingOutlinedIcon)`
  font-size: 32px !important;
  color: ${colors.primary};
  transition: all 0.3s ease-in-out;
`;

export const ClockIcon = styled(ScheduleOutlinedIcon)`
  font-size: 32px !important;
  color: ${colors.primary};
  transition: all 0.3s ease-in-out;
`;

export const QuestionMarkIcon = styled(ContactSupportOutlinedIcon)`
  font-size: 32px !important;
  color: ${colors.primary};
  transition: all 0.3s ease-in-out;
`;

// SpinnerWrapper

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// NO BICYCLES FOUND

export const NotFoundWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 150%;
  transform: translate(-50%, -50%);
`;

export const NotFound = styled.p`
  color: ${colors.textPrimary};
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
`;

// Search results

export const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  gap: 10px;
  row-gap: 64px;

  @media (${breakpoints.tabletSmall}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${breakpoints.desktop}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 10px;
  }
`;

// Subtotal

export const Subtotal = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  color: ${colors.textPrimary};
`;
