const assert = require('assert');
const app = require('../../src/app');

describe('\'vendor\' service', () => {
  it('registered the service', () => {
    const service = app.service('vendor');

    assert.ok(service, 'Registered the service');
  });
});
