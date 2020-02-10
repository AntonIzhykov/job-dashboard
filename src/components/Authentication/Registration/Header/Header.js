import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./Header.scss";

const Header = ({ breadcrumb, step }) => {
  const progressWidth = step * 33.3 + "%";
  return (
    <div className="header">
      <div
        className="progress"
        style={{
          width: `${progressWidth}`
        }}
      ></div>
      <div className="d-flex">
        <div className="brand">GetHired.ai</div>
        <div className="right-part">
          <div className="breadcrumbs">{breadcrumb}</div>
          <div>
            <Link to="/">Back to Login Screen</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
