import React from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";
import { BtnSmall } from "./MyBtn.styles";
import {LoggedinHeaderContainer} from './LoggedinHeader.styles'
const userKit = new UserKit();

const LoggedinHeader = ({ user }) => {
  const history = useHistory();
  const handleLogout = () => {
    userKit.deleteToken();
    history.push("/");
  };

  return (
    <LoggedinHeaderContainer>
      <h1>Welcome to Your Awesome Business App!</h1>
      <div className="user-info">
        <strong>Name: </strong>
        <span>
          {user.firstName} {user.lastName}
        </span>
        <strong>E-mail: </strong> <span>{user.email}</span>
        <BtnSmall logout onClick={handleLogout}>
          Logout
        </BtnSmall>
      </div>
    </LoggedinHeaderContainer>
  );
};

export default LoggedinHeader;
