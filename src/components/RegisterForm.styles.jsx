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
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);

  button {
    margin-top: 0;
  }
`;

const getFormStyles = ({ customer }) => {
  if (customer) {
    return newCustomerFormStyles;
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

  label {
    color: #e1e5e8;
  }

  input {
    height: 35px;
    border: 1px #fff solid;
    border-radius: 4px;
    background-color: #32425b;
    color: white;
  }

  button {
    background-color: #1ed5b9;
    width: 300px;
    color: #fff;
    font-weight: 400;
  }
  ${getFormStyles}
`;
