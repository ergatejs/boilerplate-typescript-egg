import { Service } from 'egg';
import { IMember } from '../model/member';

export default class AuthService extends Service {
  public signJWTToekn(member: IMember) {
    const { app } = this;
    const { jwtAlgorithm, jwt: { secret } } = app.config;

    const { id, email, role } = member;

    const raw = {
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

    const token = app.jwt.sign(raw, secret, {
      expiresIn: '2h',
      algorithm: jwtAlgorithm,
    });

    return token;
  }
}
