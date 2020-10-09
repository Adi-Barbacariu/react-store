/* eslint-disable no-useless-constructor */
import React from "react";
import { WithContext } from "./WithContext";
import Modal from "./Modal";
import CartItems from "./CartItems";
import { deepCompare } from "../compare2Objs";
import CartCheckout from "./CartCheckout";
import { calculateCartData } from "../calcCartData";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { handleCheckout, cartItems, handleCartData } = this.props;

    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("modal__wrapper")) {
        handleCheckout();
      }
    });

    const cartData = calculateCartData(cartItems);

    handleCartData(cartData);
  }

  componentDidUpdate() {
    const { cartItems, handleCartData, cartData } = this.props;

    const newCartData = calculateCartData(cartItems);

    if (!deepCompare(cartData, newCartData)) {
      handleCartData(newCartData);
    }
  }

  render() {
    const { cartItems, handleCheckout, cartModal, cartData } = this.props;
    const { totalPrice, totalItems } = cartData;

    if (cartItems.length === 0) {
      return (
        <div className="cart">
          <p className="cart__title">Cart</p>
          <h1>No items in cart.</h1>
        </div>
      );
    }

    return (
      <>
        <div className="cart">
          <p className="cart__title">Cart</p>

          <div className="cart__container">
            <CartItems items={cartItems} />

            <CartCheckout
              totalPrice={totalPrice}
              totalItems={totalItems}
              handleCheckout={handleCheckout}
            />
          </div>
        </div>

        <Modal isEnabled={cartModal} />
      </>
    );
  }
}

export default WithContext(Cart);
