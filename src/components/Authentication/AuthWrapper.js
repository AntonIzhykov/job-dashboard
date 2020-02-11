import React from "react";
import "./AuthWrapper.scss";
import { SvgRender } from "../common";
import { picture } from "assets/icons";

const AuthWrapper = ({ children, withIcon }) => {
  return (
    <div className="authentication">
      {children}
      <div className="right-part">
        {withIcon && <SvgRender path={picture} style={{ fill: "black" }} />}
      </div>
    </div>
  );


};

export default AuthWrapper;
