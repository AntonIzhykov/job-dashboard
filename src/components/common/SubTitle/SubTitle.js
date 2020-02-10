import React from "react";
import "./SubTitle.scss";

const SubTitle = ({ children, className, style, ...rest }) => {
  return (
    <div
      className={`sub-title ${className ? className : ""}`}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default SubTitle;
