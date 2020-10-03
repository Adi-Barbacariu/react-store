import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import FunctionsContext from "../context";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { cart: [], productsNumber: 0 };

    this.handleClick = this.handleClick.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleProductsNumber = this.handleProductsNumber.bind(this);
  }

  // handle click of 'add to card' button of the product's card
  handleClick(id, name, price) {
    const { cart } = this.state;
    let found = false;

    cart.forEach((current) => {
      if (current.id === id) {
        found = true;

        current.quantity++;
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

  // handle click of increase quantity button on the cart's item
  handleIncrease(id) {
    const { cart } = this.state;

    cart.forEach((current) => {
      if (current.id === id && current.quantity < 10) {
        current.quantity++;
      }
    });

    const newCart = cart.filter((current) => current.quantity !== 0);

    this.setState({ cart: newCart });
  }

  // handle click of decrease quantity button on the cart's item
  handleDecrease(id) {
    const { cart } = this.state;

    cart.forEach((current) => {
      if (current.id === id && current.quantity > 0) {
        current.quantity--;
      }
    });

    const newCart = cart.filter((current) => current.quantity !== 0);

    this.setState({ cart: newCart });
  }

  // handle updade of products number on header component based on the search input
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
