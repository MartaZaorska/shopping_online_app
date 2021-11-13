import { useMemo } from 'react';
import { TCartItem } from '../models/types';

const useTotal = (cart: TCartItem[]): number => {
  const total: number = useMemo(() => {
    let t = 0;
    cart.forEach(item => t += item.product.price * item.quantity);

    //Special Offer, Buy 3 products from clinique, get 1 free (the cheapest product is for free)
    let cliniquePrices: number[] = [];

    cart.forEach(item => {
      if(item.product.brand === "clinique"){
        for(let i = 0; i < item.quantity; i++) cliniquePrices.push(item.product.price);
      }
    });

    cliniquePrices = cliniquePrices.sort((a, b) => a - b);
    let q = Math.floor(cliniquePrices.length / 3);

    for(let i = 0; q > 0; i++, q--){
      t -= cliniquePrices[i];
    }

    return +t.toFixed(2);
  }, [cart]);

  return total;
};

export default useTotal;