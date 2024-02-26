import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { Wrapper, Label, FilterInput } from './Filter.styled';
import { setFilter } from '../../redux/filterSlice';

const filterId = nanoid();

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const filter = e.currentTarget.value;
    dispatch(setFilter(filter));
  };

  return (
    <Wrapper>
      <Label htmlFor={filterId}>Find contacts by name</Label>
      <FilterInput
        id={filterId}
        onChange={handleChange}
        type="text"
        name="filter"
      />
    </Wrapper>
  );
};
