import { TSort, TCategory, TBrand } from './models/types';

export const CATEGORIES: TCategory[] = ['all categories', 'blush', 'bronzer', 'eyebrow', 'eyeliner', 'eyeshadow', 'foundation', 'lipstick'];

export const SORT: TSort[] = ['recommended', 'price high to low', 'price low to high', 'new in'];

export const BRANDS: TBrand[] = ['all brands', 'clinique', "marcelle"];

export const URLS: string[] = ['https://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique',  'https://makeup-api.herokuapp.com/api/v1/products.json?brand=marcelle'];

export const DISCOUNT: number = 10;

export const DISCOUNT_CODE: string = "SHOP10";