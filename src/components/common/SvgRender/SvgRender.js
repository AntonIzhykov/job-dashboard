import React from "react";
import { ReactSVG } from "react-svg";

import "./SvgRender.scss";

const SvgRender = ({ path, wrapperClassName, style, ...rest }) => {
  return (
    <ReactSVG
      src={path}
      path={path}
      className={`svg-wrap ${wrapperClassName ? wrapperClassName : ""}`}
      style={style}
      {...rest}
    />
  );
};

export default SvgRender;
