import React, { useState, useContext, useEffect } from "react";
import CreateNewCustomerForm from "../components/CreateNewCustomer";
import UserKit from "../data/UserKit";
import { UserContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

const userKit = new UserKit();
const Home = () => {
  const { user, setUser, customers, setCustomers } = useContext(UserContext);

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
  }, [customers]);
  /* 
  Object { id: 115, email: "ayumi919@163.com", firstName: "jane", lastName: "doe", role: 1 }
  */
  const handleDelete = (id) => {
    console.log(id);
    userKit.deleteCustomer(id);
  };

  const renderCustomers = (customers) =>
    customers.map(({ name, organisationNr, reference, id }, index) => (
      <div key={index}>
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

        <button
          onClick={() => {
            handleDelete(id);
          }}>
          Delete
        </button>
        <button>Update</button>
      </div>
    ));

  return (
    <div>
      <h1>Welcome to Your Awesome Business App!</h1>
      <div>{`Name: ${user.firstName} ${user.lastName} E-mail: ${user.email}`}</div>
      <button>Logout</button>

      {customerNr === 0 ? (
        <h3>You don't have any customer.</h3>
      ) : (
        <>
          <p>Your customers number is: {customerNr}</p>
          {renderCustomers(customers)}
        </>
      )}

      {}
      <hr />
      <CreateNewCustomerForm />
    </div>
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
