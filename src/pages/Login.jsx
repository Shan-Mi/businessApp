import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";
import styled from "styled-components";

const WarningContainer = styled.p`
  color: red;
`;

const Login = () => {
  const history = useHistory();
  const searchString = history.location.search;
  const urlParameters = new URLSearchParams(searchString);
  const [uid] = useState(urlParameters.get("uid"));
  const [token] = useState(urlParameters.get("token"));
  const [loginEmail, setLoginEmail] = useState(null);
  const [loginPassword, setLoginPassword] = useState(null);
  const [errors, setErrors] = useState(null);

  const userKit = new UserKit();
  const handleLogin = () => {
    userKit
      .login(loginEmail, loginPassword)
      .then((res) => res.json())
      .then(({ token }) => {
        if (token) {
          userKit.setToken(token);
          // console.log(token)
          history.push("/home");
        }
        setErrors("Invalid Email Address or Password!");
      });
  };

  console.log(uid, token);

  return (
    <div>
      <h1>
        Your account is now active. Please login to get your customer
        information
      </h1>
      {errors && <WarningContainer>{errors}</WarningContainer>}
      <input
        placeholder="Email Address"
        onChange={(e) => {
          setLoginEmail(e.target.value);
          setErrors(null);
        }}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => {
          setLoginPassword(e.target.value);
          setErrors(null);
        }}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
// value="ayumi919@163.com" or "shan.mi.fanfan@gmail.com"
// value="js-fend-19"
