import React from "react";
import {
  Section as SectionWrapper,
  SectionInner,
  Title,
  SmallLink,
  TitleContainer,
  CartContainer,
  ButtonCartContainer,
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
  subtotal,
  emptyButton,
  checkoutButton,
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
        {subtotal && (
          <CartContainer>
            {subtotal}
            <ButtonCartContainer>
              {emptyButton}
              {checkoutButton}
            </ButtonCartContainer>
          </CartContainer>
        )}
        {linkText && <SmallLink to="/shop">{linkText}</SmallLink>}
      </SectionInner>
    </SectionWrapper>
  );
};

export default Section;
