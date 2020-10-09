import React from "react";
import Header from "./Header";
import Products from "./Products";
import { WithContext } from "./WithContext";
import { WithLoading } from "./WithLoading";

const ProductsWithLoading = WithLoading(Products);

class Store extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    const { handleProductsNumber, handleFetchItems } = this.props;

    this.setState({ loading: true });

    // set timeout is used for UX, it slows down the data fetching with 2 seconds
    setTimeout(async () => {
      const res = await fetch("http://localhost:4000/items");

      const data = await res.json();

      handleProductsNumber(data.length);

      handleFetchItems(data);

      this.setState({ loading: false });
    }, 2000);
  }

  filterItems(arr, input) {
    return arr.filter((current) => current.name.includes(input.toLowerCase()));
  }

  render() {
    let { items } = this.props;
    const { handleProductsNumber, input, handleInputChange } = this.props;

    if (input !== "") {
      items = this.filterItems(items, input);

      handleProductsNumber(items.length);
    }

    return (
      <div className="store">
        <Header handleInputChange={handleInputChange} />
        <ProductsWithLoading
          isLoading={this.state.loading}
          input={this.state.input}
          products={items}
        />
      </div>
    );
  }
}

export default WithContext(Store);
