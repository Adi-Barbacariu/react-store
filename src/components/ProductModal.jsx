import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../sass/product-modal.scss";

function ProductModal(props) {
  const { isEnabled, id, imgUrl, name, price, handleClick } = props;

  useEffect(() => {
    document.addEventListener("click", (event) => {
      console.log(event.target);
    });
  });

  return (
    <div className={`product-modal__wrapper ${isEnabled ? "showing" : ""}`}>
      <div className="product-modal" data-id={id}>
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
            onClick={() => handleClick(id, name, price)}
          >
            ADD TO CART
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
