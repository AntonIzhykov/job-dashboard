import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Button, Form, Input, Title, SubTitle, SvgRender } from "../../common";

import { lockClose, lockDone, lockOpen } from "assets/icons";

import "./Forgot.scss";

const Forgot = props => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    step === 3 && props.history.push("/");

    setStep(step + 1);
    const request = {
      email,
      password
    };

    //TODO
    //here is checking and sending data to back
    console.log("request =>", request);
  };

  const getPath = () => {
    switch (step) {
      case 1:
        return lockClose;
      case 2:
        return lockOpen;
      case 3:
        return lockDone;
      default:
        return "";
    }
  };

  const getTitle = (     ) => {
    switch (step) {
      case 1:
        return "Forgot Password";
      case 2:
        return "Set New Password";
      case 3:
        return "Password successfully changed.";
      default:
        return "";
    }
  };

  const getText = () => {
    switch (step) {
      case 1:
        return "Welcome to recruitment SaaS platform that puts the candidates in the technological sector at the centre of the process and removes the need for a recruitment agent.";
      case 2:
        return "Please type in down below your new password and confirm it to remember it.";
      default:
        return "";
    }
  };

  const getButtonText = () => {
    switch (step) {
      case 1:
        return "Next";
      case 2:
        return "Submit";
      case 3:
        return "Continue";
      default:
        return "";
    }
  };
  return (
    <div className="forgot-page">
      <>
        <SubTitle>GetHired.ai</SubTitle>

        <div className="lock-image">
          <SvgRender path={getPath()} />
        </div>

        <Title
          style={{
            fontSize: `${step === 3 ? "32px" : "44px"}`
          }}
        >
          {getTitle()}
        </Title>
        {step !== 3 && <p>{getText()}</p>}
      </>
      <Form onSubmit={handleSubmit}>
        {step !== 3 && (
          <Input
            name={`${step === 1 ? "email" : "password"}`}
            type="text"
            label={`${step === 1 ? "YOUR E-MAIL" : "YOUR PASSWORD"}`}
            value={`${step === 1 ? email : password}`}
            onChange={e => {
              step === 1
                ? setEmail(e.target.value)
                : setPassword(e.target.value);
            }}
          />
        )}
        {step === 2 && (
          <Input
            name="confirmPassword"
            type="password"
            label="CONFIRM YOUR PASSWORD"
            value={confPassword}
            onChange={e => setConfPassword(e.target.value)}
          />
        )}
        <Button type="submit">{getButtonText()}</Button>
      </Form>
    </div>
  );
};

export default withRouter(Forgot);
