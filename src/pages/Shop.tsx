import { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BsSearch, BsSliders } from 'react-icons/bs';
import { FaAngleUp } from 'react-icons/fa';

import { RootState } from '../state';
import { TProduct } from '../models/types';
import { filterData } from '../utils';

import Modal from '../components/Modal';
import Filters from '../components/Filters';
import DeliveryOffer from '../components/DeliveryOffer';
import ProductItem from '../components/ProductItem';


const Shop: FC = () => {
  const { products, filters } = useSelector((state: RootState) => state.shop);
  const [modal, setModal] = useState<boolean>(false);
  const [data, setData] = useState<TProduct[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const scrollBtn: HTMLButtonElement = document.querySelector(".scroll__button")!;
    window.addEventListener("scroll", () => {
      scrollBtn.style.transform = window.scrollY >= 240 ? 'translateX(0px)' : 'translateX(100px)';
    });
  }, []);

  useEffect(() => {
    const filteredData = filterData(products, filters, search);
    setData(filteredData);
  }, [products, filters, search])

  const closeModal = (): void => setModal(false);

  const clickHandler = (): void => window.scroll({ left: 0, top: 0, behavior: 'smooth' });

  const changeHandler = (e: React.FormEvent<HTMLInputElement>): void => setSearch(e.currentTarget.value);

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
          {data.map(item => (
            <ProductItem product={item} key={item.id} />
          ))}
        </section>
      </section>
      <button className="scroll__button" onClick={clickHandler}><FaAngleUp className="icon" /></button>
    </>
  );
}

export default Shop;