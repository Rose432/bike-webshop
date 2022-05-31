import React from "react";
import {
  Landing as LandingBackground,
  LandingInner,
  Content,
  Title,
  Subtitle,
  ButtonLink,
} from "./LandingStyle";
import { Button } from "../../lib/style/generalStyle";

const Landing = () => {
  return (
    <LandingBackground>
      <LandingInner>
        <Content>
          <Title>Travel, Explore and Enjoy Nature with Us</Title>
          <Subtitle>
            We are premium brand offering the best bikes for You.
          </Subtitle>
          <ButtonLink to="/shop">
            <Button isOutline>Explore Shop</Button>
          </ButtonLink>
        </Content>
      </LandingInner>
    </LandingBackground>
  );
};

export default Landing;
