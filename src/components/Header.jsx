/* eslint-disable no-useless-constructor */
import React from "react";
import { WithContext } from "./WithContext";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { productsNumber } = this.props;

    return (
      <React.Fragment>
        <div className="header">
          <h2 className="header__title">Store</h2>
          <h3 className="header__subtitle">Fall 2020 Collection</h3>
        </div>
        <div className="header__img"></div>
        <div className="header__search">
          <p className="header__text">{productsNumber} products</p>
          <input
            onChange={this.props.handleInputChange}
            className="header__input"
            type="text"
            name="search"
            placeholder="Search Product"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default WithContext(Header);
