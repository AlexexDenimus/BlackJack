import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
import axios from 'axios';

const checkAdmin = async (email, password) => {
  const response = await axios.post('/api/auth/login', {
    email: email,
    password: password,
  });
  const role = response.data.role;
  if (role !== 'admin') {
    return false;
  }
  return true;
};

const checkAdminEmail = email => {
  if (email !== 'admin@admin.com') {
    return false;
  }
  return true;
};

export default async (type, params) => {
  // called when the user attempts to log in
  if (type === AUTH_LOGIN) {
    const { username, password } = params;
    localStorage.setItem('username', username);
    const isAdmin = await checkAdmin(username, password);
    if (!isAdmin) {
      return Promise.reject();
    }
    return Promise.resolve();
  }
  // called when the user clicks on the logout button
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('username');
    return Promise.resolve();
  }
  // called when the API returns an error
  if (type === AUTH_ERROR) {
    const { status } = params;
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      return Promise.reject();
    }
    return Promise.resolve();
  }
  // called when the user navigates to a new location
  if (type === AUTH_CHECK) {
    return checkAdminEmail(localStorage.getItem('username')) ? Promise.resolve() : Promise.reject();
  }
  return Promise.reject('Unknown method');
};
