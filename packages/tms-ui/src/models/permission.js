import { list } from '@/services/permission';

export default {
  namespace: 'permissionList',
  state: {
    data: {},
    isLoading: false,
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *list(action, { call, put }) {
      yield put({ type: 'save', payload: { isLoading: true } });
      const data = yield call(list);
      yield put({ type: 'save', payload: { isLoading: false, data } });
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'list' });
    },
  },
};
