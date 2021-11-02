import { TFilters, TProduct } from './models/types';

export const filterData = (products: TProduct[], filters: TFilters, search: string): TProduct[] => {
  return products.filter(item => {
    if(filters.brand !== "all brands" && item.brand !== filters.brand) return false;
    if(filters.category !== 'all categories' && item.category !== filters.category) return false;
    if(search === "") return true;

    const sTmp = search.toLowerCase().trim().normalize();
    const nTmp = item.name.toLowerCase().trim().normalize();
    const dTmp = item.description.toLowerCase().trim().normalize();
    return nTmp.indexOf(sTmp) >= 0 || dTmp.indexOf(sTmp) >= 0;
  }).sort((a,b) => {
    if(filters.sortBy === 'price high to low') return b.price - a.price;
    if(filters.sortBy === 'price low to high') return a.price - b.price;
    if(filters.sortBy === "new in") return b.created_at - a.created_at;
    return (b.rating || 0) - (a.rating || 0);
  });
}