import React, { useState } from "react";
import CreateNewCustomerForm from "../components/CreateNewCustomer";
import UserKit from "../data/UserKit";

const userKit = new UserKit();
const Home = () => {
  const [customerNr, setCustomerNr] = useState("");
  userKit
    .getCustomerList()
    .then((res) => res.json())
    .then((data) => {
      setCustomerNr(data.count);
    });

  return (
    <div>
      <h1>Welcome to Your Awesome Business App!</h1>
      <div></div>
      <button>Logout</button>

      {customerNr === 0 ? (
        <h3>You don't have any customer.</h3>
      ) : (
        <p>Your customers number is: ${customerNr}</p>
      )}

      <hr />
      <CreateNewCustomerForm />
    </div>
  );
};

export default Home;
