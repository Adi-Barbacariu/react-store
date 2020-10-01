import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import FunctionsContext from "../context";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { cart: [], productsNumber: 0 };

    this.handleClick = this.handleClick.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleProductsNumber = this.handleProductsNumber.bind(this);
  }

  handleClick(id, name, price) {
    const { cart } = this.state;
    let found = false;

    cart.forEach((current) => {
      if (current.id === id) {
        current.quantity++;
        found = true;
      }
    });

    if (!found) {
      const item = {
        id,
        name,
        price,
        quantity: 1,
      };

      cart.push(item);
    }

    this.setState({ cart });
  }

  handleIncrease(id) {
    const { cart } = this.state;

    cart.forEach((current) => {
      if (current.id === id && current.quantity < 10) {
        current.quantity++;
      }
    });

    this.setState({ cart });
  }

  handleDecrease(id) {
    const { cart } = this.state;

    cart.forEach((current, index) => {
      if (current.id === id && current.quantity > 0) {
        current.quantity--;
      }
    });

    const newCart = cart.filter((current) => current.quantity !== 0);

    this.setState({ cart: newCart });
  }

  handleProductsNumber(products) {
    this.setState({ productsNumber: products });
  }

  render() {
    return (
      <FunctionsContext.Provider
        value={{
          handleClick: this.handleClick,
          handleIncrease: this.handleIncrease,
          handleDecrease: this.handleDecrease,
          handleProductsNumber: this.handleProductsNumber,
          cartItems: this.state.cart,
          productsNumber: this.state.productsNumber,
        }}
      >
        <Navigation />
        <Footer />
      </FunctionsContext.Provider>
    );
  }
}
