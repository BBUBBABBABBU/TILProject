import axios from 'axios';
// import store from '@/store/index.js';
import { interceptors } from './common/interceptors.js';

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return interceptors(instance);
}

const instance = createInstance();

function registerUser(userData) {
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
