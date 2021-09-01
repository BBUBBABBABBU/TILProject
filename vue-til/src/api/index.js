import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
  console.log(instance.baseURL);
  return instance.post('signup', userData);
}
function userLogin(userData) {
  console.log(instance.baseURL);
  return instance.post('login', userData);
}
export { registerUser, userLogin };
