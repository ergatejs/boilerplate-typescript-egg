import { Effect, Reducer, Subscription } from 'umi';
import { loadInfo } from '../../service/info';

export interface InfoModelState {
  docs: [];
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
    docs: [],
  },

  effects: {
    * load({ payload }, { call, put }) {
      const { data: { documents } } = yield call(loadInfo, payload);
      yield put({
        type: 'update',
        payload: { docs: documents },
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
