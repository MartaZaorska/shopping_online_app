import { Dispatch } from "redux";

import { TColor, TFilters, TProduct } from "../../models/types";
import { ActionType } from '../actions/action-types';
import { Action } from '../actions/actions';

export const setProducts = (products: TProduct[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_PRODUCTS,
      payload: products
    });
  }
}

export const addToCart = (product: TProduct, color: TColor) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_TO_CART,
      payload: { product, color }
    });
  }
}

export const removeFromCart = (id: number, color: TColor) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_FROM_CART,
      payload: { id, color }
    });
  }
}

export const clearCart = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CLEAR_CART
    });
  }
}

export const changeFilters = (filters: TFilters) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CHANGE_FILTERS,
      payload: filters
    });
  }
}

export const resetFilters = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.RESET_FILTERS
    });
  }
}