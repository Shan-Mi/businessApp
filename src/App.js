import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <RegisterForm />
        </Route>

        <Route path="/login" exact component={Login} />

        <Route path="/home" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
