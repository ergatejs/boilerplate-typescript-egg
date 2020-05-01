// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMember from '../../../app/model/member';

declare module 'egg' {
  interface IModel {
    Member: ReturnType<typeof ExportMember>;
  }
}
