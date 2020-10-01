/* eslint-disable no-useless-constructor */
import React from "react";
import Product from "./Product";
import { WithContext } from "./WithContext";

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };
  }

  async componentDidMount() {
    const { handleProductsNumber } = this.props;

    const res = await fetch("http://localhost:4000/items");

    const data = await res.json();

    handleProductsNumber(data.length);

    this.setState({ items: data });
  }

  render() {
    const { items } = this.state;

    return (
      <div className="products">
        {items.map((current) => (
          <Product
            id={current.id}
            name={current.name}
            price={current.price}
            imgUrl={current.image}
          />
        ))}
      </div>
    );
  }
}

export default WithContext(Products);
