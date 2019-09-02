import { list } from '@/services/permission';

export default {
  namespace: 'permissionList',
  state: {
    data: {},
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *list(action, { call, put }) {
      const data = yield call(list);
      yield put({ type: 'save', payload: { data } });
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'list' });
    },
  },
};
