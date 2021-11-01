import { TProduct, TColor, TFilters } from '../../models/types';
import { ActionType } from './action-types';

interface SetProductsAction {
  type: ActionType.SET_PRODUCTS,
  payload: TProduct[]
};

interface AddToCartAction {
  type: ActionType.ADD_TO_CART,
  payload: { product: TProduct, color: TColor | null }
};

interface RemoveFromCartAction {
  type: ActionType.REMOVE_FROM_CART,
  payload: { id: number, color: TColor }
};

interface ClearCartAction {
  type: ActionType.CLEAR_CART
};

interface ChangeFiltersAction {
  type: ActionType.CHANGE_FILTERS,
  payload: TFilters
};

interface ResetFiltersAction {
  type: ActionType.RESET_FILTERS
};

export type Action = SetProductsAction | AddToCartAction | RemoveFromCartAction | ClearCartAction | ChangeFiltersAction | ResetFiltersAction;