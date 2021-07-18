import React, { useContext } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { Context } from "./context/authContext";
import Customers from "./customers/Customers";
import Navbar from "./layout/Navbar";

function Router() {
  const { loggedIn } = useContext(Context);
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>

        {loggedIn === false && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}

        {loggedIn === true && (
          <>
            <Route path="/customer">
              <Customers/>
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
