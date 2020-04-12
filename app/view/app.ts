import { request as requestClient, RequestConfig } from 'umi';
import layoutConfig from './config/layoutConfig';

export const getInitialState = async () => {
  const raw = window.localStorage.getItem('auth');

  if (raw) {
    return JSON.parse(raw);
  }

  const params = { method: 'POST', json: {} };
  const data = await requestClient('/api/info', params);
  return data;
};

export const layout = layoutConfig;

export const request: RequestConfig = {
  timeout: 1000,
  errorConfig: {},
  middlewares: [],
  requestInterceptors: [
    (url, options = {}) => {
      console.log('=====');
      return {
        url,
        options,
      };
    },
  ],
  responseInterceptors: [],
};
