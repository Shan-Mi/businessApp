import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import UserKit from "../data/UserKit";
import { BtnSmall } from "../components/MyBtn.styles";
import { CustomerInfoContainer } from "./CustomerPage.styles";
import EditingFormInput from "../components/EditingFormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { schema } from "../data/Schema";
import { FormContainer } from "../components/RegisterForm.styles";
import { GrClose } from "react-icons/gr";
import LoggedinHeader from "../components/LoggedinHeader";
import { UserContext } from "../context/GlobalContext";

const userKit = new UserKit();

const CustomerPage = () => {
  const { id } = useParams();
  const { user, setUser } = useContext(UserContext);
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

  const setCustomerDetailInfoArea = () => {
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
        setOriginalCustomer(currentCustomer);
      });
  };

  useEffect(() => {
    userKit
      .getLoginUser()
      .then((res) => res.json())
      .then(({ email, firstName, lastName }) =>
        setUser({ email, firstName, lastName })
      );
    setCustomerDetailInfoArea(); // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const closeEditing = () => {
    setIsLoading(false);
    setIsUpdating(false);
    setCustomerDetailInfoArea();
  };

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const saveUpdate = () => {
    setIsUpdating(false);
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

  const customerDetailList = [
    ["name", "Name *", setName, name],
    ["organisationNr", "organisationNr *", setName, name],
    ["vatNr", "vatNr *", setVatNr, vatNr],
    ["reference", "reference *", setReference, reference],
    ["paymentTerm", "paymentTerm *", setPaymentTerm, paymentTerm],
    ["website", "website *", setWebsite, website],
    ["email", "email *", setEmail, email],
    ["phoneNumber", "phoneNumber *", setPhoneNumber, phoneNumber],
  ];

  const drawUpdateCustomerInfoArea = () => (
    <FormContainer update onSubmit={handleSubmit(saveUpdate)}>
      <GrClose onClick={closeEditing} />
      {customerDetailList.map(
        ([nameString, placeholder, setValue, value], index) => (
          <EditingFormInput
            key={`customer-detail-${index}`}
            nameString={nameString}
            placeholder={placeholder}
            setValue={setValue}
            value={value}
            register={register}
            errors={errors}
          />
        )
      )}

      <BtnSmall type="submit">Update</BtnSmall>
    </FormContainer>
  );

  return (
    <div>
      <LoggedinHeader user={user} />
      {!isLoading && !isUpdating && <h3 className="detail-page-h3-title">Customer Information Details:</h3>}
      {isUpdating && <h3 className="detail-page-h3-title">Editing Customer Information:</h3>}
      {!isLoading && (
        <BtnSmall onClick={handleClick}>Go back to HomePage</BtnSmall>
      )}
      {!isLoading && !isUpdating && renderCustomerInfo()}
      {isUpdating && drawUpdateCustomerInfoArea()}
    </div>
  );
};

export default CustomerPage;
