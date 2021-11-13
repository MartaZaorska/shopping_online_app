import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { TCartItem } from '../models/types';
import { FaPlus, FaMinus } from 'react-icons/fa';

const CartItem: FC<{data: TCartItem, addHandler: Function, removeHandler: Function}> = ({data, addHandler, removeHandler}) => {
  const { id, image_link, price, brand, category } = data.product;

  return (
    <div className="cart-item">
      <Link className="cart-item__content" to={`/product/${id}`}>
        <img width="74" height="85" className="cart-item__image" src={image_link} alt={category} />
        <div className="cart-item__information">
          <p className="cart-item__brand">{brand}</p>
          <h3 className="cart-item__name">{category.replace("_", " ")}</h3>
          {data.color && <p className="cart-item__color">Color: {data.color.colour_name || `<span style={{background: ${data.color.hex_value}}}></span>`}</p>}
          <h4 className="cart-item__price">${price}</h4>
        </div>
      </Link>
      <div className="cart-item__controls">
        <button onClick={() => removeHandler(data.product.id, data.color)} aria-label="Remove from cart"><FaMinus className="icon" /></button>
        <span>{`${data.quantity}`.padStart(2, '0')}</span>
        <button onClick={() => addHandler(data.product, data.color)} aria-label="Add to cart"><FaPlus className="icon" /></button>
      </div>
    </div>
  )
}

export default memo(CartItem);

