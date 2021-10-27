import { FC, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

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
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <main className="main">
          <Switch>
            <Route path="/" exact strict><Home /></Route>
            <Route path="/shop"><Shop /></Route>
            <Route path="/delivery"><Delivery /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/cart"><Cart /></Route>
            <Route path="/product/:id"><Product /></Route>
          </Switch>
        </main>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;


