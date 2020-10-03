import React from "react";
import MotionButton from "./MotionButton";

function CartCheckout(props) {
  const { totalItems, totalPrice, handleCheckout } = props;

  return (
    <div className="cart__check">
      <p className="cart__total-items">Items: {totalItems}</p>
      <p className="cart__total-price">Total: ${totalPrice}</p>
      <MotionButton onClick={handleCheckout} className="cart__checkout-btn">
        CHECKOUT
      </MotionButton>
    </div>
  );
}
export default CartCheckout;
