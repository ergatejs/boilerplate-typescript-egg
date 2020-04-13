// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportApiAuth from '../../../app/controller/api/auth';
import ExportApiInfo from '../../../app/controller/api/info';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    api: {
      auth: ExportApiAuth;
      info: ExportApiInfo;
    }
  }
}
