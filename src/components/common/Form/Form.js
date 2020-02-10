import React from "react";
import "./Form.scss";

const Form = ({ action, onSubmit, className, children, ...props }) => {
  return (
    <form
      action={action}
      className={`form ${className ? className : ""}`}
      onSubmit={onSubmit}
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
