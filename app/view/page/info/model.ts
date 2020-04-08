import { Effect, Reducer, Subscription } from 'umi';

import { loadInfo } from '../../service/info';

export interface InfoModelState {
  message: string;
}

export interface InfoModelType {
  namespace: 'info';
  state: InfoModelState;
  effects: {
    load: Effect;
  };
  reducers: {
    update: Reducer<InfoModelState>;
  };
  subscriptions: { setup: Subscription };
}

const InfoModel: InfoModelType = {
  namespace: 'info',

  state: {
    message: '陌生人',
  },

  effects: {
    *load({ payload }, { call, put }) {
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
        if (pathname === '/info') {
          dispatch({
            type: 'load',
          });
        }
      });
    },
  },
};

export default InfoModel;
