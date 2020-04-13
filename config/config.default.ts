import * as path from 'path';
import * as dotenv from 'dotenv';
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  dotenv.config();

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1585817062090_5302';

  // add your egg config in here
  config.middleware = [];

  config.view = {
    root: path.join(appInfo.baseDir, 'app/view'),
    mapping: {
      '.html': 'nunjucks',
    },
  };

  config.assets = {
    publicPath: '/public',
    devServer: {
      autoPort: true,
      command: 'umi dev --port={port}',
      env: {
        APP_ROOT: path.join(__dirname, '../app/view'),
        BROWSER: 'none',
        BABEL_CACHE: 'none',
        CLEAR_CONSOLE: 'none',
        COMPRESS: 'none',
        // PROGRESS: 'none',
        // SILENT: 'Y',
        SOCKET_SERVER: 'http://127.0.0.1:{port}',
      },
      debug: true,
    },
  };

  config.security = {
    csrf: false,
  };

  config.jwt = {
    secret: process.env.JWT_SECRET || 'JWT_SECRET',
  };

  config.sequelize = {
    dialect: 'postgres',
    database: process.env.DB_NAME || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'hasura',
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    jwtAlgorithm: process.env.JWT_ALGORITHM || 'HS256',
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
