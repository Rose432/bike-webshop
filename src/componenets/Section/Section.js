import React from "react";
import { Section as SectionWrapper, SectionInner, Title } from "./SectionStyle";

const Section = ({ children, title, isAfterSection, isFooter }) => {
  return (
    <SectionWrapper isFooter={isFooter} isAfterSection={isAfterSection}>
      <SectionInner isAfterSection={isAfterSection}>
        {title && <Title>{title}</Title>}
        {children}
      </SectionInner>
    </SectionWrapper>
  );
};

export default Section;
