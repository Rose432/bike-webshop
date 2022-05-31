import React from "react";
import {
  Section as SectionWrapper,
  SectionInner,
  Title,
  SmallLink,
  TitleContainer,
} from "./SectionStyle";

const Section = ({
  children,
  title,
  isAfterSection,
  isFooter,
  linkText,
  customElement,
  button,
  isCart = false,
}) => {
  return (
    <SectionWrapper isFooter={isFooter} isAfterSection={isAfterSection}>
      <SectionInner isAfterSection={isAfterSection}>
        {title && (
          <TitleContainer isCart={isCart}>
            <Title isCart={isCart}>{title}</Title>
            {button && button}
          </TitleContainer>
        )}
        {customElement && customElement}
        {children}
        {linkText && <SmallLink to="/shop">{linkText}</SmallLink>}
      </SectionInner>
    </SectionWrapper>
  );
};

export default Section;
