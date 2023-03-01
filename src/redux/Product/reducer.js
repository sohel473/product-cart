import {
  ADD_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./actionTypes";
// import initialState from "./initialStates";

const initialState = {
  products: [
    // {
    //   id: 436,
    //   name: "Classic T-Shirt",
    //   category: "Clothing",
    //   image: "https://source.unsplash.com/featured/?t-shirt",
    //   price: 24,
    //   quantity: 5,
    // },
    // {
    //   id: 728,
    //   name: "Leather Handbag",
    //   category: "Accessories",
    //   image: "https://source.unsplash.com/featured/?leather-handbag",
    //   price: 79,
    //   quantity: 50,
    // },
    // {
    //   id: 991,
    //   name: "Smartphone Charger",
    //   category: "Electronics",
    //   image: "https://source.unsplash.com/featured/?charger",
    //   price: 14,
    //   quantity: 200,
    // },
    // {
    //   id: 105,
    //   name: "Wooden Desk",
    //   category: "Furniture",
    //   image: "https://source.unsplash.com/featured/?desk",
    //   price: 199,
    //   quantity: 10,
    // },
    // {
    //   id: 1,
    //   name: "Organic Apples",
    //   category: "Fruit",
    //   image: "https://source.unsplash.com/featured/?apple-fruits",
    //   price: 2,
    //   quantity: 100,
    // },
  ],
  cart: [
    // {
    //   id: 1,
    //   name: "Macbook Pro",
    //   category: "Electronics",
    //   price: 2000,
    //   quantity: 4,
    //   maxQuantity: 10,
    //   image:
    //     "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80",
    // },
    // {
    //   id: 2,
    //   name: "Steam Deck",
    //   category: "Electronics",
    //   price: 500,
    //   quantity: 5,
    //   maxQuantity: 20,
    //   image:
    //     "https://images.unsplash.com/photo-1653757449444-4a608b0b6c77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    // },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case ADD_TO_CART:
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity - action.payload.quantity,
              }
            : item
        ),
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + action.payload.quantity,
              }
            : item
        ),
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),

        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
