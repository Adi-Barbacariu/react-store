/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Store from "./Store";
import Cart from "./Cart";

export default function Navigation(props) {
  return (
    <Router>
      <div className="nav">
        <Link to="/store" className="nav__store">
          Store
        </Link>
        <Link to="/cart" className="nav__cart">
          Cart
        </Link>
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
