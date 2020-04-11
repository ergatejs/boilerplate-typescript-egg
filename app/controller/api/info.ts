import { Controller } from 'egg';

export default class ApiInfoController extends Controller {
  public async index() {
    this.ctx.body = {
      access: {
        canReadIndex: true,
        canReadInfo: false,
      },
    };
  }
}
