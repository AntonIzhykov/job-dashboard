import React from "react";
import "./AuthWrapper.scss";
import { SvgRender } from "../common";
import { picture } from "assets/icons";

const AuthWrapper = ({ child, withIcon }) => {
  return (
    <div className="authentication">
      {child}
      <div className="right-part">
        {withIcon && <SvgRender path={picture} style={{ fill: "black" }} />}
      </div>
    </div>
  );
  
  
};

export default AuthWrapper;
