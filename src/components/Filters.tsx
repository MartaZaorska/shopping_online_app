import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';

import { selectShopState, actionCreators } from '../state';
import { BRANDS, CATEGORIES, SORT } from '../constants';

const Filters: React.FC<{closeModal?: Function}> = ({closeModal}) => {
  const { filters } = useSelector(selectShopState);
  const dispatch = useDispatch();

  const { changeFilters, resetFilters } = bindActionCreators(actionCreators, dispatch);

  const submitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(closeModal) closeModal();
  }

  const changeHandler = (e: React.FormEvent<HTMLSelectElement | HTMLInputElement>): void => {
    changeFilters({...filters, [e.currentTarget.name]: e.currentTarget.value});
  }

  const resetHandler = (): void => {
    resetFilters();
  }

  return (
    <form className="filters__form" onReset={resetHandler} onSubmit={submitHandler}>
      <div className="select__group">
        <label htmlFor="sort">Sort By</label>
        <select onChange={changeHandler} name="sortBy" value={filters.sortBy}>
          {SORT.map(item => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="radio__group">
        <h3>Categories</h3>
        {CATEGORIES.map(item => (
          <div className="radio__item" key={item}>
            <input type="radio" onChange={changeHandler} checked={filters.category === item} name="category" value={item} id={item} />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
      <div className="radio__group">
        <h3>Brands</h3>
        {BRANDS.map(item => (
          <div className="radio__item" key={item}>
            <input type="radio" onChange={changeHandler} checked={filters.brand === item} name="brand" value={item} id={item} />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
      <div className="button__group">
        <button type="reset" aria-label="Reset filters">Reset</button>
        <button type="submit" aria-label="Submit filters">Apply</button>
      </div>
    </form>
  )
}

export default Filters;