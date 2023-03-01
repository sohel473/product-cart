import { ADD_TO_CART } from "../Product/actionTypes";

import { increaseQuantity } from "../Product/actions";

const cartMiddleware =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === ADD_TO_CART) {
      // console.log(getState().product);
      const { cart } = getState().product;
      // console.log(cart);
      // console.log(action.payload);
      const existingItem = cart.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (existingItem) {
        dispatch(increaseQuantity(action.payload.id));
        return;
      }
    }

    return next(action);
  };

export default cartMiddleware;
