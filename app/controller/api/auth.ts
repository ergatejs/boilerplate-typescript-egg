import { Controller } from 'egg';

export default class ApiAuthController extends Controller {
  public async verify() {
    const { ctx } = this;
    const { email, password } = ctx.request.body;
    const member = await ctx.service.member.verify(email, password);

    if (!member) {
      ctx.throw(500, '邮箱或者密码错误');
      return;
    }

    delete member.hash;

    const auth = ctx.service.auth.signJWTToekn(member);

    ctx.body = {
      data: {
        auth,
        member,
        access: {
          canReadInfo: true,
          canReadIndex: true,
        },
      },
    };
  }
}
