import styled from "styled-components";

export const CustomerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 50vw;
  margin: auto;
  background-color: #61dafb30;
  padding: 1rem 4rem 2rem;

  div {
    display: flex;

    button {
      width: 100%;
      padding: 0.5rem;
      border-radius: 3px;
      border: none;
      font-size: 1rem;
      font-family: "PT Sans Narrow", sans-serif;
      margin-top: 1rem;

      &:hover {
        color: white;
      }
    }
  }
`;
