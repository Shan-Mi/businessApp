import React, { useState } from "react";
import UserKit from "../data/UserKit";

const userKit = new UserKit();

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setOrganisationKind] = useState("");

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
      <div key={index}>
        <label htmlFor={placeholder}>{placeholder}</label>
        <input
          placeholder={placeholder}
          id={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
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
      
  }

  return (
    <div>
      {inputItemsArray.map(([placeholder, value, setValue], index) =>
        renderInput(index, placeholder, value, setValue)
      )}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterForm;
