import styled, { css } from "styled-components";
import { colors, breakpoints } from "./theme";
import {
  Form as FormFormik,
  Field as FieldFormik,
  ErrorMessage as ErrorMessageFormik,
} from "formik";

export const Fieldset = styled.fieldset`
  border: none;
  display: grid;
  place-items: center;

  ${(props) =>
    props.isProfile &&
    `
  align-items: start;
  justify-items: start;
  gap: 24px;

  @media(${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;

  @media(${breakpoints.desktopLarge}) {
    grid-template-columns: 1.2fr 1.2fr 0.6fr;

  `}
`;

const formStyle = css`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  width: 100%;
`;

export const FooterForm = styled(FormFormik)`
  ${formStyle};
`;

export const ProfileForm = styled(FormFormik)`
  width: 100%;
  max-width: 400px;
`;

export const LoginForm = styled(FormFormik)`
  ${formStyle}
`;

export const RegisterForm = styled(FormFormik)`
  ${formStyle}

  @media(${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
    max-width: 850px;
  }
`;

export const FormRow = styled.div`
  margin-bottom: 24px;
  width: 100%;
  max-width: 400px;

  ${(props) =>
    props.isButton &&
    `
  margin-bottom: 0;  
  display: flex;
  align-items: center;
  justify-content: center;
  `}

  ${(props) =>
    props.isRegisterButton &&
    `
    @media(${breakpoints.tablet}){
      grid-column: span 2;
    }
  `}

  ${(props) =>
    props.isFooter &&
    `
    max-width: 100%;
  `}
`;

export const FormField = styled(FieldFormik)`
  border: none;
  box-shadow: 0px 1px 3px ${colors.textSecondary};
  font-size: 1.6rem;
  outline: none;
  border-radius: 10px;
  width: 100%;
  padding: 0 20px;
  height: 50px;

  &:focus {
    box-shadow: 0px 1px 3px ${colors.black};
  }
`;

export const ErrorMessage = styled(ErrorMessageFormik)`
  color: ${colors.error};
  font-size: 1.4rem;
  padding: 8px;
`;
