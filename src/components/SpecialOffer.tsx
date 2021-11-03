import { FC } from 'react';
import {  } from 'redux';

const SpecialOffer: FC = () => {
  const clickHandler = (): void => {
    //changed filters
    //history push /shop
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