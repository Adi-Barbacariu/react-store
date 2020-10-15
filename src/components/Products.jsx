/* eslint-disable no-useless-constructor */
import React from "react";
import Product from "./Product";
import ProductModal from "./ProductModal";
import { WithContext } from "./WithContext";

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const products = Array.from(document.querySelectorAll(".product"));

    products.forEach((current) => {
      current.addEventListener("click", (e) => {
        this.props.enableClickEventOnProduct(e, current);
      });
    });
  }

  render() {
    const { products, modalId } = this.props;

    let modal = null;

    if (modalId !== -1) {
      products.forEach((current) => {
        if (current.id == modalId)
          modal = (
            <ProductModal
              id={current.id}
              name={current.name}
              price={current.price}
              imgUrl={current.image}
            />
          );
      });
    }

    return (
      <>
        {modal}

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
      </>
    );
  }
}

export default WithContext(Products);
