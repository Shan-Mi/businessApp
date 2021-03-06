import styled, { css } from "styled-components";
import { BtnSmall } from "./MyBtn.styles";

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
  position: absolute;
  top: 6vh;
  left: 50%;
  transform: translateX(-50%);

  button {
    margin-top: 0;
  }
`;

const customerUpdateStyles = css`
  margin-top: 2rem;
  padding: 2rem 0;
  position: relative;

  button {
    &:hover {
      background-color: #2591ff;
      color: #260d0d;
    }
  }
`;

const getFormStyles = (props) => {
  if (props.customer) {
    return newCustomerFormStyles;
  }
  if (props.update) {
    return customerUpdateStyles;
  }
  return registerFormStyles;
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
  position: relative;

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
`;

export const RegisterBtnWrapper = styled(BtnSmall)`
  width: 60px !important;
  position: absolute;
  top: 0px;
  right: 3rem;
  background: none !important;
  transition: transform 0.2s ease-in-out;

  &:hover {
    color: #eaa1a1;
    transform: scale(1.05);
  }
`;
