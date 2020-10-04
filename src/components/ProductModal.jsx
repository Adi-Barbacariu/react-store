import React from "react";
import { motion } from "framer-motion";
import "../sass/product-modal.scss";
import { WithContext } from "./WithContext";
import exitIcon from "../img/cancel.png";

function ProductModal(props) {
  const { id, imgUrl, name, price, handleClick, handleCloseModal } = props;

  return (
    <div className="product-modal__wrapper">
      <div className="product-modal" data-id={id}>
        <img
          className="product-modal__exit"
          src={exitIcon}
          alt="close"
          onClick={handleCloseModal}
        />

        <img className="product-modal__img" src={imgUrl} alt={name} />

        <div className="product-modal__container">
          <h2 className="product-modal__name">{name}</h2>
          <p className="product-modal__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est culpa
            debitis et eos voluptatum, saepe facilis error accusantium at ad
            incidunt vel reiciendis quae quisquam, atque dolor eaque, sunt ut
            voluptate.
          </p>
          <p className="product-modal__price">${price}</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="product__buy-btn product-modal__buy-btn"
            onClick={() => {
              handleClick(id, name, price);
              handleCloseModal();
            }}
          >
            ADD TO CART
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default WithContext(ProductModal);
