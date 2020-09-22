import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import UserKit from "../data/UserKit";

const userKit = new UserKit();

const CustomerPage = (props) => {
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [reference, setReference] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [website, setWebsite] = useState("");
  const history = useHistory();

  useEffect(() => {
    userKit
      .getCustomer(id)
      .then((res) => res.json())
      .then(({ results: customers }) => {
        const currentCustomer = customers.filter(
          (customer) => customer.id === +id
        );
        setEmail(currentCustomer[0].email);
        setName(currentCustomer[0].name);
        setOrganisationNr(currentCustomer[0].organisationNr);
        setPaymentTerm(currentCustomer[0].paymentTerm);
        setPhoneNumber(currentCustomer[0].phoneNumber);
        setReference(currentCustomer[0].reference);
        setVatNr(currentCustomer[0].vatNr);
        setWebsite(currentCustomer[0].website);
        console.log(currentCustomer);
      });
  }, []);

  const handleDelete = (id) => {
    // console.log(id);
    userKit.deleteCustomer(id);
    history.push("/home");
  };

  return (
    <div>
      <h1>Customer page</h1>
      <p>email: {email}</p>
      <p>id: {id}</p>
      <p>name: {name}</p>
      <p>organisationNr: {organisationNr}</p>
      <p>paymentTerm: {paymentTerm}</p>
      <p>phoneNumber: {phoneNumber}</p>
      <p>reference: {reference}</p>
      <p>vatNr: {vatNr}</p>
      <p>website: {website}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <button>Update</button>
    </div>
  );
};

export default CustomerPage;
/* 
[…]
​
0: Object { id: 821, name: "sd", organisationNr: "asdf", … }

address: Array []
email: "12@1.com"​
id: 821​​
name: "sd"​​
organisationNr: "asdf"​​​
paymentTerm: 111​​
phoneNumber: "01001010"​​
reference: "dafd"​​
vatNr: "SE1234567890"​​
website: "sas"
​
1: Object { id: 830, name: "fafa", organisationNr: "fafa", … }
*/
