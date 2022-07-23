import React from "react";
import Header from "../../componenets/Header/Header";
import Section from "../../componenets/Section/Section";
import Footer from "../../componenets/Footer/Footer";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Fieldset,
  RegisterForm,
  FormRow,
  FormField,
  ErrorMessage,
} from "../../lib/style/formStyle";
import { Button } from "../../lib/style/generalStyle";

const Register = () => {
  return (
    <>
      <Header isDiffHead isSecondary />
      <Section isUserAuth title={"Register"}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            adress: "",
            city: "",
            zipPostalCode: "",
            country: "",
            password: "",
            passwordConfirmed: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            email: Yup.string()
              .email("Invalid email adress")
              .required("Emails is required"),
            phoneNumber: Yup.string().required("Phone number is required"),
            adress: Yup.string().required("Adress is required"),
            city: Yup.string().required("Citry is required"),
            zipPostalCode: Yup.string().required("Zip/Postal code is required"),
            country: Yup.string().required("Country is required"),
            password: Yup.string()
              .min(8, "Password must be at least 8 characters long")
              .required("Password is required"),
            passwordConfirmed: Yup.string().test(
              "passwords-match",
              "Passwords must match",
              function (value) {
                return this.parent.password === value;
              }
            ),
          })}
          onSubmit={async (values, actions) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
            actions.resetForm({
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              adress: "",
              city: "",
              zipPostalCode: "",
              country: "",
              password: "",
              passwordConfirmed: "",
            });
          }}
        >
          {(formik) => (
            <Fieldset>
              <RegisterForm>
                <FormRow>
                  <FormField
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="firstName" />
                </FormRow>
                <FormRow>
                  <FormField
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="lastName" />
                </FormRow>
                <FormRow>
                  <FormField
                    type="email"
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
                  <FormField
                    type="text"
                    name="country"
                    placeholder="Country*"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="country" />
                </FormRow>
                <FormRow>
                  <FormField
                    type="password"
                    name="password"
                    placeholder="Enter your password*"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="password" />
                </FormRow>
                <FormRow>
                  <FormField
                    type="password"
                    name="passwordConfirmed"
                    placeholder="Confirm your password*"
                  />
                  <ErrorMessage component={"div"} name="passwordConfirmed" />
                </FormRow>
                <FormRow isButton isRegisterButton>
                  <Button isFixed type="submit" disabled={formik.isSubmitting}>
                    {formik.isSubmitting ? "Processing..." : "Register"}
                  </Button>
                </FormRow>
              </RegisterForm>
            </Fieldset>
          )}
        </Formik>
      </Section>
      <Section isFooter children={<Footer />} />
    </>
  );
};

export default Register;
