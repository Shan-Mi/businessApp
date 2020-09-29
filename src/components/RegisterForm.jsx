import React, { useState } from "react";
import UserKit from "../data/UserKit";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import FormInput from "./FormInput";
import { FlexContainer, FormContainer } from "./RegisterForm.styles";
import { MyBtn } from "./MyBtn.styles";
import { schemaRegister } from "../data/Schema";

const userKit = new UserKit();

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [isRegisterSucessful, setIsRegisterSucessful] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schemaRegister),
  });
  const onSubmit = ({
    firstName,
    lastName,
    email,
    password,
    organisationName,
    organisationKind,
  }) => {
    userKit
      .register(
        firstName,
        lastName,
        email,
        password,
        organisationName,
        organisationKind
      )
      .then((res) => res.json())
      .then((data) => {
        setIsRegisterSucessful(true);
        setEmail(email);
        console.log(data)
      });
  };

  const registerDetail = [
    ["firstName", "First Name:"],
    ["lastName", "Last Name:"],
    ["email", "Email:"],
    ["password", "Password:"],
    ["organisationName", "Organisation Name:"],
    ["organisationKind", "Organisation Kind:"],
  ];

  return (
    <FlexContainer>
      <h2>Register</h2>
      <p className="form-title">Enter Details to register:</p>

      {!isRegisterSucessful && (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          {registerDetail.map(([value, placeholder], index) => (
            <FormInput
              key={`new-customer-${index}`}
              value={value}
              placeholder={placeholder}
              register={register}
              errors={errors}
            />
          ))}

          <MyBtn type="submit">Register a new user</MyBtn>
        </FormContainer>
      )}

      {isRegisterSucessful && (
        <p>
          Please check your <strong>{email}</strong> email for activate link to
          continue login
        </p>
      )}
    </FlexContainer>
  );
};

export default RegisterForm;
