import React, { useState } from "react";
import {
  FooterContainer,
  FlexContainer,
  Title,
  LogoContainer,
  LogoImgContainer,
  LogoDownLine,
  LogoLeftLine,
  LogoRightLine,
  LogoLink,
  Text,
  Adress,
  PhoneNumber,
  Email,
  SignInNewsletter,
} from "./FooterStyle";
import { Button } from "../../lib/style/generalStyle";
import {
  FooterForm,
  FormRow,
  FormField,
  ErrorMessage,
} from "../../lib/style/formStyle";
import { Formik } from "formik";
import * as Yup from "yup";

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <FooterContainer>
      <FlexContainer>
        <Title>About Us</Title>
        <LogoContainer to="/">
          <LogoImgContainer>
            <LogoDownLine />
            <LogoLeftLine />
            <LogoRightLine />
          </LogoImgContainer>
          <LogoLink>Advanturer</LogoLink>
        </LogoContainer>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum bibendum velit, nec ultricies ante aliquam nec.
          Pellentesque elit massa, rutrum ac dapibus non, pharetra eget dolor.
          Aliquam erat volutpat.
        </Text>
      </FlexContainer>
      <FlexContainer>
        <Title>Contact info</Title>
        <Adress>
          ADVANTURER j.d.o.o. <br />
          TRH 99 <br />
          Zagreb <br />
          OIB: 22233344111 <br />
        </Adress>
        <PhoneNumber>+385 11 222 3333</PhoneNumber>
        <Email>info@advanturer.com</Email>
      </FlexContainer>
      <FlexContainer>
        <Title>Newsletter</Title>
        {isSubscribed && (
          <Title isSubscribed>Than you for your subscription</Title>
        )}
        {!isSubscribed && (
          <SignInNewsletter>
            Subscribe to our daily newsletter to get the latest news.
          </SignInNewsletter>
        )}
        {!isSubscribed && (
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email adress")
                .required("Email is required"),
            })}
            onSubmit={(values, actions) => {
              setIsSubscribed(true);
              actions.resetForm({
                email: "",
              });
            }}
          >
            {(formik) => (
              <FooterForm>
                <FormRow isFooter>
                  <FormField
                    type="email"
                    name="email"
                    placeholder="Email adress*"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="email" />
                </FormRow>
                <FormRow isFooter>
                  <Button isOutline>Sign me Up</Button>
                </FormRow>
              </FooterForm>
            )}
          </Formik>
        )}
      </FlexContainer>
    </FooterContainer>
  );
};

export default Footer;
