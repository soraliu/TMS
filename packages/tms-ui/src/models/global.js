import { routerRedux } from 'dva';

export default {
  namespace: 'global',
  state: {
    text: 'hello umi+dva',
    login: false,
  },
  reducers: {
    setText(state) {
      return {
        ...state,
        text: 'setted dva',
      };
    },
    signin(state) {
      return {
        ...state,
        login: true,
      };
    },
  },
  effects: {
    * login(action, { put }) {
      yield put({
        type: 'signin',
      });
      yield put(routerRedux.push('/admin'));
    },
    * throwError() {
      throw new Error('hi error');
    },
  },
};
