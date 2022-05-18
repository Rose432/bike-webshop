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
  background-color: ${colors.secondary};
  padding: 14px 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${colors.primary};
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 2px 5px ${colors.black};
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 5px 5px ${colors.black};

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
     background-color:  ${colors.white};
     `}

  ${(props) =>
    props.isBicycle &&
    `
    padding: 12px 28px;
    width: 150px;
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

  @media (${breakpoints.tabletMedium}) {
    grid-template-columns: repeat(2, 1fr);
  }

  ${(props) =>
    props.isFeature &&
    `
    gap: 30px;
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

export const NoCoursesWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 150%;
  transform: translate(-50%, -50%);
`;

export const NoCourses = styled.p`
  color: ${colors.textPrimary};
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;
