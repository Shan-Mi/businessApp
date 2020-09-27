import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    background: rgb(80,126,177);
    background: linear-gradient(150deg, rgba(80,126,177,1) 0%, rgba(55,107,209,1) 8%, rgba(203,193,219,1) 35%, rgba(234,242,249,1) 68%, rgba(194,255,241,1) 85%, rgba(246,249,252,1) 100%);

    @media screen and (max-width: 800px)  {
      // padding: 10px;
    }
  }

  h1 {
    margin: 0;
    padding: 3rem 0 1rem;
  }
  
  a {
    text-decoration: none;
    color: midnightblue;
    &:hover {
      color: purple;
    }
  }

  * {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    &:hover {
      background-color: #1ED5B9;
      transition: background-color 100ms ease-in-out;
    }
    transition: background-color 100ms ease-in-out;
  }

  svg {
    position: absolute;
    right: 17px;
    font-size: 25px;
    filter: invert(99%) sepia(1%) saturate(6218%) hue-rotate(189deg)
      brightness(119%) contrast(100%);
    &:hover {
      cursor: pointer;
      opacity: 0.7;
      transform: scale(1.2);
    }
  }
`;
