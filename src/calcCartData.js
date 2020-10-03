export function calculateCartData(items) {
  let total = 0;
  let itemsNumber = 0;

  items.forEach((current) => {
    total += current.quantity * current.price;
    itemsNumber += current.quantity;
  });

  return { totalPrice: total, totalItems: itemsNumber };
}
