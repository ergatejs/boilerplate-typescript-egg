import { request as requestClient, RequestConfig } from 'umi';
import layoutConfig from './config/layoutConfig';

export const getInitialState = async () => {
  const raw = window.localStorage.getItem('auth');

  if (raw) {
    const auth = JSON.parse(raw);
    window.auth = auth;

    return auth;
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
    // graphql interceptors
    (url, options = {}) => {
      let opts = {};

      if (url.includes('v1/graphql')) {
        let { auth } = window;

        if (!auth) {
          const raw = window.localStorage.getItem('auth') || '{}';
          auth = JSON.parse(raw);
        }

        const {
          auth: {
            token,
            info: { role },
          },
        } = auth;

        const headers = {
          ...options.headers,
          authorization: `Bearer ${token}`,
          'content-type': 'application/json',
          'X-Hasura-Role': `${role}`,
        };

        opts = {
          ...opts,
          headers,
        };
      }

      return {
        url,
        options: {
          ...options,
          ...opts,
        },
      };
    },
  ],
  responseInterceptors: [],
};
