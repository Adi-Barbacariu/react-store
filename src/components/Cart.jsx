/* eslint-disable no-useless-constructor */
import React from "react";
import { WithContext } from "./WithContext";
import MotionButton from "./MotionButton";
import Modal from "./Modal";
import CartItems from "./CartItems";
import { deepCompare } from "../compare2Objs";
import CartCheckout from "./CartCheckout";
import { calculateCartData } from "../calcCartData";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modal: false, cartData: { totalPrice: 0, totalItems: 0 } };
  }

  handleCheckout = () => {
    this.setState((state) => {
      return {
        modal: !state.modal,
      };
    });
  };

  componentDidMount() {
    document.addEventListener("click", (event) => {
      if (
        this.state.modal &&
        event.target.classList.contains("modal__wrapper")
      ) {
        this.handleCheckout();
      }
    });

    const { cartItems } = this.props;

    const cartData = calculateCartData(cartItems);

    this.setState({ cartData });
  }

  componentDidUpdate() {
    const { cartItems } = this.props;

    const cartData = calculateCartData(cartItems);

    if (!deepCompare(this.state.cartData, cartData)) {
      this.setState({ cartData });
    }
  }

  render() {
    const { cartItems } = this.props;
    const { totalPrice, totalItems } = this.state.cartData;

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
              handleCheckout={this.handleCheckout}
            />
          </div>
        </div>

        <Modal isEnabled={this.state.modal} />
      </>
    );
  }
}

export default WithContext(Cart);
