import React from "react";
import {
  PasswordContainer,
  PasswordText,
  PasswordWrapper,
  PasswordTitle,
} from "./PasswordWidgetStyle";

const PasswordWidget = ({ children, isEditingPass }) => {
  return (
    <PasswordContainer>
      <PasswordWrapper>
        <PasswordTitle>Password reset</PasswordTitle>
        <PasswordText isEditingPass={isEditingPass}>
          In order to reset password, click on Edit button.
        </PasswordText>
      </PasswordWrapper>
      {children}
    </PasswordContainer>
  );
};

export default PasswordWidget;
