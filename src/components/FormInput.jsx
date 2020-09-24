import React from "react";
import { InputFlexContainer, InputOutsideContainer } from "./FormInput.styles";

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
