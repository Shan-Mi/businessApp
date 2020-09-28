import React from "react";
import { InputFlexContainer, InputOutsideContainer } from "./FormInput.styles";

const EditingFormInput = ({
  register,
  nameString,
  placeholder,
  setValue,
  value,
  errors,
}) => {
  return (
    <InputOutsideContainer>
      <InputFlexContainer>
        <label htmlFor={nameString}>{placeholder}</label>
        <input
          ref={register}
          id={nameString}
          type={nameString}
          name={nameString}
          defaultValue={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          errors={errors[nameString]}
        />
      </InputFlexContainer>
      {errors[nameString] && <p>{errors[nameString].message}</p>}
    </InputOutsideContainer>
  );
};

export default EditingFormInput;
