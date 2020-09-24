import React, { useState, useContext } from "react";
import UserKit from "../data/UserKit";
import styled from "styled-components";
import { UserContext } from "../context/GlobalContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";
import FormInput from "./FormInput";
import { FlexContainer, FormContainer } from "./RegisterForm.styles";
import { MyBtn } from "./MyBtn.styles";

const userKit = new UserKit();

const RegisterForm = () => {
  const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[!.-])(?=.*[a-zA-Z]).{8,}$/;
  const { user, setUser } = useContext(UserContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setOrganisationKind] = useState("");
  const [isRegisterSucessful, setIsRegisterSucessful] = useState(false);
  const schema = Yup.object().shape({
    firstName: Yup.string()
      .min(1, "Must be at least 1 character")
      .max(30, "Maxmum 50 characters."),
    lastName: Yup.string()
      .min(1, "Must be at least 1 character")
      .max(30, "Maxmum 50 characters."),
    email: Yup.string()
      .email("Invalid format email-address")
      .max(254, "Maxmum 254 characters")
      .required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(1, "At least 1 character.")
      .matches(
        REGEX_PASSWORD,
        "Password needs to contain at least 1 number, 1 char and 1 of (! , -)"
      ),
    organisationName: Yup.string(),
    organisationKind: Yup.mixed().oneOf(["0", "1", "2"]),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
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
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
        setPassword(password);
        setOrganisationName(organisationName);
        setOrganisationKind(organisationKind);
        console.log(data);
      });
  };

  return (
    <FlexContainer>
      <h2>Register</h2>
      <p>Enter Details to register:</p>

      {!isRegisterSucessful && (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            id="firstName"
            type="firstName"
            name="firstName"
            label="First Name:"
            register={register}
            error={errors.firstName}
          />

          <FormInput
            id="lastName"
            type="lastName"
            name="lastName"
            label="Last Name:"
            register={register}
            error={errors.lastName}
          />

          <FormInput
            id="email"
            type="email"
            name="email"
            label="Email:"
            register={register}
            error={errors.email}
          />

          <FormInput
            id="password"
            type="password"
            name="password"
            label="Password:"
            register={register}
            error={errors.password}
          />

          <FormInput
            id="organisationName"
            type="organisationName"
            name="organisationName"
            label="Organisation Name:"
            register={register}
            error={errors.organisationName}
          />

          <FormInput
            id="organisationKind"
            type="organisationKind"
            name="organisationKind"
            label="Organisation Kind * [0, 1, 2]:"
            register={register}
            error={errors.organisationKind}
          />

          <MyBtn type="submit">Register a new user</MyBtn>
        </FormContainer>
      )}
      {isRegisterSucessful && (
        <p>Please check your {email} E-mail address for login</p>
      )}
    </FlexContainer>
  );
};

export default RegisterForm;
