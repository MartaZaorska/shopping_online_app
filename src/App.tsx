import { FC, Suspense, lazy, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectShopState } from './state';
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
  const { cart } = useSelector(selectShopState);
  const { pathname = "" } = useLocation<{pathname: string}>();

  const total = useTotal(cart);

  useEffect(() =>  window.scroll({top: 0, behavior: "smooth"}), [pathname]);

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