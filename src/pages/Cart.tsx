import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaMinus, FaPlus } from 'react-icons/fa';

import { RootState, actionCreators } from '../state';
import Summary from '../components/Summary';
import ProductItem from '../components/ProductItem';
import CartItem from '../components/CartItem';

const Cart: FC<{total: number}> = ({total}) => {
  const dispatch = useDispatch();
  const { cart, products } = useSelector((state: RootState) => state.shop);
  const { addToCart, removeFromCart, clearCart } = bindActionCreators(actionCreators, dispatch);

  if(cart.length === 0) return (
    <div className="empty-cart content">
      <h4 className="empty-cart__subtitle">Your bag is empty</h4>
      <h2>Recommended products</h2>
      <div className="empty-cart__content">
        {products.slice(0,3).map(item => (
          <ProductItem key={item.id} product={item} />
        ))}
      </div>
    </div>
  )  

  return (
    <section className="cart content">
      <div className="cart__products">
        {cart.map(item => (
          <div className="cart-item" key={`${item.product.id}-${item.color?.hex_value}`}>
            <CartItem data={item} />
            <div className="cart-item__controls">
              <button onClick={() => removeFromCart(item.product.id, item.color)}><FaMinus className="icon" /></button>
              <span>{`${item.quantity}`.padStart(2, '0')}</span>
              <button onClick={() => addToCart(item.product, item.color)}><FaPlus className="icon" /></button>
            </div>
          </div>
        ))}
      </div>
      <Summary clearCart={clearCart} total={total} />
    </section>
  );
}

export default memo(Cart);