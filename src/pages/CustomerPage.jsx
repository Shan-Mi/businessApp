import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import UserKit from "../data/UserKit";
import { BtnSmall } from "../components/MyBtn.styles";
import { CustomerInfoContainer } from "./CustomerPage.styles";

const userKit = new UserKit();

const CustomerPage = () => {
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
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    userKit
      .getCustomer(id)
      .then((res) => res.json())
      .then(({ results: customers }) => {
        const [currentCustomer] = customers.filter(
          (customer) => customer.id === +id
        );
        setEmail(currentCustomer.email);
        setName(currentCustomer.name);
        setOrganisationNr(currentCustomer.organisationNr);
        setPaymentTerm(currentCustomer.paymentTerm);
        setPhoneNumber(currentCustomer.phoneNumber);
        setReference(currentCustomer.reference);
        setVatNr(currentCustomer.vatNr);
        setWebsite(currentCustomer.website);
        setIsLoading(false);
        console.log(currentCustomer);
      });
  }, []);

  const handleDelete = (id) => {
    userKit.deleteCustomer(id);
    history.push("/home");
  };

  const handleUpdate = (id, ...args) => {
    setIsUpdating(true);
    drawUpdateCustomerInfoArea();
  };

  const saveUpdate = () => {
    setIsUpdating(false);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("organisationNr", organisationNr);
    formData.append("paymentTerm", paymentTerm);
    formData.append("phoneNumber", phoneNumber);
    formData.append("reference", reference);
    formData.append("vatNr", vatNr);
    formData.append("website", website);
    console.log(formData);
    return userKit
      .editCustomerInfo(id, formData)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const renderCustomerInfo = () => (
    <CustomerInfoContainer>
      <p>
        <strong>E-mail: </strong>
        {email}
      </p>
      <p>
        <strong>ID: </strong>
        {id}
      </p>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Organisation Nr:</strong> {organisationNr}
      </p>
      <p>
        <strong>Payment Term: </strong>
        {paymentTerm}
      </p>
      <p>
        <strong>Phone Number: </strong>
        {phoneNumber}
      </p>
      <p>
        <strong>Reference: </strong>
        {reference}
      </p>
      <p>
        <strong>Vat Nr: </strong>
        {vatNr}
      </p>
      <p>
        <strong>Website: </strong>
        {website}
      </p>
      <div>
        <BtnSmall onClick={() => handleDelete(id)}>Delete</BtnSmall>
        <BtnSmall onClick={() => handleUpdate(id)}>Update</BtnSmall>
      </div>
    </CustomerInfoContainer>
  );

  const drawUpdateCustomerInfoArea = () => (
    <form>
      <label>Email:</label>
      <input value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
      <label>Name:</label>
      <input value={name} onChange={(e) => setName(e.currentTarget.value)} />
      <label>Organisation Nr:</label>
      <input
        value={organisationNr}
        onChange={(e) => setOrganisationNr(e.currentTarget.value)}
      />
      <label>Payment Term:</label>
      <input
        value={paymentTerm}
        onChange={(e) => setPaymentTerm(e.currentTarget.value)}
      />
      <label>PhoneNumber:</label>
      <input
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.currentTarget.value)}
      />
      <label>Reference:</label>
      <input
        value={reference}
        onChange={(e) => setReference(e.currentTarget.value)}
      />
      <label>Vat Nr:</label>
      <input value={vatNr} onChange={(e) => setVatNr(e.currentTarget.value)} />
      <label>Website:</label>
      <input
        value={website}
        onChange={(e) => setWebsite(e.currentTarget.value)}
      />
      <button onClick={saveUpdate}>Update</button>
    </form>
  );

  return (
    <div>
      <h1>Customer page</h1>
      {!isLoading && !isUpdating && renderCustomerInfo()}
      {isUpdating && drawUpdateCustomerInfoArea()}
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
