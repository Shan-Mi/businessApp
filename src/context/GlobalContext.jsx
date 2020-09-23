import React, { createContext, useState } from "react";
import UserKit from "../data/UserKit";

export const UserContext = createContext({});
const GlobalContext = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [user, setUser] = useState('');
  return React.createElement(
    UserContext.Provider,
    {
      value: {
        customers,
        setCustomers,
        user,
        setUser,
      },
    },
    children
  );
};

export default GlobalContext;

// customers should have an 'id' property
