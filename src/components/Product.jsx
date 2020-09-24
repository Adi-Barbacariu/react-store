/* eslint-disable no-useless-constructor */
import React from "react";
import image from "../img/pexels-cottonbro-4066293.jpg";
import FunctionsContext from "../context";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = FunctionsContext;

  render() {
    const { id, name, price } = this.props;

    const { handleClick } = this.context;

    return (
      <div className="product" data-id={id}>
        <img className="product__img" src={image} alt="product_img" />
        <div className="container">
          <p className="product__name">{name}</p>
          <p className="product__price">${price}</p>
          <button
            className="product__buy-btn"
            onClick={() => handleClick(id, name, price)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    );
  }
}
