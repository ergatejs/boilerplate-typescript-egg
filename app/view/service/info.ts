import { request } from 'umi';

export const loadInfo = async (data?: any, options?: any) => {
  const query = `
    query fetchMember {
      members {
        avatar
        email
      }
    }
  `;

  const params = { method: 'POST', json: data, ...options };
  return request('/api/info', params);
};

export default {
  loadInfo,
};
