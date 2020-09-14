/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Store from "./Store";
import Cart from "./Cart";

/* export default function Navigation(props) {
  return (
    <div className="nav">
      <a className="nav__store">Store</a>
      <a className="nav__cart">Cart</a>
    </div>
  );
} */

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
          <Store handleClick={props.handleClick} />
        </Route>
        <Route path="/store">
          <Store handleClick={props.handleClick} />
        </Route>
        <Route path="/cart">
          <Cart
            items={props.cart}
            handleIncrease={props.handleIncrease}
            handleDecrease={props.handleDecrease}
          />
        </Route>
      </Switch>
    </Router>
  );
}
