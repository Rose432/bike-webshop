import React from "react";
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

const Footer = () => {
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
          Hercegovačka 59 <br />
          Zagreb <br />
          OIB: 22233344111 <br />
        </Adress>
        <PhoneNumber>+385 11 222 3333</PhoneNumber>
        <Email>info@advanturer.com</Email>
      </FlexContainer>
      <FlexContainer>
        <Title>Newsletter</Title>
        <SignInNewsletter>
          Subscribe to our daily newsletter to get the latest news.
        </SignInNewsletter>
        <Button isOutline>Sign me Up</Button>
      </FlexContainer>
    </FooterContainer>
  );
};

export default Footer;
