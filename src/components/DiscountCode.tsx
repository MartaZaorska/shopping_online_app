import { FC } from 'react';
import { DISCOUNT, DISCOUNT_CODE } from '../constants';

const DiscountCode: FC = () => {
  return (
    <section className="stripe">
      <p>Discount code {DISCOUNT}% valid now: <span>{DISCOUNT_CODE}</span></p>
    </section>
  );
}

export default DiscountCode;