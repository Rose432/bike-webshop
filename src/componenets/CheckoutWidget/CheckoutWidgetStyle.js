import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";
import CheckIcon from "@material-ui/icons/Check";

export const CheckoutContainer = styled.div`
  padding: 10px 5px;
  box-shadow: 0px 1px 3px ${colors.textPrimary};
  border-radius: 10px;
  margin: 0 auto;
  width: 300px;

  @media (${breakpoints.mobileLarge}) {
    width: 350px;
    padding: 24px;
  }

  @media (${breakpoints.tabletSmall}) {
    width: 400px;
  }

  @media (${breakpoints.tablet}) {
    width: 650px;
    padding: 32px;
  }
`;

export const CheckoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1;
  place-items: center;
  row-gap: 32px;
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${colors.textPrimary};

  @media (${breakpoints.tabletSmall}) {
    font-size: 3.6rem;
  }
`;

export const StepContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  @media (${breakpoints.tablet}) {
    gap: 8px;
  }
`;

export const FirstNumber = styled.span`
  width: 25px;
  height: 25px;
  font-size: 1.4rem;
  color: ${colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.activeStep === 0 || props.activeStep === 2
      ? `${colors.primary}`
      : `${colors.tertiary}`};
  border-radius: 50%;

  @media (${breakpoints.tablet}) {
    width: 30px;
    height: 30px;
    font-size: 1.6rem;
  }
`;

export const SecondNumber = styled.span`
  height: 25px;
  width: 25px;
  font-size: 1.4rem;
  color: ${colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.activeStep === 1 || props.activeStep === 2
      ? `${colors.primary}`
      : `${colors.tertiary}`};
  border-radius: 50%;

  @media (${breakpoints.tablet}) {
    width: 30px;
    height: 30px;
    font-size: 1.6rem;
  }
`;

export const StepName = styled.p`
  font-size: 1.4rem;
  color: ${colors.textPrimary};

  @media (${breakpoints.tablet}) {
    font-size: 1.6rem;
  }
`;

export const Line = styled.div`
  content: "";
  height: 2px;
  width: 12px;
  background-color: ${colors.tertiary};

  @media (${breakpoints.mobileLarge}) {
    width: 30px;
  }

  @media (${breakpoints.tabletSmall}) {
    width: 70px;
  }

  @media (${breakpoints.tablet}) {
    width: 250px;
  }
`;

export const Check = styled(CheckIcon)``;
