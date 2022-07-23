import React from "react";
import {
  Section as SectionWrapper,
  SectionInner,
  Title,
  SmallLink,
  TitleContainer,
  CartContainer,
  ButtonCartContainer,
  PrimaryTitle,
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
  isSecondaryTitle = false,
  isUserAuth,
}) => {
  return (
    <SectionWrapper isFooter={isFooter} isAfterSection={isAfterSection}>
      <SectionInner isAfterSection={isAfterSection}>
        {title && (
          <TitleContainer isCart={isCart}>
            {isSecondaryTitle ? (
              <Title isUserAuth={isUserAuth} isCart={isCart}>
                {title}
              </Title>
            ) : (
              <PrimaryTitle isUserAuth={isUserAuth} isCart={isCart}>
                {title}
              </PrimaryTitle>
            )}
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
