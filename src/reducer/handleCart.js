const cart = [];

function handleCart(state = cart, action) {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [...state, { ...product, qty: 1 }];
      }

    case "DELItem":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
    case "DECREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, qty: Math.max(0, item.qty - 1) }
          : item
      );
    case "REMOVEFROMCART":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

export default handleCart;
