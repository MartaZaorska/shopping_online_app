import { useMemo } from 'react';
import { TCart } from '../models/types';

const useTotal = (cart: TCart[]): number => {
  const total: number = useMemo(() => {
    let t = 0;
    cart.forEach(item => t += item.product.price * item.quantity);
    //Special Offer, Buy 3 products from clinique, get 1 free (the cheapest product is for free)
    const cliniqueItems: number[] = [];

    cart.forEach(item => {
      if(item.product.brand === "clinique"){
        for(let i = 0; i < item.quantity; i++) cliniqueItems.push(item.product.price);
      }
    });

    let quantity = Math.floor(cliniqueItems.length / 3);

    for(let i = 0; quantity > 0; i++, quantity--){
      t -= cliniqueItems[i];
    }

    return t;
  }, [cart]);

  return total;
};

export default useTotal;