import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from "react-lazyload";

import { TProduct } from '../models/types';

const ProductItem: FC<{product: TProduct}> = ({product}) => {
  const { id, name, image_link, price, brand } = product;

  return (
    <Link className="product-item" to={`/product/${id}`}>
      <div className="product-item__image">
        <LazyLoad>
          <img src={image_link} alt={name} width="238" height="277" />
        </LazyLoad>
      </div>
      <p className="product-item__brand">{brand}</p>
      <h4 className="product-item__name" dangerouslySetInnerHTML={{__html: `${name}`}}></h4>
      <div className="product-item__price"><span>${price}</span></div>
    </Link>
  );
}

export default memo(ProductItem);


/*

      */