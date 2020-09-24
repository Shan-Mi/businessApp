import styled from "styled-components";

export const HomePageContainer = styled.div`
  h1 {
    font-family: "Pacifico", cursive;
    font-size: 3rem;
    color: crimson;
    margin-bottom: 1rem;
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

export const CustomerInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50vw;
  min-width: 400px;
  margin: 5px auto;
`;
