import { FC, useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { BsSearch, BsSliders } from 'react-icons/bs';
import { FaAngleUp } from 'react-icons/fa';

import { selectShopState, actionCreators } from '../state';
import { TProduct } from '../models/types';
import { filterData } from '../utils';
import useFetchProducts from '../hooks/useFetchProducts';

import Modal from '../components/Modal';
import Filters from '../components/Filters';
import Loader from '../components/Loader';
import DeliveryOffer from '../components/DeliveryOffer';
import ProductItem from '../components/ProductItem';
import { PER_PAGE, URLS } from '../constants';


const Shop: FC = () => {
  const { products, filters } = useSelector(selectShopState);
  const [urls, setUrls] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const [modal, setModal] = useState<boolean>(false);
  const [fData, setFData] = useState<TProduct[]>([]);
  const [search, setSearch] = useState<string>("");

  const dispatch = useDispatch();
  const { setProducts } = bindActionCreators(actionCreators, dispatch);
  const { loading, error, data } = useFetchProducts(urls);

  useEffect(() => {
    if(products.length === 0){
      console.log("fetch");
      setUrls(URLS);
    }
  }, [products]);

  useEffect(() => {
    if(data.length > 0) setProducts(data);
  }, [data]);


  const paginationHandler = useCallback(() => {
    if(window.scrollY + window.innerHeight >= document.body.getBoundingClientRect().height - 100){
      setPage(page + 1);
    }
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollBtn: HTMLButtonElement = document.querySelector(".scroll__button")!;
      if(scrollBtn) scrollBtn.style.transform = window.scrollY >= 240 ? 'translateX(0px)' : 'translateX(100px)'; 
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", paginationHandler);
  }, [paginationHandler]);

  useEffect(() => {
    if(products.length > 0){
      const filteredData = filterData(products, filters, search);
      setFData(filteredData);
    }
  }, [products, filters, search])

  const closeModal = (): void => setModal(false);

  const clickHandler = (): void => window.scroll({ left: 0, top: 0, behavior: 'smooth' });

  const changeHandler = (e: React.FormEvent<HTMLInputElement>): void => setSearch(e.currentTarget.value);

  if(error) return <p>Error</p>

  if(loading) return <Loader />

  return (
    <>
      {modal && <Modal closeModal={closeModal} />}
      <DeliveryOffer />
      <section className="shop content">
        <section className="shop__filters">
          <form className="shop__form">
            <input type="text" placeholder="Search" value={search} onChange={changeHandler} />
            <button type="submit"><BsSearch className="icon" /></button>
          </form>
          <button className="shop__button" onClick={() => setModal(true)}><BsSliders className="icon" /></button>
          <div className="filters__wrapper">
            <Filters />
          </div>
        </section>
        <section className="shop__content">
          {fData.slice(0, PER_PAGE * page).map(item => (
            <ProductItem product={item} key={item.id} />
          ))}
        </section>
      </section>
      <button className="scroll__button" onClick={clickHandler}><FaAngleUp className="icon" /></button>
    </>
  );
}

export default Shop;