/* eslint-disable no-useless-constructor */
import React from "react";
import { WithContext } from "./WithContext";
import MotionButton from "./MotionButton";
import { motion } from "framer-motion";

function Item(props) {
  const { id, name, price, quantity, handleIncrease, handleDecrease } = props;

  return (
    <motion.div
      animate={{ scale: 1.02 }}
      transition={{ duration: 0.5 }}
      className="item"
      data-id={id}
    >
      <div className="item__info">
        <p className="item__name">{name}</p>
        <p className="item__price">${price}</p>
      </div>
      <div className="item__qty-container">
        <p className="item__qty">Quantity: {quantity}</p>
        <MotionButton
          onClick={() => handleIncrease(id)}
          className="item__increase-qty"
        >
          +
        </MotionButton>
        <MotionButton
          onClick={() => handleDecrease(id)}
          className="item__decrease-qty"
        >
          -
        </MotionButton>
      </div>
    </motion.div>
  );
}

export default WithContext(Item);
