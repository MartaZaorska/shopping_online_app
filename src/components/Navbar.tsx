import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { RiShoppingCartLine } from 'react-icons/ri';
import { BsUiChecksGrid, BsBoxSeam } from 'react-icons/bs';
import { IoHomeOutline } from 'react-icons/io5';
import { FiMessageCircle } from 'react-icons/fi';

const Navbar: FC<{total: number}> = ({total}) => {
  return (
    <nav className="navbar">
      <div className="navbar--mobile">
        <div className="navbar__side--left navbar__side">
          <Link to="/" aria-label="Home"><IoHomeOutline className="icon" /></Link>
          <Link to="/shop" aria-label="Shop"><BsUiChecksGrid className="icon" /></Link>
        </div>
        <div className="navbar__center">
          <Link to="/cart" aria-label="Cart"><RiShoppingCartLine className="icon" /></Link>
        </div>
        <div className="navbar__side--right navbar__side">
          <Link to="/delivery" aria-label="Delivery"><BsBoxSeam className="icon" /></Link>
          <Link to="/contact" aria-label="Contact"><FiMessageCircle className="icon" /></Link>
        </div>
        <div className="navbar__circle"></div>
      </div>
      <div className="navbar--desktop content">
        <header><Link to="/" aria-label="Home">Maquillage</Link></header>
        <div className="navbar__content">
          <Link to="/shop" aria-label="Shop">Shop</Link>
          <Link to="/delivery" aria-label="Delivery">Delivery</Link>
          <Link to="/contact" aria-label="Contact">Contact</Link>
          <Link to="/cart" className="navbar__cart" aria-label="Cart">
            <RiShoppingCartLine className="icon" />
            <span>${total}</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default memo(Navbar);