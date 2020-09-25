import React, { useEffect, useState } from "react";
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
  const [isActiveUser, setIsActiveUser] = useState(true);
  const userKit = new UserKit();

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    userKit
      .activateUser(uid, token, signal)
      .then((res) => {
        res.json();
        console.log(res);
        if (!res.ok) {
          setIsActiveUser(false);
        }
      })
      .then((data) => {
        //console.log(data);
      });

    return () => {
      abortController.abort();
      console.log("aborting");
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
          }
          setErrors("Invalid Email Address or Password!");
        });
    }
  };

  // console.log(uid, token);

  return (
    <form onSubmit={handleLogin}>
      {isActiveUser && (
        <h1>
          Your account is now active. Please login to get your customer
          information
        </h1>
      )}
      {!isActiveUser && <h1>You need to login via verification mail first.</h1>}
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
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
// value="ayumi919@163.com" or "shan.mi.fanfan@gmail.com"
// value="js-fend-19"
