const getSequelize = () => {
  const sequelize = require('sequelize');
  const cls = require('cls-hooked').createNamespace('tms-sequelize');
  sequelize.useCLS(cls);
  return sequelize;
};

module.exports = appInfo => {
  const config = exports = {};

  config.keys = appInfo.name + '_1566875322581_3170';

  config.middleware = [
    'robot',
    'response',
  ];

  const userConfig = {
    // router
    router: {
      prefix: '/api',
    },
    // middleware config
    robot: {
      ua: [
        /Baiduspider/i,
      ],
    },
    // i18n
    i18n: {
      defaultLocale: 'en-US',
    },
    // db config
    sequelize: {
      Sequelize: getSequelize(),
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      database: 'tms',
      username: 'root',
      define: {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
