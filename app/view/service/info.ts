import { request } from 'umi';

export const loadInfo = async () => {
  const query = `
  query queryDocs {
    documents(offset: 0, limit: 10, where: {}) {
      title
      slug
      id
      content
      author_member {
        id
        email
      }
    }
  }  
  `;

  let params: any = {
    method: 'POST',
    data: {
      query,
    },
  };

  const authRaw = window.localStorage.getItem('auth');

  if (authRaw) {
    const {
      auth: {
        token,
        info: { role },
      },
    } = JSON.parse(authRaw);

    params = {
      ...params,
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
        'X-Hasura-Role': `${role}`,
      },
    };
  }

  return request('http://localhost:8080/v1/graphql', params);
};

export default {
  loadInfo,
};
