import styled, { css } from "styled-components";

const updatingAreaStyles = css`
  background-color: #5b82b5;
  padding: 2rem 3rem;
  border-radius: 3px;

  label,
  input {
    margin-bottom: 0.5rem;
  }

  label {
    font-weight: bold;
    color: #070713;
  }

  input {
    height: 1.7rem;
    &:hover {
      background-color: #bdb5b5;
    }
  }
`;

const getFormStyles = ({ update }) => {
  if (update) {
    return updatingAreaStyles;
  }
};

export const CustomerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 50vw;
  margin: auto;
  background-color: #61dafb30;
  padding: 1rem 4rem 2rem;

  div {
    display: flex;

    button {
      &:first-of-type {
        margin-right: 5px;
      }
    }
  }

  button {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    margin-top: 1rem;
  }

  ${getFormStyles}
`;
