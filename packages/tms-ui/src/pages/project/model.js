import { list, create, updateById, deleteById } from './service';

export default {
  namespace: 'projectList',
  state: {
    data: [{}, {}, {}],
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
    *create({ payload: { values } }, { call, put }) {
      yield call(create, values);
      yield put({ type: 'reload' });
    },
    *updateById({ payload: { id, values } }, { call, put }) {
      yield call(updateById, id, values);
      yield put({ type: 'reload' });
    },
    *deleteById({ payload: { id } }, { call, put }) {
      yield call(deleteById, id);
      yield put({ type: 'reload' });
    },
    *reload(action, { put }) {
      yield put({ type: 'list' });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/project') {
          dispatch({ type: 'list' });
        }
      });
    },
  },
};
