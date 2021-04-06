import {
  SET_PRODUCTS,
  SET_CATEGORIES,
  FILTER_PRODUCTS,
  SET_COUNT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "./actions";

const initialState = {
  cart: [],
  products: [],
  categories: [],
  category: null,
  search: null,
};

export const getCartTotal = (cart) => {
  return cart.reduce((amount, item) => {
    return amount + item.price * item.count;
  }, 0);
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload.products };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
      };
    case FILTER_PRODUCTS:
      if (action.payload.filterType === "CATEGORY") {
        return { ...state, category: action.payload.filter };
      }
      if (action.payload.filterType === "SEARCH") {
        return { ...state, search: action.payload.filter };
      }

      return { ...state };
    case SET_COUNT:
      const newProducts = state.cart.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, count: action.payload.count };
        }
        return product;
      });

      return { ...state, cart: newProducts };
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload.product] };
    case REMOVE_FROM_CART:
      const newCart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      return { ...state, cart: newCart };
    case CLEAR_CART:
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default reducer;
