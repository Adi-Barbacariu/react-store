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

  filterItems(arr, input) {
    return arr.filter((current) => current.name.includes(input.toLowerCase()));
  }

  render() {
    let { items } = this.state;
    const { input } = this.props;

    if (input !== "") {
      items = this.filterItems(items, input);

      this.props.handleProductsNumber(items.length);
    }

    return (
      <div className="products">
        {items.map((current) => (
          <Product
            key={current.id}
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
