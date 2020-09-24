/* eslint-disable no-useless-constructor */
import React from "react";
import Header from "./Header";
import Products from "./Products";

export default class Store extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="store">
        <Header />
        <Products />
      </div>
    );
  }
}
