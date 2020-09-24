/* eslint-disable no-useless-constructor */
import React from "react";
import { WithContext } from "./WithContext";

function Item(props) {
  const { id, name, price, quantity, handleIncrease, handleDecrease } = props;

  return (
    <div className="item" data-id={id}>
      <div className="item__info">
        <p className="item__name">{name}</p>
        <p className="item__price">${price}</p>
      </div>
      <div className="item__qty-container">
        <p className="item__qty">Quantity: {quantity}</p>
        <button
          onClick={() => handleIncrease(id)}
          className="item__increase-qty"
        >
          +
        </button>
        <button
          onClick={() => handleDecrease(id)}
          className="item__decrease-qty"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default WithContext(Item);
