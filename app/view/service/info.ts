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

  const params: any = {
    method: 'POST',
    data: {
      query,
    },
  };

  return request('http://localhost:8080/v1/graphql', params);
};

export default {
  loadInfo,
};
