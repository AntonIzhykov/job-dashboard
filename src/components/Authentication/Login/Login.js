import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Input, SubTitle, Title } from "../../common";

import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    const request = {
      email,
      password,
      remember
    };

    //TODO
    //here is checking and sending data to back
    console.log("request =>", request);
  };
  return (
    <div className="login">
      <SubTitle>GetHired.ai</SubTitle>
      <Title>Log In</Title>
      <p>
        Welcome to recruitment SaaS platform that puts the candidates in the
        technological sector at the centre of the process and removes the need
        for a recruitment agent.
      </p>
      <Form onSubmit={handleSubmit}>
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
        <div className="remember-me">
          <div
            className="checkbox-section"
            onClick={() => setRemember(!remember)}
          >
            <Checkbox value={remember} />
            <span>Remember me</span>
          </div>
          <Link to="/forgot">Forgot Password?</Link>
        </div>
        <Button type="submit">Login</Button>
        <Link to="/signUp">Sign Up.</Link>
      </Form>
    </div>
  );
};

export default Login;
