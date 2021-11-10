import { FC } from 'react';

import DeliveryOffer from '../components/DeliveryOffer';
import SpecialOffer from '../components/SpecialOffer';
import Newsletter from '../components/Newsletter';

const Home: FC = () => {
  return (
    <>
      <section className="banner"></section>
      <DeliveryOffer />
      <SpecialOffer />
      <Newsletter />
    </>
  )
}

export default Home;