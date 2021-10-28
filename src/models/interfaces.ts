import { TProduct, TFilters } from './types';

export interface IShop {
  products: TProduct[],
  cart: {
    product: TProduct,
    amount: number
  }[],
  total: number,
  filters: TFilters,
  addProducts: (products: TProduct[]) => void,
  addToCart: (product: TProduct) => void,
  removeFromCart: (product: TProduct) => void,
  updateFilters: (filters: TFilters) => void,
  clearCart: () => void
};