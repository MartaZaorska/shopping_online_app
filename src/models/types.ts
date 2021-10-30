export type TColor = {
  hex_value: string,
  colour_name: string | null
};

export type TProduct = {
  id: number,
  brand: string,
  name: string,
  price: number,
  rating: number | null,
  image_link: string,
  description: string,
  category: string,
  created_at: number,
  product_colors: TColor[] | null
};

export type TSort = 'recommended' | 'price high to low' | 'price low to high' | 'new in';

export type TCategory = 'all categories' | 'blush' | 'bronzer' | 'eyebrow' | 'eyeliner' | 'eyeshadow' | 'foundation' | 'lip liner' | 'lipstick'; 

export type TBrand = 'all brands' | 'nyx' | 'clinique' | "marcelle";

export type TFilters = {
  sortBy: TSort,
  category: TCategory,
  brand: TBrand
};