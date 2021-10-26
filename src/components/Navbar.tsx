import { FC } from 'react';
import { Link } from 'react-router-dom';

import { RiShoppingCartLine } from 'react-icons/ri';
import { BsUiChecksGrid, BsBoxSeam } from 'react-icons/bs';
import { IoHomeOutline } from 'react-icons/io5';
import { FiMessageCircle } from 'react-icons/fi';

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar--mobile">
        <div className="navbar__left">
          <Link to="/"><IoHomeOutline className="icon" /></Link>
          <Link to="/shop"><BsUiChecksGrid className="icon" /></Link>
        </div>
        <div className="navbar__center">
          <Link to="/cart"><RiShoppingCartLine className="icon" /></Link>
        </div>
        <div className="navbar__right">
          <Link to="/delivery"><BsBoxSeam className="icon" /></Link>
          <Link to="/contact"><FiMessageCircle className="icon" /></Link>
        </div>
        <div className="navbar__circle"></div>
      </div>
      <div className="navbar--desktop content">
        <header><Link to="/">Maquillage</Link></header>
        <div className="navbar__content">
          <Link to="/shop">Shop</Link>
          <Link to="/delivery">Delivery</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart" className="navbar__cart">
            <RiShoppingCartLine className="icon" />
            <span>$20</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;