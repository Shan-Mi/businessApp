import styled from "styled-components";

export const HomePageContainer = styled.div`
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

export const CustomerInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50vw;
  min-width: 700px;
  margin: 5px auto;

  span {
    padding-right: 15px;
  }

  a {
    display: flex;
    flex-basis: 80%;
    justify-content: space-between;

    span {
      &:first-of-type {
        flex-basis: 29%;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;
