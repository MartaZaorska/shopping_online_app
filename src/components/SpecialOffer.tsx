import { FC } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { actionCreators } from '../state';

const SpecialOffer: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { changeFilters } = bindActionCreators(actionCreators, dispatch);

  const clickHandler = (): void => {
    changeFilters({sortBy: "recommended", brand: "clinique", category: "all categories"});
    history.push("/shop");
  }

  return (
    <section className="special-offer">
      <p>Special Offer</p>
      <h2>Buy 3 products from <span className="font">Clinique</span><br />Get 1 <span className="bold">FREE</span></h2>
      <button onClick={clickHandler}>Shop now</button>
    </section>
  )
}

export default SpecialOffer;