/* eslint-disable no-useless-constructor */
import React from "react";
import image from "../img/pexels-cottonbro-4066293.jpg";
import { WithContext } from "./WithContext";
import { motion } from "framer-motion";

function Product(props) {
  const { id, imgUrl, name, price, handleClick } = props;

  return (
    <motion.div animate={{ scale: 1.02 }} transition={{ duration: 0.5 }}>
      <div className="product" data-id={id}>
        <img className="product__img" src={imgUrl} alt="product_img" />
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
    </motion.div>
  );
}

export default WithContext(Product);
