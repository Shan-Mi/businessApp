import styled from "styled-components";

export const InputFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 1;
  text-align: left;

  label {
    padding-bottom: 10px;
  }
  input {
    /* flex-basis: 250px; */
    height: 25px;
  }
`;

export const InputOutsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0.5rem auto;

  p {
    color: red;
    text-align: left;
    margin: 0 0 0.5rem;
  }
`;
