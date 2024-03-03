import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth-slice';
import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice.js';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persisteredAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persisteredAuthReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
