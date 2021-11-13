import { FC, memo } from 'react';
import { TProduct } from '../models/types';

import ProductItem from './ProductItem';

const EmptyCart: FC<{products?: TProduct[]}> = ({products = []}) => {
  return (
    <div className="empty-cart content">
      <h4 className="empty-cart__subtitle">Your bag is empty</h4>
      {products.length > 0 && (
        <>
          <h2>Recommended products</h2>
          <div className="empty-cart__content">
            {products.map(item => (
              <ProductItem key={item.id} product={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default memo(EmptyCart);