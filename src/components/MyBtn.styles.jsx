import styled, { css } from "styled-components";

export const MyBtn = styled.button`
  padding: 1rem;
  border-radius: 5px;
  border: 1px #00000030 solid;
  margin-top: 1rem;
  font-size: 1rem;

  &:hover {
    color: #fff6e1;
    background-color: #2591ff;
  }
`;

const LogoutBtnStyles = css`
  background-color: #1ed5b9;
  color: white;
  margin-left: 2rem;
  padding: 5px 15px;
  margin-left: 2rem;
  font-size: 1.2rem;

  &:hover {
    background-color: white;
    color: #f15789;
  }
`;

const getBtnSmallStyles = ({ logout }) => {
  if (logout) {
    return LogoutBtnStyles;
  }
};

export const BtnSmall = styled.button`
  padding: 3px 10px;
  border-radius: 2px;
  border: none;
  margin-left: 5px;
  font-family: "PT Sans Narrow", sans-serif;

  &:hover {
    color: white;
  }

  ${getBtnSmallStyles};
`;
