import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import DiscountCode from './DiscountCode';

const Header: FC<{total: number}> = ({total}) => {
  return (
    <>
      <DiscountCode />
      <Navbar total={total} />
      <header className="header content">
        <Link to="/">Maquillage</Link>
      </header>
    </>
  )
}

export default memo(Header);