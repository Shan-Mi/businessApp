import styled from "styled-components";

export const LoggedinHeaderContainer = styled.div`
  h1 {
    font-family: "Pacifico", cursive;
    font-size: 3rem;
    color: crimson;
  }

  .user-info {
    font-size: 1.3rem;

    span {
      font-family: "Pacifico", cursive;
      margin-left: 5px;
      &:first-of-type {
        margin-right: 10px;
      }
    }
  }

  .customer-number-info {
    font-size: 1.3rem;
    strong {
      margin-left: 5px;
    }
  }
`;
