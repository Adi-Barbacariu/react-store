/* eslint-disable no-useless-constructor */
import React from "react";
import Item from "./Item";
import { WithContext } from "./WithContext";
import MotionButton from "./MotionButton";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modal: false };
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
  }

  render() {
    const { cartItems } = this.props;

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
      <>
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
              <MotionButton
                onClick={this.handleCheckout}
                className="cart__checkout-btn"
              >
                CHECKOUT
              </MotionButton>
            </div>
          </div>
        </div>

        <div className={`modal__wrapper ${this.state.modal ? "" : "hide"}`}>
          <div className="modal-checkout">
            <h2 className="modal__title">Checkout</h2>
            <MotionButton className="modal__btn">BUY</MotionButton>
          </div>
        </div>
      </>
    );
  }
}

export default WithContext(Cart);
