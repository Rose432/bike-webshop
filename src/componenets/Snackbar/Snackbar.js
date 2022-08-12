import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import {
  SnackbarWrapper,
  Symbol,
  Message,
  SuccessIcon,
  ErrorIcon,
} from "./SnackbarStyle";

const Snackbar = forwardRef(({ symbol }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSucces] = useState(true);
  const [message, setMessage] = useState("");

  useImperativeHandle(ref, () => ({
    show(success, message) {
      setMessage(message);
      setSucces(success);
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    },
  }));

  return ReactDOM.createPortal(
    isOpen && (
      <SnackbarWrapper isOpen={isOpen} success={success}>
        <Symbol>{success ? <SuccessIcon /> : <ErrorIcon />}</Symbol>
        <Message success={success}>{message}</Message>
      </SnackbarWrapper>
    ),
    document.body
  );
});

export default Snackbar;
