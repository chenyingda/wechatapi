'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1531906497799_8208';

  // add your config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'wechatapi',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '',
    define: {
        // underscored: false,
        timestamps: false,
        // paranoid: true
    }
  };

  config.cluster = {
    listen: {
      port: 80
    }
  }

  config.security = {
    csrf: false
  }

  return config;
};
