import axios from 'axios';

import baseUrl from '../utils/baseUrl';

export const client = axios.create({
  baseURL: baseUrl,
  responseType: 'json',
  options: {
    returnRejectedPromiseOnError: true
  }
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  throw error;
});

export default client;
