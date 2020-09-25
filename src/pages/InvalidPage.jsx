import React from "react";
import { useHistory } from "react-router-dom";
import { MyBtn } from "../components/MyBtn.styles";

const InvalidPage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div>
      <h1>You need to login your account via email verification to get access to previous page.</h1>
      <MyBtn onClick={handleClick}>Go Home</MyBtn>
    </div>
  );
};

export default InvalidPage;
