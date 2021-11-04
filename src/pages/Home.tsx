import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../state';
import DeliveryOffer from '../components/DeliveryOffer';
import SpecialOffer from '../components/SpecialOffer';
import Newsletter from '../components/Newsletter';
import ProductItem from '../components/ProductItem';

const Home: FC = () => {
  const { products } = useSelector((state: RootState) => state.shop);
  return (
    <>
      <section className="banner"></section>
      <DeliveryOffer />
      <section className="novelty content">
        <h2>Discover the novelty</h2>
        <div className="novelty__content">
          {products
            .sort((a,b) => b.created_at - a.created_at)
            .slice(0,3)
            .map(item => (
              <ProductItem key={item.id} product={item} />
          ))}
        </div>
      </section>
      <SpecialOffer />
      <Newsletter />
    </>
  )
}

export default Home;