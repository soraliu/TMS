module.exports = appInfo => {
  const config = exports = {};

  config.keys = appInfo.name + '_1566875322581_3170';

  config.middleware = [
    'robot',
  ];

  const userConfig = {
    router: {
      prefix: '/api',
    },
    robot: {
      ua: [
        /Baiduspider/i,
      ],
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
