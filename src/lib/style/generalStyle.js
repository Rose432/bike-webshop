import styled from "styled-components";
import FlightOutlinedIcon from "@material-ui/icons/FlightOutlined";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import { colors, breakpoints } from "../../lib/style/theme";

// BUTTON

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  padding: 10px 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: 500;

  @media (${breakpoints.tabletSmall}) {
    ${(props) =>
      props.isBack &&
      `
    padding: 10px 20px;
    font-size: 16px;

     `}
  }

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
    props.isShop &&
    `
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
     background-color:  ${colors.white};
     `}

  ${(props) =>
    props.isBack &&
    `
    padding: 8px 16px;
    font-size: 14px;

     `}
     
${(props) =>
    props.isOutline &&
    `
    background-color:  ${colors.white};
    color:  ${colors.primary};
    `}

 ${(props) =>
    props.isOutlineSecondary &&
    `
     border: 1px solid ${colors.secondary};
    background-color:  ${colors.primary};
    color:  ${colors.secondary};
 `}

 ${(props) =>
    props.isSecondary &&
    `
    background-color: ${colors.secondary};
     color: ${colors.primary};
     
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

  @media (${breakpoints.destkop}) {
    grid-template-columns: repeat(4, 1fr);
  }

  ${(props) =>
    props.isFeature &&
    `
    gap: 32px;

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
  font-size: 18px;
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

  @media (${breakpoints.destkop}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 10px;
  }
`;
