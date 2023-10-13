import axios, { AxiosError } from 'axios';
import { BASEURL } from '@/axios/index.const.ts';
import { router } from '@/router/router.ts';

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

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    if ((err instanceof AxiosError && err.response!.status === 401) || err.response!.status === 403) {
      localStorage.removeItem('token');
      await router.push({ name: 'login' });
    }
  }
);
