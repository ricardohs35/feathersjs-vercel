const app = require('../../app/app');

describe('\'orders\' service', () => {
  it('registered the service', () => {
    const service = app.service('orders');
    expect(service).toBeTruthy();
  });
});
