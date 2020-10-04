/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Store from "./Store";
import Cart from "./Cart";

export default function Navigation(props) {
  return (
    <Router>
      <div className="nav">
        <NavLink
          to="/store"
          activeStyle={{ textDecoration: "underline", opacity: "1" }}
          className="nav__store"
        >
          Store
        </NavLink>
        <NavLink
          to="/cart"
          activeStyle={{ textDecoration: "underline", opacity: "1" }}
          className="nav__cart"
        >
          Cart
        </NavLink>
      </div>

      <Switch>
        <Route exact path="/">
          <Store />
        </Route>
        <Route path="/store">
          <Store />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}
