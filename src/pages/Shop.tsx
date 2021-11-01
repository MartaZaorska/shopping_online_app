import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { bindActionCreators  } from 'redux';
import { actionCreators } from '../state';
import { RootState } from '../state/reducers';

const Shop: FC = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.shop);
  const { addToCart } = bindActionCreators(actionCreators, dispatch);

  return (
    <div>shop</div>
  );
}

export default Shop;