import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectFilter, selectItems],
  (filter, items) => {
    if (filter === '') {
      return items;
    }
    const filtered = items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filtered;
  }
);
