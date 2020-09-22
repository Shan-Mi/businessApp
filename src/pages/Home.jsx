import React from "react";
import CreateNewCustomerForm from "../components/CreateNewCustomer";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Your Awesome Business App!</h1>
      <button>Logout</button>
      <p>Customers:</p>
      <h3>You don't have any customer.</h3>
      <button>Add one new customer</button>
      <hr />
      <CreateNewCustomerForm />
    </div>
  );
};

export default Home;
