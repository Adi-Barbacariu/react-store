/* eslint-disable no-useless-constructor */
import React from "react";
import { WithContext } from "./WithContext";
import { motion } from "framer-motion";

function Product(props) {
  const { id, imgUrl, name, price, handleClick } = props;

  return (
    <div className="product" data-id={id}>
      <img className="product__img" src={imgUrl} alt={name} />
      <div className="container">
        <p className="product__name">{name}</p>
        <p className="product__price">${price}</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="product__buy-btn"
          onClick={() => handleClick(id, name, price)}
        >
          ADD TO CART
        </motion.button>
      </div>
    </div>
  );
}

export default WithContext(Product);
