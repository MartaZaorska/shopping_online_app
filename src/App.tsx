import { FC, Suspense, lazy, useEffect, useMemo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators, RootState } from './state';
import { URLS } from './constants';
import useFetchProducts from './hooks/useFetchProducts';

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

  const { setProducts } = bindActionCreators(actionCreators, dispatch);
  const { loading, error, data } = useFetchProducts(URLS);

  const total: number = useMemo(() => {
    let t = 0;
    cart.forEach(item => t += item.product.price * item.quantity);
    //Special Offer, Buy 3 products from clinique, get 1 free (the cheapest product is for free)
    const cliniqueItems = cart.filter(item => item.product.brand === "clinique").sort((a,b) => a.product.price - b.product.price);
    let quantity = Math.floor(cliniqueItems.length / 3);

    for(let i = 0; quantity > 0; i++, quantity--){
      t -= cliniqueItems[i].product.price;
    }

    return t;
  }, [cart]);

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


