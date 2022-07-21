import React from "react";
import {
  Landing as LandingBackground,
  LandingInner,
  Content,
  Title,
  Subtitle,
  CtaLink,
  Cta,
} from "./LandingStyle";

const Landing = () => {
  return (
    <LandingBackground>
      <LandingInner>
        <Content>
          <Title>Travel, Explore and Enjoy Nature with Us</Title>
          <Subtitle>
            We are premium brand offering the best bikes for You.
          </Subtitle>
          <CtaLink to="/shop">
            <Cta>Explore Shop</Cta>
          </CtaLink>
        </Content>
      </LandingInner>
    </LandingBackground>
  );
};

export default Landing;
