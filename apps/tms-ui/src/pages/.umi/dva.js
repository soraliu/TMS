import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    ...((require('/Users/liuxin/Binance/TMS/project/tms/apps/tms-ui/src/dva.js').config || (() => ({})))()),
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  
  app.model({ namespace: 'global', ...(require('/Users/liuxin/Binance/TMS/project/tms/apps/tms-ui/src/models/global.js').default) });
app.model({ namespace: 'users', ...(require('/Users/liuxin/Binance/TMS/project/tms/apps/tms-ui/src/pages/users/models/users.js').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
