import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import { GlobalStyle } from "./GlobalStyle";
import CustomerPage from "./pages/CustomerPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";

import styled from "styled-components";
const RootContainer = styled.div`
  min-height: 100vh;
`;

function App() {
  return (
    <RootContainer className="App">
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={RegisterForm} />
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/home/:id" exact component={CustomerPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </RootContainer>
  );
}

export default App;
/* 
font-family: 'Pacifico', cursive;  => title
font-family: 'Lato', sans-serif;
font-family: 'PT Sans Narrow', sans-serif;
https://dribbble.com/shots/5729803-Registration-Form-With-Dark-UI/attachments => layout for register
*/
