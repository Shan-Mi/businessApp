import React, { useState, useContext, useEffect } from "react";
import CreateNewCustomerForm from "../components/CreateNewCustomer";
import UserKit from "../data/UserKit";
import { UserContext } from "../context/GlobalContext";
import { Link, useHistory } from "react-router-dom";
import { BtnSmall } from "../components/MyBtn.styles";
import { HomePageContainer, CustomerInfoContainer } from "./Home.styles";

const userKit = new UserKit();
const Home = () => {
  const MAX_CUSTOMER_NUM = 10;
  const { user, customers, customerNr } = useContext(UserContext);
  const history = useHistory();

  const handleDelete = (id) => {
    userKit.deleteCustomer(id);
  };

  const handleLogout = () => {
    userKit.deleteToken();
    history.push("/");
  };

  const renderCustomers = (customers) =>
    customers.map(({ name, organisationNr, reference, id }, index) => (
      <CustomerInfoContainer key={index}>
        <Link to={`/home/${id}`}>
          <span>
            <strong>Name:</strong> {name}
          </span>
          <span>
            <strong>Organisation Nr:</strong> {organisationNr}
          </span>
          <span>
            <strong>Reference:</strong> {reference}
          </span>
        </Link>

        <BtnSmall
          onClick={() => {
            handleDelete(id);
          }}>
          Delete
        </BtnSmall>
        {/* <button>Update</button> */}
      </CustomerInfoContainer>
    ));

  return (
    <HomePageContainer>
      <h1>Welcome to Your Awesome Business App!</h1>
      <div className="user-info">
        <strong>Name: </strong>
        <span>
          {user.firstName} {user.lastName}
        </span>
        <strong>E-mail: </strong> <span>{user.email}</span>
        <BtnSmall logout onClick={handleLogout}>
          Logout
        </BtnSmall>
      </div>

      {customerNr === 0 ? (
        <h3>You don't have any customer.</h3>
      ) : (
        <>
          <p className="customer-number-info">
            Your customers number is: <strong>{customerNr}</strong>
          </p>
          {renderCustomers(customers)}
        </>
      )}
      <hr />

      {customerNr !== MAX_CUSTOMER_NUM && <CreateNewCustomerForm />}
      {customerNr === MAX_CUSTOMER_NUM && (
        <p>
          You have reached maxmum customer amount, grats!
          <span role="img" aria-label="ghost">
            👻
          </span>
        </p>
      )}
    </HomePageContainer>
  );
};

export default Home;
