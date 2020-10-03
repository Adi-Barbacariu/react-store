import React from "react";
import MotionButton from "./MotionButton";

function Modal(props) {
  const { isEnabled } = props;

  return (
    <div className={`modal__wrapper ${isEnabled ? "" : "hide"}`}>
      <div className="modal-checkout">
        <h2 className="modal__title">Checkout</h2>
        <MotionButton className="modal__btn">BUY</MotionButton>
      </div>
    </div>
  );
}

export default Modal;
