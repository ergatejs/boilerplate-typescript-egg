import { request as requestClient, RequestConfig } from 'umi';
import layoutConfig from './config/layoutConfig';

export const getInitialState = async () => {
  const raw = window.localStorage.getItem('auth');

  if (raw) {
    console.log(JSON.parse(raw));
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
  middlewares: [
  ],
  requestInterceptors: [
    // (url, options = {}) => {
    //   return {
    //     url,
    //     options,
    //   };
    // },
  ],
  responseInterceptors: [],
};
