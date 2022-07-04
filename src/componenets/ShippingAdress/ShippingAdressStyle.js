import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";
import {
  Form as FormFormik,
  Field as FieldFormik,
  ErrorMessage as ErrorMessageFormik,
} from "formik";
import { Link } from "react-router-dom";

export const ShippingAdress = styled.div`
  display: ${(activeState) => (activeState ? "block" : "none")};
`;

export const StepTitle = styled.h2`
  text-transform: capitalize;
  font-size: 20px;
  color: ${colors.textPrimary};
  margin-bottom: 32px;

  @media (${breakpoints.tabletSmall}) {
    font-size: 24px;
  }
`;

export const Fieldset = styled.fieldset`
  border: none;
`;

export const Form = styled(FormFormik)`
  @media (${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
  }
`;

export const FormRow = styled.div`
  margin-bottom: 24px;
`;

export const FormField = styled(FieldFormik)`
  /* border: 1px solid ${colors.tertiary}; */
  border: none;
  box-shadow: 0px 1px 3px ${colors.textSecondary};
  font-size: 14px;
  outline: none;
  border-radius: 10px;
  width: 100%;
  padding: 0 12px;
  height: 40px;

  &:focus {
    box-shadow: 0px 1px 3px ${colors.black};
  }
`;

export const ErrorMessage = styled(ErrorMessageFormik)`
  color: ${colors.error};
  font-size: 14px;
  padding: 8px;
`;

export const Select = styled.select`
  border: none;
  box-shadow: 0px 1px 3px ${colors.textSecondary};
  font-size: 14px;
  outline: none;
  border-radius: 10px;
  width: 100%;
  padding: 0 12px;
  height: 40px;
`;

export const Option = styled.option``;

export const ButtonContainer = styled.div`
  margin-top: 8px;
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;

  @media (${breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0;
  }
`;
