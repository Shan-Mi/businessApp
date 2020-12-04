import React, { useState } from "react";
import UserKit from "../data/UserKit";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import FormInput from "./FormInput";
import {
  FlexContainer,
  FormContainer,
  RegisterBtnWrapper,
} from "./RegisterForm.styles";
import { MyBtn } from "./MyBtn.styles";
import { schemaRegister } from "../data/Schema";

const userKit = new UserKit();

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [isRegisterSucessful, setIsRegisterSucessful] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
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
      });
  };

  // const onLoginSubmit = ({ username, password }) => {
  //   userKit
  //     .login(username, password)
  //     .then((res) => console.log(res))
  //     .then((data) => console.log(data));
  // };

  const registerDetail = [
    ["firstName", "First Name:"],
    ["lastName", "Last Name:"],
    ["email", "Email:"],
    ["password", "Password:"],
    ["organisationName", "Organisation Name:"],
    ["organisationKind", "Organisation Kind:"],
  ];

  // const loginDetail = [
  //   ["username", "Username"],
  //   ["password", "Password"],
  // ];

  // const LoginFormArea = () => (
  //   <>
  //     <FormContainer onSubmit={handleSubmit(onLoginSubmit)}>
  //       <RegisterBtnWrapper
  //         onClick={() => {
  //           setShowRegister(true);
  //         }}>
  //         Register
  //       </RegisterBtnWrapper>
  //       {loginDetail.map(([value, placeholder], index) => (
  //         <FormInput
  //           key={`login-as-${index}`}
  //           value={value}
  //           placeholder={placeholder}
  //           register={register}
  //           errors={errors}
  //         />
  //       ))}
  //       <MyBtn login type="submit">
  //         Login
  //       </MyBtn>
  //     </FormContainer>
  //   </>
  // );

  const RegersterFormArea = () => (
    <FlexContainer>
      <h2>Register</h2>
      <p className="form-title">Enter Details to register:</p>

      {!isRegisterSucessful && (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <RegisterBtnWrapper
            onClick={() => {
              setShowRegister(false);
            }}>
            Login
          </RegisterBtnWrapper>
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

  return (
    <>
      {/* !showRegister && <LoginFormArea /> */}
      {!showRegister && <RegersterFormArea />}
    </>
  );
};

export default RegisterForm;
