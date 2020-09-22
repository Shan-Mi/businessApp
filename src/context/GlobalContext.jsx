import React, { createContext, useState } from "react";

export const UserContext = createContext({});
const GlobalContext = ({ children }) => {
  const [customers, setCustomers] = useState(null);
  const [user, setUser] = useState(null);
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
