import { TColor, TCartItem, TState } from '../../models/types';
import { Action, ActionType } from '../actions/actions';

const initialState: TState = {
  products: [],
  cart: [],
  filters: {
    category: 'all categories',
    brand: 'all brands',
    sortBy: 'recommended',
  },
};

const getIndexInCart = (cart: TCartItem[], id: number, color: TColor | null): number => {
  return cart.findIndex(item => {
    if(id !== item.product.id) return false;
    return color && item.color ? color.hex_value === item.color.hex_value : true;
  });
}

const reducer = (state: TState = initialState, action: Action): TState => {
  switch(action.type){
    case ActionType.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case ActionType.ADD_TO_CART:
      const indexCart = getIndexInCart(state.cart, action.payload.product.id, action.payload.color);
      const cart = [...state.cart];
      indexCart < 0 ? cart.push({...action.payload, quantity: 1}) : cart[indexCart].quantity++;
      return {
        ...state,
        cart
      };
    case ActionType.REMOVE_FROM_CART:
      const index = getIndexInCart(state.cart, action.payload.id, action.payload.color);
      const updatedCart = [...state.cart];
      if(index < 0) return state;
      updatedCart[index].quantity > 1 ? updatedCart[index].quantity-- : updatedCart.splice(index, 1);
      return {
        ...state,
        cart: updatedCart
      };
    case ActionType.CLEAR_CART:
      return {
        ...state,
        cart: []
      };
    case ActionType.CHANGE_FILTERS:
      return {
        ...state,
        filters: action.payload
      };
    case ActionType.RESET_FILTERS:
      return {
        ...state,
        filters: { brand: 'all brands', category: 'all categories', sortBy: 'recommended' }
      };
    default:
      return state;
  }
}

export default reducer;
