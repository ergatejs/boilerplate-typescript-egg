import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/api/info.test.ts', () => {
  it('should POST /', async () => {
    const result = await app.httpRequest().post('/api/info').expect(200);
    assert(result.body.message === '陌生人');
  });
});
