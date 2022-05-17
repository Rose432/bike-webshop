import styled from "styled-components";
import FlightOutlinedIcon from "@material-ui/icons/FlightOutlined";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";

// BUTTON

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #f0fdf9;
  padding: 14px 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #087f5b;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 2px 5px #000000;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 5px 5px #000000;

    ${(props) =>
      props.isShop &&
      `
     
     background-color:  #087f5b;
     color:  #f0fdf9;
     `}
  }

  ${(props) =>
    props.isShop &&
    `
     
     background-color:  #ffffff;
     `}
`;

// GRID

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 10px;
  row-gap: 64px;

  ${(props) =>
    props.isFeature &&
    `
    gap: 30px;
  `}
`;

// ICONS

export const AirplaneIcon = styled(FlightOutlinedIcon)`
  font-size: 32px !important;
  color: #087f5b;
  transition: all 0.3s ease-in-out;
`;

export const TruckIcon = styled(LocalShippingOutlinedIcon)`
  font-size: 32px !important;
  color: #087f5b;
  transition: all 0.3s ease-in-out;
`;

export const ClockIcon = styled(ScheduleOutlinedIcon)`
  font-size: 32px !important;
  color: #087f5b;
  transition: all 0.3s ease-in-out;
`;

export const QuestionMarkIcon = styled(ContactSupportOutlinedIcon)`
  font-size: 32px !important;
  color: #087f5b;
  transition: all 0.3s ease-in-out;
`;
