import React from "react";
import {
  Section as SectionWrapper,
  SectionInner,
  Title,
  SmallLink,
} from "./SectionStyle";

const Section = ({ children, title, isAfterSection, isFooter, linkText }) => {
  return (
    <SectionWrapper isFooter={isFooter} isAfterSection={isAfterSection}>
      <SectionInner isAfterSection={isAfterSection}>
        {title && <Title>{title}</Title>}
        {children}
        {linkText && <SmallLink>{linkText}</SmallLink>}
      </SectionInner>
    </SectionWrapper>
  );
};

export default Section;
