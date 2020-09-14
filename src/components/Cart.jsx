/* eslint-disable no-useless-constructor */
import React from "react";
import Item from "./Item";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;
    let totalPrice = 0;
    let totalItems = 0;

    if (items.length === 0) {
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
            {items.map((current) => {
              totalPrice += current.quantity * current.price;
              totalItems += current.quantity;

              return (
                <Item
                  handleIncrease={this.props.handleIncrease}
                  handleDecrease={this.props.handleDecrease}
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
}
