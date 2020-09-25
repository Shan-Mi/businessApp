import styled from "styled-components";

export const CustomerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 50vw;
  margin: 2rem auto 0;
  background-color: #61dafb30;
  padding: 1rem 4rem 2rem;

  div {
    display: flex;

    button {
      &:first-of-type {
        margin-right: 5px;
      }
    }
  }

  button {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    margin-top: 1rem;
  }
`;
