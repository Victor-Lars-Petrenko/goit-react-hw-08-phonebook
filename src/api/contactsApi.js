import authInstance from './authApi';
import { setToken } from './authApi';
export const requestFetchContacts = token => {
  setToken(token);
  try {
    const data = authInstance.get('/contacts');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};
export const requestAddContacts = body => {
  return authInstance.post('/contacts', body);
};
export const requestDeleteContacts = id => {
  return authInstance.delete(`/contacts/${id}`);
};
