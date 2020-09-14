/* eslint-disable no-useless-constructor */
import React from "react";
import image from "../img/pexels-cottonbro-4066293.jpg";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, name, price, handleClick } = this.props;

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
