import React from "react";
import UserKit from "../data/UserKit";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import FormInput from "./FormInput";
import { FormContainer } from "./RegisterForm.styles";
import { MyBtn } from "./MyBtn.styles";
import { GrClose } from "react-icons/gr";
import styled from "styled-components";
import { schema } from "../data/Schema";
const userKit = new UserKit();

const CreateNewCustomerForm = ({
  showAddCustomerForm,
  setShowAddCustomerForm,
  setShowAddBtn,
}) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({
    name,
    organisationNr,
    vatNr,
    reference,
    paymentTerm,
    website,
    email,
    phoneNumber,
  }) => {
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
      .then((res) => res.json());
    setShowAddBtn(true);
    setShowAddCustomerForm(false);
  };

  const closeAddCustomerForm = () => {
    setShowAddBtn(true);
    setShowAddCustomerForm(false);
  };

  const newCustomerDetailList = [
    ["name", "Name *"],
    ["organisationNr", "organisationNr *"],
    ["vatNr", "vatNr *"],
    ["reference", "reference *"],
    ["paymentTerm", "paymentTerm *"],
    ["website", "website *"],
    ["email", "email *"],
    ["phoneNumber", "phoneNumber *"],
  ];

  return showAddCustomerForm ? (
    <>
      <BlurLayerContainer />
      <FormContainer customer onSubmit={handleSubmit(onSubmit)}>
        <GrClose onClick={closeAddCustomerForm} />
        {newCustomerDetailList.map(([value, placeholder], index) => (
          <FormInput
            key={`new-customer-${index}`}
            value={value}
            placeholder={placeholder}
            register={register}
            errors={errors}
          />
        ))}

        <MyBtn type="submit">Create a new customer</MyBtn>
      </FormContainer>
    </>
  ) : null;
};

export default CreateNewCustomerForm;

const BlurLayerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.7;
`;
