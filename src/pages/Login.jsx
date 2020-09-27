import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";
import styled from "styled-components";
import { LoginFormContainer } from "./Login.styles";
import { BtnSmall } from "../components/MyBtn.styles";
import { InputFlexContainer } from "../components/FormInput.styles";

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
  const [isActiveUser, setIsActiveUser] = useState(true);
  const userKit = new UserKit();

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    userKit.activateUser(uid, token, signal).then((res) => {
      if (!res.ok) {
        setIsActiveUser(false);
      }
    });

    return () => {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!isActiveUser) {
      history.push("/invalid");
    } else {
      userKit
        .login(loginEmail, loginPassword)
        .then((res) => res.json())
        .then(({ token }) => {
          if (token) {
            userKit.setToken(token);
            history.push("/home");
          } else {
            setErrors("Invalid Email Address or Password!");
          }
        });
    }
  };

  return (
    <LoginFormContainer onSubmit={handleLogin}>
      {isActiveUser && (
        <h1>
          Your account is now activated. Please login to get your customer
          information.
        </h1>
      )}

      {!isActiveUser && (
        <h1>
          Before you can login, you must activate your account with the link
          sent to your email address.
        </h1>
      )}

      {errors && <WarningContainer>{errors}</WarningContainer>}

      <InputFlexContainer>
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
        <BtnSmall login type="submit">
          Login
        </BtnSmall>
      </InputFlexContainer>
    </LoginFormContainer>
  );
};

export default Login;
// value="ayumi919@163.com" or "shan.mi.fanfan@gmail.com"
// value="js-fend-19"
