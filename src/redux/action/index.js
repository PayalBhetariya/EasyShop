// Add item to cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// Delete item to cart
export const delCart = (product) => {
  return {
    type: "DELItem",
    payload: product,
  };
};
// Delete item from cart
export const removeFromCart = (product) => {
  return {
    type: "REMOVEFROMCART",
    payload: product,
  };
};
// Increase quantity of item in cart
export const increaseQuantity = (productId) => {
  return {
    type: "INCREASE_QUANTITY",
    payload: productId,
  };
};

// Decrease quantity of item in cart
export const decreaseQuantity = (productId) => {
  return {
    type: "DECREASE_QUANTITY",
    payload: productId,
  };
};
