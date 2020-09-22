import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../context/GlobalContext";
import UserKit from "../data/UserKit";

export const TableContainer = styled.table`
  margin: auto;
`;

// const { customers, setCustomers } = useContext(UserContext);

const userKit = new UserKit();

const CreateNewCustomerForm = () => {
  const [name, setName] = useState('');
  const [organisationNr, setOrganisationNr] = useState('');
  const [vatNr, setVatNr] = useState('');
  const [reference, setReference] = useState('');
  const [paymentTerm, setPaymentTerm] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCreateCustomer = () => {
    userKit
      .createCustomer(
        name,
        organisationNr,
        vatNr,
        reference,
        paymentTerm,
        website,
        email,
        phoneNumber
      )
      .then((res) => res.json())
      .then((data) => console.log(data));
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