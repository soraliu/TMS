const { app } = require('egg-mock/bootstrap');

describe('test/app/middleware/robot.test.js', () => {
  it('should block robot', () => app.httpRequest()
    .get('/api/project')
    .set('User-Agent', 'Baiduspider')
    .expect(403));
});
