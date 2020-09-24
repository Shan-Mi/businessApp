import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import CustomerPage from "./pages/CustomerPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={RegisterForm} />
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route
          path="/home/:id"
          exact
          render={(props) => <CustomerPage {...props} />}
        />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
