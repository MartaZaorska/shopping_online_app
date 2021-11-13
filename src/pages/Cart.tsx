import { FC, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectShopState, actionCreators } from '../state';
import Summary from '../components/Summary';
import EmptyCart from '../components/EmptyCart';
import CartItem from '../components/CartItem';
import { TProduct, TColor } from '../models/types';

const Cart: FC<{total: number}> = ({total}) => {
  const { cart, products } = useSelector(selectShopState);

  const dispatch = useDispatch();
  const { addToCart, removeFromCart, clearCart } = bindActionCreators(actionCreators, dispatch);

  const addHandler = useCallback((product: TProduct, color: TColor | null): void => {
    addToCart(product, color);
  }, [addToCart]);

  const removeHandler = useCallback((id: number, color: TColor | null): void => {
    removeFromCart(id, color);
  }, [removeFromCart]);

  if(cart.length === 0) return <EmptyCart products={products?.slice(0,3) || []} />

  return (
    <section className="cart content">
      <div className="cart__products">
        {cart.map(item => (
          <CartItem data={item} addHandler={addHandler} removeHandler={removeHandler} key={`${item.product.id}-${item.color?.hex_value}`}/>
        ))}
      </div>
      <Summary clearCart={clearCart} total={total} />
    </section>
  );
}

export default memo(Cart);

/*
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
*/
