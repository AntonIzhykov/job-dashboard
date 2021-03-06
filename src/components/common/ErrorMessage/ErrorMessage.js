import React from "react";
import "./ErrorMessage.scss";

const ErrorMessage = ({ error }) => {
  return <div className="error">{error}</div>;
};

export default ErrorMessage;
