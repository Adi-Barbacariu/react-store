/* eslint-disable no-useless-constructor */
import React from "react";
import Item from "./Item";
import { WithContext } from "./WithContext";

function Cart(props) {
  const { cartItems } = props;

  let totalPrice = 0;
  let totalItems = 0;

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <p className="cart__title">Cart</p>
        <h1>No items in cart.</h1>
      </div>
    );
  }

  return (
    <div className="cart">
      <p className="cart__title">Cart</p>
      <div className="cart__container">
        <div className="cart__items">
          {cartItems.map((current) => {
            totalPrice += current.quantity * current.price;
            totalItems += current.quantity;

            return (
              <Item
                key={current.id}
                id={current.id}
                name={current.name}
                price={current.price}
                quantity={current.quantity}
              />
            );
          })}
        </div>

        <div className="cart__check">
          <p className="cart__total-items">Items: {totalItems}</p>
          <p className="cart__total-price">Total: ${totalPrice}</p>
          <button className="cart__checkout-btn">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

export default WithContext(Cart);
