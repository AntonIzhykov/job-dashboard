import React from "react";
import "./Title.scss";

const Title = ({ children, className, style, ...rest }) => {
  return (
    <div
      className={`title ${className ? className : ""}`}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Title;
