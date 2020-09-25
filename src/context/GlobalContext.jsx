import React, { createContext, useState, useEffect } from "react";
import UserKit from "../data/UserKit";

const userKit = new UserKit();

export const UserContext = createContext({});
const GlobalContext = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [user, setUser] = useState("");
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
        setCustomerNr(data.count);
      });
  }, [customers, setCustomers]);

  return React.createElement(
    UserContext.Provider,
    {
      value: {
        customers,
        setCustomers,
        user,
        setUser,
        customerNr,
        setCustomerNr,
      },
    },
    children
  );
};

export default GlobalContext;

// customers should have an 'id' property
