import { FC, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { BsSearch, BsSliders } from 'react-icons/bs';
import { FaAngleUp } from 'react-icons/fa';

import { selectShopState, actionCreators } from '../state';
import { TProduct } from '../models/types';
import { filterData } from '../utils';
import { PER_PAGE, URLS } from '../constants';
import useFetchProducts from '../hooks/useFetchProducts';
import useScroll from '../hooks/useScroll';

import Modal from '../components/Modal';
import Filters from '../components/Filters';
import Loader from '../components/Loader';
import DeliveryOffer from '../components/DeliveryOffer';
import ProductItem from '../components/ProductItem';

const Shop: FC = () => {
  const { products, filters } = useSelector(selectShopState);
  const [urls, setUrls] = useState<string[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<TProduct[]>([]);
  const [search, setSearch] = useState<string>("");
  const page = useScroll();

  const dispatch = useDispatch();
  const { setProducts } = bindActionCreators(actionCreators, dispatch);
  const { loading, error, data } = useFetchProducts(urls);
  
  useEffect(() => {
    if(products.length === 0){
      setUrls(URLS);
    }else{
      const displayData = filterData(products, filters, search);
      setFilteredData(displayData);
    }
  }, [products, filters, search]);

  useEffect(() => {
    if(data.length > 0){
      setProducts(data);
      setUrls([]);
    }
  }, [data]);

  const closeModal = useCallback((): void => setModal(false), []);

  const scrollUpHandler = (): void => window.scroll({ left: 0, top: 0, behavior: 'smooth' });

  const changeHandler = (e: React.FormEvent<HTMLInputElement>): void => setSearch(e.currentTarget.value);

  if(error) return (
    <div className="error content">
      <p>Something went wrong...</p>
      <Link to="/">Go back to the home page</Link>
    </div>
  )

  if(loading) return <Loader />

  return (
    <>
      {modal && <Modal closeModal={closeModal} />}
      <DeliveryOffer />
      <section className="shop content">
        <section className="shop__filters">
          <form className="shop__form">
            <input type="text" placeholder="Search" value={search} onChange={changeHandler} />
            <button type="submit" aria-label="Search"><BsSearch className="icon" /></button>
          </form>
          <button className="shop__button" aria-label="Open filters" onClick={() => setModal(true)}><BsSliders className="icon" /></button>
          <div className="filters__wrapper">
            <Filters />
          </div>
        </section>
        <section className="shop__content">
          {filteredData.slice(0, PER_PAGE * page).map(item => (
            <ProductItem product={item} key={item.id} />
          ))}
        </section>
      </section>
      <button className="scroll__button" aria-label="Scroll up" onClick={scrollUpHandler}><FaAngleUp className="icon" /></button>
    </>
  );
}

export default Shop;