const assert = require('assert');
const app = require('../../src/app');

describe('\'driver\' service', () => {
  it('registered the service', () => {
    const service = app.service('driver');

    assert.ok(service, 'Registered the service');
  });
});
