import React from "react";
import { Section as SectionWrapper, SectionInner, Title } from "./SectionStyle";

const Section = ({ children }) => {
  return (
    <SectionWrapper>
      <SectionInner>
        <Title>Our Recommendation</Title>
        {children}
      </SectionInner>
    </SectionWrapper>
  );
};

export default Section;
