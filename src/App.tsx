import { FC, Suspense, lazy, useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators, RootState } from './state';
import { URLS } from './constants';
import useFetchProducts from './hooks/useFetchProducts';
import useTotal from './hooks/useTotal';

import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Delivery = lazy(() => import("./pages/Delivery"));
const Contact = lazy(() => import("./pages/Contact"));
const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));

const App: FC = () => {
  const { cart } = useSelector((state: RootState) => state.shop);
  const dispatch = useDispatch();
  const { pathname = "" } = useLocation<{pathname: string}>();

  const { setProducts } = bindActionCreators(actionCreators, dispatch);
  const { loading, error, data } = useFetchProducts(URLS);

  const total = useTotal(cart);

  useEffect(() =>  window.scroll({top: 0, behavior: "smooth"}), [pathname]);

  useEffect(() => {
    if(data.length > 0) setProducts(data);
  }, [data]);

  if(error) return <p>Error</p>

  if(loading) return <Loader />

  return (
    <>
      <Header total={total} />
      <Suspense fallback={<Loader />}>
        <main className="main">
          <Switch>
            <Route path="/" exact strict><Home /></Route>
            <Route path="/shop"><Shop /></Route>
            <Route path="/delivery"><Delivery /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/cart"><Cart total={total} /></Route>
            <Route path="/product/:id"><Product /></Route>
          </Switch>
        </main>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;


