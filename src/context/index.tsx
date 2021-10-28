import React, { useState, useEffect } from 'react';

import { IShop } from '../models/interfaces';
import { TProduct, TFilters } from '../models/types';

export const defaultState: IShop = {
  products: [],
  cart: [],
  total: 0,
  filters: {
    category: 'all categories',
    brand: 'all brands',
    sortBy: 'recommended',
  },
  addProducts: (products: TProduct[]) => {},
  addToCart: (product: TProduct) => {},
  removeFromCart: (product: TProduct) => {},
  updateFilters: (filters: TFilters) => {},
  clearCart: () => {}
};

const ShopContext = React.createContext<IShop>(defaultState);

export const ShopProvider: React.FC<React.ReactNode> = ({children}) => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [cart, setCart] = useState<{product: TProduct, amount: number}[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [filters, setFilters] = useState<TFilters>({...defaultState.filters});


  const addProducts = (products: TProduct[]): void => {};

  const addToCart = (product: TProduct): void => {};

  const removeFromCart = (product: TProduct): void => {};

  const updateFilters = (filters: TFilters): void => {};
  
  const clearCart = (): void => {};

  return (
    <ShopContext.Provider value={{products, cart, total, filters, addProducts, addToCart, removeFromCart, updateFilters, clearCart}}>
      {children}
    </ShopContext.Provider>
  );
}

export const useShopContext = () => React.useContext<IShop>(ShopContext);

export default ShopContext;