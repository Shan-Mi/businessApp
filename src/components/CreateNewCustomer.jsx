import React from "react";
import styled from "styled-components";

export const TableContainer = styled.table`
  margin: auto;
`;

const CreateNewCustomerForm = () => {
  return (
    <div>
      <TableContainer>
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
      </TableContainer>
    </div>
  );
};

export default CreateNewCustomerForm;
