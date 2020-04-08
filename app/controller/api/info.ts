import { Controller } from 'egg';

export default class ApiController extends Controller {
  public async init() {
    const { ctx } = this;
    ctx.logger.info('#body', ctx.request.body);
    ctx.body = {
      access: {
        canReadIndex: true,
        canReadInfo: Math.ceil(Math.random() * 100) % 2 === 0,
      },
      date: Date.now(),
    };
  }

  public async index() {
    const { ctx } = this;
    ctx.logger.info('#body', ctx.request.body);
    ctx.body = {
      message: '陌生人',
      date: Date.now(),
    };
  }
}
