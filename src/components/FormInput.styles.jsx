import styled from "styled-components";

export const InputFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 1;

  input {
    flex-basis: 250px;
  }
`;

export const InputOutsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0.5rem auto;

  p {
    color: red;
    text-align: left;
    margin: 0 0 0.5rem;
  }
`;
