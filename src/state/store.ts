import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';

import { reducers } from "./reducers";
import { TState } from '../models/types';

function saveToSessionStorage(state: {shop: TState} | {shop: {}}){
  try {
    sessionStorage.setItem("shopping-online-app", JSON.stringify({...state.shop, products: []}));
  } catch(err) {
    console.log(err);
  }
}

function loadFromSessionStorage(){
  try {
    const sessionData = sessionStorage.getItem("shopping-online-app");
    return sessionData === null ? undefined : {shop: JSON.parse(sessionData)};
  } catch(err) {
    return undefined;
  }
}

export const store = createStore(reducers, loadFromSessionStorage(), applyMiddleware(thunk));

store.subscribe(() => saveToSessionStorage(store.getState()));