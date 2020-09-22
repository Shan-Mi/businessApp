import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Your Awesome Business App!</h1>
      <button>Logout</button>
      <p>Customers:</p>
      <h3>You don't have any customer.</h3>
      <button>Add one new customer</button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Name: </th>
            <td>
              <input placeholder="name" />
            </td>
          </tr>
          <tr>
            <th>Organisation Nr:</th>
            <td>
              <input placeholder="organisationNr" />
            </td>
          </tr>
          <tr>
            <th>VatNr: SE + 10 siffror</th>
            <td>
              <input placeholder="vatNr" />
            </td>
          </tr>
          <tr>
            <th>Reference</th>
            <td>
              <input placeholder="reference" />
            </td>
          </tr>
          <tr>
            <th>PaymentTerm: (must have one siffra) </th>
            <td>
              <input placeholder="paymentTerm" />
            </td>
          </tr>
          <tr>
            <th>Website:</th>
            <td>
              <input placeholder="website" />
            </td>
          </tr>
          <tr>
            <th>E-mail:</th>
            <td>
              <input placeholder="email" />
            </td>
          </tr>
          <tr>
            <th>Phone Number:</th>
            <td>
              <input placeholder="phoneNumber" />
            </td>
          </tr>
          <tr></tr>
        </thead>
      </table>
    </div>
  );
};

export default Home;
