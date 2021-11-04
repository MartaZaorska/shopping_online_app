import React, { FC, memo, useMemo, useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';

import { DISCOUNT_CODE, DISCOUNT } from '../constants';

const Summary: FC<{total: number, clearCart: Function}> = ({total, clearCart}) => {
  const [discount, setDiscount] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  
  const subtotal: number = useMemo(() => discount ? +(total * (1 - DISCOUNT / 100)).toFixed(2) : total, [discount, total]);

  const delivery: number = useMemo(() => subtotal >= 100 ? 0 : 9.99, [subtotal]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => setCode(e.currentTarget.value);

  const submitHandler = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault(); 
    if(code === DISCOUNT_CODE) {
      setDiscount(true);
      setMessage("");
    }else{
      setCode("");
      setDiscount(false);
      setMessage("Wrong discount code");
    }
  }

  return (
    <div className="summary">
      <button onClick={() => clearCart()} className="summary__button">Clear your shopping bag</button>
      <form className="summary__form" onSubmit={submitHandler}>
        <input type="text" disabled={discount} placeholder="Discount Code" value={code} onChange={changeHandler} />
        <button type="submit" disabled={discount}><BsCheckLg className="icon" /></button>
      </form>
      {message && <p className="summary__message">{message}</p>}
      <p className="summary__text"><span>Subtotal</span><span className="bold">${subtotal}</span></p>
      <p className="summary__text"><span>Delivery</span><span className="bold">${delivery}</span></p>
      <p className="summary__text total"><span>Total</span><span className="bold">${(subtotal + delivery).toFixed(2)}</span></p>
      <button className="checkout__button">Proceed to checkout</button>
    </div>
  );
}

export default memo(Summary);