import React, { forwardRef, useState, useImperativeHandle } from "react";
import {
  MessageWindow,
  MessageContainer,
  MessageTitle,
  MessageText,
  ButtonContainer,
} from "./ConfirmationWindowStyle";
import { Button } from "../../lib/style/generalStyle";

const ConfirmationWindow = forwardRef(({ confirmFn }, ref) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    show(isOpen, title, text) {
      setTitle(title);
      setText(text);
      setIsOpen(isOpen);
    },
  }));

  return (
    isOpen && (
      <MessageWindow>
        <MessageContainer>
          <MessageTitle>{title}</MessageTitle>
          <MessageText>{text}</MessageText>
          <ButtonContainer>
            <Button isFixed onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button
              isFixed
              isOutline
              onClick={() => {
                confirmFn();
                setIsOpen(false);
              }}
            >
              Confirm
            </Button>
          </ButtonContainer>
        </MessageContainer>
      </MessageWindow>
    )
  );
});

export default ConfirmationWindow;
