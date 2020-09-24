/* eslint-disable no-useless-constructor */
import React from "react";
import Product from "./Product";

export default class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="products">
        <Product id="143" name="blue t-shirt" price="30" />
        <Product id="254" name="white t-shirt" price="50" />
        <Product id="312" name="skinny jeans" price="90" />
        <Product id="477" name="jacket" price="150" />
        <Product id="501" name="vest" price="70" />
        <Product id="697" name="scarf" price="25" />
        <Product id="765" name="rain jacket" price="175" />
        <Product id="820" name="elegant shoes" price="180" />
      </div>
    );
  }
}
