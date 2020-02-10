import React from 'react';
import './Button.scss';

const Button = ({ type, className, children, ...props }) => {
  return (
    <button
      type={type}
      className={`button ${className ? className : ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
