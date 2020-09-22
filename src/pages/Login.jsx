import React, {  useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const searchString = history.location.search;
  const urlParameters = new URLSearchParams(searchString);
  const [uid, setUid] = useState(urlParameters.get("uid"));
  const [token, setToken] = useState(urlParameters.get("token"));
  console.log(uid, token);
  return (
    <div>
      <h1>
        Your account is now active. Please login to get your customer
        information
      </h1>
      <input value="ayumi919@163.com" />
      <input value="js-fend-19" />
      <button onClick={() => history.push("/home")}>Login</button>
    </div>
  );
};

export default Login;
