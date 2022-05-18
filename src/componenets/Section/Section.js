import React from "react";
import {
  Section as SectionWrapper,
  SectionInner,
  Title,
  SmallLink,
} from "./SectionStyle";

const Section = ({
  children,
  title,
  isAfterSection,
  isFooter,
  linkText,
  customElement,
}) => {
  return (
    <SectionWrapper isFooter={isFooter} isAfterSection={isAfterSection}>
      <SectionInner isAfterSection={isAfterSection}>
        {title && <Title>{title}</Title>}
        {customElement && customElement}
        {children}
        {linkText && <SmallLink to="/shop">{linkText}</SmallLink>}
      </SectionInner>
    </SectionWrapper>
  );
};

export default Section;
