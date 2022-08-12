import React from "react";
import Header from "../../componenets/Header/Header";
import Footer from "../../componenets/Footer/Footer";
import Section from "../../componenets/Section/Section";
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

const Profile = () => {
  return (
    <>
      <Header isDiffHead isSecondary />
      <Section isCart title={"My Profile"}>
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
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            email: Yup.string()
              .email("Invalid email adress")
              .required("Email is required"),
            phoneNumber: Yup.string().required("Phone number is required"),
            adress: Yup.string().required("Adress is required"),
            city: Yup.string().required("City is required"),
            zipPostalCode: Yup.string().required("Zip/Postal code is required"),
            country: Yup.string().required("Country is required"),
          })}
          onSubmit={(values, actions) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {(formik) => <Fieldset></Fieldset>}
        </Formik>
      </Section>
      <Section isFooter>
        <Footer />
      </Section>
    </>
  );
};

export default Profile;
