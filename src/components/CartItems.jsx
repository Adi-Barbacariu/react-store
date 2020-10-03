import React from "react";
import Item from "./Item";

function CartItems(props) {
  const { items } = props;

  return (
    <div className="cart__items">
      {items.map((current) => {
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
  );
}

export default CartItems;
