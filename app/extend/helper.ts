import * as crypto from 'crypto';

export default {
  md5(signature: string) {
    return crypto.createHash('md5').update(signature).digest('hex');
  },

  hmac(password: string, salt: string) {
    return crypto.createHmac('sha256', salt).update(password).digest('hex');
  },

  slat() {
    return crypto.randomBytes(16).toString('hex');
  },
};
