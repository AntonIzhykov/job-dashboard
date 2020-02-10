import React, { useState } from "react";
import { Button, Form, Input, Title, Checkbox } from "../../../common";

import "./RegistrationForm.scss";

const RegistrationForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    //TODO:
    // here will be implemented the logic of steps

    const data = {
      name,
      email,
      password,
      agree
    };

    console.log(data);
  };

  return (
    <div className="register-form">
      <Title>Your Information</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="text"
          label="YOUR FULL NAME"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          name="email"
          type="email"
          label="YOUR E-MAIL"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          name="password"
          type="password"
          label="YOUR PASSWORD"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Input
          name="email"
          type="text"
          label="YOUR PASSWORD AGAIN"
          value={confirmPassword}
          style={{
            marginBottom: "24px"
          }}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <div className="agreement" onClick={() => setAgree(!agree)}>
          <Checkbox value={agree} />
          <span>
            I Accept <span className="with-underline">Terms & Services</span> and{" "}
            <span className="with-underline">Privacy Policy</span>.
          </span>
        </div>
        <Button type="submit">Next</Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
