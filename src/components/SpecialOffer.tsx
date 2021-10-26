import { FC } from 'react';

const SpecialOffer: FC = () => {
  return (
    <section className="special-offer">
      <p>Special Offer</p>
      <h2>Buy 3 products from <span className="font">Clinique</span><br />Get 1 <span className="bold">FREE</span></h2>
      <button>Shop now</button>
    </section>
  )
}

export default SpecialOffer;