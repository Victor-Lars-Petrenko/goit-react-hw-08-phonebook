import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';
import { toast } from 'react-toastify';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const pending = state => {
  state.isLoading = true;
  state.error = null;
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, rejected)

      .addCase(addContact.pending, pending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
        toast.success(`Contact with name ${payload.name} has been added`);
      })
      .addCase(addContact.rejected, rejected)

      .addCase(deleteContact.pending, pending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const indexToDelete = state.items.filter(item => {
          if (item.id === payload) {
            toast.success(`Contact with name ${item.name} has been deleted`);
          }
          return item.id === payload;
        });
        state.items.splice(indexToDelete, 1);
      })
      .addCase(deleteContact.rejected, rejected);
  },
});

export const { addContactsLoading, addContactsSuccess, addContactsError } =
  contactSlice.actions;

export default contactSlice.reducer;
