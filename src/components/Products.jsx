/* eslint-disable no-useless-constructor */
import React from "react";
import Product from "./Product";

export default class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };
  }

  async componentDidMount() {
    const res = await fetch("http://localhost:4000/items");

    const data = await res.json();

    this.setState({ items: data });
  }

  render() {
    const { items } = this.state;

    return (
      <div className="products">
        {items.map((current, index) => (
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
