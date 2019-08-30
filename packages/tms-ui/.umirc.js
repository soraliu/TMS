const path = require('path');

export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      routes: {
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
        ],
      },
    }],
  ],
  outputPath: '../../dist',
  chainWebpack: config => {
    config.plugins.delete('progress');
  },
  proxy: {
    '/api': {
      target: 'http://localhost:7001'
    }
  },
};
