import * as contactsApi from '../../api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const { data } = await contactsApi.requestFetchContacts(auth.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/add',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await contactsApi.requestAddContacts(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
  //   {
  //     condition: ({ name, phone }, { getState }) => {
  //       const { items } = getState();
  //       const normalizedName = name.toLowerCase();
  //       const normalizedNumber = phone.toLowerCase();

  //       const dublicate = items.find(item => {
  //         const normalizedCurrentName = item.name.toLowerCase();
  //         const normalizedCurrentNumber = item.phone.toLowerCase();
  //         return (
  //           normalizedCurrentName === normalizedName ||
  //           normalizedCurrentNumber === normalizedNumber
  //         );
  //       });

  //       if (dublicate) {
  //         alert(`Book with ${name} and ${phone} already in list`);
  //         return false;
  //       }
  //     },
  //   }
);
export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await contactsApi.requestDeleteContacts(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
