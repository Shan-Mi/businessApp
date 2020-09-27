import styled from "styled-components";

export const LoginFormContainer = styled.form`
  padding: 30vh 20vw;
  font-family: "PT Sans Narrow", sans-serif;

  h1 {
    padding-bottom: 1.5rem;
  }
  div {
    position: relative;

    input,
    label,
    button {
      width: 25vw;
      min-width: 200px;
      margin: auto;
      margin-bottom: 1rem;
      height: 2rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    input {
      &:first-child {
        top: 0;
      }

      &:nth-child(2) {
        top: 3rem;
      }
    }

    button {
      top: 6rem;
    }
  }
`;
