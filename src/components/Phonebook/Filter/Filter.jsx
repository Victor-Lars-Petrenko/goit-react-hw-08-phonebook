import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import css from './Filter.styled.module.css';
import { setFilter } from '../../../redux/filter/filter-slice';

const filterId = nanoid();

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const filter = e.currentTarget.value;
    dispatch(setFilter(filter));
  };

  return (
    <div className={css.filterWrapper}>
      <label className={css.filterLabel} htmlFor={filterId}>
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
        id={filterId}
        onChange={handleChange}
        type="text"
        name="filter"
      />
    </div>
  );
};

export default Filter;
