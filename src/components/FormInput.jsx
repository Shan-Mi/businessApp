import React from "react";

const FormInput = ({ register, error, label, id, ...inputProps }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input ref={register} id={id} {...inputProps} />
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default FormInput;
