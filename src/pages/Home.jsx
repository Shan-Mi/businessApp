import React, { useContext, useEffect, useState } from "react";
import CreateNewCustomerForm from "../components/CreateNewCustomer";
import UserKit from "../data/UserKit";
import { UserContext } from "../context/GlobalContext";
import { Link, useHistory } from "react-router-dom";
import { BtnSmall } from "../components/MyBtn.styles";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import LoggedinHeader from "../components/LoggedinHeader";

const userKit = new UserKit();
const Home = () => {
  const MAX_CUSTOMER_NUM = 10;
  const {
    user,
    customers,
    customerNr,
    setUser,
    setCustomers,
    setCustomerNr,
  } = useContext(UserContext);
  const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);
  const [showAddBtn, setShowAddBtn] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (!userKit.getToken()) {
      history.push("/invalid");
    }

    userKit
      .getLoginUser()
      .then((res) => res.json())
      .then(({ email, firstName, lastName }) =>
        setUser({ email, firstName, lastName })
      );

    getCustomerList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCustomerList = () => {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.results);
        setCustomerNr(data.count);
      });
  };

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    userKit
      .getCustomerList(signal)
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.results);
        setCustomerNr(data.count);
      });
    //  multiple rendering...need to solve it

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customers, customerNr]);

  const handleDelete = (id) => {
    userKit.deleteCustomer(id);
  };

  const handleAddCustomer = () => {
    setShowAddCustomerForm(true);
    setShowAddBtn(false);
  };

  const renderCustomers = (customers) => {
    return (
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Organisation Nr</Th>
            <Th>Reference</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {customers.map(({ name, organisationNr, reference, id }, index) => (
            <Tr key={`customer-review-${index}`}>
              <Td>
                <Link to={`/home/${id}`}>{name}</Link>
              </Td>

              <Td>
                <Link to={`/home/${id}`}>{organisationNr}</Link>
              </Td>

              <Td>
                <Link to={`/home/${id}`}>{reference}</Link>
              </Td>

              <Td>
                <BtnSmall
                  onClick={() => {
                    handleDelete(id);
                  }}>
                  Delete
                </BtnSmall>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    );
  };

  return (
    <div>
      <LoggedinHeader user={user} />

      {customerNr === 0 ? (
        <>
          <h3>You don't have any customer.</h3>
          {showAddBtn && (
            <BtnSmall onClick={handleAddCustomer}>Add a new customer</BtnSmall>
          )}
        </>
      ) : (
        <>
          <p className="customer-number-info">
            Your customers number is: <strong>{customerNr}</strong>
          </p>
          {customers && renderCustomers(customers)}
        </>
      )}

      <hr />

      {customerNr !== MAX_CUSTOMER_NUM && showAddBtn && (
        <BtnSmall onClick={handleAddCustomer}>Add a new customer</BtnSmall>
      )}

      <CreateNewCustomerForm
        showAddCustomerForm={showAddCustomerForm}
        setShowAddCustomerForm={setShowAddCustomerForm}
        setShowAddBtn={setShowAddBtn}
      />

      {customerNr === MAX_CUSTOMER_NUM && (
        <p>
          You have reached maxmum customer amount, congrats!
          <span role="img" aria-label="ghost">
            👻
          </span>
        </p>
      )}
    </div>
  );
};

export default Home;
