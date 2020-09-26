import React from "react";
import { useHistory } from "react-router-dom";
import { MyBtn } from "../components/MyBtn.styles";

import styled from "styled-components";

const MessageContainer = styled.div`
  padding: 30vh 20vw;
  font-family: "PT Sans Narrow", sans-serif;

  button {
    width: 200px;
    font-weight: 600;
  }
`;

const InvalidPage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <MessageContainer>
      <h1>
        You need to login and activate your account with the link sent to your
        email address to get access to previous page.
      </h1>
      <MyBtn onClick={handleClick}>Go Home</MyBtn>
    </MessageContainer>
  );
};

export default InvalidPage;
