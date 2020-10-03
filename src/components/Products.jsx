/* eslint-disable no-useless-constructor */
import React from "react";
import Product from "./Product";

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;

    return (
      <div className="products">
        {products.map((current) => (
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

export default Products;
