import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: "Pacifico", cursive;
    font-size: 3rem;
    margin-bottom:0;
  }

  p {
    font-family: "Pacifico", cursive;
    font-size:1rem;
    margin-bottom: 5px;
  }
`;

export const FormContainer = styled.form`
  background: #32425b;
  width: 50vw;
  min-width: 400px;
  padding: 2rem 3rem 4rem;
  margin: auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 625px;
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
  }

  button {
    background-color: #1ed5b9;
    width: 300px;
    color: #fff;
    font-weight: 400;
  }
`;
