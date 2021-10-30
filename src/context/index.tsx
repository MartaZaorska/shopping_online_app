import React, { useState, useEffect, useMemo } from 'react';

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
  const [filters, setFilters] = useState<TFilters>({...defaultState.filters});

  const total: number = useMemo(() => {
    let t = 0;
    cart.map(item => t += item.amount * item.product.price);
    return t;
  }, [cart]);

  const addProducts = (products: TProduct[]): void => setProducts(products);

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