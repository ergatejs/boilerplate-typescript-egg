import { Service } from 'egg';
import { IMember } from '../model/member';

export default class MemberService extends Service {
  public async create(member: IMember, password = '') {
    const { ctx } = this;
    const { email } = member;
    const salt = ctx.helper.slat();
    const hash = ctx.helper.hmac(password, salt);

    member.salt = salt;
    member.hash = hash;
    member.avatar = `https://www.gravatar.com/avatar/${ctx.helper.md5(email)}`;
    // https://www.gravatar.com/avatar/281ce5fb158941764bc390600be91610

    return await ctx.model.Member.create(member);
  }

  public async verify(email: string, password: string): Promise<IMember | null> {
    const { ctx } = this;
    console.log(ctx.model.Member);
    const member = await ctx.model.Member.findOne({
      where: {
        email,
      },
    });

    if (!member) {
      return null;
    }

    const hash = ctx.helper.hmac(password, member.salt);
    return hash === member.hash ? member : null;
  }
}
