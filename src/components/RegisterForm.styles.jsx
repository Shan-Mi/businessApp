import styled, { css } from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: "Pacifico", cursive;
    font-size: 3rem;
    margin-bottom: 0;
  }

  .form-title {
    font-family: "Pacifico", cursive;
    font-size: 1rem;
    margin-bottom: 5px;
  }
`;

const registerFormStyles = css`
  padding: 2rem 3rem 4rem;
`;

const newCustomerFormStyles = css`
  padding: 1rem 2rem;
  width: 40vw;
  position: relative;
  // position: absolute;
  // top: 60px;
  // left: 50%;
  // transform: translateX(-50%);

  svg {
    position: absolute;
    right: 17px;
    font-size: 25px;
    filter: invert(99%) sepia(1%) saturate(6218%) hue-rotate(189deg)
      brightness(119%) contrast(100%);
    &:hover {
      cursor: pointer;
      opacity: 0.7;
      transform: scale(1.2);
    }
  }
  button {
    margin-top: 0;
  }
`;

const customerUpdateStyles = css`
  margin-top: 2rem;

  button {
    &:hover {
      background-color: #2591ff;
      color: #260d0d;
    }
  }
`;

const getFormStyles = ({ customer }) => {
  if (customer) {
    return newCustomerFormStyles;
  }
  return registerFormStyles;
};

const getUpdateStyles = ({ update }) => {
  if (update) {
    return customerUpdateStyles;
  }
};

export const FormContainer = styled.form`
  background: #32425b;
  width: 50vw;
  min-width: 400px;
  margin: auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  label {
    color: #e1e5e8;
  }

  input {
    height: 35px;
    border: 1px #fff solid;
    border-radius: 4px;
    background-color: #32425b;
    color: white;

    &:hover {
      background-color: #4b484f;
    }
  }

  button {
    background-color: #1ed5b9;
    width: 300px;
    color: #fff;
    font-weight: 400;
    padding: 0.5rem;
    font-size: 1rem;
    margin-top: 1rem;
  }
  ${getFormStyles}
  ${getUpdateStyles}
`;
