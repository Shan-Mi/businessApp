import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import UserKit from "../data/UserKit";
import { BtnSmall } from "../components/MyBtn.styles";
import { CustomerInfoContainer } from "./CustomerPage.styles";
import FormInput from "../components/FormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { schema } from "../components/CreateNewCustomer";
import { FormContainer } from "../components/RegisterForm.styles";
const userKit = new UserKit();

const CustomerPage = () => {
  const { id } = useParams();
  const [originalCustomer, setOriginalCustomer] = useState("");

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
        // console.log(currentCustomer);
        setOriginalCustomer(currentCustomer);
      }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id) => {
    userKit.deleteCustomer(id);
    history.push("/home");
  };

  const handleUpdate = () => {
    setIsUpdating(true);
    drawUpdateCustomerInfoArea();
  };

  const handleClick = () => {
    history.push("/home");
  };

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const saveUpdate = () => {
    setIsUpdating(false);
    // console.log("click");
    const updatedCustomer = {
      ...originalCustomer,
      email,
      name,
      organisationNr,
      paymentTerm,
      phoneNumber,
      reference,
      vatNr,
      website,
    };
    return userKit
      .editCustomerInfo(id, updatedCustomer)
      .then((res) => res.json());
    // .then((data) => console.log(data));
  };

  const renderCustomerInfo = () => (
    <CustomerInfoContainer>
      <p>
        <strong>ID: </strong>
        {id}
      </p>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>E-mail: </strong>
        {email}
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
    <FormContainer update onSubmit={handleSubmit(saveUpdate)}>
      <FormInput
        id="name"
        type="name"
        name="name"
        label="Name *"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        register={register}
        error={errors.name}
      />
      <FormInput
        id="organisationNr"
        type="organisationNr"
        name="organisationNr"
        label="organisationNr"
        value={organisationNr}
        onChange={(e) => setOrganisationNr(e.currentTarget.value)}
        register={register}
        error={errors.organisationNr}
      />
      <FormInput
        id="vatNr"
        type="vatNr"
        name="vatNr"
        label="vatNr *"
        value={vatNr}
        onChange={(e) => setVatNr(e.currentTarget.value)}
        register={register}
        error={errors.vatNr}
      />

      <FormInput
        id="reference"
        type="reference"
        name="reference"
        label="reference"
        value={reference}
        onChange={(e) => setReference(e.currentTarget.value)}
        register={register}
        error={errors.reference}
      />
      <FormInput
        id="paymentTerm"
        type="paymentTerm"
        name="paymentTerm"
        label="PaymentTerm *"
        value={paymentTerm}
        onChange={(e) => setPaymentTerm(e.currentTarget.value)}
        register={register}
        error={errors.paymentTerm}
      />
      <FormInput
        id="website"
        type="website"
        name="website"
        label="Website"
        value={website}
        onChange={(e) => setWebsite(e.currentTarget.value)}
        register={register}
        error={errors.website}
      />
      <FormInput
        id="email"
        type="email"
        name="email"
        label="Email:"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        register={register}
        error={errors.email}
      />
      <FormInput
        id="phoneNumber"
        type="phoneNumber"
        name="phoneNumber"
        label="Phone Number:"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.currentTarget.value)}
        register={register}
        error={errors.phoneNumber}
      />

      <BtnSmall type="submit">Update</BtnSmall>
    </FormContainer>
  );

  return (
    <div>
      {!isLoading && !isUpdating && <h1>Customer Information Details:</h1>}
      {isUpdating && <h1>Editing Customer Information:</h1>}
      {!isLoading && (
        <BtnSmall onClick={handleClick}>Go back to HomePage</BtnSmall>
      )}
      {!isLoading && !isUpdating && renderCustomerInfo()}
      {isUpdating && drawUpdateCustomerInfoArea()}
    </div>
  );
};

export default CustomerPage;
