import React from "react";
import styled from "styled-components";

const InputFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 1;
  
  input {
    flex-basis: 300px;
  }
`;

const InputOutsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0.5rem auto;

  p {
    color: red;
    text-align: left;
    margin: 0 0 0.5rem;
  }
`;

const FormInput = ({ register, error, label, id, ...inputProps }) => {
  return (
    <InputOutsideContainer>
      <InputFlexContainer>
        <label htmlFor={id}>{label}</label>
        <input ref={register} id={id} {...inputProps} />
      </InputFlexContainer>
      {error && <p>{error.message}</p>}
    </InputOutsideContainer>
  );
};

export default FormInput;
