import { request } from 'umi';

export async function getInitialState() {
  const params = { method: 'POST', json: {} };
  const data = await request('/api/init', params);
  return data;
}

export const layout = {
  logout: () => {},
  rightRender: (initInfo: any) => {
    if (!initInfo.user) {
      return null;
    }
  },
};
