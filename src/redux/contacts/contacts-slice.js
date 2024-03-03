import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const loadingReducer = state => {
  state.isLoading = true;
  state.error = null;
};

const errorReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const contactSlice = createSlice({
  name: 'contact',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, loadingReducer)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, errorReducer)
      .addCase(addContact.pending, loadingReducer)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, errorReducer)

      .addCase(deleteContact.pending, loadingReducer)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(deleteContact.rejected, errorReducer);
  },
});

export const { addContactsLoading, addContactsSuccess, addContactsError } =
  contactSlice.actions;

export default contactSlice.reducer;
