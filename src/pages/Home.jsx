import React, { useState, useContext, useEffect } from "react";
import CreateNewCustomerForm from "../components/CreateNewCustomer";
import UserKit from "../data/UserKit";
import { UserContext } from "../context/GlobalContext";
import { Link, useHistory } from "react-router-dom";
import { BtnSmall } from "../components/MyBtn.styles";
import { HomePageContainer, CustomerInfoContainer } from "./Home.styles";

const userKit = new UserKit();
const Home = () => {
  const { user, setUser, customers, setCustomers } = useContext(UserContext);
  const history = useHistory();
  const [customerNr, setCustomerNr] = useState("");

  useEffect(() => {
    userKit
      .getLoginUser()
      .then((res) => res.json())
      .then(({ email, firstName, lastName }) =>
        setUser({ email, firstName, lastName })
      );
  }, [setUser]);

  useEffect(() => {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.results);
        // console.log(data)
        setCustomerNr(data.count);
      });
  }, [customers, setCustomers]);
  /* 
  Object { id: 115, email: "ayumi919@163.com", firstName: "jane", lastName: "doe", role: 1 }
  */
  const handleDelete = (id) => {
    console.log(id);
    userKit.deleteCustomer(id);
  };

  const handleLogout = () => {
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

      {customerNr !== 10 && <CreateNewCustomerForm />}
      {customerNr === 10 && (
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

/* 
    {count: 1, next: null, previous: null, results: Array(1)}
      count: 1
      next: null
      previous: null
      results: Array(1)
      0:
      address: []
      email: "ayumi919@163.com"
      id: 794
      name: "Shan Mi"
      organisationNr: "sada"
      parent: {id: 211, name: "test", organisationNr: null, vatNr: null, reference: null, …}
      paymentTerm: 100
      phoneNumber: "0725838135"
      reference: "ads"
      vatNr: "SE1234567890"
      website: "sdf"
      __proto__: Object
      length: 1
      __proto__: Array(0)
      __proto__: Object
    */
