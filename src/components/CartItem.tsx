import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { TCartItem } from '../models/types';

const CartItem: FC<{data: TCartItem}> = ({data}) => {
  const history = useHistory();
  const { id, image_link, price, brand, category } = data.product;

  const clickHandler = (): void => history.push(`/product/${id}`); 

  return (
    <div className="cart-item__content" onClick={clickHandler}>
     <img width="75" height="85" className="cart-item__image" src={image_link} alt={category} />
      <div className="cart-item__information">
        <p className="cart-item__brand">{brand}</p>
        <h3 className="cart-item__name">{category.replace("_", " ")}</h3>
        {data.color && <p className="cart-item__color">Color: {data.color.colour_name || `<span style={{background: ${data.color.hex_value}}}></span>`}</p>}
        <h4 className="cart-item__price">${price}</h4>
      </div>
    </div>
  )
}

export default CartItem;

