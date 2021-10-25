import { FC, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import("./pages/Home"));

const App: FC = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact strict><Home /></Route>
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;


