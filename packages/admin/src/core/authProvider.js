import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
import axios from 'axios';

const checkAdmin = async (email, password) => {
  const response = await axios.post('/api/auth/login', {
    email: email,
    password: password,
  });
  const role = response.data.role;
  if (role !== 'admin') {
    return { status: false };
  }
  return {
    status: true,
    token: response.data.token,
  };
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
    const admin = await checkAdmin(username, password);
    if (!admin.status) {
      return Promise.reject();
    }
    localStorage.setItem('username', username);
    localStorage.setItem('token', admin.token);
    return Promise.resolve();
  }
  // called when the user clicks on the logout button
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    return Promise.resolve();
  }
  // called when the API returns an error
  if (type === AUTH_ERROR) {
    const { status } = params;
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
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
