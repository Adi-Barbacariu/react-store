/* eslint-disable no-useless-constructor */
import React from "react";
import Header from "./Header";
import Products from "./Products";

export default class Store extends React.Component {
  constructor(props) {
    super(props);

    this.state = { input: "" };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div className="store">
        <Header handleInputChange={this.handleInputChange} />
        <Products input={this.state.input} />
      </div>
    );
  }
}
