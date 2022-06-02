import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";
import {
  Form as FormFormik,
  Field as FieldFormik,
  ErrorMessage as ErrorMessageFormik,
} from "formik";
// import { css } from "styled-componenets";

export const CheckoutContainer = styled.div`
  padding: 10px 5px;
  box-shadow: 0px 1px 3px ${colors.textPrimary};
  border-radius: 10px;
`;

export const CheckoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1;
  place-items: center;
  row-gap: 32px;
  margin-bottom: 48px;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: ${colors.textPrimary};
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
`;

export const Number = styled.span`
  font-size: 14px;
  color: ${colors.secondary};
  padding: 6px 10px;
  background-color: ${colors.primary};
  border-radius: 50%;
`;

export const StepName = styled.p`
  font-size: 14px;
  color: ${colors.textPrimary};
`;

export const Line = styled.div`
  content: "";
  height: 2px;
  width: 20px;
  background-color: ${colors.tertiary};
`;

export const ShippingAdress = styled.div``;

export const StepTitle = styled.h2`
  text-transform: capitalize;
  font-size: 20px;
  color: ${colors.textPrimary};
  margin-bottom: 30px;
`;

export const Form = styled(FormFormik)``;

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
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;
