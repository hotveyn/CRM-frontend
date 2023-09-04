import axios from 'axios';
import { BASEURL } from '@/axios/index.const.ts';

export const api = axios.create({
  baseURL: BASEURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  transformRequest: [
    function (data) {
      return JSON.stringify(data, (_, value) => {
        if (value === '') {
          return undefined;
        }
        return value;
      });
    },
  ],
});

api.interceptors.request.use((req) => {
  req.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
  return req;
});
