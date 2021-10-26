import { FC } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import DiscountCode from './DiscountCode';

const Header: FC = () => {
  return (
    <>
      <DiscountCode />
      <Navbar />
      <header className="header content">
        <Link to="/">Maquillage</Link>
      </header>
    </>
  )
}

export default Header;