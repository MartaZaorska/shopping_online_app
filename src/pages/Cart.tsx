import { FC, memo } from 'react';

const Cart: FC<{total: number}> = ({total}) => {
  return (
    <div>cart ${total}</div>
  );
}

export default memo(Cart);