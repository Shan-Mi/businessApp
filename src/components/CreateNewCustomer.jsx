// TODO hook-form seems nice, will try this one out later.
import React, { useState } from "react";
import styled from "styled-components";
import UserKit from "../data/UserKit";

export const TableContainer = styled.table`
  margin: auto;
`;

// const { customers, setCustomers } = useContext(UserContext);

function isVarNrLegit(varNr) {
  const regex = /^SE\d{10}$/gi;
  return regex.test(varNr);
}

function isEmailLegit(email) {
  const regex = /^([a-zA-Z0-9_]+)@([a-zA-Z0-9_]+)\.([a-zA-Z]{2,5})$/g;
  return regex.test(email);
}

const userKit = new UserKit();

const CreateNewCustomerForm = () => {
  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState(""); //SE1234567890
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState(""); // integer
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [errors, setErrors] = useState({});

  const handleCreateCustomer = () => {
    console.log(email);
    if (!isVarNrLegit(vatNr)) {
      setErrors({
        vatNrError:
          " Invalid VatNr, you should follow this pattern: SE1234567890",
      });
      console.log(errors);
    } else if (!isEmailLegit(email)) {
      setErrors({
        emailError: "Email format is invalid.",
      });
    } else {
      setErrors({});
      userKit
        .createCustomer({
          name,
          organisationNr,
          vatNr,
          reference,
          paymentTerm,
          website,
          email,
          phoneNumber,
        })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  const inputItemsArray = [
    ["Name", name, setName],
    ["Organisation Nr", organisationNr, setOrganisationNr],
    ["Vat Nr", vatNr, setVatNr],
    ["Reference", reference, setReference],
    ["Payment Term", paymentTerm, setPaymentTerm],
    ["Website", website, setWebsite],
    ["Email", email, setEmail],
    ["Phone Number", phoneNumber, setPhoneNumber],
  ];

  function renderInput(index, placeholder, value, setValue) {
    return (
      <tr key={index}>
        <th>{placeholder}: </th>
        <td>
          <input
            placeholder={placeholder}
            id={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </td>
      </tr>
    );
  }

  return (
    <div>
      <button onClick={handleCreateCustomer}>Add one new customer</button>
      {errors.varNrError && <p>{errors?.vatNrError}</p>}
      <TableContainer>
        <thead>
          {inputItemsArray.map(([placeholder, value, setValue], index) =>
            renderInput(index, placeholder, value, setValue)
          )}
        </thead>
      </TableContainer>
    </div>
  );
};

export default CreateNewCustomerForm;
