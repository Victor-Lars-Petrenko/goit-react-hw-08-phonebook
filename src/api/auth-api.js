import axios from 'axios';
const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  if (token) {
    return (authInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.authorization = '';
};

export const signupRequest = body => {
  return authInstance.post('/users/signup', body);
};

export const loginRequest = body => {
  return authInstance.post('/users/login', body);
};

export const currentRequest = token => {
  setToken(token);
  try {
    const data = authInstance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logoutRequest = token => {
  setToken(token);

  try {
    const data = authInstance.post('/users/logout');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export default authInstance;
