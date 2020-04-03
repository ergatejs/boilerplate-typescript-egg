import { Effect, Reducer, Subscription } from 'umi';

import { loadInfo } from '../../service/info';

export interface IndexModelState {
  message: string;
}

export interface IndexModelType {
  namespace: 'index';
  state: IndexModelState;
  effects: {
    load: Effect;
  };
  reducers: {
    update: Reducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

const IndexModel: IndexModelType = {
  namespace: 'index',

  state: {
    message: '陌生人',
  },

  effects: {
    * load({ payload }, { call, put }) {
      const { message } = yield call(loadInfo, payload);
      yield put({
        type: 'update',
        payload: { message },
      });
    },
  },

  reducers: {
    update(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'load',
          });
        }
      });
    },
  },
};

export default IndexModel;
