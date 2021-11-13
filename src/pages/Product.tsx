import { FC, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams, Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

import { selectShopState, actionCreators } from '../state';
import { TColor, TProduct } from '../models/types';
import Loader from '../components/Loader';
import Rating from '../components/Rating';

const Product: FC = () => {
  const { products } = useSelector(selectShopState);
  const { id } = useParams<{id: string}>();
  const [color, setColor] = useState<TColor | null>(null);
  
  const dispatch = useDispatch();
  const { addToCart } = bindActionCreators(actionCreators, dispatch);

  const product: TProduct | undefined = useMemo(() => {
    const item =  products.find(item => `${item.id}` === id);
    if(item?.colors) setColor(item.colors[0]);
    return item;
  }, [id, products]);

  const changeHandler = (color: TColor): void => setColor(color);
  
  const clickHandler = (product: TProduct): void => {
    addToCart(product, color);
    
    const msgElement: HTMLParagraphElement = document.querySelector(".product__message")!;
    msgElement.style.transform = "translateX(0%)";
    setTimeout(() => msgElement.style.transform = "translateX(120%)", 3000);
  }

  if(!product) return <Loader />;

  const { image_link, brand, description, price, rating, colors, name } = product;

  return (
    <>
      <p className="product__message">Product added to cart</p>
      <section className="product content">
        <div className="product__image"><img width="270" height="315" src={image_link} alt={name} /></div>
        <div className="product__link"><Link to="/shop"><FaAngleLeft className="icon" /> <span>Back to Shop</span></Link></div>
        <div className="product__content">
          <h1 className="product__name" dangerouslySetInnerHTML={{__html: `${name}`}}></h1>
          <p className="product__brand">{brand}</p>
          <Rating rating={rating} />
          <p className="product__description" dangerouslySetInnerHTML={{__html: `${description}`}}></p>
          {colors && (
            <div className="colors">
              {colors.map(item => (
                <div className="colors__item" key={item.hex_value}>
                  <input type="radio" onChange={() => changeHandler(item)} checked={color?.hex_value === item.hex_value} id={item.hex_value} />
                  <label htmlFor={item.hex_value} style={{background: item.hex_value}}></label>
                </div>
              ))}
            </div>
          )}
          <div className="product__controls">
            <p className="product__price">${price}</p>
            <button onClick={() => clickHandler(product)} className="product__button" aria-label="Buy">Buy now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;