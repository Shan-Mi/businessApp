import React from "react";
import { InputFlexContainer, InputOutsideContainer } from "./FormInput.styles";

// const FormInput = ({ register, error, label, id, ...inputProps }) => {
//   return (
//     <InputOutsideContainer>
//       <InputFlexContainer>
//         <label htmlFor={id}>{label}</label>
//         <input ref={register} id={id} {...inputProps} />
//       </InputFlexContainer>
//       {error && <p>{error.message}</p>}
//     </InputOutsideContainer>
//   );
// };

const FormInput = ({ value, placeholder, register, errors }) => {
  return (
    <InputOutsideContainer>
      <InputFlexContainer>
        <label htmlFor={value}>{placeholder}</label>
        <input ref={register} id={value} type={value} name={value} errors={errors[value]} />
      </InputFlexContainer>
      {errors[value] && <p>{errors[value].message}</p>}
    </InputOutsideContainer>
  );
};

export default FormInput;
