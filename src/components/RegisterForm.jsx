import React, { useState, useContext } from "react";
import UserKit from "../data/UserKit";
import styled from "styled-components";
import { UserContext } from "../context/GlobalContext";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.div`
  text-align: left;
  margin: auto;

  button {
    padding: 0.5rem 1rem;
    display: block;
    margin: 1.5rem auto;
    font-size: 1rem;
  }
`;

const InputContainer = styled.div`
  margin: 0.5rem 0;
  font-size: 1.2rem;
  label {
    margin-right: 1rem;
  }
  input {
    height: 1.3rem;
    font-size: 1rem;
    width: 200px;
  }
`;

const WarningContainer = styled.p`
  color: red;
`;

const userKit = new UserKit();

const RegisterForm = () => {
  const { user, setUser } = useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setOrganisationKind] = useState("");
  const [errors, setErrors] = useState("");
  const [isRegisterSucessful, setIsRegisterSucessful] = useState(false);

  const inputItemsArray = [
    ["First Name", firstName, setFirstName],
    ["Last Name", lastName, setLastName],
    ["Email", email, setEmail],
    ["Password", password, setPassword],
    ["Organisation Name", organisationName, setOrganisationName],
    ["Organisation Kind (0, 1, 2)", organisationKind, setOrganisationKind],
  ];

  function renderInput(index, placeholder, value, setValue) {
    return (
      <InputContainer key={index}>
        <label htmlFor={placeholder}>{placeholder}:</label>
        <input
          placeholder={placeholder}
          id={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </InputContainer>
    );
  }

  function isEmailExisted({ email }) {
    if (email) {
      setErrors("This email already exists or check your mail-box");
      throw new Error("This email already exists");
    }
  }

  function isPasswordStrong({ password }) {
    if (password) {
      setErrors("You need a stronger password");
      throw new Error("You need a stronger password");
    }
  }

  function handleRegister() {
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
        // TODO: need to be refactored
        setUser({
          firstName,
          lastName,
          email,
          password,
          organisationName,
          organisationKind,
        });
        if (user) {
          localStorage.setItem("USER", JSON.stringify(user));
        }
        // TODO ends.
        isEmailExisted(data);
        isPasswordStrong(data);
      })
      .catch((e) => console.error(e));

    console.log(user);
    setIsRegisterSucessful(true);
  }

  return (
    <FlexContainer>
      <h2>Register</h2>
      <p>Enter Details to register:</p>
      {errors && <WarningContainer>{errors}</WarningContainer>}
      {!isRegisterSucessful && (
        <FormContainer>
          {inputItemsArray.map(([placeholder, value, setValue], index) =>
            renderInput(index, placeholder, value, setValue)
          )}
          <button onClick={handleRegister}>Register</button>
        </FormContainer>
      )}
      {isRegisterSucessful && (
        <p>Please check your {email} E-mail address for login</p>
      )}
    </FlexContainer>
  );
};

export default RegisterForm;
