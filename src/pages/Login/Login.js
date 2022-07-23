import React from "react";
import Header from "../../componenets/Header/Header";
import Section from "../../componenets/Section/Section";
import Footer from "../../componenets/Footer/Footer";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Fieldset,
  LoginForm,
  FormRow,
  FormField,
  ErrorMessage,
} from "../../lib/style/formStyle";
import { Button } from "../../lib/style/generalStyle";

const Login = () => {
  return (
    <>
      <Header isDiffHead isSecondary />
      <Section isUserAuth title={"Log In"}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            password: Yup.string()
              .min(8, "Password must be at least 8 characters long")
              .required("Password is required"),
          })}
          onSubmit={async (values, actions) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
            actions.resetForm({
              email: "",
              password: "",
            });
          }}
        >
          {(formik) => (
            <Fieldset>
              <LoginForm>
                <FormRow>
                  <FormField
                    type="email"
                    name="email"
                    placeholder="Email"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="email" />
                </FormRow>
                <FormRow>
                  <FormField
                    type="password"
                    name="password"
                    placeholder="Password"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="password" />
                </FormRow>
                <FormRow isButton>
                  <Button isFixed type="submit" disabled={formik.isSubmitting}>
                    {formik.isSubmitting ? "Processing..." : "Log In"}
                  </Button>
                </FormRow>
              </LoginForm>
            </Fieldset>
          )}
        </Formik>
      </Section>
      <Section isFooter children={<Footer />} />
    </>
  );
};

export default Login;
