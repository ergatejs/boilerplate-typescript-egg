import { Service } from 'egg';
import { Member } from '../model/member';

export default class AuthService extends Service {
  public signJWTToekn(member: Member) {
    const { app } = this;
    const { jwtAlgorithm, jwt: { secret } } = app.config;

    const { id, email, role } = member;

    const info = {
      id,
      email,
      role,
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': [ 'admin', 'user', 'mod' ],
        'x-hasura-default-role': role,
        'x-hasura-user-id': `${id}`,
        'x-hasura-user-email': email,
      },
    };

    const token = app.jwt.sign(info, secret, {
      expiresIn: '2h',
      algorithm: jwtAlgorithm,
    });

    return {
      info,
      token,
    };
  }
}
