import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import FunctionsContext from "../context";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      cart: [],
      productsNumber: 0,
      modalId: -1,
      input: "",
      cartModal: false,
      cartData: { totalPrice: 0, totalItems: 0 },
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleProductsNumber = this.handleProductsNumber.bind(this);
    this.handleModalProduct = this.handleModalProduct.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFetchItems = this.handleFetchItems.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleCartData = this.handleCartData.bind(this);
    this.enableClickEventOnProduct = this.enableClickEventOnProduct.bind(this);
  }

  enableClickEventOnProduct(event, product) {
    if (event.target.nodeName !== "BUTTON") {
      const id = product.getAttribute("data-id");

      this.handleModalProduct(id);
    }
  }

  handleCartData(cartData) {
    this.setState({ cartData });
  }

  handleCheckout() {
    this.setState((state) => {
      return {
        cartModal: !state.cartModal,
      };
    });
  }

  handleFetchItems(items) {
    this.setState({ items });
  }

  handleInputChange(event) {
    this.setState({ input: event.target.value });
  }

  handleModalProduct(id) {
    this.setState({ modalId: id });

    // disable scroll
    document.body.classList.add("stop-scrolling");
  }

  handleCloseModal() {
    this.setState({ modalId: -1 });

    // enable scroll
    document.body.classList.remove("stop-scrolling");
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
          handleModalProduct: this.handleModalProduct,
          modalId: this.state.modalId,
          handleCloseModal: this.handleCloseModal,
          input: this.state.input,
          handleInputChange: this.handleInputChange,
          items: this.state.items,
          handleFetchItems: this.handleFetchItems,
          cartModal: this.state.cartModal,
          handleCheckout: this.handleCheckout,
          cartData: this.state.cartData,
          handleCartData: this.handleCartData,
          enableClickEventOnProduct: this.enableClickEventOnProduct,
        }}
      >
        <Navigation />
        <Footer />
      </FunctionsContext.Provider>
    );
  }
}
