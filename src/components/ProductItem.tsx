import { FC, memo } from 'react';
import { useHistory } from 'react-router-dom';

import { TProduct } from '../models/types';

const ProductItem: FC<{product: TProduct}> = ({product}) => {
  const history = useHistory();
  const { id, name, image_link, price, brand } = product;

  const clickHandler = (): void => history.push(`/product/${id}`);

  return (
    <div className="product-item" onClick={clickHandler}>
      <img src={image_link} width="235" height="280" alt={name} className="product-item__image" />
      <p className="product-item__brand">{brand}</p>
      <h4 className="product-item__name" dangerouslySetInnerHTML={{__html: `${name}`}}></h4>
      <div className="product-item__price"><span>${price}</span></div>
    </div>
  );
}

export default memo(ProductItem);