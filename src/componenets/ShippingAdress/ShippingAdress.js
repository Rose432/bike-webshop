import React from "react";
import { useState } from "react";
import {
  CheckoutContainer,
  CheckoutWrapper,
  Title,
  StepContainer,
  StepWrapper,
  Number,
  StepName,
  Line,
  ShippingAdress,
  StepTitle,
  Form,
  FormRow,
  FormField,
  ErrorMessage,
  ButtonContainer,
  Select,
  Option,
} from "./ShippingAdressStyle";
import { Button } from "../../lib/style/generalStyle";
import { Formik } from "formik";
import * as Yup from "yup";
import Section from "../Section/Section";
import { commerce } from "../../lib/commerce";

const CheckoutPage = ({ children }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const fetchShippingCountries = async (checkoutTokenId) => {
    try {
      const response = await commerce.services.localeListShippingCountries(
        checkoutTokenId
      );
      setShippingCountries(response.countries);
    } catch (err) {
      console.log(err.message);
    }
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  return (
    <Section>
      <CheckoutContainer>
        <CheckoutWrapper>
          <Title>Checkout</Title>
          <StepContainer>
            <StepWrapper>
              <Number>1</Number>
              <StepName>Shipping Adress</StepName>
            </StepWrapper>
            <Line />
            <StepWrapper>
              <Number>2</Number>
              <StepName>Payment Details</StepName>
            </StepWrapper>
          </StepContainer>
        </CheckoutWrapper>
        <ShippingAdress>
          <StepTitle>Shipping adress</StepTitle>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              adress: "",
              city: "",
              zipPostalCode: "",
              shippingCountry: "",
              shippingOptions: "",
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required("First name is required"),
              lastName: Yup.string().required("Last name is required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              phoneNumber: Yup.string().matches(
                phoneRegExp,
                "Phone number is not valid"
              ),
              adress: Yup.string().required("Address is required"),
              city: Yup.string().required("City is required"),
              zipPostalCode: Yup.string().required(
                "Zip/Postal code is required"
              ),
              shippingCountry: Yup.string().required(
                "Shipping Country is required"
              ),
              shippingOptions: Yup.string().required(
                "Shipping options is required"
              ),
            })}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
                actions.resetForm({
                  firstName: "",
                  lastName: "",
                  email: "",
                  phoneNumber: "",
                  adress: "",
                  city: "",
                  zipPostalCode: "",
                  shippingCountry: "",
                  shippingOptions: "",
                });
              }, 1000);
            }}
          >
            {(formik) => (
              <Form>
                <FormRow>
                  <FormField
                    type="text"
                    name="firstName"
                    placeholder="First name*"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="firstName" />
                </FormRow>
                <FormRow>
                  <FormField
                    type="text"
                    name="lastName"
                    placeholder="Last name*"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="lastName" />
                </FormRow>
                <FormRow>
                  <FormField
                    type="text"
                    name="email"
                    placeholder="Email*"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="email" />
                </FormRow>
                <FormRow>
                  <FormField
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone number*"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="phoneNumber" />
                </FormRow>
                <FormRow>
                  <FormField
                    type="text"
                    name="adress"
                    placeholder="Adress*"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="adress" />
                </FormRow>
                <FormRow>
                  <FormField
                    type="text"
                    name="city"
                    placeholder="City*"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="city" />
                </FormRow>
                <FormRow>
                  <FormField
                    type="text"
                    name="zipPostalCode"
                    placeholder="Zip/Postal Code*"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="zipPostalCode" />
                </FormRow>
                <FormRow>
                  <Select
                    disabled={formik.isSubmitting}
                    id="shippingCountry"
                    {...formik.getFieldProps("activeFacultyYear")}
                  >
                    <Option value="" hidden>
                      Select Country
                    </Option>
                  </Select>
                </FormRow>
                <FormRow>
                  <Select
                    disabled={formik.isSubmitting}
                    id="shippingOptions"
                    {...formik.getFieldProps("activeFacultyYear")}
                  >
                    <Option value="" hidden>
                      Shipping Options
                    </Option>
                  </Select>
                </FormRow>
                <ButtonContainer>
                  <Button>Back to Cart</Button>
                  <Button>Next</Button>
                </ButtonContainer>
              </Form>
            )}
          </Formik>
          {children}
        </ShippingAdress>
      </CheckoutContainer>
    </Section>
  );
};

export default CheckoutPage;
