import { TFilters, TProduct } from './models/types';

export const filterData = (products: TProduct[], filters: TFilters, search: string): TProduct[] => {
  return products.filter(item => {
    if(filters.brand !== "all brands" && item.brand !== filters.brand) return false;
    if(filters.category !== 'all categories' && item.category !== filters.category) return false;
    if(search === "") return true;

    const searchValue = search.toLowerCase().trim().normalize();
    return item.name.toLowerCase().trim().normalize().indexOf(searchValue) >= 0 || item.description.toLowerCase().trim().normalize().indexOf(searchValue) >= 0;

  }).sort((a,b) => {
    if(filters.sortBy === 'price high to low') return b.price - a.price;
    if(filters.sortBy === 'price low to high') return a.price - b.price;
    if(filters.sortBy === "new in") return b.created_at - a.created_at;
    return (b.rating || 0) - (a.rating || 0);
  });
}

export function updateProduct(data: any): TProduct {
  return {
    id: data.id,
    brand: data.brand,
    name: data.name,
    price: parseFloat(data.price) || 19.99,
    rating: data.rating,
    image_link: data.image_link,
    description: data.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis et urna sit amet tincidunt. Quisque ac erat sit amet erat efficitur ultricies. Nullam sodales efficitur nibh, non porta felis egestas vitae. Sed non feugiat lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur imperdiet libero eget semper maximus. Morbi scelerisque vestibulum eros, ut tincidunt nunc lobortis ut. Aenean aliquet est a condimentum vulputate. Proin porttitor ligula justo. Sed nunc neque, dictum rutrum massa eget, facilisis molestie est. Sed interdum sem at viverra rutrum.",
    category: data.product_type,
    created_at: new Date(data.created_at).getTime(),
    colors: data.product_colors
  }
}