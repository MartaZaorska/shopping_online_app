import { combineReducers } from "redux";
import shopReducer from './shopReducer';

export const reducers = combineReducers({
  shop: shopReducer
});

export type RootState = ReturnType<typeof reducers>;