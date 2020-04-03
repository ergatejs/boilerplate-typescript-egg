import { Controller } from 'egg';

export default class ApiController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.logger.info('#body', ctx.request.body);
    ctx.body = {
      date: Date.now(),
      message: '陌生人',
    };
  }
}
