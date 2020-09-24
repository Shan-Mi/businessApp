// TODO hook-form seems nice, will try this one out later.
import React from "react";
import styled from "styled-components";
import UserKit from "../data/UserKit";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";
import FormInput from "./FormInput";
// import { CreateNewCustomerFormContainer } from "./CreateNewCustomer.styles";
import { FormContainer } from "./RegisterForm.styles";
import { MyBtn } from "./MyBtn.styles";

export const TableContainer = styled.table`
  margin: auto;
`;

const userKit = new UserKit();

const CreateNewCustomerForm = () => {
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(1, "Must be at least 1 character")
      .max(50, "Maxmum 50 characters")
      .required("Required"),
    organisationNr: Yup.string().trim().max(30, "Maxmum characters 30"),
    vatNr: Yup.string()
      .trim()
      .matches(/^se\d{1,13}$/i, "Begin with SE, max 15 characters")
      .required("Required"),
    reference: Yup.string().trim().max(50, "Maxmum 50 characters"),
    paymentTerm: Yup.string()
      .matches(
        /^(\d|\d{1,9}|1\d{1,9}|20\d{8}|213\d{7}|2146\d{6}|21473\d{5}|214747\d{4}|2147482\d{3}|21474835\d{2}|214748364[0-7])$/,
        "Input a number between 0 and 2147483647"
      )
      .required("Required"),
    website: Yup.string()
      .trim()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .max(50, "Maxmum 50 characters"),
    email: Yup.string()
      .email("Invalid format email-address")
      .max(254, "Maxmum 254 characters"),
    phoneNumber: Yup.string().matches(
      /^(?=(.*\d){8})[a-zA-Z\d]{10,20}$/,
      "MinMaxmum 20 digital"
    ),
  });

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
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <FormContainer customer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id="name"
          type="name"
          name="name"
          label="Name *"
          register={register}
          error={errors.name}
        />
        <FormInput
          id="organisationNr"
          type="organisationNr"
          name="organisationNr"
          label="organisationNr"
          register={register}
          error={errors.organisationNr}
        />
        <FormInput
          id="vatNr"
          type="vatNr"
          name="vatNr"
          label="vatNr *"
          register={register}
          error={errors.vatNr}
        />

        <FormInput
          id="reference"
          type="reference"
          name="reference"
          label="reference"
          register={register}
          error={errors.reference}
        />
        <FormInput
          id="paymentTerm"
          type="paymentTerm"
          name="paymentTerm"
          label="PaymentTerm *"
          register={register}
          error={errors.paymentTerm}
        />
        <FormInput
          id="website"
          type="website"
          name="website"
          label="Website"
          register={register}
          error={errors.website}
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
          id="phoneNumber"
          type="phoneNumber"
          name="phoneNumber"
          label="Phone Number:"
          register={register}
          error={errors.phoneNumber}
        />

        <MyBtn type="submit">Create a new customer</MyBtn>
      </form>
    </FormContainer>
  );
};

export default CreateNewCustomerForm;
