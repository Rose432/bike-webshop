import React from "react";
import {
  Landing as LandingBackground,
  LandingInner,
  Content,
  Title,
  Subtitle,
} from "./LandingStyle";
import { Button } from "../../lib/style/generalStyle";

const Landing = () => {
  return (
    <LandingBackground>
      <LandingInner>
        <Content>
          <Title>Travel, Explore and Enjoy Nature with Us</Title>
          <Subtitle>We are premium brand offering best bikes for You.</Subtitle>
          <Button>Explore Shop</Button>
        </Content>
      </LandingInner>
    </LandingBackground>
  );
};

export default Landing;
