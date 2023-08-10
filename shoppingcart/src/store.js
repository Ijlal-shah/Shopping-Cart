import { createStore } from 'redux';

const initialState = {
  products: [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    {id:  4, name: 'books ',    price :300}
  ],
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };
    case 'UPDATE_PRODUCT': 
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? { ...product, ...action.payload.updatedProduct } : product
        ),
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload.updatedProduct } : item
        ),
      };
    default:
      return state;
  }
};

const store = createStore(cartReducer);

export default store;
