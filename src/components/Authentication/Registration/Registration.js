import React from "react";
import Header from "../../Header";
import RegistrationForm from "./RegistrationForm";
import RegistrationChat from "./RegistrationChat";

import "./Registration.scss";

const Registration = () => {
  const step = 1;

  const getBreadcrumb = () => {
    switch (step) {
      case 1:
        return "Your Information";

      case 2:
        return "Company/Agency Information";

      default:
        return "";
    }
  };
  return (
    <div className="registration-page">
      <Header step={step} breadcrumb={getBreadcrumb()} />
      <div className="d-flex">
        <RegistrationForm />
        <RegistrationChat />
      </div>
    </div>
  );
};

export default Registration;
