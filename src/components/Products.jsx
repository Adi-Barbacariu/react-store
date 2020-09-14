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
        <Product
          handleClick={this.props.handleClick}
          id="143"
          name="blue t-shirt"
          price="30"
        />
        <Product
          handleClick={this.props.handleClick}
          id="254"
          name="white t-shirt"
          price="50"
        />
        <Product
          handleClick={this.props.handleClick}
          id="312"
          name="skinny jeans"
          price="90"
        />
        <Product
          handleClick={this.props.handleClick}
          id="477"
          name="jacket"
          price="150"
        />
        <Product
          handleClick={this.props.handleClick}
          id="501"
          name="vest"
          price="70"
        />
        <Product
          handleClick={this.props.handleClick}
          id="697"
          name="scarf"
          price="25"
        />
        <Product
          handleClick={this.props.handleClick}
          id="765"
          name="rain jacket"
          price="175"
        />
        <Product
          handleClick={this.props.handleClick}
          id="820"
          name="elegant shoes"
          price="180"
        />
      </div>
    );
  }
}
